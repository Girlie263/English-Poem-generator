function generatePoem(event){
    event.preventDefault()

    new Typewriter('#poem', {
     strings: ' a language can be influenced by multiple approaches.',
     autoStart: true,
     delay:1,
     cursor:"",
   });
};

let poemFormElement = document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit",generatePoem)