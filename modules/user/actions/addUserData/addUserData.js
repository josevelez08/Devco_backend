const { users } = require(__basedir + "/db/controllers");
const { throwBadRequestError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");
const {averageQuestionResult} = require("../../../questions/actions/")

/**
 * Method to add new user
 * @param {object} userObj User object.
 * */
const addUserData = async userObj => {
    const user = await users.getUser({ name: userObj.name });
    if (user) {
        return({user});
    }
    const result = await users.createUser(userObj);
    return {
        user: result
    };
};

module.exports = {
    addUserData
};