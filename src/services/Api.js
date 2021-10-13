import axios from 'axios'
axios.defaults.baseURL = 'https://pixabay.com/api';

const imagesFetch = async (text, page) => {
const API_KEY = '22920296-83f622dc6fe28ab18a69af7db';
const request = `/?image_type=photo&orientation=horizontal&
q=${text}&page=${page}&per_page=15&key=${API_KEY}`;

const { data } = await axios.get(request);
const images = data.hits;
return images;
};

export default imagesFetch;
