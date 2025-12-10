const Product = ({products})=>{
    
    return(
         <div className="bg-gray-50 p-4">
                <h2 className="text-lg font-bold mb-2">Products</h2>
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                    <ul className="space-y-2">
                        {products.map(product => (
                            <li key={product.id} className="border p-2 rounded hover:bg-gray-100">
                                <p className="font-semibold">{product.title}</p>
                                <p className="text-green-600">${product.price}</p>
                                <p className="text-green-600">${product.catagory}</p>
                                <p className="text-green-600">${product.description}</p>
                                <p className="text-green-600">${product.image}</p>
                                
                            </li>
                        ))}
                    </ul>
                )}``
            </div>
    )
}
export default Product;