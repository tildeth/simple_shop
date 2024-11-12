const SearchAndFilter = ({search, setSearch, category, setCategory}) => {
    return ( 
        <div>
            <input type="text"
            placeholder="Søg..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Alle</option>
                <option value="beauty">Skønhed</option>
                <option value="fragrances">Parfume</option>

            </select>
        </div>
     );
}
 
export default SearchAndFilter;