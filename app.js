
(function(){

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWD3BJ0KbzbaJVjhVEERQlxfEK98yOW0A",
  authDomain: "crm-60e47.firebaseapp.com",
  databaseURL: "https://crm-60e47-default-rtdb.firebaseio.com",
  projectId: "crm-60e47",
  storageBucket: "crm-60e47.appspot.com",
  messagingSenderId: "747952980210",
  appId: "1:747952980210:web:99b4b8066f99040c35906b",
}

const txtEmail=document.getElementById('txtEmail');
const txtPassword=document.getElementById('txtPassword');
const btnLogin=document.getElementById('btnLogin');
const btnSignup=document.getElementById('btnSignup');
const btnLogout=document.getElementById('btnLogout');

btnLogin.addEventListener('click',e => {
	const email= txtEmail.value;
	const pass= txtPassword.value;
	const auth=firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
});
());

