const express = require("express");
const router = new express.Router();
const axios = require("axios");
const store = require("../store");

const User = require('../models/User');


let recentlyPlayed = "https://api.spotify.com/v1/me/player/recently-played";

router.get("/getRecentTracks", async (req, res, next) => {
  try {
    let getUserRecentTracks = await axios.get(recentlyPlayed, {
      headers: { Authorization: "Bearer " + User.accessToken },
    });
    res.json(getUserRecentTracks.data.items);
  } catch (e) {
    return next(e)
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    res.json({ user: newUser })
  } catch (e) {
    return next(e)
  }
})

router.get('/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findAll({
      where: {
        id: userId
      }
    })
    res.json({user})
  } catch (e) {
    return next(e);
  }
})






module.exports = router;
