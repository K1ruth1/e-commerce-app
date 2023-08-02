import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { Dimmer, Loader, Grid } from 'semantic-ui-react';

function ItemsDisplay() {
  const [products, setProducts] = useState([]);
  // const BASE_URL = 'http://api.fakeshop-api.com';
  // const Endpoint = '/products/getAllProducts';
  // const apiURL =  BASE_URL`${Endpoint}`

  // Fetching data operation

  const getProductsForMe = async () => {
    try {
      const res = await fetch(
        `http://ecommerce.muersolutions.com/api/v1/products`,
        {
          method: 'GET',
          Accept: 'application.json',
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } else {
        console.log('Failed to fetch data:', res.status, res.statusText);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProductsForMe();
  }, []);

  const renderProducts = products?.map((product) => (
    <Grid.Column key={product.id}>
      <ItemCard product={product} />
    </Grid.Column>
  ));

  return (
    <div>
      <div className="items-display-container">
        {products.length === 0 ? (
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        ) : (
          <Grid relaxed columns={4} stackable>
            {renderProducts}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default ItemsDisplay;
