import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_m_system",
    port: 3308,
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Database Connected")
    }
})


export default con;

