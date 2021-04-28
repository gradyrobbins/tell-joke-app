
// export default Object.create(null, {

//    getJoke: {
//       value: ()=> {
//           return fetch("https://official-joke-api.appspot.com/random_joke",
//             {
//                 method: "GET",
//                 "crossDomain": true,
//                 headers: {
//                     "mode": "no-cors",
//                     "cache-control": "no-cache",
//                 }
//             })
//             .then(res => res.json())
//             .then((result) => {
//                return result;
//             },
//                // Note: it's important to handle errors here
//                // instead of a catch() block so that we don't swallow
//                // exceptions from actual bugs in components.
//             (error) => {
//                return error;
//             })
//          }
//       }
//    });




export const getJoke = () => {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())

  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.



}