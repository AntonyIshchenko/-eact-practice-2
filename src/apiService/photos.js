import axios from 'axios';

const API_KEY = 'wKVxmByATaI5Qwhhrx6GaDKncmQKEsGzVInFI1GoDAYVzL9YxgXssb7U';

axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);

  return data;
};

// curl -H "Authorization: YOUR_API_KEY" \
//   "https://api.pexels.com/v1/search?query=nature&per_page=1"
