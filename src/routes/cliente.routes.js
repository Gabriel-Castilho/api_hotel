const { Router } = require("express")
const ClienteController = require("../controllers/ClienteController")

const clienteRouter = Router();
const clienteController = new ClienteController();

clienteRouter.get("/", async (req, res) => {
    const items = await clienteController.index()
        if(message == 'erro'){
            console.log('aaaaaaaa')
        }    
    return res.json(items) 
})

clienteRouter.post("/", async (req, res) => {
    const { nome, sobrenome, telefone, cpf } = req.body
    const items = await clienteController.create(nome, sobrenome, telefone, cpf)
    if(res.json({'message' : 'erro'})){
    console.log('aaaaaaaaa')
}    return res.json(items)
})

clienteRouter.delete("/:cpf", async (req, res) => {
    const { cpf } = req.params
    const items = await clienteController.delete(cpf)
        return res.json(items)
})

clienteRouter.get("/:cpf", async (req, res) => {
    const { cpf } = req.params
    const items = await clienteController.getId(cpf)
    if (items == "") {
        res.sendStatus(404)
    } else {   
        return res.json(items)
    }
})

clienteRouter.patch("/:cpf", async (req, res) => {
    const { cpf } = req.params
    const { nome, sobrenome, telefone } = req.body
    const items = await clienteController.update(nome, sobrenome, telefone, cpf)
    return res.json(items)
})

module.exports = clienteRouter