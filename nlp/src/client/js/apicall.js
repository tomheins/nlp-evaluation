async function getAnalysis(baseURL, apiKey, formText) {

const res = await fetch(baseURL + "key= "+ apiKey + "&txt=" + formText + "&lang=en")

try {

body: JSON.stringify(res)
const data = await res.json();
message.innerHTML="URL_validation: valid URL!";
agreement.innerHTML = "agreement: " + data.agreement;
subjectivity.innerHTML = "subjectivty: " + data.subjectivity;
scoretag.innerHTML = "score_tag: " + data.score_tag;
confidence.innerHTML = "confidence: " + data.confidence + "%";
irony.innerHTML = "irony: " + data.irony;
return data.confidence;


} catch (error) {
console.log("error", error);
// appropriately handle the error
}
}

export{getAnalysis}
