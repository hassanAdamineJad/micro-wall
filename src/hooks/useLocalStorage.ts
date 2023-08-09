import {useEffect, useState} from "react";

/**
 * The `useLocalStorage` function is a custom hook in TypeScript that allows you to store and retrieve
 * values from the browser's local storage.
 *
 * @param string key The `key` parameter is a string that represents the key under which the value will
 * be stored in the local storage. It is used to retrieve and update the value associated with that
 * key.
 * @param T | (() => T) initialValue The `initialValue` parameter is the initial value that will be
 * stored in the local storage. It can be of any type `T` or a function that returns a value of type
 * `T`. If the value is not present in the local storage, this initial value will be used.
 *
 * @return The `useLocalStorage` function returns an array with two elements. The first element is the
 * current value stored in the local storage, and the second element is a function that can be used to
 * update the value in the local storage.
 */

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
): [T, typeof setValue] {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue === null) {
      if (typeof initialValue === "function") {
        return initialValue as () => T;
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
