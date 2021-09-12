const { users } = require(__basedir + "/db/controllers");
const { throwBadRequestError } = require(__basedir + "/errors");
const { messages } = require(__basedir + "/config");

const updateQuestionData = async (name, updates) => {
    console.log(updates,":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");


        const user = await users.updateUserByName(name,updates);
        if (!user) {
            throwBadRequestError(messages.USER_ALREADY_EXISTS);
        }
        return {
            user
        };

};

module.exports = {
    updateQuestionData
}