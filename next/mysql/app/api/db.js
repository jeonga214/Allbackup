var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'svc.sel5.cloudtype.app',
  user     : 'root',
  password : '1234',
  database : 'test',
  port : '30840'
});
 
connection.connect();
 
export async function queryExecute(str, value){

    let data = await new Promise((resolve,reject)=>{
        connection.query(str, value, function (error, results) {
            resolve(results); 
        });
    });
    return data;
}