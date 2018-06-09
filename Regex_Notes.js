/* Regex rules shoudl be wrapped in / / */
let re = /^Hello$/; // hello would NOT be a match in this case

/* i means case insensitive */
re = /^Hello$/i; // hello would be a match in this case

/* g means global search, meaning the search will apply to the whole paragraph */
re = /^Hello$/g;

/* ^ -- must start with */
re = /^Hello/; // the match must start with 'Hello'

/* $ -- must end with  */
re = /Hello$/; //the match must end with 'Hello'

/* . -- you can put any ONE character */
re = /H.llo/; // 'Hollo' or 'H)llo' will be a match in this case; 'Hoollo' will NOT be a match

/* * -- you can put any 0 or more characters */
re = /H*llo/; // 'Hllo' and 'Hoollo' will be a match in this case

/* ? -- optional character, will match with or without but cannot be replaced by other character */
re = /He?a?llo/; // e and a are optional in this case, 'Hello', 'Hallo', 'Hllo' will be a match; 'Hullo' will NOT be a match

/* \ -- escape character */
re = /grey?/; // here y is optional
re = /grey\?/; // here y is NOT optional and ? is also part of the search

/* [] -- character sets */
re = /gr[ae]y/i; // it has to be an a or an e, cannot be empty; 'gray' or 'grey' will be a match, 'gry' will NOT

/* [^] -- anything except this */
re = /[^GF]rey/; // anything starts with G or F will NOT be a match
/* [-] -- range of letters or numbers */
re = /[A-Z]/; // match any upper case letter
re = /[a-z]/; // match any lower case letter
re = /[A-Za-z]/; // match any letter
re = /[0-9]/; // match any digit

/* {} -- quantifiers */
re = /Hel{2}o/i; // this is looking for 2 'l's to match, the number inside of {} specifies how many of the character in front should be; must appear exactly {n} times

re = /Hel{2,4}o/i; // 2 - 4 is the range of the amount that 'l' has to appear

re = /Hel{2,}o/i; // must appear at least two times

/* () --  grouping */
re = /([0-9]x){3}/; // look for (number + x) to appear three times

/* w -- word characters */
re = /\w/; // finds the first word character, ';' will NOT match; '_' will match
re = /\w+/; // finds one more more word characters

/* W -- non-word character */
re = /\W/; // '4' and 'h' will NOT match; '!' will match; ' ' will match
re = /\W+/; // will match one or more non-word characters

/* d -- digit */
re = /\d/; // will match any digit
re = /\d+/; // will match one or more digits

/* D -- non-digit */
re = /\D/; // will match any non-digit
re = /\D+/; // will match one or more non-digits

/* s -- white space */

/* S -- non-white space character */

/*  */

/*  */