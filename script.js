let buttontranslate = document.querySelector("#btn-translate");
let textinput = document.querySelector("#text-input");

let outputDiv = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

let getTranslationURL = function (text) {
  return serverURL + "?" + "text=" + text;
};

let errorHandler = function (error) {
  // console.log("error occured", error);
  alert("Something wrong with server,try again  after some time.");
};

let clickHandler = function () {
  let inputText = textinput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

buttontranslate.addEventListener("click", clickHandler);
