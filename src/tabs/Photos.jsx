import { getPhotos } from 'apiService/photos';
// import { Text } from 'components';
import { Form } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalRes, setTotalResults] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPhotosFromAPI() {
      try {
        const { total_results, photos } = await getPhotos(search, page);
        setTotalResults(total_results);
        setPhotos(photos);
      } catch (err) {
        setError(err.message);
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

  console.log(photos);

  return <Form onSubmit={handleSubmit} />;

  // return <>{/* <Text textAlign="center">Let`s begin search 🔎</Text> */}</>;
};
