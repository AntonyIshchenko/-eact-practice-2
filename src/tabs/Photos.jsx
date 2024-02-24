import { getPhotos } from 'apiService/photos';
import { Text } from 'components';
import { Button, Form, Loader, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalRes, setTotalResults] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loaderVisible, setLoaderVisible] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }
    setLoaderVisible(true);
    async function getPhotosFromAPI() {
      try {
        const { total_results, photos } = await getPhotos(search, page);
        setTotalResults(total_results);
        setPhotos(prev => [...prev, ...photos]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoaderVisible(false);
      }
    }

    getPhotosFromAPI();
  }, [search, page]);

  function handleSubmit(query) {
    setSearch(query);
    setError(null);
    setPage(1);
    setTotalResults(0);
    setPhotos([]);
  }

  function handleLoadMore() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <PhotosGallery pictures={photos} />
      {photos.length > 0 && photos.length < totalRes && (
        <Button onClick={handleLoadMore} disabled={loaderVisible}>
          Load more
        </Button>
      )}
      {loaderVisible && <Loader />}
      {error && (
        <Text textAlign="center">Something goes wrong, try again. {error}</Text>
      )}
      {search && totalRes === 0 && (
        <Text textAlign="center">
          Nothing was found with request "{search}", try again.
        </Text>
      )}
    </>
  );

  // return <>{/* <Text textAlign="center">Let`s begin search 🔎</Text> */}</>;
};
