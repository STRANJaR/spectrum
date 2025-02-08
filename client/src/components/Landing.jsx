

const Landing = () => {
  return (
    <main className='h-[800px] w-full'>
        <section className='container mx-auto h-full py-6'>
            <div className=' h-full bg-gray-900 text-white flex flex-row justify-between p-30 rounded-4xl '>
                <div className='w-1/2'>
                    <h1 className='font-extrabold text-6xl'>Unleash the full potential of Spectrum</h1>
                    <p 
                    className='text-sm font-light py-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto amet quisquam incidunt officiis esse, possimus fuga sit dicta assumenda voluptate? Dicta nihil, veniam culpa odit eius voluptate ipsum iusto laudantium.
                    </p>

                <button className='bg-green-400 text-gray-800 text-sm px-16 py-4 rounded-full'>Get Started</button>

                <div className='flex flex-row gap-10 py-16'>

                    <div className='flex flex-col'>
                        <span className='font-extrabold text-6xl'>200+</span>
                        <span className='font-medium'>Active users</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-extrabold text-6xl'>4.6</span>
                        <span className='font-medium'>Rating</span>
                    </div>
                    </div>             
                </div>
                <div className='h-full w-1/2  flex justify-center items-center'>
                    <img 
                    className=''
                    width={500}
                    src="./landing-new.svg" alt="landing-image" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Landing