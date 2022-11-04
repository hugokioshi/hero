//implementacao das funcoes slq
import Database from './DbServices';

// comando pegar serviço de banco do DBServices :const ExecuteQuery

const DB_EXEC = Database.getConnection();
//export assincronic visualizar
export const getGastos = async () => {
  let results = await DB_EXEC(`select * from gastos`);
  console.log(results);
  return results.rows._array;
};

//inserção para ficar mais facil insert inserir dados
export const insertGasto = async (param) => {
  let results = await DB_EXEC(
    `insert into gastos(tipo, data, preco, valor, odometro)
  values(?,?,?,?,?)`,
    [param.tipo, param.data, param.preco, param.valor, param.odometro]
  );
  //console.log(results);
  return results.rowsAffected;
};

//update para ficar mais facil insert inserir dados
export const updateGasto = async (param) => {
  let results = await DB_EXEC(
    `update gastos set tipo=?, data=?, preco=?, valor=?, odometro=? where id=?`,
    [param.tipo, param.data, param.preco, param.valor, param.odometro, param.id]
  );
  //console.log(results);
  return results.rowsAffected;
};

//delete para ficar mais facil insert inserir dados
export const deleteGasto = async (id) => {
  let results = await DB_EXEC(`delete from gastos where id=?`, [id]);
  //console.log(results);
  return results.rowsAffected;
};
