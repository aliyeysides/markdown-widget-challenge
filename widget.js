window.MarkDownWidget = {};
MarkDownWidget.View = function(inputFieldSel, outputFieldSel){
  var self = this;

  this.$inputField = $(inputFieldSel);
  this.$outputField = $(outputFieldSel);

  this.$inputField.on('keyup', function(e) {
    var inputValue = $(e.target).val();
    self.controller.sendToParser(inputValue);
  });

  this.updateOutputField = function(formattedHtml){
    this.$outputField.empty().append(formattedHtml);
  };
};

MarkDownWidget.Controller = function  () {
  this.view = new MarkDownWidget.View("#input", "#output");
  this.view.controller = this;
};

MarkDownWidget.Controller.prototype = {
  sendToParser: function(inputText){
    var parsedText = marked(inputText);
    console.log(parsedText);
    this.sendToView(parsedText);
  },
  sendToView: function(parsedText){
    this.view.updateOutputField(parsedText);
  }
};

$(document).ready(function() {
  new MarkDownWidget.Controller();
});