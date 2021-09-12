const averageQuestionResult = (body) => {
    console.log(body);
    let average = 0;
    if(body.questions1)
    {
        let questions1 = body.questions1;
        questions1.forEach(element => {
            if(element.answer === true) {
                average +=4;
            }
            else {
                average -=1;
            }
            
        });
    }
    if(body.questions2)
    {
        let questions2 = body.questions2;
        questions2.forEach(element => {
            if(element.answer === true) {
                average +=4;
            }
            else {
                average -=1;
            }
        });
    }

    return average;

}

module.exports = {
    averageQuestionResult
}