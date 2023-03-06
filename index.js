const hymnBodies = document.querySelectorAll(".hymnbody");
const getHymns=document.getElementById("hymns");
hymnBodies.forEach((hymnBody) => {
  hymnBody.addEventListener("click", function (event) {
    const hymnId = event.currentTarget.dataset.id;

    fetch(`connection.php?id=${hymnId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // data.title;
        let hymnHtml= " ";
    data.forEach(function(hymn){
        hymnHtml += `<h3>${hymn.title}</h3><p>${hymn.content}</p>`;


    })
    getHymns.innerHTML=hymnHtml;

        
       
      })
      .catch((error) => console.log(error));
  });
});

const footer=document.getElementById("footer");
window.onscroll = function() {
  if(window.scrollY>100){
    footer.style.top="0px";
  }
  else  {
    // window.scrollTo(0, 0);
    footer.style.bottom="0px";
  }
}
