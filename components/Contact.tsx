import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { PageInfo } from '@/typings'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
  pageInfo: PageInfo;
}

export default function Contact({}: Props) {
  const { register, handleSubmit  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData: Inputs) => {
    window.location.href=`mailto:codecatalyst@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.  ${formData.message} (${formData.email})`
  }

  return (
    <div className='relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10 w-fit sm:pt-20'>
        <h4 className='text-4xl font-semibold text-center'>
          Let&apos;s {" "}
          <span className='decoration-[#F7AB0A]/50 underline'>connect</span>
        </h4>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
          <div className='grid grid-cols-2 space-x-2'>
            <input placeholder="Name" {...register('name')} className='contactInput' type='text' />
            <input placeholder="Email" {...register('email')} className='contactInput' type='text' />
          </div>

          <input placeholder="Subject" {...register('subject')} className='contactInput' type='text' />

          <textarea placeholder="Message" {...register('message')} className='contactInput' />
          <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>

      </div>
    </div>
  )
}