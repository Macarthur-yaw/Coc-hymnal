const hymnBodies = document.querySelectorAll(".hymnbody");
const getHymns=document.getElementById("hymns");
hymnBodies.forEach((hymnBody) => {
  hymnBody.addEventListener("click", function (event) {
    const hymnId = event.currentTarget.dataset.id;

    fetch(`connection.php?id=${hymnId}`)
      .then((response) => response.json())
      .then((data) => {
        
        // data.title;
        let hymnHtml= " ";
    data.forEach(function(hymn){
        hymnHtml += `<h3 class="title">${hymn.title}</h3>`;
        hymnHtml+=`<p class="content">${hymn.content}</p>`;


    })
    getHymns.innerHTML=hymnHtml;
    getHymns.style.display="block";


        
       
      })
      .catch((error) => console.log(error));
  });
});
const buttons = document.getElementById("buttons"); //name of the button
const getInput=document.getElementById("search");//get the user input

buttons.addEventListener("click",function (){
const query=getInput.value.toLowerCase().trim();

//search-form
//search
hymnBodies.forEach((hymnBody) => {
  const hymnTitle = hymnBody.querySelector("#hymnheader");
  const hymnContent = hymnBody.querySelector(".hymnnum");
  console.log(hymnTitle);
  console.log(hymnContent);
  if (hymnTitle && hymnTitle.textContent.toLowerCase().includes(query) || 
      hymnContent && hymnContent.textContent.toLowerCase().includes(query)) {
    hymnBody.style.display = "block";
  } else {
    hymnBody.style.display = "none";
  }
});

});

//storing the favorites songs 

const getFav=document.getElementById("favorite");

getFav.addEventListener("click", (event)=>{
const curFav= event.currentTarget.dataset.id;


});
function showFav(){

}