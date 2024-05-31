const button = document.querySelector('.button');
const imageMy = document.querySelector('.img');
const adressUrl = 'https://cataas.com/cat';

function fetchHandler() {
  return fetch(adressUrl)
    .then(response => {
        response.json();
        imageMy.src = response.url;
    })
    .catch(error => console.error('Error:', error));
}

button.addEventListener('click', fetchHandler);
// () => {fetchHandler()}
// --------------------------------------------------------------------//
// const button = document.querySelector('.button');
// const imageMy = document.querySelector('.img');
// const adressUrl = 'https://randomfox.ca/floof/';

// function httpReqest() {
//   return fetch(adressUrl)
  
//   .then(response => response.json())
//   .then(json => {
//     console.log(json)
//     imageMy.src = json.image
//   })
// }


// button.addEventListener('click', () => {httpReqest()})
// =====================================================================//
// const button = document.querySelector('.button');
// const imageMy = document.querySelector('.img');
// const adressUrl = 'https://randomfox.ca/floof/';

// async function httpReqest() {
//   try {
//     const response = await fetch(adressUrl);
//     if (response.ok) {
//       console.log(response);
//       const data = await response.json();
//       console.log(data);
//       imageMy.src = data.image;
//     } else {
//       console.log("Error Http: " + response.status);
//     }
//   } catch (error) {
//     console.log("Ошибка при выполнении функции: " + error);
//   }
// }
// button.addEventListener('click', httpReqest)
