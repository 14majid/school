const showList = document.querySelectorAll('.show-list');
const list = document.querySelectorAll('.student-list');

showList.forEach((button, index) => {
  button.addEventListener('click', (e) => {

    e.preventDefault();

    if(list[index].style.display === "none") {

      list[index].style.display = "block"

    } else {

      list[index].style.display = "none"
      
    }
  });
});



// const showList = document.querySelectorAll('.show-list');

// showList.forEach((button, index) => {
//   button.addEventListener('click', (e) => {
//     e.preventDefault(); // Empêche le comportement par défaut du lien
    
//     const card = button.closest('div'); // Trouve le parent div qui contient la carte et la liste
//     const list = card.querySelector('.student-list');
    
    
//     // Ferme toutes les autres listes
//     document.querySelectorAll('.student-list').forEach(l => {
//       if (l !== list) l.style.display = 'none';
//     });
    
//     // Bascule l'affichage de la liste courante
//     if (list.style.display === 'block') {
//       list.style.display = 'none';
//     } else {
//       list.style.display = 'block';
//     }

//     console.log(list);
//   });
// });
