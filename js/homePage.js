const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmQzNGM4MzQwYjgzN2ZhMzUzMjEwNjgxOTY4OTkwOCIsInN1YiI6IjY1MThhMGE4OTY3Y2M3MzQyNDY6ZGNmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqG_282JhO9ezXgkW1gupYoCe8EnUPT_tSpA5j9EIlc'
  }
};

const container = document.getElementById('moviesHomePageContainer')
const dayButton = document.getElementById("dayBtn")
const weekButton = document.getElementById("weekBtn")
const leftButton = document.getElementById("leftBtn")
const rightButton = document.getElementById("rightBtn")
let beforeLike = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/640px-Facebook_Thumb_icon.svg.png';
let afterLike = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/1200px-Facebook_Like_button.svg.png';

for (let i = 0; i < 20; i++) {
  container.innerHTML += `
    <div class="movieImg" id="movieImg${i}"> 
      <img src="" alt="">
    </div>
  `;
}

dayButton.addEventListener("click", () => {
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=8742d82704b948baa2f52a841774e03a&language=en-US`, options)
    .then(res => res.json())
    .then(res => {
      for (let i = 0; i < 20; i++) {
        const movieDiv = document.getElementById(`movieImg${i}`);
        movieDiv.innerHTML = `
          <img style: width:30vw;  height: 20vh; src="https://image.tmdb.org/t/p/w500/${res.results[i].poster_path}"/>
          <p>Title: ${res.results[i].title}</p>
          <p>Date: ${res.results[i].release_date}</p>
          <button id="likeBtn${i}"><img style="height: 3vh; width: 2vw;" src="${beforeLike}" alt=""></button>
        `;
        
        // Add event listener to the like button
        const likeButton = document.getElementById(`likeBtn${i}`);
        likeButton.addEventListener('click', () => {
          const imgElement = likeButton.querySelector('img');
          if (imgElement.src === beforeLike) {
            imgElement.src = afterLike;
          } else {
            imgElement.src = beforeLike;
          }
        });
      }
    })
    .catch(err => console.error(err));
})

weekButton.addEventListener("click", () => {
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=8742d82704b948baa2f52a841774e03a&language=en-US`, options)
    .then(res => res.json())
    .then(res => {
      for (let i = 0; i < 20; i++) {
        const movieDiv = document.getElementById(`movieImg${i}`);
        movieDiv.innerHTML = `
          <img style="width: 30%; height: 30%" src="https://image.tmdb.org/t/p/w500/${res.results[i].poster_path}"/>
          <p>Title: ${res.results[i].title}</p>
          <p>Year: ${res.results[i].release_date}</p>
          <button id="likeBtn${i}"><img style="height: 3vh; width: 2vw;" src="${beforeLike}" alt=""></button>
        `;
        
        // Add event listener to the like button
        const likeButton = document.getElementById(`likeBtn${i}`);
        likeButton.addEventListener('click', () => {
          const imgElement = likeButton.querySelector('img');
          if (imgElement.src === beforeLike) {
            imgElement.src = afterLike;
          } else {
            imgElement.src = beforeLike;
          }
        });
      }
    })
    .catch(err => console.error(err));
})
