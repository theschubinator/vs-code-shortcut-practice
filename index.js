const importedFile = require('./exportFile')









// ******  BASIC EDITING ****** //

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
    4. Insert a new line above your current line
    5. Insert a new line below your current line
    6. Jump to the other end of your matching bracket
    7. Indent or out-dent your current line
    8. Go to the beginning of your current line
    9. Go to the end of your current line

*/


/* Answers
    1. 'Option' + 'Arrow Key'
    2. 'Shift' + 'Option' + 'Arrow Key'
    3. 'Shift' + 'Command' + 'K'
    4. 'Shift' + 'Command' + 'Enter'
    5. 'Command' + 'Enter'
    6. 'Shift' + 'Command' + '\'
    7: 'Command' + '[' or ']'
    8. 'Home"
    9. 'End'
*/











// ******  Multi-Cursor and Selection ****** //

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
*/


/* Answers
    1. 'Option' + 'mouse click'
    2. 'Option' + 'Command' + 'arrow button'
    3. 'Command' + 'U'
    4. 'Shift' + 'Option' + 'I'
    5. 'Command' + 'L'
    6. 'Shift' + 'Command' + 'L'
*/










// ******  NAVIGATION & SEARCH ****** //

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
    1. Find & Replace something in the current file
    2. Find & Replace all instances of something across all files
    3. Go to the definition of a current imported file
    4. Peak at the definition of a current imported file
    5. Go to a specific line in the editor

*/


/* Answers
    1. 'Option' + 'Command' + 'F'
    2. 'Shift' + 'Command' + 'H'
    3. 'F12'
    4. 'Option' + 'F12'
    5. 'Control' + 'G'
*/












// ******  FILE MANAGEMENT AND DISPLAY ****** //


/*
    1. Toggle full screen mode
    2. Go to someRandomFile.js
    3. Create a new terminal instance
    4. Reveal active file in Explorer
    5. Open active file it its own window instance
    6. Split the editor
    7. Focus on a specific editor in split view
    8. Close current open editor
    9. Open a new window
    10. Reopen closed editor
    11. Close all open editor panels
    12. Close this entire shortCuts folder
*/


/* Answers
    1. 'Control' + 'Command' + 'F'
    2. 'Command' + 'P'
    3. 'Control' + 'Shift' + '`'
    4. 'Command' + 'K' + 'R'
    5. 'Command' + 'K' + 'O'
    6. 'Command' + '\'
    7. 'Command' + ' {number} 1,2,3, etc'
    8. 'Command' + 'W'
    9.  'Shift' + 'Command' + 'N'
    10. 'Shift' + 'Command' + 'T'
    11. 'Command' + 'K' + 'Command' + 'W'
    12. 'Command' + 'K' + 'F'
*/