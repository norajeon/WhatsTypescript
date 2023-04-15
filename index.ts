// Import stylesheets
import './style.css';


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
  





const form: HTMLFormElement|null = document.querySelector('#defineform');
//handle null value better later

if (form != null){
form.onsubmit = () => {
  const formData = new FormData(form);



  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  // console.log(fetch("http://api.dictionaryapi.dev/api/v2/entries/en/" + text))

  fetch("http://api.dictionaryapi.dev/api/v2/entries/en/" + text)
      .then((response) => response.json())
      .then((response) => {
        return response as DictionaryData;
      });
  return false; // prevent reload
}
};
