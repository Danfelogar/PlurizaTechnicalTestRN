//dependencies
import axios from 'axios';
//compoents
import {BASE_URL} from '../utils';

const cryptoApi = axios.create({baseURL: BASE_URL});

export default cryptoApi;
