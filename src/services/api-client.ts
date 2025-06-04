import axios from 'axios'

export default  axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '6bd11fa8105e48b7a4485cac451bad1f'

    }
})