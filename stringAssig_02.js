function stringHandsOn() {
    console.log(`1. Print the string as it is on console`);
    var givenString ="  Hey you are doing good, keep it up   ";
    console.log(`Given a String: ${givenString}`); // display string
    console.log(``);

    console.log(`2. Calculate length of the String`);
    var stringLength = givenString.length;
    console.log(`Length of string is: ${stringLength}`); // length of given string
    console.log(``);

    console.log(`3. Remove the leading and trailing extra spaces and log string on console with it's length`);
    var trimmedString = givenString.trim(); // trim the space both side
    var trimmedStringLength = trimmedString.length; // length of trim string
    console.log(`Trimmed string is: ${trimmedString} | It's length is: ${trimmedStringLength}`);
    console.log(``);

    console.log(`4. Print the total number extra spaces count that is removed in step 3`);
    var countExtraSpace = stringLength - trimmedStringLength;
    console.log(`Total no. of extra spaces removed is: ${countExtraSpace}`); // count the removed spaces
    console.log(``);

    console.log(`5. Print the first and last character on the same line after trim()`);
    var firstTrimChar = trimmedString.charAt(0);
    var lastTrimChar = trimmedString.charAt(33);
    console.log("First character of trimmed string is:",firstTrimChar,"|","Last character of trimmed string is:",lastTrimChar); // first & last character of trimmed string
    console.log(``);

    console.log(`6. Print the count of total words available in the string after step 3`);
    var resultSplit = trimmedString.split(" ");
    console.log(`Total words after trim string is: ${resultSplit.length}`);
    console.log(``);
    
    console.log(`7. Print the index of word "good" from the given string`);
    var resultIndexOf = trimmedString.indexOf("good");
    console.log(`Index of "Good" string is: ${resultIndexOf}`);
    console.log(``);

    console.log(`8. Print the substring starting from index 22, using substring() and slice()`);
    var resultSubString = trimmedString.substring(22);
    console.log(`Substring starting from index 22 is: ${resultSubString}`);
    console.log(``);

    console.log(`9. Check, is string ends with word "up" after step 3? `);
    var resultEndsWith = trimmedString.endsWith('up');
    console.log(`Is String ends with word "up": ${resultEndsWith}`);
    console.log(``);

    console.log(`10. Check, is string starts with word "Hey" after trimming`);
    var resultStartWith = trimmedString.startsWith('Hey');
    console.log(`Is string start with word "Hey": ${resultStartWith}`);
}
stringHandsOn();
