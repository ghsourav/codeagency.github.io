

let time = document.getElementById('copy');

function clock() {
    let date = new Date();//Date Object
    let year = date.getFullYear();
    time.innerHTML = `<p>&copy; All Rights Reseved ${year}.Develop By <a href="https://twitter.com/ghsourav" target="_blank">Ghsourav</a>  </p>`






}

clock();


let preloader = document.getElementById('loader');

function loader(){
    preloader.style.display='none';
}




