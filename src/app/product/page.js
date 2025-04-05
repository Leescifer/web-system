import styles from '@styles/product.module.scss'
import ProductList from '@/components/ProductList'


export default async function ProductsPage(){
    const request = await fetch('https://fakestoreapi.com/products')
    const products = await request.json()

    return(
        <div className={styles.container}>
            <h1 className=
            {styles.title}>
                Display Products
            </h1>
            <ProductList products={products}/>
        </div>
    )
}