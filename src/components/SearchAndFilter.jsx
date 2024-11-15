
const SearchAndFilter = ({search, setSearch, category, setCategory}) => {
   

    return ( 
        <div className="search_filter">
            <input type="text"
            placeholder="Søg..."
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Alle</option>
                <option value="beauty">Skønhed</option>
                <option value="fragrances">Parfume</option>
                <option value="furniture">Møbler</option>
                <option value="groceries">Daglivarer</option>

                
            </select>
        </div>
     );
}
 
export default SearchAndFilter;