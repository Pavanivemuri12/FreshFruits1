import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getBasicFruits = () => axios.get(`${API}/basicfruits/all`)
const getDryFruits = () => axios.get(`${API}/dryfruits/all`)
const getExoticFruits = () => axios.get(`${API}/exoticfruits/all`)
const getOrganicFruits = () => axios.get(`${API}/organicfruits/all`)
const getSeasonalFruits = () => axios.get(`${API}/seasonalfruits/all`)
const getFruitBaskets = () => axios.get(`${API}/fruitbaskets/all`)
const getNewlyAdded = () => axios.get(`${API}/newlyadded/all`)
export{
    getBasicFruits,
    getDryFruits,
    getExoticFruits,
    getOrganicFruits,
    getSeasonalFruits,
    getFruitBaskets,
    getNewlyAdded
}

