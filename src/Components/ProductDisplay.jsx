import React, { useState, useEffect } from 'react';
import data from './data.json';

const ProductDisplay = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { products } = data;

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
      const rowItems = products.slice(i, i + 4).map((product, index) => (
        <div key={index} className="product-item">
          <img
            src={product.image_urls[imageIndex]}
            alt={product.name}
          />
          <p className='quantity'>{product.quantity}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ));
      rows.push(<div key={i} className="product-row">{rowItems}</div>);
    }
    return rows;
  };

  return <div className='scroll'>{renderRows()}</div>;
};

export default ProductDisplay;
