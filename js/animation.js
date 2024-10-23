
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
  }
  

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    const hiddenRows = document.querySelectorAll(".hidden");
    const showMoreButton = document.getElementById("show-more");

    // Show the button if there are hidden rows
    if (hiddenRows.length > 0) {
        showMoreButton.style.display = "block";
    }

    showMoreButton.addEventListener("click", function() {
        hiddenRows.forEach(row => row.style.display = "table-row");
        showMoreButton.style.display = "none";
    });
});