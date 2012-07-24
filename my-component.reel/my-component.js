var Montage = require("montage/core/core").Montage,
    Component = require("montage/ui/component").Component;

exports.MyComponent = Montage.create(Component, {
    resultText: {value: null},

    textToDisplay: {value: null},

    templateDidLoad: {
        value: function() {
            console.log("templateDidLoad");
        }
    },

    prepareForDraw: {
        value: function(event) {
            console.log("prepareForDraw");

        }
    },

    draw: {
        value: function() {
            console.log("draw");
            this.resultText.value = this.textToDisplay.toUpperCase();
        }
    }
});
