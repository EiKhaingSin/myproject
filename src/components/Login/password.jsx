const PasswordInput = ({ value, onChange }) => {
    return (
        <input
            type="password"
            placeholder="Password"
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
        />
    );
};

export default PasswordInput;
