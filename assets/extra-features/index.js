const endorsementSectionEl = document.getElementById("endorsements-section-el");
const featuresSectionEl = document.getElementById("features");
const statsSectionEl = document.getElementById("stats-section-el");
const getStartedEl = document.getElementById("getStarted-el");


//functions to impplement fade-in on scroll for different elements at different sizes


document.addEventListener("scroll", function(){
  if(isInView(endorsementSectionEl) < 604){
    endorsementSectionEl.classList.remove("section-el");
    endorsementSectionEl.classList.add("section__el--visible");
  }
});

document.addEventListener("scroll", function(){
  if(isInView(featuresSectionEl) < 560){
    featuresSectionEl.classList.remove("section-el");
    featuresSectionEl.classList.add("section__el--visible");
  }
});

document.addEventListener("scroll", function(){
  if(isInView(statsSectionEl) < 560){
    statsSectionEl.classList.remove("section-el");
    statsSectionEl.classList.add("section__el--visible");
  }
});

document.addEventListener("scroll", function(){
  if(isInView(getStartedEl) < 480){
    getStartedEl.classList.remove("section-el");
    getStartedEl.classList.add("section__el--visible");
  }
});


function isInView(element){
  const rect = element.getBoundingClientRect();
  return rect.top;
}