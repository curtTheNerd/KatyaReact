import React from "react";

const Modal = ({ closeModal, prevImage, nextImage }) => {
    return (
        <div className="modal">
            <div className='modalContent'>
                
                <img src={selectedImage.img} alt={selectedImage.title} />
                
                <div className='description_modal'>
                    <p>{selectedImage.title}</p>
                    <p>{selectedImage.method},  {selectedImage.size}</p>
                    <p>{selectedImage.year}</p>
                </div>
                
                <button className='close' onClick={closeModal}>&times;</button>
                <button className='prev' onClick={prevImage}>&#10094;</button>
                <button className='next' onClick={nextImage}>&#10095;</button>
            </div>
        </div>
    )
}

export default Modal