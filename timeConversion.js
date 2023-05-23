//HackerRank challenge 03 Time Conversion
/* 
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
*/

function timeConversion(time) {
  const timeWithoutPmAm = time.slice(0, 8);
  const hour = Number(timeWithoutPmAm.slice(0, 2));

  if (time.endsWith("AM")) {
    let militaryHour = (hour === 12 ? hour - 12 + "0" : "0" + hour).toString();
    let militaryTime = militaryHour + timeWithoutPmAm.slice(2);
    return militaryTime;
  } else {
    let militaryHour = (hour !== 12 ? hour + 12 : hour).toString();
    let militaryTime = militaryHour + timeWithoutPmAm.slice(2);
    return militaryTime;
  }
}
console.log(timeConversion("06:40:03AM"));

//armazenar o time sem o pm am
//armazenar somente a hora do time
//caso o time seja AM e a hora 12, subtrair 12
//caso o time seja AM e a hora =! 12, retornar o próprio time
//caso o time seja PM e a hora =! somar 12
//caso o time seja PM e a hora 12, retornar a própria hora
