import React, { Component } from 'react'
import Controls from '../../components/controls/Controls'
import Wrapper from '../../hoc/Wrapper'

const prices = {
    product1: 50,
    product2: 80,
    product3: 30,
    product4: 90
}

class Shopping extends Component {
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0
        },
        totalPrice: 0
    }

    addProductHandler = (type) =>{
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1
        const updatedProducts ={
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice + priceAdd
        this.setState({
            products: updatedProducts , totalPrice: newPrice
        })
    }

    

    removeProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount
        const priceRemove = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice - priceRemove
        this.setState({
            products: updatedProducts , totalPrice: newPrice
        })
    }

    render() {
        return (
            <Wrapper>
                <Controls 
                    productAdd={this.addProductHandler}
                    productRemove={this.removeProductHandler}
                    />
            </Wrapper>
        )
    }
}

export default Shopping
