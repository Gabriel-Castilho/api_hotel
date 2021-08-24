const {Router}= require("express")
const reservaRouter = require("./reserva.routes")
const clienteRouter = require("./cliente.routes")

const routes = Router();

routes.use("/reserva",reservaRouter)
routes.use("/cliente",clienteRouter)




module.exports = routes