
import { useEffect, useState } from 'react'
import Heading from '../../Shared/Heading'
import Container from '../../Shared/Container'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import Card from './Card'

import useAxiosSecure from '../../hooks/useAxiosSecure'
import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'



// import LoadingSpinner from '../Shared/LoadingSpinner'

const Apartments = () => {
    const axiosSecure = useAxiosSecure()


    const { data: apartments = [], isLoading } = useQuery(
        {
            queryKey: ['apartments'],
            queryFn: async () => {
                const { data } = await axiosSecure.get('/apartments');
                // console.log(data);
                return data
            }
        }
    )


    if (isLoading) return <LoadingSpinner />

    return (
        <Container>
            <div>
                <Helmet>
                    <title>Safoon Estate | apartments </title>
                </Helmet>
            </div>
            {apartments && apartments.length > 0 ? (
                <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                    {apartments.map(apartment => (
                        <Card key={apartment._id} apartment={apartment} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                    <Heading
                        center={true}
                        title='No Apartment Available In This Types!'
                        subtitle='Please Select Other Categories.'
                    />
                </div>
            )}
        </Container>
    )
}

export default Apartments
