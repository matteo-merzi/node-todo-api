const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '58a9b1c07bd301e51048d8b8';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User by id', user);
}).catch((err) => console.log(err));

// var id = '58a9fafce530416b1e4a4fa2';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     completed: false
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((err) => console.log(err));