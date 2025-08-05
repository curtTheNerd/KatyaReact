
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const TransformImage = ({ selectedImage, scaleState }) => {
// - takes as arguments { first: some image-object, second: magnifying state of that image }
// - uses react-zoom-pan-pinch to create a scalable image-frame for scroll, drag and touchDisplay

  return ( 
    <TransformWrapper 
      limitToBounds={!scaleState}
      wheel={{ step: 0 }} 
      minScale={1}
      maxScale={3}
      doubleClick={{ mode: 'reset' }}
      panning={{ velocity: false }}
      style={{ cursor: 'pointer'}}>
      <TransformComponent style={{ cursor: 'pointer'}}>
        <img 
          src={selectedImage.src} 
          alt={selectedImage.id}
          style={{
            maxWidth: scaleState ? '100%' : '100vw',
            maxHeight: scaleState ? '100%' : '100vh',
            padding: scaleState ? '0' : '1rem',
            cursor: 'pointer'
          }}/>
      </TransformComponent>
    </TransformWrapper>
  )
}

export default TransformImage;