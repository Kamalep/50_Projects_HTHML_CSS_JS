const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

// using async/await
async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json',
        },
    };

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke;

}

// using .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//         },
//     };

//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke;
//         })
//         .catch(error => console.error('Error fetching joke:', error));
// }
