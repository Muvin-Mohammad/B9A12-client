
import { Helmet } from 'react-helmet-async'


import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../Shared/LoadingSpinner'
import { useParams } from 'react-router-dom'
import Container from '../../Shared/Container'
import ApartmentReservation from './ApartmentReservation'
import Heading from '../../Shared/Heading'
import useAxiosRegular from '../../hooks/useAxiosRegular'
// import { axiosRegular } from '../../hooks/useAxiosRegular'


const ApartmentDetails = () => {

    const { id } = useParams();

    const axiosRegular = useAxiosRegular()


    const { data: apartment = {}, isLoading } = useQuery(
        {
            queryKey: ['apartment', id],
            queryFn: async () => {
                const { data } = await axiosRegular.get(`/apartment/${id}`);
                // console.log(data);
                return data
            }
        }
    )


    if (isLoading) return <LoadingSpinner />

    console.log(apartment)

    return (
        <Container>
            <Helmet>
                <title>{apartment?.title}</title>
            </Helmet>
            {apartment && (
                <div className='max-w-screen-lg mx-auto'>
                    {/* Header */}
                    <div className='flex flex-col gap-6'>
                        <div>
                            <Heading title={apartment.title} subtitle={apartment.location} />
                            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                                <img
                                    className='object-cover w-full'
                                    src={apartment.image}
                                    alt='header image'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        {/* Room Info */}
                        <div className='col-span-4 flex flex-col gap-8'>
                            <div className='flex flex-col gap-2'>
                                <div
                                    className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                                >
                                    <div>Hosted by {apartment?.host?.name}</div>

                                    <img
                                        className='rounded-full'
                                        height='30'
                                        width='30'
                                        alt='Avatar'
                                        src={apartment?.host?.image}
                                    />
                                </div>
                                <div
                                    className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
                                >
                                    <div>{apartment?.guests} guests</div>
                                    <div>{apartment?.bedrooms} rooms</div>
                                    <div>{apartment?.bathrooms} bathrooms</div>
                                </div>
                            </div>

                            <hr />
                            <div
                                className='
          text-lg font-light text-neutral-500'
                            >
                                {apartment?.description}
                            </div>
                            <hr />
                        </div>

                        <div className='md:col-span-3 order-first md:order-last mb-10'>
                            {/* ApartmentReservation */}
                            <ApartmentReservation apartment={apartment} />
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default ApartmentDetails
