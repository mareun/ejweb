var express = require
var path = require('path')
var mysql = require('mysql');


var connection = mysql.createConnection({
						host: 'localhost',
						port: 3306,
                        user: 'root',
                        password: 'dmswl0426!',
                        database: 'jungedbinstance'
                        });

exports.login = function(id, pw, callback){
    connection.query('SELECT * FROM jungedbinstance.users_table where user_id = ? AND user pw = ?'
    , [id, pw], function(error, result, fields){
        console.log(result);
        callback(error, result);
    })
}
