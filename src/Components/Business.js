import React from 'react';

// Business component 
const Business = ({business}) => {
    return (
        <div className="business">
            <img src={business.image} alt={business.name}/>
            <h2>{business.name}</h2>
            <p>{business.city} {business.state} {business.zipcode}</p>
            <p>Category: {business.category}</p>
            <p>Rating: {business.rating}</p>
            <p>Reviews: {business.reviewCount}</p>
        </div>
    );
};

// Hardcoded business object
const hardcodedBusiness = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  };

// Export component
export {Business, hardcodedBusiness};