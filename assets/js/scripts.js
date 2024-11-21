var skillPers = document.querySelectorAll(".skill-per");

skillPers.forEach(function(skillPer) {
  var per = parseFloat(skillPer.getAttribute("per"));
  skillPer.style.width = per + "%";
  
  var animatedValue = 0; 
  var startTime = null;
  
  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)
    
    if (stepPercentage < 1) {
      animatedValue = per * stepPercentage;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      requestAnimationFrame(animate);
    } else {
      animatedValue = per;
      skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
    }
  }
  
  requestAnimationFrame(animate);
});

const graphic_design_lower = document.querySelector(".graphic_design_lower")
const box_education_head_operation = document.querySelector(".box_education_head_operation")
const graphic_design_head = document.querySelector(".graphic_design_head")
const bachelor_degree_head = document.querySelector(".bachelor_degree_head")
const bachelor_degree_lower = document.querySelector(".bachelor_degree_lower")
const diploma_technology_head = document.querySelector(".diploma_technology_head")
const diploma_technology_lower = document.querySelector(".diploma_technology_lower")
const high_school_head = document.querySelector(".high_school_head")
const high_school_lower = document.querySelector(".high_school_lower")
const high_school_inc_dec = document.querySelector(".high_school_inc_dec")
const graphic_design_inc_dec = document.querySelector(".graphic_design_inc_dec")
const bachelor_degree_inc_dec = document.querySelector(".bachelor_degree_inc_dec")
const diploma_technology_inc_dec = document.querySelector(".diploma_technology_inc_dec")

graphic_design_head.addEventListener("click", function () {
    graphic_design_lower.classList.toggle("open")
    graphic_design_head.classList.toggle("color")
    if (graphic_design_lower.classList.contains("open")) {
        graphic_design_inc_dec.innerHTML = "-"
    }
    else {
        graphic_design_inc_dec.innerHTML = "+"
    }
})

bachelor_degree_head.addEventListener("click", function () {
    bachelor_degree_lower.classList.toggle("open")
    bachelor_degree_head.classList.toggle("color")
    if (bachelor_degree_lower.classList.contains("open")) {
        bachelor_degree_inc_dec.innerHTML = "-"
    }
    else {
        bachelor_degree_inc_dec.innerHTML = "+"
    }
})

diploma_technology_head.addEventListener("click", function () {
    diploma_technology_lower.classList.toggle("open")
    diploma_technology_head.classList.toggle("color")
    if (diploma_technology_lower.classList.contains("open")) {
        diploma_technology_inc_dec.innerHTML = "-"
    }
    else {
        diploma_technology_inc_dec.innerHTML = "+"
    }
})

high_school_head.addEventListener("click", function () {

    high_school_lower.classList.toggle("open")
    high_school_head.classList.toggle("color")

    if (high_school_lower.classList.contains("open")) {
        high_school_inc_dec.innerHTML = "-"
    }
    else {
        high_school_inc_dec.innerHTML = "+"
    }
})


