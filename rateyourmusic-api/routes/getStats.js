const express = require('express');
const router = express.Router();
const models = require('./../models/')


router.get('/', function(req, res, next) {
	const cantReleases = models.Release.count()
	.then(res => { 
		return res
	});
	const cantArtists = models.Artist.count()
	.then(res => {
		return res
	});
	const cantLabels = models.Label.count()
	.then(res => {
		return res
	});
	const cantRatings = models.Rate.count()
	.then(res => {
		return res
	});
	const getData = async () => {
		const cantR = await cantReleases;
		const cantA = await cantArtists;
		const cantL = await cantLabels;
		const cantRa = await cantRatings;
		res.json({
			"cantReleases": cantR,
			"cantArtists": cantA,
			"cantLabels": cantL,
			"cantRatings": cantR
		})
	};

	getData();

});

module.exports = router;