
const { getUserData, addUserData } = require("./actions");
const { constants } = require(__basedir + "/config");
const { SUCCESS } = constants;


const getUser = async (req, res, next) => {
    try {
        const { name } = req.body;
        const data = await getUserData(name);
        res.status(SUCCESS.CODE).send({ data });
        next();
    } catch (error) {
        res.status(error.code).send({
            error: error.message
        });
        next();
    }
};


const addUser = async (req, res, next) => {
    try {
        const userObj = req.body;
        const data = await addUserData(userObj);
        res.status(SUCCESS.CODE).send({ data });
        next();
    } catch (error) {
        res.status(error.code).send({
            error: error.message
        });
        next();
    }
};

module.exports = {
    getUser,
    addUser
};