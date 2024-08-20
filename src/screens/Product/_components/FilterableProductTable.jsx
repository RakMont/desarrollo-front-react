import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {useState} from "react";

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div style={{width:'200px', margin: '16px auto', textAlign:'left'}}>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
        );
}
export default FilterableProductTable;
