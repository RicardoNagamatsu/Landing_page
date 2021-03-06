const form = document.getElementById('form');

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('form');

    let loading = `<img id="loading" src="../assets/loading.gif" alt="Loading">`;
    let done =  `<p id="success">Email cadastrado!</p>`

    content.innerHTML = loading;

    setTimeout(() =>{
        content.innerHTML = done;
    },1000)
})