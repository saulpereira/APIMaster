const { messages } = require('../data/dbmessages.json');
const { exec } = require('child_process');
const { RSA_NO_PADDING } = require('constants');

exports.get_all_messages = (req, res, next) => {
    res.json(messages);
}

exports.add_messages = (req, res, next) => {
    const data = {
        message: req.body.message,
        tags: req.body.tags
    };

    messages.push({
        message_Id: messages.length + 1,
        message: data.message,
        tags: data.tags
    })
    res.status(204).json({error: 'Record successfully added.'});
}

exports.get_one_message = (req, res, next) => {
    const id = req.params;
    
    let message = messages.find(message => message.message_Id === id);

    if (message) {
        //res.json('si encontre');
        res.json(message);
    } else {
        res.json('no encontre');
        //console.log('no encontro');
        //res.status(404).json({error: 'Record not found.'});
    }
    //messages.find(id)
    //    .exec()
    //    .then(doc => {
    //        console.log(doc);
    //        res.status(200).json({doc});
            //if (doc) {
            //    res.status(200).json({datdoc})
            //} else {
            //    res.status(404).json({message: 'Not found'});
            //}
       // })
       // .catch(err => {
       //     console.log(err);
       //     res.status(500).json({error: err});
       // })
}
