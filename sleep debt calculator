// Determining the hours of sleep. 
const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 5;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 3;
      break;
    case 'Friday':
      return 4;
      break;
    case 'Saturday':
      return 9;
      break;
    case 'Sunday':
      return 6;
      break;
    default:
    return 'Input a valid day of the week';
  }
}

// test console.log(getSleepHours('Monday'));

//This code calculates the sum of weekly slept hours
const getActualSleepHours = () => {
  getSleepHours()
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

console.log(`You slept: ${getActualSleepHours()} hours this week.`);

//This code calculates the ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}

console.log(`Your ideal sleeping hours are: ${getIdealSleepHours()} hours`)

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
     return 'You got the perfect amount of sleep. Keep it up!';
  } else if (actualSleepHours > idealSleepHours) {
  return 'You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week';  
  }  else if (actualSleepHours < idealSleepHours){
    return 'You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Go catch sume Zzz';
  }
}

console.log(calculateSleepDebt());

