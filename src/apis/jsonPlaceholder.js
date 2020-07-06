import axios from 'axios';

{/* Simply using axios to create the default URL to query from when making API calls. */}
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});