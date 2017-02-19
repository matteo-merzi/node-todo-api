const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // challenge: START
    // deleteMany users where name = Matteo
    db.collection('Users').deleteMany({
        name: 'Matteo'
    }).then((result) => {
        console.log(result);
    });

    // findOneAndDelete users where _id = [passedId]
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('58a979dc50c2ab036bb1f57b') 
    }).then((result) => {
        console.log(result);
    });
    // challenge: STOP

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //db.close();
});