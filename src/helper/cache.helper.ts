import { ICache } from '../interface/cache.interface';

export function getCacheKey({
  lat,
  lon,
  key,
}: {
  lat: number;
  lon: number;
  key: string;
}) {
  return `${lat}-${lon}-${key}`;
}

export function isCached({ key }: { key: string }) {
  const hasValue = localStorage.getItem(key);
  if (!hasValue) return;
  const { value, time: cacheTime } = JSON.parse(hasValue) as ICache;
  const minutes = (Date.now() - cacheTime) / 60000;
  if (minutes > 5) {
    // 5 min TTL
    localStorage.removeItem(key);
    return;
  }

  return JSON.parse(value);
}

export function setCache({ key, value }: { key: string; value: any }) {
  const payload: ICache = {
    time: Date.now(),
    value: JSON.stringify(value),
  };
  return localStorage.setItem(key, JSON.stringify(payload));
}
