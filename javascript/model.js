// Model = {
//   fixStrongs: function(text) {
//     var textString = text.toString();
//     var textArray = textString.match(/\*\*[a-zA-Z]+?\*\*/gi)
//     for(i = 0; i < textArray.length; i++){
//       textArray[i].replace(/\*\*/, "<strong>")
//       textArray[i].replace(/\*\*/, "</strong>")
//     }
//     console.log textArray;
//   }

// }


// split them all up by words (exclude spaces)

// only convert markdown symbols to html format when start AND end of word has that markdown symbol.

// _what
// *what
// _what_ => <em>what</em>
// *what* => <em>what</em>
// **what** => <strong>what</strong>


// fdsafdsa fdsafds af dsafdsaf *dsafdsafds* afdsa fdsaf dsa

// fdsafdsa fdsafds af dsafdsaf <strong>dsafdsafds</strong> afdsa fdsaf dsa

// kdgiuoaeblk **feishjkfdno**  fo asofilsdl

// theString.match(/\*\*[a-zA-Z]+?]\*\*/gi)
// theString[i].replace(/\*\*/, "<strong>")
// theString[i].replace(/\*\*/, "</strong>")
