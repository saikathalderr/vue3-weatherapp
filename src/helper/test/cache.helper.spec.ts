import { describe, expect, test } from 'vitest';

import { ICache } from '../../interface/cache.interface';
import { getCacheKey, isCached, setCache } from '../cache.helper';

describe('getCacheKey()', () => {
  test('returns the correct cache key', () => {
    // Arrange
    const lat = 123.45;
    const lon = -67.89;
    const key = 'some_key';
    const expectedCacheKey = '123.45--67.89-some_key';

    // Act
    const result = getCacheKey({ lat, lon, key });

    // Assert
    expect(result).toEqual(expectedCacheKey);
  });
});

describe('isCached()', () => {
  test('returns undefined if the key is not in localStorage', () => {
    // Arrange
    const key = 'non_existent_key';

    // Act
    const result = isCached({ key });

    // Assert
    expect(result).toBeUndefined();
  });

  test('returns undefined if the cached value has expired', () => {
    // Arrange
    const key = 'expired_key';
    const cacheValue = {
      value: JSON.stringify({ name: 'John', age: 30 }),
      time: Date.now() - 6 * 60 * 1000, // set cache time to 6 minutes ago (TTL is 5 minutes)
    };
    localStorage.setItem(key, JSON.stringify(cacheValue));

    // Act
    const result = isCached({ key });

    // Assert
    expect(result).toBeUndefined();
    expect(localStorage.getItem(key)).toBeNull(); // check that the expired cache value was removed from localStorage
  });

  test('returns the cached value if it has not expired', () => {
    // Arrange
    const key = 'valid_key';
    const cacheValue = {
      value: JSON.stringify({ name: 'John', age: 30 }),
      time: Date.now() - 3 * 60 * 1000, // set cache time to 3 minutes ago (TTL is 5 minutes)
    };
    localStorage.setItem(key, JSON.stringify(cacheValue));

    // Act
    const result = isCached({ key });

    // Assert
    expect(result).toEqual({ name: 'John', age: 30 });
  });
});

describe('setCache()', () => {
  test('sets the cache value in localStorage', () => {
    // Arrange
    const key = 'cached_key';
    const value = { name: 'John', age: 30 };

    // Act
    setCache({ key, value });

    // Assert
    const cacheValue = localStorage.getItem(key);
    expect(cacheValue).toBeDefined();
    if (cacheValue) {
      const parsedCacheValue = JSON.parse(cacheValue) as ICache;
      expect(parsedCacheValue.value).toEqual(JSON.stringify(value));
    }
  });
});
