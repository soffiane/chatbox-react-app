//Rebase est une libraire react permettant de pluger l'app react a Firebase facilement
import Rebase from 're-base'
//il est conseiller a firebase d'importer la database ainsi
import firebase from 'firebase/app'
import 'firebase/database'

//on va initialiser firebase en recuperant les parametres depuis firebase dans le menu "Ajouter firebase a votre application web"
//ca genere ce fichier :
/*Ajouter Firebase à votre application Web
Enregistrer l'application
2
Ajouter le SDK Firebase

Copiez et collez ces scripts en bas de votre balise <body>, et ce, avant d'utiliser les services Firebase :
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDSNJuqLh3bTHBIPBlijQlidKqjFuhvgcQ",
    authDomain: "chatbox-react-app-bb77d.firebaseapp.com",
    databaseURL: "https://chatbox-react-app-bb77d.firebaseio.com",
    projectId: "chatbox-react-app-bb77d",
    storageBucket: "chatbox-react-app-bb77d.appspot.com",
    messagingSenderId: "554117750853",
    appId: "1:554117750853:web:7085077515925cfb03032c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
Nous avons besoin de apiKey, authDomain et databaseUrl*/

const firebaseApp = firebase.initializeApp({apiKey: "AIzaSyDSNJuqLh3bTHBIPBlijQlidKqjFuhvgcQ",
authDomain: "chatbox-react-app-bb77d.firebaseapp.com",
databaseURL: "https://chatbox-react-app-bb77d.firebaseio.com"})

//on link rebase a firebase
const base = Rebase.createClass(firebase.database())
export {firebaseApp}
export default base;