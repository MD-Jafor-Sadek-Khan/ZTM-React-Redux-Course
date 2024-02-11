import Button from '../Button/Buttom.component'
import './product-card.styles.scss'


const ProductCard = ({product:{name, imageUrl, price}})=>{

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button type='inverse'>Add to Cart</Button>
        </div>
    )
}

export default ProductCard