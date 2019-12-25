const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const axios = require('axios');
const qs = require('qs');
const { IMKitApi, IMKitSocket } = require('imkit-js-api-v3');

const PORT = process.env.PORT || 5000;
const APPSERVER = {
  domain: 'https://appserver.imkit.io',
  authorization: 'YXBwbGljYXRpb246c2VjcmV0'
};
const CHATSERVER = {
  domain: 'https://dev.fangho.com',
  clientKey: 'fangho_imkit_0412_2018_001_clientkey'
};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {});
});

app.post('/getToken', (req, res, next) => {
  axios({
    method: 'post',
    url: APPSERVER.domain + '/api/auth/login',
    data: qs.stringify(req.body),
    headers: {
      Authorization: 'Basic ' + APPSERVER.authorization,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(function(response) {
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(response.data.data, null, 2));
    })
    .catch(function(error) {
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(error, null, 2));
    });
});

app.post('/createRoom', (req, res, next) => {
  let api = getApi(req.body.token);
  api.room
    .createRoom({
      _id: req.body._id,
      name: req.body.name
    })
    .then(function(data) {
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(data, null, 2));
    });
});

app.post('/joinRoom', (req, res, next) => {
  let api = getApi(req.body.token);
  api.room.joinRoom(req.body._id).then(function(data) {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2));
  });
});

app.post('/addMember', (req, res, next) => {
  let api = getApi(req.body.token);
  api.room.addMember(req.body.roomid, req.body.memberid).then(function(data) {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 2));
  });
});

app.post('/deleteMember', (req, res, next) => {
  let api = getApi(req.body.token);
  api.room
    .deleteMember(req.body.roomid, req.body.memberid)
    .then(function(data) {
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(data, null, 2));
    });
});

app.post('/sendMessage', (req, res, next) => {
  let api = getApi(req.body.token);
  api.room
    .sendMessage(
      {
        _id: req.body.roomid
      },
      {
        messageType: 'text',
        message: req.body.message
      }
    )
    .then(function(data) {
      res.header('Content-Type', 'application/json');
      res.send(JSON.stringify(data, null, 2));
    });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

function getApi(token) {
  return new IMKitApi({
    domain: CHATSERVER.domain,
    clientKey: CHATSERVER.clientKey,
    token: token
  });
}
