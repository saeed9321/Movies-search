// api key : http://www.omdbapi.com/?i=tt3896198&apikey=7fe57038

btn = document.querySelector("#btn"); // search button
search = document.querySelector("#search"); // search text field
section = document.querySelector(".section-results"); // parent div that contain the results
type = document.querySelector("#type"); // refine results as per type 


// basic search function
function searchMovies(name, type){
    api = "http://www.omdbapi.com/?s="+name+"*&type="+type+"&apikey=7fe57038";
    fetch(api).then(response =>{
        return response.json();
        }).then(data =>{
            results = data.Search;
            // if no results
            if (results == undefined) {
                text = document.createElement("h1");
                text.color = "white";
                text.innerHTML = "No results found, please try again" // if not results found
                section.appendChild(text);
                section.style.display = "inline-block";
                } else {
            // if search
            for (i=0; i<results.length; i++){
                img = document.createElement("img"); // create img tag
                img.src = results[i].Poster;
                year = document.createElement("p"); // create p tag for year
                year.innerHTML = results[i].Year;
                year.id = "year";
                title = document.createElement("p"); // create p tag for title
                title.innerHTML = results[i].Title;
                title.id = "title";
                mov = document.createElement("div"); // creaete div tage to contain the above created tags
                mov.id = "result-item";
                mov.appendChild(img);
                mov.appendChild(year);
                mov.appendChild(title);
                section.appendChild(mov); // append the parent din in section container
                section.style.display = "grid";}}
})}

// Search simulation when button pressed
btn.addEventListener('click', ()=>{
    searchMovies(search.value, type.value);
    console.log(type.value);
    while (section.lastElementChild) { // delete all past search results
        section.removeChild(section.lastElementChild);
      }    
})




