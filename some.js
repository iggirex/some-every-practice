module.exports = {
  anyGreaterThan10 : anyGreaterThan10,
  longWord : longWord,
  truePossibilities : truePossibilities,
  lostCarcosa : lostCarcosa
};
// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10 (input) {
  return input.some(function(input){
    return input >= 10
  });
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
       return input.some(function(input){
       	console.log(input)
        return input.length > 10
     })
}
// Check to see if any of the elements in
// the matrix are true.

// function truePossibilities (input) {
//   input.some(function(input){
//     return input == true
//   })
//   return input;
// };

function truePossibilities (input) {
  return input.some(function(input){
  	for( var i =0;i <input.length;i++){
      	if( input[i] == true ){
          return true
        }
  	}
  })
};
// Check to see if 'Lost' is in
// the phrase (using some).

// function lostCarcosa (input) {
//   return input;
// };
var match
function lostCarcosa (input) {
	input.some(function(input, index, arr){
		var str = input
		match = str.match(/Lost/gi)
		})
	if(match !== null){
			return true
		} else {
			return false
		}
};
