const { credentials } = require('../data/dbcredentials.json');

exports.get_credentials = (req, res, next) => {
    res.json(credentials);
}

exports.add_credentials = (req, res, next) => {
    const data = {
        key: req.body.key,
        shared_secret: req.body.shared_secret
    };

    let credential = credentials.find(credential => credential.key === data.key);
    
    if (credential) {
        res.status(403).json({error: 'Record already exists.'});
    } else {
        credentials.push({
            key: data.key,
            shared_secret: data.shared_secret
        });
        res.status(204).json({error: 'Record successfully added.'});
    };
}
