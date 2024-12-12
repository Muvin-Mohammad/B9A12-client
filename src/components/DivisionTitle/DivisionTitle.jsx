import React from 'react';

const DivisionTitle = ({ title, subTitle }) => {
    return (
        <div className='md:w-5/12 my-8 mx-auto text-center'>
            <p className='text-orange-600 mb-2'>--- {subTitle} ---</p>
            <h2 className='text-4xl font-semibold text-blue-800 border-y-4 uppercase  py-2'>{title}</h2>
        </div>
    );
};

export default DivisionTitle;