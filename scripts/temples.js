const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navList = nav.querySelector('ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

setLastModified();
function setLastModified() {
    const lastModified = document.lastModified;
    const date = new Date(lastModified);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const lastModifiedString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById('last-modified').textContent = lastModifiedString;
}