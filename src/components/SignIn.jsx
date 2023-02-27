import React, { useState } from "react";
import { auth } from './../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

function SignIn(){  

  const [signUpSuccess, setSignUpSuccess] = useState(null); 
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}`);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
  };

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }


  return (
    <React.Fragment>
    <div className="sign">

      <div className="sign-up rounded">
      <h1 className="text-2xl">Sign up</h1><br/>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='Email Address' /><br/><br/>
        <input
          type='password'
          name='password'
          placeholder='Password' /><br/><br/>
        <button className="hover:bg-green-400 p-1 rounded" type='submit'>Sign up</button>
      </form>
    </div><br/><br/>

    
    <div className="sign-in rounded">
      <h1 className="text-2xl">Sign In</h1><br/>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='Email Address' /><br/><br/>
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' /><br/><br/>
        <button className="hover:bg-green-400 p-1 rounded" type='submit'>Sign in</button>
      </form>
      </div>
      </div>

    <div className="sign-out">
      {signOutSuccess}
      <br />
      <button className="bg-yellow-500 rounded p-1 hover:bg-green-400" onClick={doSignOut}>Sign out</button>
    </div>
    
    </React.Fragment>
  );
};

export default SignIn;