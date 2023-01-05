'use client';

import React, { useState, useEffect } from 'react';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://connect.squareup.com/v2/catalog/list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.SQUARE_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        object_types: ['ITEM'],
        location_ids: ['L9TZK890FAC2C'],
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMenuItems(result.objects);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.variations[0].price_money.amount / 100}
          </li>
        ))}
      </ul>
    );
  }
}

export default Menu;
