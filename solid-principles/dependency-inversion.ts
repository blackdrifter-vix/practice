// Before (Violates DIP):

class UserService {
  constructor(private localStorage: LocalStorage) {}

  saveUser(user: User) {
    this.localStorage.setItem("user", JSON.stringify(user));
  }
}

// After (DIP Applied):

interface DataStore {
  setItem(key: string, value: string): void;
}

class UserService {
  constructor(private dataStore: DataStore) {}
}