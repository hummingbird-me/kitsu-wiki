export function find<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    return null;
  }
}

export function save<T>(key: string, value: T): void {
  const stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

export function removeItem(key: string): void {
  localStorage.removeItem(key);
}

export function clear(): void {
  localStorage.clear();
}
