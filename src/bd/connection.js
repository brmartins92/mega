var mysql = require("mysql");
var connection = mysql.createPool({
  host: "92.249.44.105",
  user: "u140417911_megahack",
  password: "megahack",
  database: " u140417911_megahack",
  port:3306
  
});
connection.getConnection(function(err, connection) {
  console.log(connection);
  console.log(err);
  // execute query
  // ...
});
///mongodb+srv://<username>:<password>@cluster0-fe5hf.mongodb.net/test?retryWrites=true&w=majority
module.exports = connection;