function getResumeAnswer(params) {
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
    return answer();
}

function solvePuzzle(puzzle) {
    puzzle = puzzle.replace(/\n/g, " ").split('Please solve this puzzle:  ABCD ')[1];
    let puzzleArray = puzzle.split(' ');

    // Initializing board with known values
    puzzleArray.forEach(function (currentValue, currentIndex, currentString) {
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

    // Solving rest of board
    puzzleArray.forEach(function (currentValue, currentIndex, currentString) {
        if(currentValue.split('<').length === 1){
            for(var i = 1; i < currentValue.length; i++){
                if(currentValue[i] === '-'){
                    currentValue = setCharAt(currentValue, i, '>');
                    currentString[currentIndex] = currentValue;
                    puzzleArray[i-1] = setCharAt(puzzleArray[i-1], currentIndex + 1, '<');
                }
            }
        } else if(currentValue.split('>').length === 1){
            for(var i = 1; i < currentValue.length; i++){
                if(currentValue[i] === '-'){
                    currentValue = setCharAt(currentValue, i, '<');
                    currentString[currentIndex] = currentValue;
                    puzzleArray[i-1] = setCharAt(puzzleArray[i-1], currentIndex + 1, '>');
                }
            }
        }
    });

    return ' ABCD\n' +
        puzzleArray[0] + '\n' +
        puzzleArray[1] + '\n' +
        puzzleArray[2] + '\n' +
        puzzleArray[3]
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

exports.getResumeAnswer = getResumeAnswer;

