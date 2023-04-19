import moment from 'moment';
import { describe, expect, it, vi } from 'vitest';

import {
  getCardinalDirection,
  getDateByIndex,
  getGreeting,
  getOpenWeatherIcon,
  getToday,
  getUvIStatusByValue,
  handleCitySearch,
} from '../index';

describe('getGreeting()', () => {
  it('should return "Good morning" if the current time is before 12pm', () => {
    // Arrange
    vi.spyOn(Date.prototype, 'getHours').mockReturnValue(9);

    // Act
    const result = getGreeting();

    // Assert
    expect(result).toBe('Good morning');
  });

  it('should return "Good afternoon" if the current time is between 12pm and 6pm', () => {
    // Arrange
    vi.spyOn(Date.prototype, 'getHours').mockReturnValue(15);

    // Act
    const result = getGreeting();

    // Assert
    expect(result).toBe('Good afternoon');
  });

  it('should return "Good evening" if the current time is after 6pm', () => {
    // Arrange
    vi.spyOn(Date.prototype, 'getHours').mockReturnValue(20);

    // Act
    const result = getGreeting();

    // Assert
    expect(result).toBe('Good evening');
  });
});

describe('getOpenWeatherIcon()', () => {
  it('should return the correct URL for a given icon', () => {
    const icon = '04d'; // Example icon code
    const expectedUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const result = getOpenWeatherIcon({ icon });

    expect(result).toBe(expectedUrl);
  });
});

describe('getUvIStatusByValue()', () => {
  it('returns low status and green color when value is between 0 and 2', () => {
    const result = getUvIStatusByValue({ value: 1 });
    expect(result).toEqual({ color: 'bg-green-400', status: 'low' });
  });

  it('returns low status and theme-green color when value is between 2 and 3', () => {
    const result = getUvIStatusByValue({ value: 2.5 });
    expect(result).toEqual({ color: 'bg-theme-green', status: 'low' });
  });

  it('returns moderate status and orange-400 color when value is between 3 and 4', () => {
    const result = getUvIStatusByValue({ value: 3.5 });
    expect(result).toEqual({ color: 'bg-orange-400', status: 'moderate' });
  });

  it('returns high status and orange-600 color when value is between 4 and 5', () => {
    const result = getUvIStatusByValue({ value: 4.5 });
    expect(result).toEqual({ color: 'bg-orange-600', status: 'high' });
  });

  it('returns high status and red-400 color when value is greater than 5', () => {
    const result = getUvIStatusByValue({ value: 6 });
    expect(result).toEqual({ color: 'bg-red-400', status: 'high' });
  });
});

describe('getToday()', () => {
  it('returns the correct day for the current date', () => {
    const result = getToday();
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const today = days[new Date().getDay()];
    expect(result).toEqual(today);
  });
});

describe('getDateByIndex()', () => {
  it('returns the correct date for a positive index value', () => {
    const index = 5;
    const expectedDate = moment(new Date())
      .add(index + 1, 'days')
      .format('MMMM Do - ddd');
    const result = getDateByIndex(index);
    expect(result).toBe(expectedDate);
  });

  it('returns undefined for a negative index value', () => {
    const result = getDateByIndex(-3);
    expect(result).toBeUndefined();
  });
});

describe('handleCitySearch()', () => {
  it('should return an array of matching cities', () => {
    const searchTerm = 'san francisco';
    const expected = handleCitySearch({ searchTerm })
    const result = handleCitySearch({ searchTerm });
    expect(result).toEqual(expected);
  });

  it('should return an empty array when no cities match the search term', () => {
    const searchTerm = 'zzzzzzzzz';
    const expected: any[] = [];
    const result = handleCitySearch({ searchTerm });
    expect(result).toEqual(expected);
  });
});


describe('getCardinalDirection()', () => {
  it('should return the correct cardinal direction for an angle', () => {
    const angle = 90; // East
    const expected = '→ E';
    const result = getCardinalDirection(angle);
    expect(result).toBe(expected);
  });

  it('should return the correct cardinal direction for negative angles', () => {
    const angle = -135; // South-West
    const expected = '↙ SW';
    const result = getCardinalDirection(angle);
    expect(result).toBe(expected);
  });

  it('should return the correct cardinal direction for angles greater than 360 degrees', () => {
    const angle = 450; // North
    const expected = '↑ N';
    const result = getCardinalDirection(angle);
    expect(result).toBe(expected);
  });

  it('should return the correct cardinal direction for angles less than -360 degrees', () => {
    const angle = -405; // North-East
    const expected = '↗ NE';
    const result = getCardinalDirection(angle);
    expect(result).toBe(expected);
  });
});