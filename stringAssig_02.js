function stringHandsOn() {
    var givenString ="  Hey you are doing good, keep it up   ";
    console.log("Given a String :", givenString); // display string

    var stringLength = givenString.length;
    console.log("Length of string is:",stringLength); // length of given string

    var trimmedString = givenString.trim(); // trim the space both side
    var trimmedStringLength = trimmedString.length; // length of trim string
    console.log("Trimmed string is:", trimmedString,"|","It's length is:",trimmedStringLength);

    console.log("Total of extra spaces in given string is:",stringLength - trimmedStringLength); // count the removed spaces

    var firstTrimChar = trimmedString.charAt(0);
    var lastTrimChar = trimmedString.charAt(33);
    console.log("First character of trimmed string is:",firstTrimChar,"|","Last character of trimmed string is:",lastTrimChar); // first & last character of trimmed string

}
stringHandsOn();
