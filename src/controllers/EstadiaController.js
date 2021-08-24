const {Client} = require("pg")



class EstadiaController{
  async index(){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized: false
        }, 
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.estadia;");
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      console.error(err)
      return res.json(err)
    }
  }
  async create(cpf,ocupantes,dataEntrada,dataSaida){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });

      client.connect();
      const result = await client.query("INSERT INTO public.estadia (cpf,n_ocupantes,data_entrada,data_saida) VALUES($1,$2,$3,$4);",
      [cpf,ocupantes,dataEntrada,dataSaida])
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
      const result = await client.query("DELETE FROM public.estadia WHERE cpf=$1", [cpf]);
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      return res.json(err)
    }
  }
  async update(ocupantes,dataEntrada,dataSaida,cpf){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public.estadia SET n_ocupantes=$2, data_entrada=$3, data_saida=$4 WHERE cpf =$3;",[ocupantes,dataEntrada,dataSaida,cpf]);
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
      const result = await client.query("SELECT * FROM public.estadia WHERE cpf= $1", [cpf]);
      client.end();
      const results = result.rows;
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


module.exports = EstadiaController;










