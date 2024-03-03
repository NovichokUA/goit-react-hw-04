export const ImageCard = ({ image }) => {
  const {
    urls: { small },
    description,
  } = image;

  return (
    <div>
      <img src={small} alt={description} />
    </div>
  );
};
