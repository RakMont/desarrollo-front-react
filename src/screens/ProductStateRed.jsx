import {setProductsList} from "../redux/products/productActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const ProductStateRed = () => {
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

    return (
        <div>
            Product State
            {JSON.stringify(productsState.products)}
        </div>
    );
}
export default ProductStateRed;
