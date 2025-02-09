import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='h-screen w-full'>
        <section className='h-full w-full flex items-center justify-center'>
        <SignUp signInUrl='/sign-in'/>
        </section>
    </main>
  )
}

export default SignUpPage