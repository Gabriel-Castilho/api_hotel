const {Router} = require("express")
const ClienteController = require("../controllers/ReservaController")

const clienteRouter = Router();
const clienteController = new ClienteController();

clienteRouter.get("/",async (req,res)=>{
    const items = await clienteController.index()
    return res.json(items)
})

clienteRouter.post("/",async(req,res)=>{
    const{nome,sobrenome,telefone,cpf} = req.body
    const items = await clienteController.create(nome,sobrenome,telefone,cpf)
    return res.json(items)
})

clienteRouter.delete("/:cpf",async(req,res)=>{
    const {cpf} = req.params
    const items = await clienteController.delete(cpf)
    return res.json(items)
})

clienteRouter.get("/:cpf",async(req,res)=>{
    const {cpf}= req.params
    const items = await clienteController.getId(cpf)
    return res.json(items)
})

clienteRouter.patch("/:cpf",async(req,res)=>{
    const {cpf} = req.params
    const {nome,sobrenome,telefone} = req.body
    const items = await clienteController.update(nome,sobrenome,telefone,cpf)
    return res.json(items)
})

module.exports=clienteController