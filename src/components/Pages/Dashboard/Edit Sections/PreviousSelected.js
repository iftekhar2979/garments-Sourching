import React from 'react';
import Heading from '../../../Utility-Component/Heading';

const PreviousSelected = ({ data }) => {
  const {
    companyName,
    buyerName,
<<<<<<< HEAD
    orderNumber,
    productName,
    range,
=======
    poNumber,
    productName,
    quantity,
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
    targetDate,
    orderedDate,
    _id,
  } = data;
  return (
    <div className='border inline shadow-xl mx-4 p-10'>
      <Heading heading={'Previous selected'}></Heading>
      <div>
        <p className='font-bold text-xl inline'> Company : </p>
        <span className='text-xl'>{companyName}</span>
      </div>
      <div>
        <p className='font-bold text-xl inline'> Buyer : </p>
        <span className='text-xl'>{buyerName}</span>
      </div>
      <div>
        <p className='font-bold text-xl inline'> Product : </p>
        <span className='text-xl'>{productName}</span>
      </div>
      <div>
<<<<<<< HEAD
        <p className='font-bold text-xl inline'> Order Number : </p>
        <span className='text-xl'>{orderNumber}</span>
      </div>
      <div>
        <p className='font-bold text-xl inline'> Range : </p>
        <span className='text-xl'>{range}</span>
=======
        <p className='font-bold text-xl inline'> P.O Number : </p>
        <span className='text-xl'>{poNumber}</span>
      </div>
      <div>
        <p className='font-bold text-xl inline'> Quantity : </p>
        <span className='text-xl'>{quantity}</span>
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
      </div>
      <div>
        <p className='font-bold text-xl inline'> Target Date : </p>
        <span className='text-xl'>{targetDate}</span>
      </div>
      <div>
        <p className='font-bold text-xl inline'> Order Date : </p>
        <span className='text-xl'>{orderedDate}</span>
      </div>
    </div>
  );
};

export default PreviousSelected;
