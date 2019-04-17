// const mongoose = require('mongoose');
let task = require('../controllers/tasks');

module.exports = function (app){

    app.get('/tasks', function(req,res){
      task.all_tasks(req,res);
    });

    app.post('/tasks', function(req,res){
        console.log('this is a create method', req.body);
        task.add_task(req,res);
    });
    
    app.route('/tasks/:_id')
      .get(function(req,res){
          task.find_task(req,res);
      })
      .put(function(req,res){
          task.update_task(req,res);
      })
      .delete(function(req,res){
          task.delete_task(req,res);
      });
}