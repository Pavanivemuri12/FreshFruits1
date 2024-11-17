import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts
<<<<<<< Updated upstream

const addBasicFruits = (basicfruits) => axios.post(`${API}/basicfruits/add`,basicfruits)
const addDryFruits = (dryfruits) => axios.post(`${API}/dryfruits/add`,dryfruits)
const addExoticFruits = (exoticfruits) => axios.post(`${API}/exoticfruits/add`,exoticfruits)
const addOrganicFruits = (organicfruits) => axios.post(`${API}/organicfruits/add`,organicfruits)
const addSeasonalFruits = (seasonalfruits) => axios.post(`${API}/seasonalfruits/add`,seasonalfruits)
const addFruitBaskets = (fruitbaskets) => axios.post(`${API}/fruitbaskets/add`,fruitbaskets)


const deleteBasicFruits = (id) => axios.delete(`${API}/basicfruits/delete/${id}`)
const deleteDryFruits = (id) => axios.delete(`${API}/dryfruits/delete/${id}`)
const deleteExoticFruits = (id) => axios.delete(`${API}/exoticfruits/delete/${id}`)
const deleteOrganicFruits = (id) => axios.delete(`${API}/organicfruits/delete/${id}`)
const deleteSeasonalFruits = (id) => axios.delete(`${API}/Seasonalfruits/delete/${id}`)
const deleteFruitBaskets = (id) => axios.delete(`${API}/fruitbaskets/delete/${id}`)

const editBasicFruits = (basicfruits,id)=>axios.put(`${API}/basicfruits/edit/${id}`,basicfruits)
const editDryFruits = (dryfruits,id)=>axios.put(`${API}/dryfruits/edit/${id}`,dryfruits)
const editExoticFruits = (exoticfruits,id)=>axios.put(`${API}/exoticfruits/edit/${id}`,exoticfruits)
const editOrganicFruits = (organicfruits,id)=>axios.put(`${API}/organicfruits/edit/${id}`,organicfruits)
const editSeasonalFruits = (seasonalfruits,id)=>axios.put(`${API}/seasonalfruits/edit/${id}`,seasonalfruits)
const editFruitBaskets = (exoticfruitbaskets,id)=>axios.put(`${API}/fruitbaskets/edit/${id}`,fruitbaskets)


const getBasicFruits = () => axios.get(`${API}/basicfruits/all`)
=======
const getBasicFruits = () => axios.get(`${API}/basicfruits/all`)
const addBasicFruits = (basicfruits) => axios.post(`${API}/basicfruits/add`,basicfruits)
const deleteBasicFruits = (id) => axios.delete(`${API}/basicfruits/delete/${id}`)
const editBasicFruits = (basicfruits,id)=>axios.put(`${API}/basicfruits/edit/${id}`,basicfruits)
const getOrders = () => axios.get(`${API}/orders/all`)
const deleteOrders = (id) => axios.delete(`${API}/orders/delete/${id}`)
const editOrders = (orders,id)=>axios.put(`${API}/orders/edit/${id}`,orders)
>>>>>>> Stashed changes
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
    getOrders ,
    deleteOrders,
    editOrders,
    addBasicFruits,
    addDryFruits,
    addExoticFruits,
    addOrganicFruits,
    addSeasonalFruits,
    addFruitBaskets,



    deleteBasicFruits,
    deleteDryFruits,
    deleteExoticFruits,
    deleteOrganicFruits,
    deleteSeasonalFruits,
    deleteFruitBaskets,




    editBasicFruits,
    editDryFruits,
    editExoticFruits,
    editOrganicFruits,
    editSeasonalFruits,
    editFruitBaskets,


    getNewlyAdded
}

