/* @flow */

const _camelCase = require('camelcase');

export function has2xxResponse(res: Object): boolean {
  return res.responseCode >= 200 && res.responseCode < 300;
}

export function sortAlpha(a: string, b: string): number {
  function getDigit(str: string, i: number): string {
    let digit = '';
    while (isDigit(str[i])) {
      digit += str[i++];
    }
    return digit;
  }
  const isDigit = c => c >= 0 && c <= 9;
  const shortLen = Math.min(a.length, b.length);
  for (let i = 0, i2 = 0; i < shortLen; i++, i2++) {
    let aChar = a.charAt(i);
    let bChar = b.charAt(i2);
    if (isDigit(aChar)) {
      aChar = getDigit(a, i);
      i += aChar.length - 1;
    }
    if (isDigit(bChar)) {
      bChar = getDigit(b, i2);
      i2 += bChar.length - 1;
    }
    if (aChar.length === 1 && bChar.length === 1) {
      aChar = aChar.charCodeAt(0);
      bChar = bChar.charCodeAt(0);
    }
    if (aChar !== bChar) {
      return aChar - bChar;
    }
  }
  return a.length - b.length;
}

export function entries<T>(obj: ?{[key: string]: T}): Array<[string, T]> {
  const entries = [];
  if (obj) {
    for (const key in obj) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}

export function removePrefix(pattern: string, prefix: string): string {
  if (pattern.startsWith(prefix)) {
    pattern = pattern.slice(prefix.length);
  }

  return pattern;
}

export function removeSuffix(pattern: string, suffix: string): string {
  if (pattern.endsWith(suffix)) {
    return pattern.slice(0, -suffix.length);
  }

  return pattern;
}

export function addSuffix(pattern: string, suffix: string): string {
  if (!pattern.endsWith(suffix)) {
    return pattern + suffix;
  }

  return pattern;
}

export function hyphenate(str: string): string {
  return str.replace(/[A-Z]/g, match => {
    return '-' + match.charAt(0).toLowerCase();
  });
}

export function camelCase(str: string): ?string {
  if (/[A-Z]/.test(str)) {
    return null;
  } else {
    return _camelCase(str);
  }
}

export function compareSortedArrays<T>(array1: Array<T>, array2: Array<T>): boolean {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0, len = array1.length; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
