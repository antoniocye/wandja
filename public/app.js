import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getDatabase, child, get } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import {ref, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getStorage,  uploadBytes } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
import { ref as sRef, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";


/*All the firebase stuff is here*/

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
const database = getDatabase();


var storage = getStorage();

var type = 'problems';
	
	 
	 //Get cookies from cards.html page
	 function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
	 var levelTemp;
	 var testTemp;
	 var typeTemp;
	 var levelLessonTemp;
	 
      levelTemp = getCookie('level:');
	  
	  testTemp = getCookie('test:');
	   
	  typeTemp = getCookie('type:');
	  
	  levelLessonTemp = getCookie('levelLesson:');
	  	  
	  var level = 'debut';
	 var test = 'imo';
	 var isFirstRow = true;
	 
	 var levelLesson = 'debut';
	 
	 if(levelTemp == "" && levelLessonTemp != ""){levelLesson = levelLessonTemp; level = levelTemp;}
	  if(levelTemp!=""){level=levelTemp;}
	  if(testTemp!=""){test=testTemp;}
	  if(typeTemp!=""){type=typeTemp;}
	  if(levelLessonTemp!=""){levelLesson=levelLessonTemp;}
	  
	
function addChooseRowElement(testGiven, titleGiven, descGiven, yearGiven, fileName) {
/*Add new row data in id = Content-Left list*/

  var chooseRow = document.createElement("DIV");
  chooseRow.setAttribute('id','choose-row');
  
  var titleRessource = document.createElement("P");
  titleRessource.innerHTML=yearGiven+" "+titleGiven;
  titleRessource.setAttribute('id','row-top');
  var questionsRessource = document.createElement("P");
  questionsRessource.innerHTML="Questions";
  questionsRessource.setAttribute('id','row-questions');
  
  
  chooseRow.appendChild(titleRessource);
  chooseRow.appendChild(questionsRessource);
  document.getElementById("choose-box").appendChild(chooseRow);
  
  
  
  
  chooseRow.onclick = function() {
  	   var downloadURL;
       test = test.toUpperCase();
	   
	   document.getElementById("testDisplayed").innerHTML="<b>" +test +"</b>";
       document.getElementById("titleDisplayed").innerHTML="<b>Titre:</b> " +titleGiven;
       document.getElementById("descDisplayed").innerHTML= "<b>Description:</b> " +descGiven;
       document.getElementById("yearDisplayed").innerHTML= "<b>Année:</b> " + yearGiven;
	   //handling the fucking PDF thing
	   
	   //get downloadURL to update the iFrame
					  
        getDownloadURL(sRef(storage, fileName)).then((url) => {
		        downloadURL = url;
          		var encodedUrl = encodeURIComponent(downloadURL);
          	   document.getElementById("pdf").src= "https://drive.google.com/viewerng/viewer?embedded=true&url="+encodedUrl;	
          	   
  				
  		});
				if((Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)<=900) && (isFirstRow == false)){
          				  toggleContentLeft()	
          	   }			
		
	   
  };	
  if(isFirstRow){
       chooseRow.click();
	   isFirstRow = false;
  }
}


