const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);    
// });

Todo.findOneAndRemove({_id:'58acb288457e11c2716b61d1'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('58acb288457e11c2716b61d1').then((todo) => {
    console.log(todo);
});