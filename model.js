function StringFormatter(string) {
  this.anchor = string.match(/(^\W+|_?)(\w+)/)[1];
  this.string = string.match(/(^\W+|_?)(\w+)/)[2];
}

StringFormatter.prototype.italic = function(){
  return("<em>" + this.string + "</em>");
};

StringFormatter.prototype.bold = function(){
  return("<strong>" + this.string + "</strong>");
};

StringFormatter.prototype.underline = function(){
  return("<u>" + this.string + "</u>");
};

