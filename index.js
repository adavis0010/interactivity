// console.log('hello world')


document.querySelector('form'), addEventListener('submit', addMovie)
const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault();
    const inputField = document.querySelector('input');

    const movie = document.createElement('li');

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click',deleteMovie)
    movie.appendChild(deleteBtn);
    
    document.querySelector('ul').appendChild(movie)

    inputField.value = ''
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
    // revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle('checked')

    if(event.target.classList.contains('checked') === true){
       message.textContent = 'Movie watched'
    }else {
        message.textContent = 'Movie added back'
    }
    // revealMessage()
}

// function revealMessage(){
//     timeOut = setTimeout(crossOffMovie(), 1000)
// }
