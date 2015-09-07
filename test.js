/**
 * To test module.exports feature:
 * $ node test.js
 * expected output:
 * - Test 1: Limit
 * - Test 2:  TO-DO
 * - Test 3: 👍 fine by
 */

var limit = require('./dist/limitCharacts.min.js');

// Test 1: output 1 string of text
console.log('\n# Test 1: output 1 string of text, truncate at 5th character:');
var text1 = 'Limit this text field';
console.log( 'Input: ' + text1 );
console.log( 'Output: ' + limit.limitCharacts( text1, 5 ) );

// Test 2: output an array of texts
// TO-DO
/*
console.log('\n# Test 2: output an array of texts:');
var text2 = [
	'I used to have ugly text. Now I just have 1.',
	'Solía tener texto feo. Ahora sólo tengo 1.',
	'J'ai l'habitude d'avoir un texte laid. Je dois maintenant juste 1.',
	'Früher habe ich hässlich Text. Jetzt habe ich nur noch 1.''
];
console.log( 'Input: ' + text2 );
console.log( 'Output: ' + limit.limitCharacts(text2, 10 ) );
*/

// Test 3: input includes emojis
console.log('\n# Test 3: input includes emojis, truncate at 10th character:');
var text3 = '👍 fine by me!';
console.log( 'Input: ' + text3 );
console.log( 'Output: ' + limit.limitCharacts( text3, 10 ) );
