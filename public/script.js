const db = firebase.firestore();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    db.collection("users").doc(user.uid).set({
      email: user.email,
      joined: new Date()
    });
  }
});