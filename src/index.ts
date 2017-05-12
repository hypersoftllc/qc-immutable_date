
export class ImmutableDate {

  private date: Date;

  constructor(date: Date) {
    if (!(date instanceof Date)) {
      throw new TypeError(`Unable to construct a new ImmutableDate using supplied input.`);
    }
    this.date = new Date(date.getTime());
  }

  getDate() {
    return this.date.getDate.apply(this.date, arguments);
  }

  getDay() {
    return this.date.getDay.apply(this.date, arguments);
  }

  getFullYear() {
    return this.date.getFullYear.apply(this.date, arguments);
  }

  getHours() {
    return this.date.getHours.apply(this.date, arguments);
  }

  getMilliseconds() {
    return this.date.getMilliseconds.apply(this.date, arguments);
  }

  getMinutes() {
    return this.date.getMinutes.apply(this.date, arguments);
  }

  getMonth() {
    return this.date.getMonth.apply(this.date, arguments);
  }

  getSeconds() {
    return this.date.getSeconds.apply(this.date, arguments);
  }

  getTime() {
    return this.date.getTime.apply(this.date, arguments);
  }

  getTimezoneOffset() {
    return this.date.getTimezoneOffset.apply(this.date, arguments);
  }

  getUTCDate() {
    return this.date.getUTCDate.apply(this.date, arguments);
  }

  getUTCDay() {
    return this.date.getUTCDay.apply(this.date, arguments);
  }

  getUTCFullYear() {
    return this.date.getUTCFullYear.apply(this.date, arguments);
  }

  getUTCHours() {
    return this.date.getUTCHours.apply(this.date, arguments);
  }

  getUTCMilliseconds() {
    return this.date.getUTCMilliseconds.apply(this.date, arguments);
  }

  getUTCMinutes() {
    return this.date.getUTCMinutes.apply(this.date, arguments);
  }

  getUTCMonth() {
    return this.date.getUTCMonth.apply(this.date, arguments);
  }

  getUTCSeconds() {
    return this.date.getUTCSeconds.apply(this.date, arguments);
  }

  // getYear() {
  //   return this.date.getYear.apply(this.date, arguments);
  // }

  setDate(date: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setDate.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setFullYear(year: number, month?: number, date?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setFullYear.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setHours(hours: number, min?: number, sec?: number, ms?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setHours.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setMilliseconds(ms: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setMilliseconds.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setMinutes(min: number, sec?: number, ms?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setMinutes.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setMonth(month: number, date?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setMonth.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setSeconds(sec: number, ms?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setSeconds.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setTime(newTime: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setTime.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setUTCDate(date: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setUTCDate.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setUTCFullYear(year: number, month?: number, date?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setUTCFullYear.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setUTCHours(hours: number, min?: number, sec?: number, ms?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setUTCHours.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setUTCMilliseconds(ms: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setUTCMilliseconds.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setUTCMinutes(min: number, sec?: number, ms?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setUTCMinutes.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setUTCMonth(month: number, date?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setUTCMonth.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  setUTCSeconds(sec: number, ms?: number): ImmutableDate {
    let time = this.date.getTime(),
        newDate = new Date(time);

    newDate.setUTCSeconds.apply(newDate, arguments);

    if (newDate.getTime() === time) {
      return this;
    }
    return new ImmutableDate(newDate);
  }

  // setYear(year: number): ImmutableDate {
  //   let time = this.date.getTime(),
  //       newDate = new Date(time);

  //   newDate.setYear.apply(newDate, arguments);

  //   if (newDate.getTime() === time) {
  //     return this;
  //   }
  //   return new ImmutableDate(newDate);
  // }

  toDate(): Date {
    return new Date(this.date.getTime());
  }

  toDateString() {
    return this.date.toDateString.apply(this.date, arguments);
  }

  // toGMTString() {
  //   return this.date.toGMTString.apply(this.date, arguments);
  // }

  toISOString() {
    return this.date.toISOString.apply(this.date, arguments);
  }

  toJSON(key?: any) {
    return this.date.toJSON.apply(this.date, arguments);
  }

  toLocaleDateString(locales?: string[], options?: Intl.DateTimeFormatOptions) {
    return this.date.toLocaleDateString.apply(this.date, arguments);
  }

  // toLocaleFormat() {
  //   return this.date.toLocaleFormat.apply(this.date, arguments);
  // }

  toLocaleString(locales?: string[], options?: Intl.DateTimeFormatOptions) {
    return this.date.toLocaleString.apply(this.date, arguments);
  }

  toLocaleTimeString(locales?: string[], options?: Intl.DateTimeFormatOptions) {
    return this.date.toLocaleTimeString.apply(this.date, arguments);
  }

  // toSource() {
  //   return this.date.toSource.apply(this.date, arguments);
  // }

  toString() {
    return this.date.toString.apply(this.date, arguments);
  }

  toTimeString() {
    return this.date.toTimeString.apply(this.date, arguments);
  }

  toUTCString() {
    return this.date.toUTCString.apply(this.date, arguments);
  }

  valueOf() {
    return this.date.valueOf.apply(this.date, arguments);
  }

}
