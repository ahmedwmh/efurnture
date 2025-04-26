import React from 'react'

function AboutPage() {
  return (
    <section>
        <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>
          We Love

          <span className=' bg-blue-500 px-4 py-2 rounded-lg tracking-widest text-white'>
            Store
          </span>
        </h1>

        <p className='text-center mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor vitae deleniti, deserunt obcaecati alias blanditiis accusamus quibusdam nam temporibus repellendus eos maxime maiores placeat excepturi similique cum? Nihil, tempora maiores.
        </p>
    </section>
  )
}

export default AboutPage