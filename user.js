const mysql=require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);


const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"message"
}

async function addmsg(user){

    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection Successful");
    const sql = `insert into msgtable (msg) value(?)`;
     await connection.queryAsync(sql,[user.msg]);
    await connection.endAsync();
}

//addmsg();


async function showmsg(){
    const connection =mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection Successful");
    const sql = `select * from msgtable`;
     const msglist = await connection.queryAsync(sql);
    await connection.endAsync();
    return msglist;
}

//showmsg();

module.exports={showmsg,addmsg};