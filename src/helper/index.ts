import moment from 'moment';

import citiesDataset from '../db/cities.json';
import { ICity } from '../interface/city.interface';

export function getGreeting(): string {
  const hour: number = new Date().getHours();
  const welcomeTypes: string[] = ['Good morning', 'Good afternoon', 'Good evening'];
  let welcomeText: string = '';

  if (hour < 12) welcomeText = welcomeTypes[0];
  else if (hour < 18) welcomeText = welcomeTypes[1];
  else welcomeText = welcomeTypes[2];

  return welcomeText;
}

export function getOpenWeatherIcon({ icon }: { icon: string }): string {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

export function handleCitySearch({ searchTerm }: { searchTerm: string }) {
  const cities: ICity[] = citiesDataset as any;
  return cities.filter((item: ICity) =>
    item.city_ascii
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(searchTerm.trim().toLowerCase().replace(/\s+/g, ''))
  );
}

export function getUvIStatusByValue({ value }: { value: number }) {
  let color = '';
  let status = '';
  if (value >= 0 && value < 2) {
    color = 'bg-green-400';
    status = 'low';
  } else if (value >= 2 && value < 3) {
    color = 'bg-theme-green';
    status = 'low';
  } else if (value >= 3 && value < 4) {
    color = 'bg-orange-400';
    status = 'moderate';
  } else if (value >= 4 && value < 5) {
    color = 'bg-orange-600';
    status = 'high';
  } else {
    color = 'bg-red-400';
    status = 'high';
  }

  return {
    color,
    status,
  };
}

export function getToday() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const d = new Date();
  return days[d.getDay()];
}

export function getDateByIndex(idx: number) {
  if (idx < 0) return;
  var date = new Date();
  return moment(date.setDate(date.getDate() + idx + 1))?.format('MMMM Do - ddd');
}

export function getCardinalDirection(angle: number) {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  return directions[Math.round(angle / 45) % 8];
}
