const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	response.send('Hello from Firebase!');
// });

exports.getArticles = functions.region('europe-west1').https.onRequest((req, res) => {
	return admin
		.firestore()
		.collection('articles')
		.get()
		.then((data) => {
			let articles = [];
			data.forEach((doc) => {
				articles.push(doc.data());
			});

			return res.json(articles);
		})
		.catch((err) => console.log(err));
});

exports.getStories = functions.region('europe-west1').https.onRequest((req, res) => {
	return admin
		.firestore()
		.collection('userStories')
		.get()
		.then((data) => {
			let stories = [];
			data.forEach((doc) => {
				stories.push(doc.data());
			});

			return res.json(stories);
		})
		.catch((err) => console.log(err));
});

exports.getFacts = functions.region('europe-west1').https.onRequest((req, res) => {
	return admin
		.firestore()
		.collection('articles')
		.get()
		.then((data) => {
			let facts = [];
			data.forEach((doc) => {
				facts.push(doc.data());
			});

			return res.json(facts);
		})
		.catch((err) => console.log(err));
});

exports.getResources = functions.region('europe-west1').https.onRequest((req, res) => {
	return admin
		.firestore()
		.collection('articles')
		.get()
		.then((data) => {
			let resources = [];
			data.forEach((doc) => {
				resources.push(doc.data());
			});

			return res.json(resources);
		})
		.catch((err) => console.log(err));
});





