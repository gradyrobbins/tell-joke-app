function CheckError(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

export const getJoke = () => {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then(CheckError)
    .then(response => response)

}

