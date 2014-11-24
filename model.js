function StringFormatter(string) {
  this.anchor = string.match(/(^\W+|_?)(\w+)/)[1];
  this.string = string.match(/(^\W+|_?)(\w+)/)[2];
}

StringFormatter.prototype.logic = function(){
  switch(this.anchor){
    case "*":
      return this.bold();
      break;
    case "_":
      return this.underline();
      break;
    case "**":
      return this.italic();
      break;
    default:
      return this.paragraph();
      break;
  }
};

StringFormatter.prototype.italic = function(){
  return("<em>" + this.string + "</em>");
};

StringFormatter.prototype.bold = function(){
  return("<strong>" + this.string + "</strong>");
};

StringFormatter.prototype.underline = function(){
  return("<u>" + this.string + "</u>");
};

StringFormatter.prototype.paragraph = function(){
  return("<p>" + this.string + "</p>");
};

