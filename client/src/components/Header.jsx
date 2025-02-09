
import { Link } from 'react-router'
const Header = () => {
    return (
        <main className='h-20 w-full bg-white '>
            <section className='container mx-auto h-full flex items-center justify-between'>
                <div>
                    {/* <img src='https://via.placeholder.com/150' alt='logo' /> */}
                    <span className='font-extrabold text-2xl'>Spectrum</span>
                </div>

                <div className='flex items-center justify-center gap-20 text-base font-medium'>
                    <Link className='hover:text-blue-600 p-1 transition-all' to={'#'}>Home</Link>
                    <Link className='hover:text-blue-600 p-1 transition-all'  to={'/features'}>Features</Link>
                    <Link className='hover:text-blue-600 p-1 transition-all'  to={'#'}>Pricing</Link>
                    <Link  className='hover:text-blue-600 p-1 transition-all'  to={'#'}>Testimonials</Link>
                </div>


                <div>
                    <Link to={'/sign-in'} className='bg-green-400 text-gray-800 text-base px-10 py-3 rounded-full'>Sign In</Link>
                </div>
            </section>
        </main>
    )
}

export default Header