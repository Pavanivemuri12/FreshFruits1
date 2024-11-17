import axios from 'axios'


const API = 'http://localhost:3000'

// ProductEndPonts

const addBasicFruits = (basicfruits) => axios.post(`${API}/basicfruits/add`,basicfruits)
const addDryFruits = (dryfruits) => axios.post(`${API}/dryfruits/add`,dryfruits)
const addExoticFruits = (exoticfruits) => axios.post(`${API}/exoticfruits/add`,exoticfruits)
const addOrganicFruits = (organicfruits) => axios.post(`${API}/organicfruits/add`,organicfruits)
const addSeasonalFruits = (seasonalfruits) => axios.post(`${API}/seasonalfruits/add`,seasonalfruits)
const addFruitBaskets = (fruitbaskets) => axios.post(`${API}/fruitbaskets/add`,fruitbaskets)
const addUsers = (users) => axios.post(`${API}/users/add`,users)


const deleteBasicFruits = (id) => axios.delete(`${API}/basicfruits/delete/${id}`)
const deleteDryFruits = (id) => axios.delete(`${API}/dryfruits/delete/${id}`)
const deleteExoticFruits = (id) => axios.delete(`${API}/exoticfruits/delete/${id}`)
const deleteOrganicFruits = (id) => axios.delete(`${API}/organicfruits/delete/${id}`)
const deleteSeasonalFruits = (id) => axios.delete(`${API}/Seasonalfruits/delete/${id}`)
const deleteFruitBaskets = (id) => axios.delete(`${API}/fruitbaskets/delete/${id}`)
const deleteUsers = (id) => axios.delete(`${API}/users/delete/${id}`)

const editBasicFruits = (basicfruits,id)=>axios.put(`${API}/basicfruits/edit/${id}`,basicfruits)
const editDryFruits = (dryfruits,id)=>axios.put(`${API}/dryfruits/edit/${id}`,dryfruits)
const editExoticFruits = (exoticfruits,id)=>axios.put(`${API}/exoticfruits/edit/${id}`,exoticfruits)
const editOrganicFruits = (organicfruits,id)=>axios.put(`${API}/organicfruits/edit/${id}`,organicfruits)
const editSeasonalFruits = (seasonalfruits,id)=>axios.put(`${API}/seasonalfruits/edit/${id}`,seasonalfruits)
const editFruitBaskets = (fruitbaskets,id)=>axios.put(`${API}/fruitbaskets/edit/${id}`,fruitbaskets)
const editUsers = (users,id)=>axios.put(`${API}/users/edit/${id}`,users)
const resetPassword = (password,id)=>axios.put(`${API}/users/resetpassword/${id}`,password)


const getBasicFruits = () => axios.get(`${API}/basicfruits/all`)
const getDryFruits = () => axios.get(`${API}/dryfruits/all`)
const getExoticFruits = () => axios.get(`${API}/exoticfruits/all`)
const getOrganicFruits = () => axios.get(`${API}/organicfruits/all`)
const getSeasonalFruits = () => axios.get(`${API}/seasonalfruits/all`)
const getFruitBaskets = () => axios.get(`${API}/fruitbaskets/all`)
const getNewlyAdded = () => axios.get(`${API}/newlyadded/all`)
const getUsers = () => axios.get(`${API}/users/all`)

export{
    getBasicFruits,
    getDryFruits,
    getExoticFruits,
    getOrganicFruits,
    getSeasonalFruits,
    getFruitBaskets,
    getUsers,

    addBasicFruits,
    addDryFruits,
    addExoticFruits,
    addOrganicFruits,
    addSeasonalFruits,
    addFruitBaskets,
    addUsers,



    deleteBasicFruits,
    deleteDryFruits,
    deleteExoticFruits,
    deleteOrganicFruits,
    deleteSeasonalFruits,
    deleteFruitBaskets,
    deleteUsers,




    editBasicFruits,
    editDryFruits,
    editExoticFruits,
    editOrganicFruits,
    editSeasonalFruits,
    editFruitBaskets,
    editUsers,
    resetPassword,
    getNewlyAdded,
    getUsers,
    addUsers,
    deleteUsers,
    editUsers,

    getNewlyAdded
}

