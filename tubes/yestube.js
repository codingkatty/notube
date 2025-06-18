document.body.style.transition = 'opacity 1s ease-in-out';

setTimeout(() => {
    document.body.style.display = 'block';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 1000);
}, 0);