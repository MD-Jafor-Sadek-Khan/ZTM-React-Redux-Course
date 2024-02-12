import { useContext } from 'react'
import Button from '../Button/Buttom.component'
import './product-card.styles.scss'
import { CartIconContext } from '../../Context/CartIcon.context'


const ProductCard = ({product})=>{
    const {name, imageUrl, price} = product
    const {addItemsToCart}=useContext(CartIconContext)
    const addProductToCart = () =>{
        addItemsToCart(product)
    }
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button type='inverse' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard