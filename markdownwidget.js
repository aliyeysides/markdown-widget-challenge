window.MDWidget = {};

/* ------------------------------------------------------------------------------- */

MDWidget.MDInputView = function(sel) {
  var view = this;

  this.$sel = $(sel);

  this.$sel.on('keyup', function(e) {
    console.log($(e.target).text() );
    view.markdownTextChanged($(e.target).val());
  });
};

MDWidget.MDInputView.prototype = {
  markdownTextChanged: function(text) {
    this.controller.notifyMdTextChanged(text);
  }
};

/* ------------------------------------------------------------------------------- */

MDWidget.MDOutputView = function(sel) {
  this.$sel = $(sel);
};

MDWidget.MDOutputView.prototype = {
  draw: function(htmlText) {
    this.$sel.empty().append(htmlText);
  }
};

/* ------------------------------------------------------------------------------- */

MDWidget.Controller = function(inputView, outputView) {
  this.inputView = inputView ;
  this.outputView = outputView;

  this.inputView.controller = this;
}

MDWidget.Controller.prototype = {
  notifyMdTextChanged: function(newText) {
    var parsedText = new MDWidget.MarkedbasedMarkdownParser(newText).parse();
    this.outputView.draw(parsedText);
  }
}

/* An injectable Markdown Parser, it sets a standard for other implementations
 * of parsers.  It uses the marked library to do the conversion, but it would
 * be _very easy_ to swap out this Parser for one of my own creation provided
 * it honored the interface (instantiate with markdown text, respond to
 * parse());
 */
/* ------------------------------------------------------------------------------- */

MDWidget.MarkedbasedMarkdownParser = function(mdText) {
  this.mdText = mdText
};

MDWidget.MarkedbasedMarkdownParser.prototype = {
  parse: function() {
    return marked(this.mdText);
  }
};

/* ------------------------------------------------------------------------------- */

new MDWidget.Controller(
  new MDWidget.MDInputView("textarea#input"),
  new MDWidget.MDOutputView("div#output"));
