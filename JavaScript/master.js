document.addEventListener("DOMContentLoaded", function(event) { 
    // Icon event listeners
    github = document.getElementById("github" + "Icon");
    github.addEventListener("mouseover", function() {
        github.src = "/images/" + "github" + "-hover.png";
    });
    github.addEventListener('mouseout', function() {
        github.src = "/images/" + "github" + ".png";
    });
    instagram = document.getElementById("instagram" + "Icon");
    instagram.addEventListener("mouseover", function() {
        instagram.src = "/images/" + "instagram" + "-hover.png";
    });
    instagram.addEventListener('mouseout', function() {
        instagram.src = "/images/" + "instagram" + ".png";
    });
    linkedin = document.getElementById("linkedin" + "Icon");
    linkedin.addEventListener("mouseover", function() {
        linkedin.src = "/images/" + "linkedin" + "-hover.png";
    });
    linkedin.addEventListener('mouseout', function() {
        linkedin.src = "/images/" + "linkedin" + ".png";
    });
    
  });

