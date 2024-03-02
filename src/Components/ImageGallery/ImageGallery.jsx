import { ImageCard } from "../ImageCard/ImageCard.jsx";

export const ImageGallery = ({ dataImage }) => {
  return (
    <div>
      <ul>
        {dataImage.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
