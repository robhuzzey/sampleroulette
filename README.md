# Sample Roulette

> A way to fetch random songs from youtube from a predefined list of playlist id's

Table of Contents
-----------------

- [Background](#background)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Developing](#developing)
- [Building](#building)


Background
-----------

I got fed up of always going to my bookmarks & randomly clicking videos to find one's I liked. This automates that.

Prerequisites
-------------

- [Node.js 6.10.0+](http://nodejs.org)

Getting Started
---------------

You will need to create a directory `configs/` that contains:

#### auth.json

see (https://developers.google.com/youtube/registering_an_application)[https://developers.google.com/youtube/registering_an_application] for details on registering an application.

```json
{
  "YOUTUBE_API_KEY": "xxx"
}
````

#### playlists.json

List of the playlists you would like to include in the random searching of songs.

```json
[
  "playlistid",
  "playlistid",
  "playlistid",
  "playlistid"
  ...
]
```


```bash
# Install NPM dependencies
npm install

# Then simply start your app
npm start
```

Developing
----------

#### Client ([http://localhost:8080](http://localhost:8080))

```bash
npm run start
```

This will run a webpack server with a watch task & rebuild on any changes

#### Server ([http://localhost:3000](http://localhost:3000))

```bash
npm run server
```

This will run the build of the client side application then run a node server.

Building
--------
```bash
npm run build
````

Will create a bundle in `src/static/js/bundle/` suitable for deployment.

---

Pull requests accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
