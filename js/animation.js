
//open and close nav functionality
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }
  

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}


//show more rows in team section
document.addEventListener("DOMContentLoaded", function() {
    function setupShowMore(hiddenClass, buttonId) {
        const hiddenRows = document.querySelectorAll(hiddenClass);
        const showMoreButton = document.getElementById(buttonId);

        if (hiddenRows.length > 0) {
            showMoreButton.style.display = "block";
        }

        showMoreButton.addEventListener("click", function() {
            hiddenRows.forEach(row => row.style.display = "table-row");
            showMoreButton.style.display = "none";
        });
    }

    setupShowMore(".hidden", "show-more");       // Team section
    setupShowMore(".hidden2", "show-more-2");    // Individual results section
});


// dark mode
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
