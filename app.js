/**
 * This program belongs to Vincent Chollet.
 * It is considered a trade secret, and is not to be divulged or used
 * by parties who have not received written authorization from the owner.
 * For more details please contact us on vinz.chollet@gmail.com
 *
 * @author         Vincent Chollet
 * @company        -
 * @version        1.0
 * @date           22/4/2017
 */

"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Route to the website
app.use('/', express.static(__dirname + '/public'));

// Route to the mailController
app.post('/follow', (req, res) => {
        if( req.body.mail ) {
            res.send("success");
        } 

        else {
            res.send("error");
        }
    });

app.listen(process.env.port || 3000);