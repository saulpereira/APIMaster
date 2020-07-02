const { messages } = require('../data/dbmessages.json');

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
    const id = req.params.messageid;
    //console.log(id);
    
    let message = messages.find(message => message.messageid === id);

    if (message) {
        res.json(message);
        console.log('encontre');
    } else {
        res.status(404).json({error: 'Record not found.'});
    }

    //messages.find(id)
    //    .exec()
    //    .then(doc => {
    //        console.log(doc);
    //        
    //        if (doc) {
    //            res.status(200).json({doc})
    //        } else {
    //            res.status(404).json({message: 'Not found'});
    //        }
    //    })
    //    .catch(err => {
    //        console.log(err);
    //        res.status(500).json({error: err});
    //    })
}

exports.get_tags = (req, res, next) => {
    const tagid = req.params.tags;
    console.log(tagid);
    
    let message = messages.find(tag => tag.tags === tagid);

    if (message) {
        res.json(message);
        console.log('encontre');
    } else {
        res.status(404).json({error: 'Record not found.'});
    }
}
