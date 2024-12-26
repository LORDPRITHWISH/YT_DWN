let butt = document.createElement('button');

butt.innerHTML = 'download';
butt.style.position = 'fixed';
butt.style.top = '0';

butt.onclick = function() {
    window.prompt(document.querySelector('video').src);}


document.querySelectorAll('ytd-menu-renderer.style-scope.ytd-watch-metadata')


let butt = document.createElement('button');
butt.textContent = 'Download';
butt.style.position = 'fixed';
butt.style.top = '0';

butt.onclick = function () {
    window.prompt(document.querySelector('video').src);
};

document.body.appendChild(butt);
