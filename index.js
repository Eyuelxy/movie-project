let collector = document.getElementById('collector');
function displayData(data) {
  for (let i = 0; i < data.results.length; i++) {
    let card = document.createElement('div');
    card.style.width="14rem"
    card.style.height="30rem"
    card.classList.add('card');
    let image = document.createElement('img');
    let text = document.createElement('h3');
    text.innerHTML = data.results[i].title;
    image.src =
      'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path;
    card.appendChild(image);
    card.appendChild(text);
    collector.appendChild(card);
  }
}
window.addEventListener('load', () => {
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZjYzU0ZThhMDI2NGQ3MWU3ZTM2YzBlY2MzMTAwMSIsInN1YiI6IjY0OWZjODcxNGE1MmY4MDE0NWRkZGU2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PvuMQPKw2FJeczXvOHv33EKbpD-OMKl0e8B9_eANttY'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)

    .then(response => response.json())
    .then(data => {
      displayData(data);
    })

    .catch(err => console.error(err));

  document.getElementById('search-btn').addEventListener('click', () => {
    collector.innerHTML = '';
    let url =
      'https://api.themoviedb.org/3/search/movie?api_key=27fcc54e8a0264d71e7e36c0ecc31001&query=' +
      document.getElementById('input-box').value;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayData(data);
      });
  });

});
