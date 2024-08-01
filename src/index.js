function displayPoem(response){
    new Typewriter('#poem', {
     strings: response.data.answer,
     autoStart: true,
     delay:1,
     cursor:"",
   });

}


function generatePoem(event){
    event.preventDefault();

    let instrunctionInput = document.querySelector("#user-instructions")



    let apiKey ='0cb1t3949f347fc75ae8b7o36a1c0c57';
    let prompt =`User instructions: Generate an Italian poem about ${instrunctionInput.value} `;
    let context ="You are a very romantic and polite poem expert, please generate a 4 line poem in basic html and seperate each line with a <br /> and listen to the user's instructions.Do not include a title.";
    let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`


    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating an Italian poem about ${instrunctionInput.value}...`


    console.log("Generating poem")
    console.log(`Prompt: ${prompt}`);
    console.log(`Context:${context}`);

    axios.get(apiUrl).then(displayPoem)

};

let poemFormElement = document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit",generatePoem)