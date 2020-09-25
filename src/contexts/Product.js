import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import API from './../axios/api';

export const ProductContext = React.createContext();

export const ProductProvider = props => {
    const [products, setProducts] = useState([]);
    const [productsAll, setProductsAll] = useState([]);
    const [latedProducts, setLatedProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [filters, setFilter] = useState({
        limit: 12,
        page: 1,
        category: '',
        sortBy: ''
    })
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const latedProducts = (await API.get(`lastedProducts`)).data;
            const featuredProducts = (await API.get(`featuredProducts`)).data;
            const productsAll = (await API.get(`products`)).data;
            setLatedProducts(latedProducts);
            setFeaturedProducts(featuredProducts);
            setProductsAll(productsAll)
        }
        fetchData();
    }, [])


    useEffect(() => {
        async function fetchData() {
            const paramsString = queryString.stringify(filters);
            const data = (await API.get(`products?${paramsString}`)).data;
            setProducts(data.products);
            setTotalPages(data.totalPages);
        }
        fetchData();
    }, [filters])

    const productsSorted = (e) => {
        setFilter({
            ...filters,
            page: 1,
            sortBy: e.target.value
        })
        setProducts([]);
    }

    const handleButtonNext = () => {
        if (filters.page === totalPages) {
            return;
        }
        setFilter({
            ...filters,
            page: filters.page += 1
        })
        setProducts([]);
    }

    const handleButtonPrev = () => {
        if (filters.page === 1) {
            return;
        }
        setFilter({
            ...filters,
            page: filters.page -= 1
        })
        setProducts([]);
    }

    const handleSelect = (number) => {
        setFilter({
            ...filters,
            page: number
        })
        setProducts([]);
    }

    const productsFiltered = (e, category) => {
        setFilter({
            ...filters,
            page: 1,
            category,
            sortBy: ''
        })
        e.target.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].value = 'default';
        setProducts([]);
    }

    const setProductsDefault = () => {
        setProducts([]);
        setFilter({
            ...filters,
            page: 1,
        })
    }

    return (
        <ProductContext.Provider
            value={{ products, latedProducts, featuredProducts, productsSorted, productsFiltered, handleButtonNext, handleButtonPrev, handleSelect, filters, totalPages, productsAll, setProductsDefault }}
        >
            {props.children}
        </ProductContext.Provider >
    );
}
