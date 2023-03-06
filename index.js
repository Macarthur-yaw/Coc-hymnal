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
    data.forEach(function(number){
        console.log(number);

    })
        
       
      })
      .catch((error) => console.log(error));
  });
});
