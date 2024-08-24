import FilterableProductTable from "./Product/_components/FilterableProductTable";
import {useDispatch, useSelector} from "react-redux";
import {setProductsList} from "../redux/products/productActions";
import {useEffect} from "react";

const Product= () => {
    const productsState = useSelector(
        (state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setProductsList([
                {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
                {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
                {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
                {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
                {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
                {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
            ])
        );
    }, []);
    return(
        <>
            <FilterableProductTable products={productsState.products}/>
        </>
    );
}
export default Product;
