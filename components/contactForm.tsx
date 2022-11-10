import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TailSpin } from 'react-loader-spinner'
import SectionWrapper from './sectionWrapper'
import ReCAPTCHA from 'react-google-recaptcha'

let countries: Country[] = require('../data/countryList.json')
let serviceType: ServiceType[] = require('../data/serviceType.json')

type Country = {
  code: string
  name: string
}

type ServiceType = {
  code: string
  name: string
}

export interface IFormData {
  firstName: string
  lastName: string
  phone: number
  email: string
  address: string
  city: string
  state: string
  zip: string
  country: string
  serviceType: string
  details: string
}

interface ContactFormProps {
  background: string
}

export default function ContactForm({ background }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<IFormData>()

  // const recaptchaRef = React.useRef<ReCaptchaType>(null);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const [recaptchaNeeded, setRecaptchaNeeded] = useState(false)

  // its gross but it works
  function normalizePhoneNumber(value: string): string {
    var x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
    if (x) {
      return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    } else {
      return ''
    }
  }

  const enableRecaptcha = () => {
    setRecaptchaNeeded(true)
  }

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const token = await recaptchaRef.current?.executeAsync()

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify({ data: data, token: token }),
      })
      if (response.ok) {
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json()
        throw new Error(error.message)
      }
    } catch (error: any) {
      alert(error?.message || 'Something went wrong')
    } finally {
      recaptchaRef.current?.reset()
    }
  }

  if (!isSubmitSuccessful) {
    return (
      <SectionWrapper className='lg:max-w-4xl' background={background}>
        <h3 className='pb-10'>Request An Estimate</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-2'
        >
          <label
            htmlFor='firstName'
            className='flex flex-col text-left font-bold'
          >
            First Name *
            <input
              {...register('firstName', {
                required: 'First name is required',
                maxLength: { value: 30, message: 'First name is too long' },
                onChange: (e) => {
                  enableRecaptcha()
                },
              })}
              className={`font-normal ${
                errors.firstName ? 'border-red-500' : ''
              }`}
              id='firstName'
              placeholder='First Name'
              type='text'
              autoComplete='given-name'
            />
            {errors.firstName && (
              <p className='text-sm text-red-500'>
                {errors.firstName?.message}
              </p>
            )}
          </label>
          <label
            htmlFor='lastName'
            className='flex flex-col text-left font-bold'
          >
            Last Name *
            <input
              {...register('lastName', {
                required: 'Last name is required',
                maxLength: { value: 30, message: 'Last name is too long' },
                onChange: (e) => {
                  enableRecaptcha()
                },
              })}
              className={`font-normal ${
                errors.lastName ? 'border-red-500' : ''
              }`}
              id='lastName'
              placeholder='Last Name'
              type='text'
              autoComplete='family-name'
            />
            {errors.lastName && (
              <p className='text-sm text-red-500'>{errors.lastName?.message}</p>
            )}
          </label>
          <label htmlFor='phone' className='flex flex-col text-left font-bold'>
            Phone *
            <input
              {...register('phone', {
                required: 'Phone number is required',
                maxLength: { value: 20, message: 'Phone number is too long' },
                minLength: { value: 14, message: 'Phone number is too short' },
                onChange: (e) => {
                  const { value } = e.target
                  e.target.value = normalizePhoneNumber(value)
                  enableRecaptcha()
                },
              })}
              className={`font-normal ${errors.phone ? 'border-red-500' : ''}`}
              id='phone'
              placeholder='Phone'
              type='tel'
              autoComplete='tel'
            />
            {errors.phone && (
              <p className='text-sm text-red-500'>{errors.phone?.message}</p>
            )}
          </label>
          <label htmlFor='email' className='flex flex-col text-left font-bold'>
            Email *
            <input
              {...register('email', {
                required: 'Email is required',
                maxLength: { value: 50, message: 'Email is too long' },
                pattern: {
                  value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
                  message: 'Email is invalid',
                },
                onChange: (e) => {
                  enableRecaptcha()
                },
              })}
              className={`font-normal ${errors.email ? 'border-red-500' : ''}`}
              id='email'
              placeholder='Email'
              type='text'
              autoComplete='email'
            />
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email?.message}</p>
            )}
          </label>
          <div className='grid grid-cols-1 gap-x-7 gap-y-2 md:col-span-2 md:grid-cols-2'>
            <label
              htmlFor='address'
              className='flex flex-col text-left font-bold md:col-span-2'
            >
              Service Address *
              <input
                {...register('address', {
                  required: 'Street address is required',
                  maxLength: {
                    value: 100,
                    message: 'Street address is too long',
                  },
                  onChange: (e) => {
                    enableRecaptcha()
                  },
                })}
                className={`font-normal ${
                  errors.address ? 'border-red-500' : ''
                }`}
                id='address'
                placeholder='REQUIRED'
                type='text'
                autoComplete='street-address'
              />
              {errors.address && (
                <p className='text-sm text-red-500'>
                  {errors.address?.message}
                </p>
              )}
            </label>
            {/* <label
              htmlFor="streetAddress"
              className="font-normal text-xs flex flex-col text-left"
            >
              Street Address
              <input
                className="font-bold text-base"
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="REQUIRED"
              />
            </label> */}
            <label
              htmlFor='city'
              className='flex flex-col text-left text-xs font-normal'
            >
              City
              <input
                {...register('city', {
                  required: 'City is required',
                  maxLength: { value: 50, message: 'City name is too long' },
                  onChange: (e) => {
                    enableRecaptcha()
                  },
                })}
                className={`font-normal ${errors.city ? 'border-red-500' : ''}`}
                id='city'
                placeholder='REQUIRED'
                type='text'
                autoComplete='address-level2'
              />
              {errors.city && (
                <p className='text-sm text-red-500'>{errors.city?.message}</p>
              )}
            </label>
            <label
              htmlFor='state'
              className='flex flex-col justify-end text-left text-xs font-normal'
            >
              State / Province / Region
              <input
                {...register('state', {
                  required: 'State is required',
                  maxLength: { value: 50, message: 'State name is too long' },
                  onChange: (e) => {
                    enableRecaptcha()
                  },
                })}
                className={`font-normal ${
                  errors.state ? 'border-red-500' : ''
                }`}
                id='state'
                placeholder='REQUIRED'
                type='text'
                autoComplete='address-level1'
              />
              {errors.state && (
                <p className='text-sm text-red-500'>{errors.state?.message}</p>
              )}
            </label>
            <label
              htmlFor='zip'
              className='flex flex-col text-left text-xs font-normal'
            >
              ZIP / Postal Code
              <input
                {...register('zip', {
                  required: 'ZIP/Postal code is required',
                  maxLength: {
                    value: 20,
                    message: 'ZIP/Postal code is too long',
                  },
                  onChange: (e) => {
                    enableRecaptcha()
                  },
                })}
                className={`font-normal ${errors.zip ? 'border-red-500' : ''}`}
                id='zip'
                placeholder='REQUIRED'
                type='text'
                autoComplete='postal-code'
              />
              {errors.zip && (
                <p className='text-sm text-red-500'>{errors.zip?.message}</p>
              )}
            </label>
            <label
              htmlFor='country'
              className='flex flex-col text-left text-xs font-normal'
            >
              Country
              <select
                {...register('country', {
                  onChange: (e) => {
                    enableRecaptcha()
                  },
                })}
                disabled
                className='bg-gray-200'
                id='country'
                placeholder='REQUIRED'
                defaultValue={'US'}
              >
                {countries.map((item) => {
                  return (
                    <option
                      key={item.code}
                      value={item.code}
                      className='cursor-pointer'
                    >
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>
          <label
            htmlFor='serviceType'
            className='flex flex-col text-left font-bold md:col-span-2'
          >
            How Can We Help You *
            <select
              {...register('serviceType', {
                required: true,
                onChange: (e) => {
                  enableRecaptcha()
                },
              })}
              className='font-normal'
              id='serviceType'
              placeholder='REQUIRED'
              defaultValue={'treeTrimming'}
            >
              {serviceType.map((item) => {
                return (
                  <option
                    key={item.code}
                    value={item.name}
                    className='cursor-pointer'
                  >
                    {item.name}
                  </option>
                )
              })}
            </select>
          </label>
          <label
            htmlFor='details'
            className='flex flex-col text-left font-bold md:col-span-2'
          >
            Please Provide Any Additional Details
            <textarea
              {...register('details', {
                onChange: (e) => {
                  enableRecaptcha()
                },
              })}
              className='h-48 resize-none font-normal'
              id='details'
              placeholder='Write your message'
            />
          </label>
          {recaptchaNeeded && (
            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
            />
          )}
          <div className='py-10 md:col-span-2'>
            <button
              type='submit'
              aria-label='Submit'
              disabled={isSubmitting}
              className={`inline-flex items-center py-4 px-8 text-lg text-white shadow-xl  ${
                isSubmitting
                  ? 'bg-[#1b381f] '
                  : 'bg-[#639c4d] hover:bg-[#1b381f]'
              }`}
            >
              <TailSpin
                height='15'
                width='15'
                color='#FFFFFF'
                ariaLabel='tail-spin-loading'
                radius='1'
                wrapperStyle={{ paddingRight: '10px' }}
                visible={isSubmitting}
              />
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </SectionWrapper>
    )
  } else {
    return (
      <SectionWrapper background={background}>
        <h3 className='pb-4'>Thank You for Contacting Us!</h3>
        <p>
          We have received your information and will get back to you shortly.
        </p>
      </SectionWrapper>
    )
  }
}
