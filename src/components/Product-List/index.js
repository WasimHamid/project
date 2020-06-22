import React from 'react';
import Product from '../Product/index';
import Title from '../Title/index';
import { ProductConsumer } from '../context'

class ProductList extends React.Component {
    render() {
        return (
            <>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='our' title='products'></Title>

                        <div className='row'>
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductList;