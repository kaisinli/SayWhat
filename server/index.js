const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser');

// Imports the Google Cloud client library
const Language = require('@google-cloud/language');
// Your Google Cloud Platform project ID
const projectId = 'summer-flux-170815';
// Instantiates a client
const language = Language({
    projectId: projectId
});


//serves up static files
//app.use('/files', express.static(path.join(__dirname, 'public/static')));

//body-parsing
app.use('/', bodyParser.json());
app.use('/', bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.post('/api/text', (req, res, next) => {
    // The text to analyze
    console.log('REQ.BODY ==========', req.body)
    const text = req.body;
    // Detects the sentiment of the text
    language.detectSentiment(text)
        .then((results) => {
            const sentiment = results[0];
            console.log(`Text: ${text}`);
            console.log(`Sentiment score: ${sentiment.score}`);
            console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
})
app.listen(3000, () => console.log('Listening on port 3000'))

module.exports = app;