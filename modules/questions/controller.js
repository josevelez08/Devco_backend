const { updateQuestionData, averageQuestionResult } = require("./actions");
const { constants } = require(__basedir + "/config");
const { SUCCESS } = constants;

const updateQuestion = async (req, res, next) => {
    try {
        const body = req.body;
        const name = body.name;
        const data = await updateQuestionData(name, body);
        const average = averageQuestionResult(body);
        const response = {
            name: body.name,
            questions1: body.questions1,
            questions2: body.questions2,
            average
        }
        res.status(SUCCESS.CODE).send({ response });
        next();
    } catch (error) {
        res.status(error.code).send({
            error: error.message
        });
        next();
    }
};
module.exports =  {
    updateQuestion
}