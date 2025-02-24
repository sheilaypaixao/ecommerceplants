import { useOutletContext } from "react-router-dom";
import LstProducts from '../components/LstProducts'

export default function Products(){
    const lstProducts = useOutletContext();

    return(
        <>
        <h3>Products</h3>

        <LstProducts lstProducts={lstProducts} />
        </>
    );
}