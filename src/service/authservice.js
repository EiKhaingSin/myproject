export const registerUser = async (userData) => {
    try {
        const response = await fetch("https://yourapi.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await fetch("https://yourapi.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};
