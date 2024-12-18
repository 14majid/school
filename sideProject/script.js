const classes = document.querySelectorAll('.head');
const list = document.querySelectorAll('.student-list');

classes.forEach((classElement, index) => {
  classElement.addEventListener('click', () => {
    if(list[index].style.display === "none") {
      list[index].style.display = "block"
    } else {
      list[index].style.display = "none"
    }
  });
});
