const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24752012-6c87264ae8b83647fd23322b3';

export const getImages = async () => {
  const res = await fetch(`${BASE_URL}/?key=${API_KEY}`).then(res =>
    res.json()
  );
  return await res;
};
