const menuBtn = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const checkBox = document.getElementById('myCheck');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (checkBox.checked == true){
        content.classList.toggle('active');
      } else {
        content.classList.toggle('reverseActive');
      }
    
    if(checkBox.style.display === "none") {
        checkBox.style.display = "block";
    } else {
        checkBox.style.display = "none";
    }
});

