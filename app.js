const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const resumeService = require('./resume-service.js');

app.get('/resume', (req, res) => {
    var params = req.query;
    var answer = resumeService.getResumeAnswer(params);
    res.send(answer())
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
