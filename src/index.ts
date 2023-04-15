// Import stylesheets
// import './style.css';

interface DictionaryData {
      word: string
      phonetic: string
      phonetics: [
        {
          text: string
          audio: string
        },
        {
          text: string
        }
      ]
      origin: string
      meanings: [
        {
          partOfSpeech: string
          definitions: [
            {
              definition: string
              example: string
              synonyms: [string]
              antonyms: [string]
            }
          ]
       
        }
      ]
    }
  


const form: HTMLFormElement|null = document.querySelector('#defineform')!;
//handle null value better later

form.onsubmit = () => {
  const formData = new FormData(form);


  const defLists = document.querySelector(".list-unstyled");
  const p = document.createElement("li");
  p.textContent = "Hello, World!";
  defLists === null || defLists === void 0 ? void 0 : defLists.appendChild(p);


  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  // console.log(fetch("http://api.dictionaryapi.dev/api/v2/entries/en/" + text))

  // fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + text)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       return response as DictionaryData;
  //     });

  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+text)
  // cast response to be in json format???
  .then((Response) => Response.json())
  // get the data from API call and adding definitions to the web page
  .then((DataTransfer) => {
    console.log(DataTransfer)
  });

  return false; // prevent reload
};
