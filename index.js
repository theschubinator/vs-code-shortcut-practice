const importedFile = require('./exportFile')

// ******  BASIC EDITING ****** //

/* Starts With 'Command' Key */

const daysInAYear = 365;
const hoursInADay = 24;
const minutesInAHour = 60;
const secondsInAMinute = 60;

const findTimeInSeconds = (time, timeType) => {

    importedFile()

    if (timeType === 'years') {
        return time * daysInAYear * hoursInADay * minutesInAHour * secondsInAMinute
    }
    if (timeType === 'days') {
        return time  * hoursInADay * minutesInAHour * secondsInAMinute
    }

    if (timeType === 'hours') {
        return time * minutesInAHour * secondsInAMinute
    }

    if (timeType === 'minutes') {
        return time * minutesInAHour * secondsInAMinute
    }

}

/*
    1. Move a line up and down
    2. Copy an existing line up and down
    3. Delete the entire current line
    4. Insert a new line below your current line
    5. Insert a new line above your current line
    6. Jump to the other end of your matching bracket
    7. Indent or out-dent your current line
    8. Go to the beginning or end of your current line
    9. Go to the very top or bottom of your editor
    10. Go to next viewable area of editor
*/


/* Answers
    1. Command' + 'Arrow Key'
    2. Shift' + 'Command' + 'Arrow Key'
    3. 'Command' + 'K'
    4. 'Command' + 'Enter'
    5. 'Shift' + 'Command' + 'Enter'
    6. 'Command' + '\'
    7: 'Command' + '[' or ']'
    8. 'Command' + 'Arrow Key (Left or Right)'
    9. 'Command' + 'Array Key (Up or Down)'
    10. 'PageUp/PageDown'
*/

// ******  Multi-Cursor and Selection ****** //

/* Starts With 'Option' Key */

const daysInAYear = 365;
const hoursInADay = 24;
const minutesInAHour = 60;
const secondsInAMinute = 60;

const findTimeInSeconds = (time, timeType) => {

    importedFile()

    if (timeType === 'years') {
        return time * daysInAYear * hoursInADay * minutesInAHour * secondsInAMinute
    }
    if (timeType === 'days') {
        return time  * hoursInADay * minutesInAHour * secondsInAMinute
    }

    if (timeType === 'hours') {
        return time * minutesInAHour * secondsInAMinute
    }

    if (timeType === 'minutes') {
        return time * minutesInAHour * secondsInAMinute
    }

}

/*
    1. Insert multiple cursors by clicking the mouse
    2. Insert an additional cursor above or below current cursor.
    3. Undo last cursor selection
    4. Insert a cursor at the the end of each line of the selected group.
    5. Select your entire current line
    6. Select all occurrences of your current selection in the document.
    7. Select the entire document
*/


/* Answers
    1. 'Option' + 'mouse click'
    2. 'Option' + 'Command' + 'arrow button'
    3. 'Option' + 'U'
    4. 'Option' + 'Command' + 'E'
    5. 'Option' + 'S'
    6. 'Option' + 'Command' + 'S'
    7. 'Option' + 'A'
*/


// ******  NAVIGATION  ****** //

/* Starts With 'Command' Key */

const daysInAYear = 365;
const hoursInADay = 24;
const minutesInAHour = 60;
const secondsInAMinute = 60;

const findTimeInSeconds = (time, timeType) => {

    importedFile()

    if (timeType === 'years') {
        return time * daysInAYear * hoursInADay * minutesInAHour * secondsInAMinute
    }
    if (timeType === 'days') {
        return time  * hoursInADay * minutesInAHour * secondsInAMinute
    }

    if (timeType === 'hours') {
        return time * minutesInAHour * secondsInAMinute
    }

    if (timeType === 'minutes') {
        return time * minutesInAHour * secondsInAMinute
    }

}

/*

    1. Go to the definition of a current imported file in new screen
    2. Go to the definition in current screen
    3. Go to a specific line in the editor
    4. Go to someRandomFile.js

*/


/* Answers
    1. 'Command' + 'D'
    2. 'Shift' + 'Command' + 'D'
    3. 'Command' + 'G'
    4. 'Command' + 'P'
*/


// ******  FILE MANAGEMENT  ****** //

/* Starts With 'Command' Key */

/*
    1. Find something in the current file
    2. Find & Replace something in the current file
    3. Find & Replace all instances of something across all files
    4. Reveal active file in Explorer
*/


/* Answers
    1. 'Command' + 'F'
    2. 'Option' + 'Command' + 'F'
    3. 'Option' + 'Command' + 'A'
    4. 'Command' + 'E'
*/


// ****** DISPLAY ****** //

/* Starts With 'Control' Key  OR 'Command' key */


/*
    1. Toggle full screen mode
    2. Split the editor
    3. Focus on a specific editor in split view
    4. Close current open editor
    5. Open a new window
    6. Reopen closed editor
    7. Close all open editor panels
    8. Close this entire shortCuts folder
    9. Open active file in its own window instance
    10. Close the entire VS Code Program
*/

/* Answers
    1. 'Control' + 'F'
    2. 'Control' + '\'
    3. 'Command' + ' {number} 1,2,3, etc'
    4. 'Command' + 'W'
    5. 'Control' + 'N'
    6. 'Control' + 'R'
    7. 'Option' + 'Command' + 'W'
    8. ''Command' + 'Exit'
    9. 'Control' + 'O'
    10. 'Control' + 'Escape'
*/




// ******  TERMINAL ****** //

/* Starts With 'Control' Key */

/*
    1. Open Terminal
    2. Open New Terminal
    3. Split Terminal
    4. Switch Terminal
    5. Switch Active Terminal
    6. Close current Terminal
*/


/*
    1. 'Control' + 'T'
    2. 'Control' + 'Shift' + 'T'
    3. 'Control' + '\'
    4. 'Control' + 'S'
    5. 'Control' + 'Command' + 'Arrow Key'
    6. 'Control' + 'C'
*/
