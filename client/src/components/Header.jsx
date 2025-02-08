import React from 'react'

const Header = () => {
  return (
    <main className='h-20 w-full bg-white shadow-md'>
        <section className='container mx-auto h-full flex items-center justify-between'>
            <div>
                {/* <img src='https://via.placeholder.com/150' alt='logo' /> */}
                <span className='font-extrabold text-2xl'>Spectrum</span>
            </div>

            <div className='flex items-center justify-center gap-20'>
                <div>Home</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>Testimonials</div>
            </div>


            <div>
                <button className='bg-green-400 text-gray-800 text-sm px-4 py-3 rounded-full'>Get Started</button>
            </div>
        </section>
    </main>
  )
}

export default Header