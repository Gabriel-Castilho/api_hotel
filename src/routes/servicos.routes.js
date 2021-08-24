const {Router} = require("express")

const ServicoController= require("../controllers/ServicosController")

const servicoRouter = Router();
const servicoController = new ServicoController();

servicoRouter.get("/",async (req,res)=>{
    const items = await servicoController.index()
    return res.json(items)
})

/*servicoRouter.post("/",async(req,res)=>{
    const{id_clientes,horario,data_atendimento,id_servico,adicional} = req.body
    const items = await servicoController.create(id_clientes,horario,data_atendimento,id_servico,adicional)
    return res.json(items)
})
*/
servicoRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const items = await servicoController.delete(idNumber)
    return res.json(items)
})

servicoRouter.get("/:id",async(req,res)=>{
    const {id}= req.params
    let idNumber = parseInt(id)
    const items = await servicoController.getId(idNumber)
    return res.json(items)
})
/*
servicoRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    let idNumber = parseInt(id)
    const {id_cliente,horario,data_atendimento,id_servico,adicional} = req.body
    const items = await servicoController.update(id_cliente,horario,data_atendimento,id_servico,adicional,idNumber)
    return res.json(items)
})
*/

module.exports=servicoRouter

