
import { useContext } from 'react'
import logo from '../../assets/image/logo.png'

import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import { IoIosLogIn } from 'react-icons/io'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='flex gap-2 items-center hover:bg-blue-600  p-3 rounded'>
                    <img title='Safoon Estate' className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold '>Safoon Estate</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link className='block px-4 py-3 hover:bg-blue-600  transition font-semibold ' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='block px-4 py-3  hover:bg-blue-600  transition font-semibold' to='/apartments'>Apartment</Link>
                    </li>

                    {!user && (
                        <li>
                            <Link to='/login'>
                                <IoIosLogIn className='text-2xl'></IoIosLogIn>
                            </Link>
                        </li>
                    )}
                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50  hover:bg-blue-600 '>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10  hover:bg-blue-600 hover:rounded-full   text-xl font-bold rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content   mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link className='block justify-between read-only px-4 py-3  hover:bg-blue-600  transition font-semibold'>
                                    {user.displayName}
                                </Link>
                            </li>
                            <li>
                                <Link className='block px-4 py-3 hover:bg-blue-600  transition font-semibold' to='/dashboard'>Dashboard</Link>
                            </li>


                            <li className='mt-2'>
                                <button
                                    onClick={logOut}
                                    className='bg-gray-200 block  hover:bg-blue-600  text-center'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar