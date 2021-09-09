 const { updateQuestion } = require('./controller');
 
 module.exports = router => {

     router.patch("/questions", updateQuestion);
 };
 