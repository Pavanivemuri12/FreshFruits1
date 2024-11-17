import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
const getBasicFruits = () => axios.get(`${API}/basicfruits/all`)
const addBasicFruits = (basicfruits) => axios.post(`${API}/basicfruits/add`,basicfruits)
const deleteBasicFruits = (id) => axios.delete(`${API}/basicfruits/delete/${id}`)
const editBasicFruits = (basicfruits,id)=>axios.put(`${API}/basicfruits/edit/${id}`,basicfruits)

const getDryFruits = () => axios.get(`${API}/dryfruits/all`)
const getExoticFruits = () => axios.get(`${API}/exoticfruits/all`)
const getOrganicFruits = () => axios.get(`${API}/organicfruits/all`)
const getSeasonalFruits = () => axios.get(`${API}/seasonalfruits/all`)
const getFruitBaskets = () => axios.get(`${API}/fruitbaskets/all`)
export{
    getBasicFruits,
    getDryFruits,
    getExoticFruits,
    getOrganicFruits,
    getSeasonalFruits,
    getFruitBaskets,

    addBasicFruits,



    deleteBasicFruits,




    editBasicFruits

}

