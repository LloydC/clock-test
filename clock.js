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
    let currentMinutes = Number(this.minutes);
    let newMinutes = currentMinutes + addedMinutes;

    if(newMinutes  > 59 ){
      const newHour = Math.floor(newMinutes / 60 );
      this.hours = newHour < 10 ? `0${newHour}` : newHour === 24 ? `00` : `${newHour}`; 
      this.minutes = newMinutes % 60 < 10 ? `0${newMinutes % 60 }` : `${newMinutes % 60}`; 
      return this.minutes;
    }
    else {
      return this.minutes = newMinutes < 10 ? `0${newMinutes}`:`${newMinutes}`;
    }
  }

  minus(subtractedMinutes) {
    let currentMinutes = Number(this.minutes);
    let newMinutes = currentMinutes - subtractedMinutes;
    
    if(newMinutes < 0  && newMinutes/60 >= -1){
      const newHour = this.hours--; // need to add ternary operator for use case where I go back before midnight
      const convertMinutes = 60 + newMinutes

      this.hours = newHour < 10 ? `0${newHour}` : newHour === 24 ? `00` : `${newHour}`;
      this.minutes = convertMinutes % 60 < 10 ? `0${convertMinutes % 60}` : `${convertMinutes % 60}`;

      return this.minutes;
    }
    else if(newMinutes < 0  && newMinutes/60 <= -1){
      const newHour = this.hours - Math.floor(subtractedMinutes/60); // need to add ternary operator for use case where I go back before midnight
      const convertMinutes = 60 - currentMinutes - (subtractedMinutes % 60)

      this.hours = newHour < 10 ? `0${newHour}` : newHour === 24 ? `00` : `${newHour}`;
      this.minutes = convertMinutes % 60 < 10 ? `0${convertMinutes % 60}` : `${convertMinutes % 60}`;

      return this.minutes;
    }
    else {
      return this.minutes = newMinutes < 10 ? `0${newMinutes}`:`${newMinutes}`;
    }
  }

  equals(firstClock, secondClock) {
    return firstClock.hours === secondClock.hours && firstClock.minutes === secondClock.minutes;
  }
}