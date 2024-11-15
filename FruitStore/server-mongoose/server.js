const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

const db = require('./config/db')
const BasicFruits = require('./routes/BasicRoute')
const DryFruits = require('./routes/DryRoute')
const ExoticFruits = require('./routes/ExoticRoute')
const FruitBaskets = require('./routes/BasketRoute')
const OrganicFruits = require('./routes/OrganicRoute')
const SeasonalFruits = require('./routes/SeasonalRoute')
const Orders = require('./routes/OrderRoute')
const Users = require('./routes/UserRoute')
//const Auth = require('./routes/AuthRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/basicfruits', BasicFruits)
app.use('/dryfruits', DryFruits)
app.use('/exoticfruits', ExoticFruits)
app.use('/fruitbaskets', FruitBaskets)
app.use('/organicfruits', OrganicFruits)
app.use('/seasonalfruits', SeasonalFruits)
app.use('/users', Users)
app.use('/orders', Orders)
//app.use('/auth', Auth)

app.listen(port, (() => console.log(`Listening on ${port}`)))