function Card() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-pink-100 gap-20" >
            <div className="bg-white p-5 rounded-xl shadow-lg max-w-xs" >
                <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                    className="w-full h-40 object-cover rounded-lg" />

                <h2 className="text-lg font-bold mt-3">Beautiful Orchid</h2>
                <p className="text-gray-600 text-sm mt-1">
                    Hello Everyone
                </p>

                <button className="mt-6 w-full bg-red-400 text-white py-2 rounded-lg hover:bg-orange-400">
                    Submit
                </button>

            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg max-w-xs" >
                <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                    className="w-full h-40 object-cover rounded-lg" />

                <h2 className="text-lg font-bold mt-3">Beautiful Orchid</h2>
                <p className="text-gray-600 text-sm mt-1">
                    Hello Everyone
                </p>

                <button className="mt-6 w-full bg-red-400 text-white py-2 rounded-lg hover:bg-orange-400">
                    Submit
                </button>

            </div>
            <div className="bg-white p-5 rounded-xl shadow-lg max-w-xs" >
                <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                    className="w-full h-40 object-cover rounded-lg" />

                <h2 className="text-lg font-bold mt-3">Beautiful Orchid</h2>
                <p className="text-gray-600 text-sm mt-1">
                    Hello Everyone
                </p>

                <button className="mt-6 w-full bg-red-400 text-white py-2 rounded-lg hover:bg-orange-400">
                    Submit
                </button>

            </div>

        </div>
    );

}

export default Card;