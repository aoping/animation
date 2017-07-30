var btn = document.querySelector('.btn');
var flag = 1;
btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (flag) {
        this.className = "btn open";
        flag = 0;
    } else {
        this.className = "btn";
        flag = 1;
    }
}, false);