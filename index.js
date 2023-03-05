const getHymn = document.getElementById("hymnbody");

getHymn.addEventListener("click", function () {
    // Make a fetch request to retrieve the data for the hymns
    fetch("connection.php")
        .then(function(response) {
            // Parse the response as JSON
            return response.json();

        })
        .then(function(data) {
            // Output the data to the console for testing
      const hymnData= document.getElementById("hymnData");
            let newContent = " ";
      data.forEach(function(hymn) {
        newContent += `<div>${hymn.title} - ${hymn.content}</div>`;

    });
getHymn.innerHTML = newContent;

        })
        .catch(function(error) {
            console.log(error);
        });
});
