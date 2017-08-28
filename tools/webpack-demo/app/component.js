var styles = require('./main.css');

module.exports = function() {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello webpack';
    element.className = styles.redButton;
    return element;
};