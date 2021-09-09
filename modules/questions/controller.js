const { updateQuestionData } = require("./actions");
const { constants } = require(__basedir + "/config");
const { SUCCESS } = constants;
 const { averageQuestionData } = require("./actions");

const updateQuestion = async (req, res, next) => {
    try {
        const {name} = req.body;
        const data = await updateQuestionData(name, req.body);
        const average = averageQuestionData(req.body);
        res.status(SUCCESS.CODE).send({ data });
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