import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";

function UserLogin({ onLogin }) {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: "", password: "" });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) throw new Error('Login failed');
                return response.json();
            })
            .then(userData => {
                onLogin(userData);
                setSuccessMessage('Login successful');
                setOpenSnackBar(true);
            })
            .catch(() => {
                setSuccessMessage('Failed to login');
                setOpenSnackBar(true);
            });
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="username"
                    label="Username"
                    value={formData.username}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ mb: 2 }}
                />
                <Box display="flex" gap="5px">
                    <TextField
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        value={formData.password}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Button onClick={() => setShowPassword(!showPassword)} variant="contained">
                        {showPassword ? "HIDE" : "SHOW"}
                    </Button>
                </Box>
                <Button type="submit" variant="contained">Login</Button>
            </form>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackBar(false)}
            >
                <Alert severity={successMessage.includes('Failed') ? "error" : "success"}>
                    {successMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default UserLogin;