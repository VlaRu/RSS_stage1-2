function isLocalData(value: unknown): value is LocalData {
  if (value !== null && value !== undefined) {
    return true;
  }
  return false;
}

type LocalData = string;

export default class LocalStorage {
  static save(key: string, data: unknown) {
    const JSONdata = JSON.stringify(data);
    window.localStorage.setItem(key, JSONdata);
  }

  static get(key: string): LocalData | null {
    const strData = localStorage.getItem(key);

    if (!strData) {
      return null;
    }

    try {
      const unknownData: unknown = JSON.parse(strData);

      if (!isLocalData(unknownData)) {
        return null;
      }

      return unknownData;
    } catch (err) {
      return null;
    }
  }

  static has(key: string): boolean {
    return Boolean(LocalStorage.get(key));
  }

  static clear() {
    window.localStorage.clear();
  }
}
