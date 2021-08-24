const {Router}= require("express")
const servicoRouter = require("./servicos.routes")
const clienteRouter = require("./cliente.routes")
const estadiaRouter = require("./estadia.routes")
const routes = Router();

routes.use("/servico",servicoRouter)
routes.use("/cliente",clienteRouter)
routes.use("/estadia",estadiaRouter)




module.exports = routes