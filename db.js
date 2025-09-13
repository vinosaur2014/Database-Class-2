var mysql = require('mysql');
var con =mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12796682",
    password: "cYEzRyw8Wg",
    database: "sql12796682",
    port: 3306
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to FreeSQLDatabase")
});
//create table
var sql = 'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50),email VARCHAR(100))';

con.query(sql,function(err, result)
{
    if (err)throw err
    console.log("Table 'user' is created!")
});
var sql = "INSERT INTO users (name, email) VALUES (?,?)";
var values = ["Alice", "alice@example.com"];

con.query(sql, values, function(err, result){
    if (err) throw err;
    console.log("Record inserted, ID:", result.insertId);
});
var sql = "INSERT INTO users (name, email) VALUES ?";
var values = [
    ["Bob", "bob@example.com"],
    ["Charlie", "charlie@example.com"],
    ["David", "david@example.com"]
];
con.query(sql, [values], function (err, result){
    if (err) throw err;
    console.log("Number of records inserted:", result.affectedRows);
});

con.query("SELECT * FROM users", function (err, result){
    if (err) throw err;
    console.log("Users",result);
    con.end();
});
var conditionSQL = "SELECT * FROM users WHERE name = 'Alice'";
con.query(conditionSQL, function (err,result)
{
    if (err) throw err;
    console.log("Filtered Result (name = Alice):", result);
    con.end()
});