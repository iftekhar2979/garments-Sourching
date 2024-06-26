
import ProductDeliveryStatement from './ProductDeliveryStatement';
import useDocumentTitle from '../../../../CustomHooks/useDocumentTitle';
import padPrint from '../../../../../Assets/Pad-Print.png'
import { current } from '@reduxjs/toolkit';
import { useState } from 'react';
import { format } from 'date-fns';
const DeliveryStatement = ({ deliveryStatement, piNumber, buyerName }) => {
    useDocumentTitle(`DELIVERY STATEMENT :${piNumber}`)

    return (
        <>
            <section>

                <div className='flex justify-center' >
                    <img src={padPrint} className='w-2/3'></img>
                    {/* <div className='flex flex-col justify-center ml-4'>
                            <h2 className='text-center text-3xl font-bold  font-MonoSerit piHeading' >The XYZ Sourcing And International</h2>
                            <h5 className='text-center text-xl font-bold piHeading timesNewRoman'>An Unique Trims Solution</h5>
                        </div> */}
                </div>
                <div className='flex justify-between my-4 mx-8'>
                    <div >

                    <span className='text-md'>Buyer  : {buyerName}</span>
                    <span className='text-md block'>PI NUMBER  : {piNumber}</span>
                    </div>
                    <span className='text-2xl font-bold'>DELIVERY STATEMENT</span>
                    <span className='text-md'>Date  : {format(new Date(), 'PP')}</span>
                </div>
                <ProductDeliveryStatement data={deliveryStatement} />
            </section>
        </>
    )
};
export default DeliveryStatement;