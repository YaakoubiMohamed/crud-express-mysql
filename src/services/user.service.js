const User = require('../models/user.model');
const conn = require('../../base/base');

//*******start Create **********/
User.create = function (newUser, result) {
    conn.query("INSERT INTO users set ?", newUser, function (err, res) {
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
//*******end Create **********/

//*******start findById **********/
User.findById = function (id, result) {
    conn.query("Select * from users where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
//*******end findById **********/

//*******start findAll **********/
User.findAll = function (result) {
    conn.query("Select * from users", function (err, res) {
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
//******* end findAll **********/

//*******start Update **********/
User.update = function(id, user, result){
    conn.query("UPDATE users SET nom=?,prenom=?,email=?,telephone=? WHERE id = ?", [user.nom,user.prenom,user.email,user.telephone, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
//*******end Update **********/

//*******start Delete **********/
User.delete = function(id, result){
    conn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
//*******end Delete **********/
module.exports= User;