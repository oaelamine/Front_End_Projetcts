// the scroll bar
let bar = document.querySelector('.scroller');

// calculate the scroll height
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;




window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    let wd = (scrollTop / height) * 100
    bar.style.width = `${wd}%`
})

