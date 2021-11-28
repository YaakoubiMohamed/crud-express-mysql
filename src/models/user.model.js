'use strict';
var dbConn = require('../../db/base');
//User object create
var User = function(user){
  this.nom     = user.nom;
  this.prenom      = user.prenom;
  this.email          = user.email;
  this.telephone          = user.telephone;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
User.create = function (newUser, result) {
dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
User.findById = function (id, result) {
dbConn.query("Select * from users where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
User.findAll = function (result) {
dbConn.query("Select * from users", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('users : ', res);
  result(null, res);
}
});
};
User.update = function(id, user, result){
dbConn.query("UPDATE users SET nom=?,prenom=?,email=?,telephone=? WHERE id = ?", [user.nom,user.prenom,user.email,user.telephone, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
User.delete = function(id, result){
dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= User;