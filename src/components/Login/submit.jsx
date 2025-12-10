const SubmitButton = ({ isLogin, loading }) => {
    return (
        <button
            type="submit"
            disabled={loading}
            className={`w-[200px] py-2 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-orange-400 hover:bg-orange-300"
                } transition duration-200`}
        >
            {loading ? "Processing..." : isLogin ? "Login" : "Register"}
        </button>
    );
};

export default SubmitButton;
