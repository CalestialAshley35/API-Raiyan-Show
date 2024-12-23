# The Raiyan Show API

Welcome to **The Raiyan Show API**! This API provides access to a collection of YouTube tutorials and playlists from The Raiyan Show. You can fetch details of individual videos, retrieve all videos, and explore playlists of videos organized by topics like Termux and Flask.

Base URL: `https://api-raiyan-show.onrender.com/`

## Features

- **Videos**: Access all videos or retrieve individual video details by ID.
- **Playlists**: Access all playlists or retrieve a specific playlist, including the videos that belong to it.

## API Endpoints

### 1. Welcome Endpoint
```http
GET /

Returns a simple welcome message:

"Welcome to The Raiyan Show API!"

2. Videos Endpoints

GET /api/videos

Returns a list of all videos:

```index.js
[
  { "id": 1, "title": "How to host websites with GitHub Pages" },
  { "id": 2, "title": "Create social media platforms without coding" },
  ...
]

GET /api/videos/:id

Retrieves a specific video by its ID. Example:
```json
{
  "id": 1,
  "title": "How to host websites with GitHub Pages"
}

If the video is not found:

{
  "message": "Video not found"
}
```

3. Playlists Endpoints

GET /api/playlists

Returns a list of all playlists:

```json
[
  {
    "id": 1,
    "title": "Flask Tutorial",
    "description": "A series for learning Flask",
    "videos": [14, 17]
  },
  ...
]

GET /api/playlists/:id

Retrieves a specific playlist by its ID, including the list of videos in that playlist. Example:
```json
{
  "id": 1,
  "title": "Flask Tutorial",
  "description": "A series for learning Flask",
  "videos": [
    {
      "id": 14,
      "title": "Flask Tutorial #1: Routes"
    },
    {
      "id": 17,
      "title": "Flask Tutorial #2: Adding HTML to Flask App"
    }
  ]
}
```

If the playlist is not found:
```json
{
  "message": "Playlist not found"
}
```


## Example Use Case

To get all videos:

GET https://api-raiyan-show.onrender.com/api/videos

To get details of a specific video by ID (e.g., ID 1):

GET https://api-raiyan-show.onrender.com/api/videos/1

To get all playlists:

GET https://api-raiyan-show.onrender.com/api/playlists

To get a specific playlist by ID (e.g., ID 1):

GET https://api-raiyan-show.onrender.com/api/playlists/1


Fetching Data with Axios

You can use Axios to fetch data from the API.

Installation

To install Axios, run the following command:

npm install axios

Example Code to Fetch Data with Axios

1. Fetching All Videos

```index.js
const axios = require('axios');

axios.get('https://api-raiyan-show.onrender.com/api/videos')
  .then(response => {
    console.log('All Videos:', response.data);
  })
  .catch(error => {
    console.error('Error fetching videos:', error);
  });
```

2. Fetching a Single Video by ID

```index.js
const axios = require('axios');

const videoId = 1; // replace with the ID of the video you want to fetch

axios.get(`https://api-raiyan-show.onrender.com/api/videos/${videoId}`)
  .then(response => {
    console.log(`Video ${videoId}:`, response.data);
  })
  .catch(error => {
    console.error(`Error fetching video ${videoId}:`, error);
  });

3. Fetching All Playlists

const axios = require('axios');

axios.get('https://api-raiyan-show.onrender.com/api/playlists')
  .then(response => {
    console.log('All Playlists:', response.data);
  })
  .catch(error => {
    console.error('Error fetching playlists:', error);
  });
```

4. Fetching a Single Playlist by ID

```index.js
const axios = require('axios');

const playlistId = 1; // replace with the ID of the playlist you want to fetch

axios.get(`https://api-raiyan-show.onrender.com/api/playlists/${playlistId}`)
  .then(response => {
    console.log(`Playlist ${playlistId}:`, response.data);
  })
  .catch(error => {
    console.error(`Error fetching playlist ${playlistId}:`, error);
  });
```

Setup & Installation

To run the API locally, follow these steps:

1. Clone the repository

git clone https://github.com/CalestialAshley35/API-Raiyan-Show.git
cd API-Raiyan-Show.git

2. Install dependencies

npm install

3. Start the server

npm start

The server will be running on http://localhost:3000.

4. Development Mode

If you want to run the API in development mode (auto-reload on changes):

npm run dev

## License

This project is licensed under the MIT License - see the LICENSE file for details.
