import {useState, useEffect} from 'react';
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import SearchAndFilter from "../components/SearchAndFilter.jsx";

const ProductsPage = ({ cart, setCart }) => {

    const [products, setProducts] = useState([]); // Holder data for alle produkter
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
        setCart((prevCart) => {

            //Tjekker om produktet allerede er i kurven
            const existingItem = prevCart.find((item) => item.product.id === product.id);

            if (existingItem){
                return prevCart.map((item) =>
                item.product.id === product.id
            ? {...item, quantity: item.quantity +1}
            :item
            );
            } else{
                return[...prevCart, {product, quantity: 1}];
            }
        })
    };

    //Fjerner fra kurv
    const removeFromCart = (product) => {
        setCart((prevCart) =>{
            const existingItem = prevCart.find((item) => item.product.id === product.id);
            if(existingItem && existingItem.quantity > 1){
                return prevCart.map((item)=>
                item.product.id === product.id
            ? {...item,quantity: item.quantity -1}
            :item
            );
            } else{
                return prevCart.filter((item)=> item.product.id !== product.id)
            }
        })
    }

    //Filtrere på kategori og søgeord
    const filteredProducts = products.filter((product) => {
        return (
            product.title.toLowerCase().includes(search.toLowerCase()) && (category ? product.category === category : true)
        );
    });

    return ( 
        <div className='container_products'>
            <h1>Produkter</h1>
            <SearchAndFilter search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
            <p>{filteredProducts.length} varer tilgængelige.</p>
            <div className='product_cart'>
            <ProductList products={filteredProducts} addToCart={addToCart} />
            <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
            </div>

       
         </div>

     )
    }
 
export default ProductsPage;