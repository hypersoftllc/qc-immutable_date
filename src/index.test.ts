
import { ImmutableDate } from './index';

describe('qc-immutable_date', () => {

  describe('`ImmutableDate`', () => {

    it('should be a function', () => {
      expect(typeof ImmutableDate).toBe('function');
    });

    describe('constructor', () => {

      it('called with a non-`Date` input should throw a TypeError', () => {
        expect(() => {
          new ImmutableDate();
        }).toThrow(TypeError);

        expect(() => {
          new ImmutableDate(false);
        }).toThrow(TypeError);

        expect(() => {
          new ImmutableDate(true);
        }).toThrow(TypeError);

        expect(() => {
          new ImmutableDate(null);
        }).toThrow(TypeError);

        expect(() => {
          new ImmutableDate(undefined);
        }).toThrow(TypeError);
      });

    });

    describe('#getDate', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getDate()).toBe(dateIn.getDate());
      });

    });

    describe('#getDay', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getDay()).toBe(dateIn.getDay());
      });

    });

    describe('#getFullYear', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getFullYear()).toBe(dateIn.getFullYear());
      });

    });

    describe('#getHours', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getHours()).toBe(dateIn.getHours());
      });

    });

    describe('#getMilliseconds', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getMilliseconds()).toBe(dateIn.getMilliseconds());
      });

    });

    describe('#getMinutes', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getMinutes()).toBe(dateIn.getMinutes());
      });

    });

    describe('#getMonth', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getMonth()).toBe(dateIn.getMonth());
      });

    });

    describe('#getSeconds', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getSeconds()).toBe(dateIn.getSeconds());
      });

    });

    describe('#getTime', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getTime()).toBe(dateIn.getTime());
      });

    });

    describe('#getTimezoneOffset', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getTimezoneOffset()).toBe(dateIn.getTimezoneOffset());
      });

    });

    describe('#getUTCDate', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCDate()).toBe(dateIn.getUTCDate());
      });

    });

    describe('#getUTCDay', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCDay()).toBe(dateIn.getUTCDay());
      });

    });

    describe('#getUTCFullYear', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCFullYear()).toBe(dateIn.getUTCFullYear());
      });

    });

    describe('#getUTCHours', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCHours()).toBe(dateIn.getUTCHours());
      });

    });

    describe('#getUTCMilliseconds', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCMilliseconds()).toBe(dateIn.getUTCMilliseconds());
      });

    });

    describe('#getUTCMinutes', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCMinutes()).toBe(dateIn.getUTCMinutes());
      });

    });

    describe('#getUTCMonth', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCMonth()).toBe(dateIn.getUTCMonth());
      });

    });

    describe('#getUTCSeconds', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.getUTCSeconds()).toBe(dateIn.getUTCSeconds());
      });

    });

    describe('#setDate', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getDate()).toBe(1);

        id2 = id1.setDate(1);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getDate()).toBe(1);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new date', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getDate()).toBe(1);

        id2 = id1.setDate(10);

        expect(id2).not.toBe(id1);
        expect(id2.getDate()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getDate()).toBe(1);
      });

    });

    describe('#setFullYear', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getFullYear()).toBe(2000);

        id2 = id1.setFullYear(2000);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getFullYear()).toBe(2000);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new year', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getFullYear()).toBe(2000);

        id2 = id1.setFullYear(2010);

        expect(id2).not.toBe(id1);
        expect(id2.getFullYear()).toBe(2010);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getFullYear()).toBe(2000);
      });

    });

    describe('#setHours', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);

        id2 = id1.setHours(12 - (id1.getTimezoneOffset() / 60));

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new hours', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);

        id2 = id1.setHours(10);

        expect(id2).not.toBe(id1);
        expect(id2.getHours()).toBe(10);
        expect(id2.getUTCHours()).toBe(10 + (id2.getTimezoneOffset() / 60));

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);
      });

    });

    describe('#setMilliseconds', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMilliseconds()).toBe(789);

        id2 = id1.setMilliseconds(789);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMilliseconds()).toBe(789);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new milliseconds', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMilliseconds()).toBe(789);

        id2 = id1.setMilliseconds(10);

        expect(id2).not.toBe(id1);
        expect(id2.getMilliseconds()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMilliseconds()).toBe(789);
      });

    });

    describe('#setMinutes', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);

        id2 = id1.setMinutes(34);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new minutes', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);

        id2 = id1.setMinutes(30);

        expect(id2).not.toBe(id1);
        expect(id2.getMinutes()).toBe(30/* + (id2.getTimezoneOffset() % 60)*/);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);
      });

    });

    describe('#setMonth', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMonth()).toBe(6);

        id2 = id1.setMonth(6);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMonth()).toBe(6);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new month', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMonth()).toBe(6);

        id2 = id1.setMonth(10);

        expect(id2).not.toBe(id1);
        expect(id2.getMonth()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getMonth()).toBe(6);
      });

    });

    describe('#setSeconds', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getSeconds()).toBe(56);

        id2 = id1.setSeconds(56);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getSeconds()).toBe(56);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new seconds', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getSeconds()).toBe(56);

        id2 = id1.setSeconds(10);

        expect(id2).not.toBe(id1);
        expect(id2.getSeconds()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getSeconds()).toBe(56);
      });

    });

    describe('#setTime', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);

        id2 = id1.setTime(962454896789);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new seconds', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);

        id2 = id1.setTime(962454896000);

        expect(id2).not.toBe(id1);
        expect(id2.getTime()).toBe(962454896000);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
      });

    });

    describe('#setUTCDate', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCDate()).toBe(1);

        id2 = id1.setUTCDate(1);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCDate()).toBe(1);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new date', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCDate()).toBe(1);

        id2 = id1.setUTCDate(10);

        expect(id2).not.toBe(id1);
        expect(id2.getUTCDate()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCDate()).toBe(1);
      });

    });

    describe('#setUTCFullYear', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCFullYear()).toBe(2000);

        id2 = id1.setUTCFullYear(2000);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCFullYear()).toBe(2000);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new year', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCFullYear()).toBe(2000);

        id2 = id1.setUTCFullYear(2010);

        expect(id2).not.toBe(id1);
        expect(id2.getUTCFullYear()).toBe(2010);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCFullYear()).toBe(2000);
      });

    });

    describe('#setUTCHours', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);

        id2 = id1.setUTCHours(12);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new hours', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);

        id2 = id1.setUTCHours(10);

        expect(id2).not.toBe(id1);
        expect(id2.getUTCHours()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCHours()).toBe(12);
      });

    });

    describe('#setUTCMilliseconds', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMilliseconds()).toBe(789);

        id2 = id1.setUTCMilliseconds(789);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMilliseconds()).toBe(789);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new milliseconds', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMilliseconds()).toBe(789);

        id2 = id1.setUTCMilliseconds(10);

        expect(id2).not.toBe(id1);
        expect(id2.getUTCMilliseconds()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMilliseconds()).toBe(789);
      });

    });

    describe('#setUTCMinutes', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);

        id2 = id1.setUTCMinutes(34);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new minutes', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);

        id2 = id1.setUTCMinutes(30);

        expect(id2).not.toBe(id1);
        expect(id2.getUTCMinutes()).toBe(30);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMinutes()).toBe(34);
      });

    });

    describe('#setUTCMonth', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMonth()).toBe(6);

        id2 = id1.setUTCMonth(6);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMonth()).toBe(6);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new month', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMonth()).toBe(6);

        id2 = id1.setUTCMonth(10);

        expect(id2).not.toBe(id1);
        expect(id2.getUTCMonth()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCMonth()).toBe(6);
      });

    });

    describe('#setUTCSeconds', () => {

      it('called with input that does **not** actually change the date should return itself', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCSeconds()).toBe(56);

        id2 = id1.setUTCSeconds(56);

        expect(id2).toBe(id1);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCSeconds()).toBe(56);
      });

      it('called with input that **does** change the date should return a new `ImmutableDate` with the new seconds', () => {
        let date: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id1 = new ImmutableDate(date),
            id2: ImmutableDate;

        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCSeconds()).toBe(56);

        id2 = id1.setUTCSeconds(10);

        expect(id2).not.toBe(id1);
        expect(id2.getUTCSeconds()).toBe(10);

        // Original shouldn't have changed.
        expect(id1.getTime()).toBe(962454896789);
        expect(id1.getUTCSeconds()).toBe(56);
      });

    });

    describe('#toDate', () => {

      it('when called should return a copy of the date represented by the immutable date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn),
            dateOut: Date;

        dateOut = id.toDate();
        expect(dateOut).not.toBe(dateIn);
        expect(dateOut.getTime()).toBe(dateIn.getTime());
      });

    });

    describe('#toDateString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toDateString()).toBe(dateIn.toDateString());
      });

    });

    describe('#toISOString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toISOString()).toBe(dateIn.toISOString());
      });

    });

    describe('#toJSON', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toJSON()).toBe(dateIn.toJSON());
      });

    });

    describe('#toLocaleDateString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toLocaleDateString()).toBe(dateIn.toLocaleDateString());
      });

    });

    describe('#toLocaleString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toLocaleString()).toBe(dateIn.toLocaleString());
      });

    });

    describe('#toLocaleTimeString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toLocaleTimeString()).toBe(dateIn.toLocaleTimeString());
      });

    });

    describe('#toString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toString()).toBe(dateIn.toString());
      });

    });

    describe('#toTimeString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toTimeString()).toBe(dateIn.toTimeString());
      });

    });

    describe('#toUTCString', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.toUTCString()).toBe(dateIn.toUTCString());
      });

    });

    describe('#valueOf', () => {

      it('when called should return the same value as the input date', () => {
        let dateIn: Date = new Date(Date.UTC(2000, 6, 1, 12, 34, 56, 789)),
            id = new ImmutableDate(dateIn);

        expect(id.valueOf()).toBe(dateIn.valueOf());
      });

    });

  });

});
