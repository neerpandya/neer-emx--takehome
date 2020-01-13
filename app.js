const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/resume', (req, res) => {
    var params = req.query;
    console.log(params);
    var answer = function () {
        switch(params.q) {
            case 'Ping' :
                return 'OK';
            case 'Name' :
                return 'Neer Pandya';
            case 'Email Address' :
                return 'neerpandya@gmail.com';
            case 'Phone' :
                return '516-510-1480';
            case 'Position' :
                return 'Software Engineer';
            case 'Years' :
                return '4+ Years';
            case 'Referrer' :
                return 'Through a recruiter';
            case 'Degree' :
                return 'Master of Computer Science';
            case 'Resume' :
                return 'https://www.linkedin.com/in/neerpandya/';
            case 'Source' :
                return 'https://github.com/neerpandya/neer-emx-takehome';
            case 'Status' :
                return 'Sure thing';
            case 'Puzzle' :
                return solvePuzzle(params.d);
            default:
                return'OKNOTOK';
        }
    };
    res.send(answer())
});

function solvePuzzle(puzzle) {
    console.log("first: " + puzzle);
    puzzle = puzzle.split('Please solve this puzzle: ABCD ')[1];
    console.log("second: " + puzzle);
    var puzzleArray = puzzle.split(' ');
    console.log("third: " + puzzle);

    puzzleArray.forEach(function (currentValue, currentIndex, currentString) {
        console.log(currentValue);
        for(var i = 1; i < currentValue.length; i++){
            if(currentIndex === i - 1){
                currentValue = setCharAt(currentValue, i, '=');
                currentString[currentIndex] = currentValue;
            } else if(currentValue[i] === '-' || currentValue[i] === '='){
                continue;
            } else {
                if (currentValue[i] === '>'){
                    puzzleArray[i-1] = setCharAt(puzzleArray[i-1], currentIndex + 1, '<')
                } else {
                    puzzleArray[i-1] = setCharAt(puzzleArray[i-1], currentIndex + 1, '>');
                }
            }
        }
    });

    puzzleArray.forEach(function (currentValue, currentIndex, currentString) {
        if(currentValue.split('<').length === 1){
            console.log("<<<" + currentValue);
            for(var i = 1; i < currentValue.length; i++){
                if(currentValue[i] === '-'){
                    currentValue = setCharAt(currentValue, i, '>');
                    currentString[currentIndex] = currentValue;
                    puzzleArray[i-1] = setCharAt(puzzleArray[i-1], currentIndex + 1, '<');
                }
            }
        } else if(currentValue.split('>').length === 1){
            console.log(">>>" + currentValue);
            for(var i = 1; i < currentValue.length; i++){
                if(currentValue[i] === '-'){
                    currentValue = setCharAt(currentValue, i, '<');
                    currentString[currentIndex] = currentValue;
                    puzzleArray[i-1] = setCharAt(puzzleArray[i-1], currentIndex + 1, '>');
                }
            }
        }
    });


    console.log(puzzleArray);

    var answer = ' ABCD\n' +
        puzzleArray[0] + '\n' +
        puzzleArray[1] + '\n' +
        puzzleArray[2] + '\n' +
        puzzleArray[3];
    return answer
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
