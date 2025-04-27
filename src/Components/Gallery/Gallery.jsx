import React, { useState } from "react";
import "./gallery.css";

const Gallery = ({ images = [] }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showOverlay, setShowOverlay] = useState(null);
    const [showModal, setShowModal] = useState(false);
    //const[modalZoom, setModalZoom] = useState(false);

    const handleMouseOver = (id) => {   
        setShowOverlay(id);
    };

    const handleMouseOut = () => {
        setShowOverlay(null);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const prevImage = () => {
        const currentIndex = images.findIndex(
            (image) => image.id === selectedImage.id
        );
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    const nextImage = () => {
        const currentIndex = images.findIndex(
            (image) => image.id === selectedImage.id
        );
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    /*const toggleZoom = () => {
            setModalZoom(!modalZoom);
        }

        const handleDrag = () => {
            
        };*/

    return (
        <div>
            <div className="container preview_gallery">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="imageContainer_gallery"
                        onMouseOver={() => handleMouseOver(image.id)}
                        onMouseOut={handleMouseOut}
                    >
                        <img
                            src={image.src}
                            alt={image.id}
                            loading='lazy'
                            onClick={() => openModal(image)}
                        />
                        <div
                            className={
                                showOverlay === image.id
                                    ? "overlay_gallery show"
                                    : "overlay_gallery"
                            }
                            onClick={() => openModal(image)}
                        >
                            <p>{image.id}</p>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modalContent">
                        <img
                            className=""
                            src={selectedImage.src}
                            alt={selectedImage.id}
                        />
                        <div className="description_modal">
                            <p>{selectedImage.id}</p>
                            <p>
                                {selectedImage.method} {selectedImage.size}
                            </p>
                            <p>{selectedImage.date}</p>
                        </div>
                        <button className="close" onClick={closeModal}>
                            &times;
                        </button>
                        <button className="prev" onClick={prevImage}>
                            &#10094;
                        </button>
                        <button className="next" onClick={nextImage}>
                            &#10095;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
