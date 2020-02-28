import React from 'react'
import CustomButton from '../../components/custom-button/custom-button'
import './collection-item.scss'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'

const CollectionItem = ({item, formAddItem}) => {
    const { name, price, imageUrl } = item
    return(
        <div className='collection-item'>
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => {formAddItem(item)}}>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchtoProps = dispatch => ({
    formAddItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchtoProps)(CollectionItem)