import axios from 'axios'

const KEY = 'a7cefda880fe463da9c182550221210'

export default axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: KEY,
  }
})