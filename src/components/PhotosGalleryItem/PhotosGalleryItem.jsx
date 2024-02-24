import { GridItem } from '..';
import styles from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ avgColor, alt, largeImage }) => {
  return (
    <GridItem>
      <div
        className={styles.thumb}
        style={{ backgroundColor: avgColor, borderColor: avgColor }}
      >
        <img src={largeImage} alt={alt} />
      </div>
    </GridItem>
  );
};
