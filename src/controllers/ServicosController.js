const {Client} = require("pg")


class ServicosController{
  async index(){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized: false
        }, 
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.servicos;");
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      console.error(err)
      return res.json(err)
    }
  }

  async delete(id){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("DELETE FROM public.servicos WHERE cod_servico=$1", [id]);
      client.end();
      const results = result.rows;
      return results;
    }catch(err){
      return res.json(err)
    }
  }
  /*async update(id_cliente,horario,data_atendimento,id_servico,adicional,id_agendamento){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("UPDATE public. SET id_cliente=$1, horario=$2, data_atendimento=$3, id_servico=$4, adicional=$5 WHERE id_agendamento=$6;",
      [id_cliente, horario, data_atendimento, id_servico,adicional,id_agendamento]);
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
  */
  async getId(id){
    try{
      const client = new Client({
        connectionString:process.env.DATABASE_URL,
        ssl:{
          rejectUnauthorized:false
        },
      });
      client.connect();
      const result = await client.query("SELECT * FROM public.servicos WHERE cod_servico = $1", [id]);
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


module.exports = ServicosController;










