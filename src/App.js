import React from 'react';
import SearchBar from './Components/SearchBar';
import BusinessList from './Components/BusinessList';

function App() {
  const searchYelp = (term, location) => {
    // Implement Yelp API search functionality here
    console.log('Searching Yelp for:', term, location);
  };

  // Dummy data for demonstration purposes
  const businesses = [
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    // Add more businesses as needed
  ];

  return (
    <div className="App">
      <h1>My Yelp-like App</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
