<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
          <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-database.js"></script>

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnwu2DQRAk85jCVLKg0l47z3zNJRKf3iw",
  authDomain: "wandja-9370e.firebaseapp.com",
  databaseURL: "https://wandja-9370e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wandja-9370e",
  storageBucket: "wandja-9370e.appspot.com",
  messagingSenderId: "506546880738",
  appId: "1:506546880738:web:afbb4a620bccfd26b2debb",
  measurementId: "G-LNZF1J4HFF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase } from "firebase/database";

	  const database = getDatabase().ref("ressources/");
      database.set ({
         John: {
            number: 1,
            age: 30
         },
      	
         Amanda: {
            number: 2,
            age: 20
         }
      });
	  
	  