# JavaScript String Methods

### String Length
The length property returns the length of a string:
```
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
txt.length     // Returns 26
```
## Extracting String Parts
There are 3 methods for extracting a part of a string:

- ```slice(start, end)```
- ```substring(start, end)```
- ```substr(start, length)```

### The slice() Method
```slice()``` extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

```
let str = "Apple, Banana, Kiwi";
str.slice(7, 13)     // Returns Banana
```
If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6:
```
let str = "Apple, Banana, Kiwi";
str.slice(-12, -6)    // Returns Banana
```
If you omit the second parameter, the method will slice out the rest of the string:

```
str.slice(7);    // Returns Banana,Kiwi
```
### The substring() Method
```substring()``` is similar to ```slice()```.

The difference is that ```substring()``` cannot accept negative indexes.
