const { users } = require(__basedir + "/db/controllers");
const { throwNotFoundError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

const getUserData = async name => {

    const user = await users.getUser({ name: name });
    if (!user) {
        throwNotFoundError(messages.USER_NOT_FOUND);
    }
    return user;
};

module.exports = {
    getUserData
};