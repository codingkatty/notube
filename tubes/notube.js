document.body.style.transition = 'opacity 1s ease-in-out';

setTimeout(() => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.display = 'none';
    }, 1000);
}, 0);