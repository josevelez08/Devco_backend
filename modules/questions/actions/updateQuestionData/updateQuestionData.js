const { users } = require(__basedir + "/db/controllers");
const { throwBadRequestError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

const updateQuestionData = async (name,updates) => {

        const user = await users.updateUserByName({ name: name}, {updates: updates});
        if (!user) {
            throwBadRequestError(messages.USER_ALREADY_EXISTS);
        }
        return {
            user: result
        };

};

module.exports = {
    updateQuestionData
}