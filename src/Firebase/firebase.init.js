import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*
steps for authentication
-----------------------------
initial Setup:
1. firebase: create project
2. create web app
3. get configuration
4. Initialize firebase
5. enable auth method

-----------------------------
step-2: setup component
1. create Login Component
2. create Register Component
3. create Route for Login and Register

-----------------------------
step-3: set auth system
1. set up sign in method
2. set up sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase

-----------------------------
step-4: create auth context hook (useAuth)
1. create a auth context
2. create Context Provider
3. set context Provider context value
4. use Auth Provider
5. create useAuth hook

-----------------------------
step-5: create private route
1. create private route
2. set private route

-----------------------------
step-6: Redirect after login
1. after login redirect user to their required destination.
*/