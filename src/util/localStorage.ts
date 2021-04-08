export function findLocalStorageRecord<T>(key: string, initialValue: T): T {
  try {
    const item = localStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : initialValue;
  } catch (error) {
    return initialValue;
  }
}

export function updateLocalStorageRecord<T>(key: string, value: T): void {
  const stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}
