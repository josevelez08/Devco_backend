const { updateQuestionData } = require("./actions");
const { constants } = require(__basedir + "/config");
const { SUCCESS } = constants;

const updateQuestion = async (req, res, next) => {
    try {
        const { name } = req.name;
        console.log(name);
        const data = await updateQuestionData(name, updates);
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