document.addEventListener('DOMContentLoaded', function() {
    let username = prompt('Digite seu nome de usuário do GitHub');

    let avatar = document.getElementById('avatar');
    let name = document.getElementById('name');
    let repositories = document.getElementById('repositories');
    let followers = document.getElementById('followers');
    let following = document.getElementById('following');
    let githubLink = document.getElementById('github-link');

    fetch(`https://api.github.com/users/${username}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        name.innerHTML = json.name
        username.innerHTML = json.login;
        repositories.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;
        githubLink.href = json.html_url;
    })
})