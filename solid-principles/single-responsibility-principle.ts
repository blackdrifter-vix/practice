//Single Responsibility Principle
class User {
    name: string;
    email: string;
    
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // User class is responsible only for user-related data
}

class UserService {
    createUser(name, email) {
        return new User(name, email);
    }

    // UserService class is responsible for user-related operations
}
