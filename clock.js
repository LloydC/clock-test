//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes = 0) {

    if(minutes >= 60){
      const addedHours = Math.floor(minutes/60);
      const actualHours = hours + addedHours;
      const actualMinutes = minutes % 60

      this.hours = actualHours < 10 ? `0${actualHours}` : `${actualHours}`;
      this.minutes = actualMinutes < 10 ? `0${actualMinutes}` : `${actualMinutes}`;
    }

    else {
      this.hours = hours < 10 ? `0${hours}` : hours < 24 ? 
                `${hours}` : hours > 24 ? 
                hours % 24 < 10 ? 
                `0${hours % 24}` : 
                `${hours % 24}` :`00`;

      this.minutes = minutes < 10 ? `0${minutes}` : minutes >= 60  && minutes % 60 < 10 ? `0${minutes}` : `${minutes}`;
    }
  }

  toString() {
    return `${this.hours}:${this.minutes}`
  }

  plus(addedMinutes) {
    //If time, try to refactor if() and else if() statements
    let currentMinutes = Number(this.minutes); 
    let newMinutes = currentMinutes + addedMinutes;

    if(newMinutes > 1440){
      const daysAdded = Math.floor(newMinutes / 1440);
      const hoursToAdd = Math.floor(newMinutes/60) - daysAdded * 24;
      const newHourTime = Number(this.hours) + hoursToAdd;
      const newMinutesTime = newMinutes % 60;

      this.hours = newHourTime < 10 ? `0${newHourTime}` : newHourTime === 24 ? `00` : `${newHourTime}`; 
      this.minutes = newMinutesTime < 10 ? `0${newMinutesTime }` : `${newMinutesTime}`; 

      return `${this.hours}:${this.minutes}`;
    }
    else if(newMinutes  > 59  && newMinutes < 1440){
      const hoursToAdd = Math.floor(newMinutes / 60 );
      const newHourTime = Number(this.hours) + hoursToAdd;

      const newMinutesTime = newMinutes % 60;
      this.hours = newHourTime < 10 ? `0${newHourTime}` : newHourTime === 24 ? `00` : `${newHourTime}`; 
      this.minutes = newMinutesTime < 10 ? `0${newMinutesTime }` : `${newMinutesTime}`; 

      return `${this.hours}:${this.minutes}`;
    }
    else {
      this.minutes = newMinutes < 10 ? `0${newMinutes}`:`${newMinutes}`;
      return `${this.hours}:${this.minutes}`;
    }
  }

  minus(subtractedMinutes) {
    const convertHour = Number(this.hours) === 0 ? 24 : Number(this.hours)
    let currentMinutes = Number(this.minutes);
    let newMinutes = currentMinutes - subtractedMinutes;
    console.log('newMinutes', newMinutes);
    console.log('newMinutes/60', newMinutes/60)

    if(subtractedMinutes > 1440){
      const daysToRemove = Math.floor(subtractedMinutes / 1440);
      const hoursToRemove = Math.floor(subtractedMinutes/60) - daysToRemove * 24;
      const newHourTime = convertHour - hoursToRemove;
      const subMin = newMinutes % 60;
      const newMinutesTime = subMin + 60;

      this.hours = newHourTime < 10 ? `0${newHourTime}` : newHourTime === 24 ? `00` : `${newHourTime}`;
      this.minutes = newMinutesTime % 60 < 10 ? `0${newMinutesTime % 60}` : `${newMinutesTime % 60}`;

      return `${this.hours}:${this.minutes}`;
    }
    else if(newMinutes < 0  && newMinutes/60 >= -1){
      const newHour = convertHour - 1; // need to add ternary operator for use case where I go back before midnight
      const convertMinutes = 60 + newMinutes

      this.hours = newHour < 10 ? `0${newHour}` : newHour === 24 ? `00` : `${newHour}`;
      this.minutes = convertMinutes % 60 < 10 ? `0${convertMinutes % 60}` : `${convertMinutes % 60}`;

      return `${this.hours}:${this.minutes}`;
    }
    else if(newMinutes < 0  && newMinutes/60 <= -1){
      console.log('this.hours', this.hours);
      console.log(Math.ceil(subtractedMinutes/60))
      const newHour = convertHour - Math.ceil(subtractedMinutes/60); // need to add ternary operator for use case where I go back before midnight
      console.log('newHour', newHour)
      const subMin = subtractedMinutes % 60;
      const convertMinutes = currentMinutes - subMin + 60;
      console.log('currentMinutes', currentMinutes)
      console.log('sub Min', subMin)
      console.log('convertMinutes', convertMinutes)

      this.hours = newHour < 10 ? `0${newHour}` : newHour === 24 ? `00` : `${newHour}`;
      this.minutes = convertMinutes % 60 < 10 ? `0${convertMinutes % 60}` : `${convertMinutes % 60}`;

      return `${this.hours}:${this.minutes}`;
    }
    else {
      this.minutes = newMinutes < 10 ? `0${newMinutes}`:`${newMinutes}`;
      return `${this.hours}:${this.minutes}`;
    }
  }

  equals(comparedClock) {
    return this.hours === comparedClock.hours && this.minutes === comparedClock.minutes;
  }
}