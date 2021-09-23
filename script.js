// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5OBRQcGO9cGOVuypLI4ddF_pqfbCEB2M",
  authDomain: "charitydatabase-e11fc.firebaseapp.com",
  databaseURL: "https://charitydatabase-e11fc-default-rtdb.firebaseio.com",
  projectId: "charitydatabase-e11fc",
  storageBucket: "charitydatabase-e11fc.appspot.com",
  messagingSenderId: "356625006391",
  appId: "1:356625006391:web:3c259b97571496f25364b2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var UserInputsRef=firebase.database().ref('UserInputs');
  document.getElementById('button1').addEventListener('submit',submitForm);
  /* function store input values in variables */
  function submitForm(e){
    e.preventDefault();
    var charity =getInputVal('charityText');
    /* function call to store data values in firebase
    after email id validation  */
    saveMessages(charity);
}

/* function to accept state value as parameter, read database
 to return and display center details on web page */
 function readState(state){
  var centers;
  var ref = firebase.database().ref(state);
  ref.on('value', (data) => {
   centers = data.val();
   console.log(centers);
   document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
  })
}
/* function to return input values as per the id passed as parameter */
function getInputVal(id){
    return document.getElementById(id).value;
}
/* function to write collected details in firebase,
create new record and add values in respective fields */
function saveMessages(charityName){
  var newuserInputsRef = UserInputsRef.push();
  newuserInputsRef.set({
      charityName:charityName
  })
  alert("Thank you, find the list of centers nearby!  ");
}

