import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://pocs.digitalpages.com.br/mock/api/fruits-api'
})

export default api