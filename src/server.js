import path from 'path'
import express from 'express'
import consolidate from 'consolidate'

import React from 'react';
import { renderToString } from 'react-dom/server'
import Application from './Application'

const app = express()

app.engine('html', consolidate.mustache);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));


import google from 'googleapis'
import crypto from 'crypto'

import auth from '../configs/auth.json'
import playlists from '../configs/playlists.json'

import apiToken from 'api-token'
/* set expiration time to 2 minutes */
apiToken.setExpirationTime(2);

const youtube = google.youtube({
  version: 'v3',
  auth: auth.YOUTUBE_API_KEY
});

const randomItemFromArray = items => {
  return items[Math.floor(Math.random()*items.length)];
}

const getSongs = (playlistId, callback) => {
  youtube.playlistItems.list({
    part: 'snippet',
    playlistId: playlistId,
    maxResults: 50
  }, (err, data, response) => {
    if (err) {
      console.error('Error 2: ' + err);
    }
    if (data) {
      console.log(JSON.stringify(data,null,2));
    }
    if (response) {
      console.log('Status code: ' + response.statusCode);
    }
    callback(err, data, response);
  });
};

const generateId = () => {
  return crypto.randomBytes(16).toString("hex");
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', function (req, res) {
  
  // if(!apiToken.isTokenValid(req.param('API-Token'))) {
  //   return res.sendStatus(401);
  // }

  try {
    var playlistId = randomItemFromArray(playlists);

    getSongs(playlistId, function(error, response) {

      var song = randomItemFromArray(response.items);
      var thumbnails = song.snippet.thumbnails || {default: {}};
      res.json({
        id: song.snippet.resourceId.videoId,
        img: thumbnails.default.url,
        title: song.snippet.title
      });
      res.end();

    });
  } catch(e) {
    res.json({
      error: error.toString()
    })
  }

});

app.get('*', (req, res) => {
  const markup = renderToString(
    <Application />
  )
  return res.render('index', { markup });
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
