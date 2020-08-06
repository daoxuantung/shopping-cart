import React from 'react';
import Footer from '../components/Footer/Footer';

import ProductSection from '../components/ProductSection/ProductSection';
import ProductTitle from '../components/ProductTitle/ProductTitle';
import { ProductProvider } from '../contexts/Product';
import PaginationProduct from '../components/Pagination/Pagination';

const Products = () => {
    return (
        <div className="Products">
            <ProductTitle />
            <ProductProvider>
                <ProductSection />
            </ProductProvider>
            <PaginationProduct />
            <Footer />
        </div>
    );
};

export default Products;