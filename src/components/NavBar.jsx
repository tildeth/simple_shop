import Link from "next/link";

const NavBar = ({cartCount}) => {
    return (  
        <nav>
            <ul>
                <li>
                    <Link href="/">Forside</Link>
                </li>
                <li>
                    <Link href="/products">Produkter</Link>
                </li>
                <li>
                    <Link href="/payment">Kurv{cartCount}</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default NavBar;