function handleSubmit(event) {
  // excecuted when button is clicked. Onclick method used here
    event.preventDefault()

    Client.selector()

    let formText = document.getElementById('name').value;

    console.log("::: Form Submitted :::")


let serverdata='http://localhost:8081/data';

var i = Client.string(formText);

if (i){


console.log("true");
console.log("valid URL");

const getkey = async(serverdata)=> {

const key = await fetch(serverdata)
//fecth API-KEY data from server and display it
//later use it and add it to FormData
try{
    const data=await key.json();
    let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
    let apiKey = data.data;
    Client.getAnalysis(baseURL, apiKey, formText)

     }

     catch (error) {
     console.log("error", error);
     // appropriately handle the error
   }}

getkey(serverdata);
}

else {

message.innerHTML="URL_validation: invalid URL!";
 console.log("false")
  console.log("not a URL!")
}

}


export { handleSubmit }
