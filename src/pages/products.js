import {useState, useEffect} from 'react';
import Link from 'next/link';
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import SearchAndFilter from "../components/SearchAndFilter.jsx";

const ProductsPage = () => {

    const [products, setProducts] = useState([]); // Holder data for alle produkter
    const [cart, setCart] =useState([]); // Holder produkter i kurven
    const [search, setSearch] = useState(''); // State for søgeord indtastet af brugeren
    const [category, setCategory] = useState(''); // State for valgt kategori til filtrering

   
   // Henter produktdata fra API'en, når det bliver loadet første gang
    useEffect(() =>{
        const fetchProducts = async () =>{
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        };
        fetchProducts();
    }, []);

    //Tilføjer produkt til kurv
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    //Filtrere på kategori og søgeord
    const filteredProducts = products.filter((product) => {
        return (
            product.title.toLowerCase().includes(search.toLowerCase()) && (category ? product.category === category : true)
        );
    });

    return ( 
        <div>
            <h1>Produkter</h1>
            <SearchAndFilter search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
            <ProductList products={filteredProducts} addToCart={addToCart} />
            <Cart cart={cart} />
            
        {/*Link til betalingssiden, hvor de valgtes produkters id er som URL-parameter */}
            <Link href={`/payment?items=${cart.map(item => item.id).join(',')}`}> 
                <a>Gå til betaling ({cart.length} varer)</a>
            </Link>
         </div>

     )
    }
 
export default ProductsPage;