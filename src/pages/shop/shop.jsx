import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';

import './shop.css';
export const Shop = () => {
  return (
    <>
      <Navbar />
      <div className='shop'>
          <div className='shopTitle'>
              <h1> Quesillos y Quesadillas <br/> Pitalito</h1>
          </div>
          <div className='products'>
              {PRODUCTS.map((product) => (
                  <Product data={product}/>
              ))}
          </div>
      </div>
      <Footer />
    </>
  )
};