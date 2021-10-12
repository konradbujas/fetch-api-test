fetch('https://api.github.com/users/konradbujas/repos?sort=created&direction=asc')
.then (resp => resp.json())
.then (resp => {
    for (let repo of resp){
        const {name, html_url} = repo;
        const repositoryList = document.querySelector('.list--js');
        const myTemplate = `<li>
        ${name} <a href="${html_url}" title="link do repozytorium gituba ${name}">link do GitHuba</a>"
        </li>`;
        repositoryList.innerHTML += myTemplate;
    }
})
.catch (error => {
    console.log('Nie udało się pobrać zawartości');
})