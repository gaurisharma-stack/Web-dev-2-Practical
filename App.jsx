// api = https://dummyjson.com/products  ,  
//fetch products only from product image only. Only 4 images should be render from product given dummy json api. After clicking next only, set of image i.e. 4 images should be displayed and after clicking previous button only, previous set of images i.e. 4 image should be displayed
import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Producttt imagesssss</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentProducts.map((product) => (
          <img key={product.id} src={product.thumbnail} alt={product.title} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previousssss
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Nexttttt
      </button>
    </div>
  );
};

export default App;