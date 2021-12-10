import React from 'react'
import Builder from './Builder/Builder'
import './Controls.css'
import Button from '../UI/Button/Button'

const products=[
    {title : 'Product1', type:'product1'},
    {title : 'Product2', type:'product2'},
    {title : 'Product3', type:'product3'},
    {title : 'Product4', type:'product4'}
]

const Controls = (props) => {
    return (
        <div className="controls">
            <productsList />
            {products.map((item) => {
                return <Builder
                    key={item.title}
                    title={item.title} 
                    add={() => props.productAdd(item.type)}
                    remove={() => props.productRemove(item.type)}
                />
            })}
            <Button btnType="order-btn">Order</Button>
        </div>
    )
}

export default Controls