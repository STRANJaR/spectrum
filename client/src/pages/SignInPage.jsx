import { SignIn } from '@clerk/clerk-react'



const SignInPage = () => {
  return (
    <main className='h-screen w-full'>
        <section className='h-full w-full flex items-center justify-center'>
        <SignIn signUpUrl='/sign-up'/>
        </section>
    </main>
  )
}

export default SignInPage