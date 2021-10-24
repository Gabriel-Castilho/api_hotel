const {Client} = require("pg")



class ClienteController{
  async index(){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized: false
        }, 
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.cliente;");
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      console.error(err)
      return res.json(err)
    }
  }
  async create(nome,sobrenome,telefone_celular,cpf){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });

      client.connect();
      const result = await client.query("INSERT INTO public.cliente (nome,sobrenome,telefone_celular,cpf) VALUES($1,$2,$3,$4);",
      [nome,sobrenome,telefone_celular,cpf])
      client.end();
      const results = result.rows;
      const response = {
        message:"cadastrado"
      }
      return response;
    }catch(err){
      console.error(err)
      const response={
        message:"erro"
      }
      return response;
    }
  }
  async delete(cpf){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("DELETE FROM public.cliente WHERE cpf=$1", [cpf]);
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      return res.json(err)
    }
  }
  async update(nome,sobrenome,telefone,cpf){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public.cliente SET nome=$1, sobrenome=$2, telefone=$3,  WHERE cpf =$4;",
      [nome,sobrenome,telefone,cpf]);
      client.end();
      const results = result.rows;
      const response = {
        message:"cadastrado"
      }
      return response;
    }catch(err){
      console.error(err)
      const response={
        message:"erro"
      }
      return response;
    }
  }
  async getId(cpf){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.cliente WHERE cpf= $1", [cpf]);
      client.end();
      const results = result.rows;
      return results;
      const response = {
        message:"achou"
      }
      return response;
    }catch(err){ 
      console.error(err)
      const response={
        message:"erro"
      }
      return response;
    }


}
}


module.exports = ClienteController;










