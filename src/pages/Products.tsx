import LstProducts from '../components/LstProducts'
import lstProducts from '../model/jsonProducts'


export default function Products(){

    return(
        <>
        <h3>Products</h3>

        <LstProducts lstProducts={lstProducts} />
        </>
    );
}