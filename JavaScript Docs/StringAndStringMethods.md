# JavaScript String Methods

### String Length

The length property returns the length of a string:

    let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    txt.length     // Returns 26

## Extracting String Parts

There are 3 methods for extracting a part of a string:

-   `slice(start, end)`
-   `substring(start, end)`
-   `substr(start, length)`

### The slice() Method

`slice()` extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

    let str = "Apple, Banana, Kiwi";
    str.slice(7, 13)     // Returns Banana

If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6:

    let str = "Apple, Banana, Kiwi";
    str.slice(-12, -6)    // Returns Banana

If you omit the second parameter, the method will slice out the rest of the string:

    str.slice(7);    // Returns Banana,Kiwi

### The substring() Method

`substring()` is similar to `slice()`.

The difference is that `substring()` cannot accept negative indexes.



| Method | Description |
| ------ | ----------- |
| ```charAt()``` |	Returns the character at the specified index (position) |
| ```charCodeAt()``` |	Returns the Unicode of the character at the specified index |
concat()	Joins two or more strings, and returns a new joined strings
endsWith()	Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters
includes()	Checks whether a string contains the specified string/characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a match against a regular expression, and returns the matches
repeat()	Returns a new string with a specified number of copies of an existing string
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters
toString()	Returns the value of a String object
| ```toUpperCase()``` |	Converts a string to uppercase letters |
| ```trim()``` |	Removes whitespace from both ends of a string |
| ```valueOf()```	| Returns the primitive value of a String object |
