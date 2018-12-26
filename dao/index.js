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

connection.connect();

connection.query('SELECT * from Persons', function(err, rows, fields){
    if (!err)
    console.log('The solution is: ', rows);
    else
    console.log('Error while performing Query.', err);

});

connection.end();
//??