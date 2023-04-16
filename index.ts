// interface DictionaryData {
//       word: string
//       phonetic: string
//       phonetics: [
//         {
//           text: string
//           audio: string
//         },
//         {
//           text: string
//         }
//       ]
//       origin: string
//       meanings: [
//         {
//           partOfSpeech: string
//           definitions: [
//             {
//               definition: string
//               example: string
//               synonyms: [string]
//               antonyms: [string]
//             }
//           ]
       
//         }
//       ]
//     }

const form: HTMLFormElement = document.querySelector('#defineform')!;
const list: HTMLUListElement = document.querySelector('.list-unstyled')!;
const header: HTMLHeadingElement = document.querySelector('h1')!;

form.onsubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(form); 
  const text = formData.get('defineword') as string; // get the word user input

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
    const data = await response.json();

    header.innerText = `${text} 🐱 💕`;

    list.innerHTML = '';
    data[0].meanings.forEach((meaning: any) => {
      const li = document.createElement('li');
      li.innerText = `${meaning.partOfSpeech} : ${meaning.definitions[0].definition} meowwwwww`;
      list.appendChild(li);
    });

    data[0].phonetics.forEach((phonetics: any) => {
      const li = document.createElement('li');
      li.innerText = `${phonetics.text} barkbark`;
      list.appendChild(li);
    });

    data[0].meanings.forEach((meaning: any) => {
      const li = document.createElement('li');
      li.innerText = `Examples: ${meaning.definitions[0].example}`;
      list.appendChild(li);
    });

  } catch (error) {
    console.log(error);
  }
};
