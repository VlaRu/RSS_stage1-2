function isLocalData(value: unknown): value is LocalData {
  if (value !== null && value !== undefined) {
    return true;
  }
  return false;
}

type LocalData = {
  [key: string]: string;
};

export default class LocalStorage {
  static save(key: string, data: string) {
    const JSONdata = JSON.stringify(data);
    window.localStorage.setItem(key, JSONdata);
  }

  static get(key: string): LocalData | null {
    const data = localStorage.getItem(key);
    if (isLocalData(data)) {
      return JSON.parse(data);
    }

    return null;
  }

  static clear() {
    window.localStorage.clear();
  }
}
