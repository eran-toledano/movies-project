const container = document.getElementById('moviesHomePageContainer')

for(let i=0 ; i<20 ; i++){
container.innerHTML+= `
<div>
<div class="movieImg" id="movieImg${i}"> 
<img src="" alt="">
</div>
<p>title:</p>
<p>year:</p>
</div>
`
}


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzQyZDgyNzA0Yjk0OGJhYTJmNTJhODQxNzc0ZTAzYSIsInN1YiI6IjY1MTU4ZDEwZWE4NGM3MDBlYjk4MmU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aK0FvH8FQIsCm0zotTPNQ9oQnghE4IEdlhPt6j3v09w'
    }
  };
  
  fetch('https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
       for (let i = 0; i < 20; i++) {
        document.getElementsByClassName('movieImg')[i].innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${response.results[i].poster_path}" alt="">`
       }

    })
    .catch(err => console.error(err));


function getMovie() {
   fetch('https://api.themoviedb.org/3/search/movie?api_key=8742d82704b948baa2f52a841774e03a&query=spiderman&include_adult=false&language=en-US&page=1')
   .then(res=>resizeBy.json())
   .then(data=>{
    document.getElementsByClassName('movieImg').innerHTML=`<img src="${results.backdrop_path}" alt="">
    `
   }) 
}






