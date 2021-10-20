const container = document.querySelector('.container');


// get a batch of images and append to the container div

function getRandomNumber() {
    return Math.floor(Math.random() * 200);
}
function loadImages(numImages = 10) {
    let i = 0;
    while (i < numImages) {
        let API_URL = `https://picsum.photos/id/${getRandomNumber()}/300/300`;
        let img = document.createElement('img');
        img.src = API_URL;
        container.appendChild(img);
        i++;
    }
}
loadImages()


//listen for a scroll event and load more images if we reach at the bottom of the window

window.addEventListener('scroll',() => {
    if(window.scrollY+window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages();
    }
})