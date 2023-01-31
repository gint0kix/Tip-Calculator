export default function calculateTips(mapOfPeople) {
  let personMap = mapOfPeople;  
  let TOTAL_TIPS = document.getElementById('totalTipsInput').value;
  const TOTAL_EXPECTED_HOURS = Number(document.getElementById('totalHoursInput').value);
  let TOTAL_ACTUAL_HOURS = 0; 
  
  function truncateTwoSpaces(num) {
    return Number(num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
  }
  for (let person of personMap.values()) {
    TOTAL_ACTUAL_HOURS += Number(person.hoursWorked);
  }
  TOTAL_ACTUAL_HOURS = truncateTwoSpaces(TOTAL_ACTUAL_HOURS);
  if(TOTAL_ACTUAL_HOURS!==TOTAL_EXPECTED_HOURS){
    console.log(`TOTAL_ACTUAL_HOURS = ${TOTAL_ACTUAL_HOURS}`);
    return alert('Please Check Inputed Hours');
  }
  if(TOTAL_TIPS===""){
    return alert('Please Enter Amount of Tips');
  }
 
  //Truncates anything past the 2nd decimal space
  let spaces = 2;
  const RATE_PER_HOUR = truncateTwoSpaces(TOTAL_TIPS / TOTAL_EXPECTED_HOURS);
  for (let person of personMap.values()) {
    const grossTips = truncateTwoSpaces(Number(person.hoursWorked) * RATE_PER_HOUR);
    person.grossTips = grossTips;
  }

  //Determine NetTips
  let personArr = [...personMap];
  let TotalNetTips = 0;
  personArr.map((person) => {
    person[1].netTips = Math.floor(person[1].grossTips);
    TotalNetTips += person[1].netTips;
  });

  //Sorting from highest grosstips -> lowest grosstips
  personArr.sort((a, b) => {
    let personAGrossDecimal = a[1].grossTips - a[1].netTips;
    let personBGrossDecimal = b[1].grossTips - b[1].netTips;
    if (personAGrossDecimal === personBGrossDecimal) {
      return b[1].netTips - a[1].netTips;
    }
    return personBGrossDecimal - personAGrossDecimal;
  });

  let remainingTips = TOTAL_TIPS - TotalNetTips;
  const personArrLength = personArr.length;
  let personIndex = 0;
  while (remainingTips != 0) {

    personArr[personIndex % personArrLength][1].netTips += 1;
    personIndex++;
    remainingTips--;
  }
  mapOfPeople = new Map(personArr);
}
