import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getBasicFruits = () => axios.get(`${API}/basicfruits/all`)
export{
    getBasicFruits
}

