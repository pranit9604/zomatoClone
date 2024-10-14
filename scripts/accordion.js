

const accordion_containers = document.querySelectorAll(".accordion-container");

accordion_containers.forEach((accordion_container) => {
  accordion_container.addEventListener("click", function () {
     //get the data
    const data = this.nextElementSibling; // get data
    data.classList.toggle("show");
    //get the icon and add animation
    const icon = this.querySelector("i");
    icon.classList.toggle("animate");
  });
});