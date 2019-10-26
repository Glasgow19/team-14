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
