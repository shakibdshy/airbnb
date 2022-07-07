import React from 'react';
import type { NextPage } from 'next'
import Category from '../components/Category';
import Product from '../components/Product';

const Home: NextPage = () => {
  return (
    <>
      <Category />
      <Product />
    </>
  )
}

export default Home
