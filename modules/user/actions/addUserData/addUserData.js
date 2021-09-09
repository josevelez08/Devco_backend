const { users } = require(__basedir + "/db/controllers");
const { throwBadRequestError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

/**
 * Method to add new user
 * @param {object} userObj User object.
 * */
const addUserData = async userObj => {
    const user = await users.getUser({ name: userObj.name });
    if (user) {
        throwBadRequestError(messages.USER_ALREADY_EXISTS);
    }
    const result = await users.createUser(userObj);
    return {
        user: result
    };
};

module.exports = {
    addUserData
};