import mysql2 from 'mysql2';

let connection;
const con = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RanGa@$Sh#123%',
    database: 'studentms'
})
con.connect(function(err) {
    if(err) {
        console.log('Error in connection');
    }else{
        console.log('Database connected');
    
    }
})

export default con;