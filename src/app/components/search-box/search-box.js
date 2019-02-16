var ngCore = require('@angular/core');

function SearchBox() {
    this.text = '';
};

SearchBox.prototype = {
    constructor: SearchBox,
    ngOnInit: function() {
        console.log('init SearchBox: ' + this.text)
    }
};

SearchBox.annotations = [
    new ngCore.Component({
        selector: 'search-box',
        template: require('./search-box.html!text'),
        inputs: ['text']
    })
];

SearchBox.parameters = [];

module.exports = SearchBox;
