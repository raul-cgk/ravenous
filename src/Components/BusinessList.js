import React from 'react';
import {Business, hardcodedBusiness} from './Business.js';

// BusinessList component
const BusinessList = () => {
    // Array of businesses
    const businesses = [hardcodedBusiness, hardcodedBusiness, hardcodedBusiness,];

    return (
        <div className="BusinessList">
            {
                businesses.map((business) => {
                    return <Business key={business.id} business={business} />
                })
            }
        </div>
    );
};

// Export component
export default BusinessList;