const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    var params = req.query;
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
                return 'link';
            case 'Source' :
                return 'https://github.com/neerpandya/neer-emx-takehome';
            case 'Status' :
                return 'Sure thing';
            case 'Puzzle' :
                return ' ' +
                    'ABCD\n' +
                    'A=<>>\n' +
                    'B>=>>\n' +
                    'C<<=>\n' +
                    'D<<<=';
            default:
                return'OKNOTOK';
        }
    };
    res.send(answer())
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
