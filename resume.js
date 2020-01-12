const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    var params = req.query;
    console.log(params.d);

    switch(params.q) {
        case 'Ping' :
            res.send('OK');
            break;
        case 'Name' :
            console.log('Neer Pandya');
            res.send('Neer Pandya');
            break;
        case 'Email Address' :
            console.log('neerpandya@gmail.com');
            res.send('neerpandya@gmail.com');
            break;
        case 'Phone' :
            console.log('516-510-1480');
            res.send('516-510-1480');
            break;
        case 'Position' :
            console.log('Software Engineer');
            res.send('Software Engineer');
            break;
        case 'Years' :
            console.log('4+ Years');
            res.send('4+ Years');
            break;
        case 'Referrer' :
            console.log('Through a recruiter');
            res.send('Through a recruiter');
            break;
        case 'Degree' :
            console.log('Masters in CS');
            res.send('Master of Computer Science');
            break;
        case 'Resume' :
            console.log('link to resume');
            res.send('link');
            break;
        case 'Source' :
            console.log('Link to github');
            res.send('Link to github');
            break;
        case 'Status' :
            console.log('Sure thing');
            res.send('Sure thing');
            break;
        case 'Puzzle' :
            res.send(' ' +
                'ABCD\n' +
                'A=<>>\n' +
                'B>=>>\n' +
                'C<<=>\n' +
                'D<<<=');
            break;
        default:
            console.log('Unknow parameter');
            console.log(params.q);
            res.send('OKNOTOK');
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
