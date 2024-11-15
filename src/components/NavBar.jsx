import Link from "next/link";

const NavBar = ({cartCount}) => {
    return (  
        <nav className="navbar">
            <ul className="navbar_list">
                <li className="navbar_item">
                    <Link href="/" className="navbar_link">Forside</Link>
                </li>
                <li className="navbar_item">
                    <Link href="/products" className="navbar_link">Produkter</Link>
                </li>
                <li className="navbar_item">
                    <Link href="/payment" className="navbar_link">Kurv ({cartCount})</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default NavBar;