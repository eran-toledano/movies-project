
function populateMovieImages(data) {
  for (let i = 0; i < 20; i++) {
    document.getElementById(`movieImg${i}`).innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">`;
  }
}

// Add an event listener to the search button
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  const search = document.getElementById('inputId').value;
  searchMovie(search);
});


function searchMovie(search) {
  const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzQyZDgyNzA0Yjk0OGJhYTJmNTJhODQxNzc0ZTAzYSIsInN1YiI6IjY1MTU4ZDEwZWE4NGM3MDBlYjk4MmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aK0FvH8FQIsCm0zotTPNQ9oQnghE4IEdlhPt6j3v09w'
}
  };

  fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      populateMovieImages(response);
    })
    .catch(err => console.error(err));
}





// Define a function to populate the movie images
function populateMovieImages(data) {
  const container = document.getElementById('container');

  // Clear any existing content in the container

  for (let i = 0; i < 20; i++) {
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `
      <div class="movieImg" id="movieImg${i}">
        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="">
      </div>
      <p>Title: ${data.results[i].title}</p>
      <p>Year: ${data.results[i].release_date}</p>
    `;
    
    container.appendChild(movieDiv);
  }
}
