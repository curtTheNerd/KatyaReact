import { useGesture } from '@use-gesture/react';

const Modal = ({ selectedImage, closeModal, prevImage, nextImage }) => {
    useGesture()
      return (
        <div className="modal">
          <div className="modalContent">
            <img src={selectedImage.src} alt={selectedImage.id}/>
            
            <div className="description_modal">
              <p>{selectedImage.id}</p>
              <p>{selectedImage.sub}</p>
              <p>{selectedImage.method} {selectedImage.size}</p>
              <p>{selectedImage.method2}</p>
              <p>{selectedImage.date}</p>
            </div>

            <button className="close" onClick={closeModal}>&times;</button>
            <button className="prev" onClick={prevImage}>&#10094;</button>
            <button className="next" onClick={nextImage}>&#10095;</button>
        </div> 
    </div>
    )
}

export default Modal;