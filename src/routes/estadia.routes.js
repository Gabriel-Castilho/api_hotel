const {Router} = require("express")
const EstadiaController = require("../controllers/EstadiaController")

const estadiaRouter = Router();
const estadiaController = new EstadiaController();

estadiaRouter.get("/",async (req,res)=>{
    const items = await estadiaController.index()
    return res.json(items)
})

estadiaRouter.post("/",async(req,res)=>{
    const{cpf,data_entrada,data_saida,ocupantes} = req.body
    const items = await estadiaController.create(cpf,ocupantes,data_entrada,data_saida)
    return res.json(items)
})

estadiaRouter.delete("/:cpf",async(req,res)=>{
    const {cpf} = req.params
    const items = await estadiaController.delete(cpf)
    return res.json(items)
})

estadiaRouter.get("/:cpf",async(req,res)=>{
    const {cpf}= req.params
    const items = await estadiaController.getId(cpf)
    return res.json(items)
})

estadiaRouter.patch("/:cpf",async(req,res)=>{
    const {cpf} = req.params
    const {nome,sobrenome,telefone} = req.body
    const items = await estadiaController.update(nome,sobrenome,telefone,cpf)
    return res.json(items)
})

module.exports=estadiaRouter