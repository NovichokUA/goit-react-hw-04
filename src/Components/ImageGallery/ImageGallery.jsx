import { ImageCard } from "../ImageCard/ImageCard.jsx";

export const ImageGallery = ({ dataImage, onCardClick }) => {
  return (
    <div>
      <ul>
        {dataImage.map((image) => {
          return (
            <li key={image.id} onClick={() => onCardClick(image)}>
              <ImageCard image={image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
