/* Regex rules shoudl be wrapped in / / */
let re = /^Hello$/; // hello would NOT be a match in this case

/* i means case insensitive */
let re = /^Hello$/i; // hello would be a match in this case

/* g means global search, meaning the search will apply to the whole paragraph */
let re = /^Hello$/g;

/* ^ -- must start with */
let re = /^Hello/; // the match must start with 'Hello'

/* $ -- must end with  */
let re = /Hello$/; //the match must end with 'Hello'

/* . -- you can put any ONE character */
let re = /H.llo/; // 'Hollo' or 'H)llo' will be a match in this case; 'Hoollo' will NOT be a match

/* * -- you can put any 0 or more characters */
let re = /H*llo/; // 'Hllo' and 'Hoollo' will be a match in this case

/* ? -- optional character, will match with or without but cannot be replaced by other character */
let re = /He?a?llo/; // e and a are optional in this case, 'Hello', 'Hallo', 'Hllo' will be a match; 'Hullo' will NOT be a match

/* \ -- escape character */
let re = /grey?/; // here y is optional
let re = /grey\?/; // here y is NOT optional and ? is also part of the search

/*  */

/*  */
