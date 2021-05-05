const USERS_API_URL = 'https://api.github.com/users/';

document.getElementById('get-user').addEventListener('click', (event) => {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let user_url = USERS_API_URL + username;

    fetch(user_url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
})