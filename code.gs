/**
 * Compare the expected result and the real result of a match between two opponents.
 * @param {string} str1 expected result of a match with this format 'score1 - score2' 
 *   where score1 and score2 are numbers and represents respectively the score of 
 *   the first opponent and the score of the second oponent.
 * @param {string} str2 idem in conservating the same score order,
 * @return {number} 3 if the expected result is exactly identical (same scores),
 *                  2 if the expected match end is correct (win, loss, or tie),
 *                  0 else.
 * But if the input has an incorrect format return void.
 */
function COMPARE_RESULT(str1, str2) {
  var [s1, s2] = extract_result(str1);
  var [es1, es2] = extract_result(str2);
  if (!is_existing(s1) || !is_existing(s2) || !is_existing(es1) || !is_existing(es2)) {
    return;
  } else if (s1 === es1 && s2 === es2) {
    return 3;
  } else if (GET_RESULT(s1, s2) === GET_RESULT(es1, es2)) {
    return 2;
  } else {
    return 0;
  }
}


/**
 * Get the end of a match.
 * @param {number} score1 score of the first opponent
 * @param {number} score2 score of the second opponent
 * @return {number} 1 if the first opponent wins
 *                  2 if the second opponent wins
 *                  0 if tie
 */
function GET_RESULT(score1, score2) {
  if (score1 > score2) {
    return 1;
  } else if (score1 < score2) {
    return 2;
  } else {
    return 0;
  }
}


/**
 * Know if a number exists.
 * @param {number} number
 * @return {boolean} true if and only if this number exists
 */
function is_existing(number) {
  return number !== null && number !== undefined && !isNaN(number);
}


/**
 * Extract each score from the result of match.
 * @param {string} str with this format 'score1 - score2' where score1 and score2 are 
 *   numbers and represents respectively the score of the first opponent and the score of 
 *   the second oponent.
 * @return {Object} list of 2 numbers either null, NaN or matching 
 * with the given string representations.
 */
function extract_result(str) {
  s = str.split('-');
  if (s.length !== 2) {
    return [null, null];
  }
  var s1 = s[0].replace(/ /g,'');
  var s2 = s[1].replace(/ /g,'');
  if (s1 === "" || s2 === "") {
    return [null, null];  
  }
  return [Number(s1), Number(s2)];
}

