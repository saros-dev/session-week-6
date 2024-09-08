let menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px" ;

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "500px"
}
else{
    menuList.style.maxHeight = "0px"
}
}




const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDgwZGVmNDI4N2NiNzliNzU3NWEyYTJmMzE0ODgxNyIsIm5iZiI6MTcyNTc4NjkyNi4zOTQ1NDEsInN1YiI6IjY2ZGQ2OWJlNDAxZjdmM2NlOWY1ZjkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nrGhW62Dh9HTAwK37DeZIks2bJ9JxkXvBYjiS4aOyfE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    document.getElementById("action").innerHTML = options


    console.log(options)