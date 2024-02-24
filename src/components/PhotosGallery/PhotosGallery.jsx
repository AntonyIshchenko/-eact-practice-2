import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ pictures }) => {
  return (
    <Grid>
      {pictures.map(({ id, avg_color, alt, src: { large } }) => (
        <PhotosGalleryItem
          key={id}
          avgColor={avg_color}
          alt={alt}
          largeImage={large}
        />
      ))}
    </Grid>
  );
};
