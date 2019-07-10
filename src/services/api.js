import axios from 'axios'

const api = axios.create( {
    baseURL: 'http://labdados.dcx.ufpb.br/tec-cid/api'
} );

export default api;