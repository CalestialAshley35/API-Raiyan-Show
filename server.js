const express = require("express");
const app = express();
const PORT = 3000;

// Mock data
const videos = require("./data/videos.json");
const playlists = require("./data/playlists.json");

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to The Raiyan Show API!");
});

// Get all videos
app.get("/api/videos", (req, res) => {
  res.json(videos);
});

// Get a single video by ID
app.get("/api/videos/:id", (req, res) => {
  const videoId = parseInt(req.params.id);
  const video = videos.find(v => v.id === videoId);
  if (!video) {
    return res.status(404).json({ message: "Video not found" });
  }
  res.json(video);
});

// Get all playlists
app.get("/api/playlists", (req, res) => {
  res.json(playlists);
});

// Get a single playlist by ID
app.get("/api/playlists/:id", (req, res) => {
  const playlistId = parseInt(req.params.id);
  const playlist = playlists.find(p => p.id === playlistId);
  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }
  const playlistVideos = playlist.videos.map(videoId => 
    videos.find(v => v.id === videoId)
  );
  res.json({ ...playlist, videos: playlistVideos });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
