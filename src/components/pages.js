import React from 'react';

const dashboard = () => {
    return (
        <div className="home">
            <h1>Dashboard</h1>
        </div>
    )
}

const orders = () => {
    return (
        <div className="home">
            <h1>Orders</h1>
        </div>
    )
}

const products = () => {
    return (
        <div className="home">
            <h1>Products</h1>
        </div>
    )
}

const addProducts = () => {
    return (
        <div className="home">
            <h1>Add Products</h1>
        </div>
    )
}

const productCategories = () => {
    return (
        <div className="home">
            <h1>Product Categories</h1>
        </div>
    )
}

const productVariations = () => {
    return (
        <div className="home">
            <h1>Product Variations</h1>
        </div>
    )
}

const productCollections = () => {
    return (
        <div className="home">
            <h1>Product Collections</h1>
        </div>
    )
}

const webstore = () => {
    return (
        <div className="home">
            <h1>Webstore</h1>
        </div>
    )
}

const setting = () => {
    return (
        <div className="home">
            <h1>Setting</h1>
        </div>
    )
}

const modules = () => {
    return (
        <div className="home">
            <h1>Modules</h1>
        </div>
    )
}

let content = {};
content.dashboard = dashboard;
content.orders = orders;
content.products = products;
content.addProducts = addProducts;
content.productCategories = productCategories;
content.productVariations = productVariations;
content.productCollections = productCollections;
content.webstore = webstore;
content.setting = setting;
content.modules = modules;

export default content;