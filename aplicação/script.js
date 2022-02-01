function handler(e) {
    e.preventDefault()

    let movie = document.querySelector('.form__input').value

    if(movie){
        const url = `http://www.omdbapi.com/?s=${movie}&apikey=382b9667`
        const options = {
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            cache: 'default'
        }

        fetch(url, options)
        .then(function(response) {
            if(!response.ok) throw new Error('Erro ao execultar requisilçao');

            return response.json();
        })
        .then(function(data) {
            
            let newContent = ''
            for(let i = 1; i < data.Search.length; i++){
                newContent += `<li class="app-movies-all__card">`
                newContent += `<figure class="app-movies-all__figure">`
                newContent += `<img class="app-movies-all__thumb" src="${data.Search[i].Poster}"/>`
                newContent += `<figure>`
                newContent += `<legend class="app-movies-all__legend">`
                newContent += `<span class="app-movies-all__year">${data.Search[i].Year}</span>`
                newContent += `<h2 class="app-movies-all__title">${data.Search[i].Title}</h2>`
                newContent += `</legend>`
                newContent += '</li>'
            }

            document.getElementById('movies').innerHTML = newContent

        })
    }
    else{
        alert('Digite o nome de um filme!')
    }
}







window.onload = () => {

    const submit = document.querySelector('.form__submit')
    submit.addEventListener('click', handler)
}