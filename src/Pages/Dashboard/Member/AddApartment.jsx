import React, { useState } from 'react';
import AddApartmentForm from '../../../components/Form/AddApartmentForm';

const AddApartment = () => {

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);


    // date range handler
    const handleDates = item => {
        console.log(item);
        setDates(item.selection)
    }


    return (
        <div>
            <h2>Add Apartment ...</h2>

            <AddApartmentForm dates={dates} handleDates={handleDates}></AddApartmentForm>
        </div>
    );
};

export default AddApartment;