/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


let butt = document.getElementById('onlybutton');
let thebox = document.getElementById('onlybox');

butt.addEventListener('click', () => {
  
    thebox.classList.toggle('rotatebox');
  
});