function readRessourceList(type, level, test){
		 var childKey;
		 var childData;
		 var grandChildKey;
		 var grandChildDescription;
		 var grandChildStorageName;
		 var downloadURL;
		 var counter = 0;
		 const grandChildKeys = [];
  		 const descs = [];
  		 const childKeys = [];
  		 const fileNames = [];
					  
		 const dbRef = ref(getDatabase());
		 get(child(dbRef, type+'/'+level+'/'+test)).then((snapshot) => {
		 
            if (snapshot.exists()) {
			
			
			   snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
				
				
    				childSnapshot.forEach(function(grandChildSnapshot) {
		              
                      grandChildKey = grandChildSnapshot.key;
					  grandChildKeys[counter] = grandChildKey;
					  
                      grandChildDescription = grandChildSnapshot.val().desc;
					  descs[counter] = grandChildDescription;
					  
					  childKeys[counter] = childKey;
					  
					  grandChildStorageName = grandChildSnapshot.val().storageName;
					  
					  fileNames[counter] = grandChildStorageName;
					  
					  
					  
      				   counter++;
                  });
              });
			  
			  for(var i = 0; i<counter; i++){
			  		  addChooseRowElement(test, grandChildKeys[i], descs[i], childKeys[i], fileNames[i]);
			  }
			  
			  
              
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
}         						     
					
			
	function readLessonList(type, level, test){
		 var childKey;
		 var childData;
		 var grandChildKey;
		 var grandChildDescription;
		 var grandChildStorageName;
		 var downloadURL;
		 var counter = 0;
		 const grandChildKeys = [];
  		 const descs = [];
  		 const childKeys = [];
  		 const fileNames = [];
					  
		 const dbRef = ref(getDatabase());
		 get(child(dbRef, 'lessons'+'/'+levelLesson)).then((snapshot) => {
		 
            if (snapshot.exists()) {
			
			
			   snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
				
				
    				childSnapshot.forEach(function(grandChildSnapshot) {
		              
                      grandChildKey = grandChildSnapshot.key;
					  grandChildKeys[counter] = grandChildKey;
					  
                      grandChildDescription = grandChildSnapshot.val().desc;
					  descs[counter] = grandChildDescription;
					  
					  childKeys[counter] = childKey;
					  
					  grandChildStorageName = grandChildSnapshot.val().storageName;
					  
					  fileNames[counter] = grandChildStorageName;
					  
					  
					  
      				   counter++;
                  });
              });
			  
			  for(var i = 0; i<counter; i++){
			  		  addChooseRowElement(test, grandChildKeys[i], descs[i], childKeys[i], fileNames[i]);
			  }
			  
			  
              
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
}     
		
			if(levelTemp == "" && levelLessonTemp != ""){
				readLessonList(type, level, test);
			}
			else{
				 readRessourceList(type, level, test);
			}
function writeToFirebase(typeToSet, levelToSet, testToSet, yearToSet, titleToSet, descToSet) {
		
    const db = getDatabase();
	
 
  
	
  	var fileButton = document.getElementById('myFile');
    var file = fileButton.files[0];
    var storageRef = sRef(storage,'images/'+file.name);
	 var pathToBeStored = typeToSet+"/"+levelToSet+"/"+testToSet+"/"+yearToSet+"/"+titleToSet;
	uploadBytes(storageRef, file).then((snapshot) => {
	
    	set(ref(db, pathToBeStored), {
      		desc: descToSet,
			storageName: 'images/'+file.name
        });
        console.log('Uploaded a blob or file!');
    	
    	window.alert('Informations envoyées');
        var title = document.getElementById('titleSelect').value = "";
        var desc = document.getElementById('descSelect').value = "";
    	
    	document.getElementById("typeSelect").selectedIndex = 0;
    	document.getElementById("levelSelect").selectedIndex = 0;
    	document.getElementById("testSelect").selectedIndex = 0;
    	document.getElementById("yearSelect").selectedIndex = 0;
    	
    	fileButton.value = fileButton.defaultValue;

  });
}

function writeData(){

var type = document.getElementById('typeSelect').value;
            var level = document.getElementById('levelSelect').value;
            var test = document.getElementById('testSelect').value;
            var year = document.getElementById('yearSelect').value;
            var title = document.getElementById('titleSelect').value;
            var desc = document.getElementById('descSelect').value;
            if(type!==null && level!==null && test!==null && year!==null && title!==null && desc!==null){
            	    writeToFirebase(type, level, test, year, title, desc);
            }
			
var oktaSignIn = new OktaSignIn({
        baseUrl: "https://dev-64467906.okta.com",
        clientId: "0oa3iz0mwpf29d7cJ5d7",
        authParams: {
          issuer: "default",
          responseType: ['token', 'id_token'],
          display: 'page'
        }
      });

      if (oktaSignIn.token.hasTokensInUrl()) {
          // If we get here, the user needs to log in.
          window.alert("Connectez-vous à un compte d'abord");
      } else {
        oktaSignIn.session.get(function (res) {
          // If we get here, the user is already signed in.
          if (res.status === 'ACTIVE') {
            
            return;
          }
          
        });
      }
	  
  
}

var el = document.getElementById('send');
if(el){
  el.addEventListener('click', writeData, false);
}
