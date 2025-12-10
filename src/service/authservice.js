export const registerUser = async (userData) => {
    console.log(" Mock POST /api/auth/register", userData);


    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
        status: "success",
        message: "Register fake success",
        data: userData,
    };
};

export const loginUser = async (userData) => {
    console.log(" Mock POST /api/auth/login", userData);

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (userData.userEmail === "test@gmail.com" && userData.password === "123456") {
        return {
            status: "success",
            token: "FAKE_TOKEN_123",
            message: "Login fake success",
        };
    } else {
        throw new Error("Invalid email or password");
    }
};
