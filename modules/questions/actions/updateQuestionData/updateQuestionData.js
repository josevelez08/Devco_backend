const { users } = require(__basedir + "/db/controllers");
const { createToken } = require(__basedir + "/middlewares");
const { throwBadRequestError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

const updateQuestionData = async (name,updates) => {
        const user = await users.updateUserByName({ name: name, updates: updates });
        if (user) {
            throwBadRequestError(messages.USER_ALREADY_EXISTS);
        }
        const result = await users.createUser(userObj);
        const token = await createToken(result);
        return {
            user: result,
            token
        };

};

module.exports = {
    updateQuestionData
}