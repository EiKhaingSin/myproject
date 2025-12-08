class UserService {
    static async createUser(userData) {
        const response = await 
        fetch("https://fakestoreapi.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        return response.json();
    }

    static async login(email, password) {
        return email === "eikhaingsin@gmail.com" && password === "khaing@123";
    }
}

export default UserService;
