//given code
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

//my code
function main(mealCost, tipPercent, taxPercent) {
    // Write your code here
        var tip = mealCost * (tipPercent/100);
        var tax = mealCost * (taxPercent/100);
        var totalCost = mealCost + tip + tax;

    // Use console.log() to print to stdout
        console.log("The total meal cost is " + totalCost.toFixed(0) + " dollars.");
