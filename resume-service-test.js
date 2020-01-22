const resumeService = require('./resume-service.js');

okParams = {
    q : "Ping"
};

nameParams = {
    q : "Name"
};

puzzleParams = {
    q : "Puzzle",
    d : "Please solve this puzzle:\n ABCD\nA=---\nB>---\nC<---\nD->--\n"
};

console.log(resumeService.getResumeAnswer(okParams) === "OK"); // expect true
console.log(resumeService.getResumeAnswer(okParams) === "OKNOTOK"); // expect false
console.log(resumeService.getResumeAnswer(nameParams) === "Neer Pandya"); // expect true
console.log(resumeService.getResumeAnswer(puzzleParams) === " ABCD\nA=<><\nB>=><\nC<<=<\nD>>>="); // expect true


