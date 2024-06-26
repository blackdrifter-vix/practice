// Before
interface UserInterface {
    login(): void;
    logout(): void;
    changePassword(): void;
    createPost(): void;
    deletePost(): void;
}

// After
interface AuthenticationInterface {
    login(): void;
    logout(): void;
    changePassword(): void;
}

interface PostManagementInterface {
    createPost(): void;
    deletePost(): void;
}
