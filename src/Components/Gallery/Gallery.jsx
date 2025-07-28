import { useState, useEffect, useRef } from "react";
import "./gallery.css";
import Modal from "../Modal/Modal";

const Gallery = ({ images = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [dummy, setDummy] = useState(false);
  const [showOverlay, setShowOverlay] = useState(null);
  const selectedImageRef = useRef(null);
  const currentIndexRef = useRef(0);

  const openModal = (image) => {
    selectedImageRef.current = image;
    currentIndexRef.current = images.findIndex((img) => img.id === image.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const prevImage = () => {
    const newIndex = (currentIndexRef.current - 1 + images.length) % images.length;
    currentIndexRef.current = newIndex;
    selectedImageRef.current = images[newIndex];
    setDummy((prev) => !prev);
  };

  const nextImage = () => {
    const newIndex = (currentIndexRef.current + 1) % images.length;
    currentIndexRef.current = newIndex;
    selectedImageRef.current = images[newIndex];
    setDummy((prev) => !prev);
  };

  const handleKeyEvent = (event) => {
    if (!showModal) return;
    if (event.key === "ArrowLeft") prevImage();
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "Escape") closeModal();
  };

  const handleMouseOver = (id) => {
    setShowOverlay(id);
  };

  const handleMouseOut = () => {
    setShowOverlay(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);
    return () => {
      window.removeEventListener("keydown", handleKeyEvent);
    };
  }, [showModal]);


  return (
    <div>
      <div className="container preview_gallery">
        {images.map((image) => (
          <div key={image.id} className="imageContainer_gallery" onMouseOver={() => handleMouseOver(image.id)} onMouseOut={handleMouseOut}>
            <img src={image.src} alt={image.id} loading="lazy" onClick={() => openModal(image)} />
            <div className={`overlay_gallery ${showOverlay === image.id ? 'show' : ''}`} onClick={() => openModal(image)}>
              <p>{image.id}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <Modal selectedImage={selectedImageRef.current} closeModal={closeModal} prevImage={prevImage} nextImage={nextImage} />
      )}
    </div>
  );
};

export default Gallery;