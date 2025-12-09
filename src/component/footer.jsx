export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10  mt-auto bottom-0 left-0 w-full fixed">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-white">MyBrand</h2>
          <p className="mt-3 text-sm">
            Your trusted online service provider.  
            Quality • Speed • Support
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Services</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p>Email: support@mybrand.com</p>
          <p>Phone: +95 987654321</p>

          <div className="flex gap-4 mt-3">
            <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-lg"></div>
          </div>
        </div>

      </div>

   
      <div className="text-center mt-6 border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>

    </footer>
  );
}
