"use client"

import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface SignUpForm {
    name: string;
    email: string;
    number: string;
}

const signUpSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    number: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Invalid phone number').required('Phone number is required')
})

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signUpSchema),
    })

    const onSubmit: SubmitHandler<SignUpForm> = (data) => {
        // send data to email service that will add to mailing list
        console.log(data)

        // Clear form fields
        reset()
    }

    return (
        <section className="flex flex-col items-center justify-center gap-5 px-4 py-10 text-white sm:p-20 bg-primary">
            <h2 className="pb-3 text-2xl font-bold sm:text-4xl mb:pb-0">SIGN UP FOR UPDATES</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full gap-4 sm:w-1/2">
                <div className="flex flex-col text-left text-black gap-2">
                    <input {...register("name")} className="h-12 p-4 text-left rounded-sm w-72 text-black" placeholder="Nancy Hogan" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="flex flex-col text-left text-black gap-2">
                    <input {...register("email")} className="h-12 p-4 text-left rounded-sm w-72 text-black" placeholder="nancy@gmail.com" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="flex flex-col text-left text-black gap-2">
                    <input {...register("number")} className="h-12 p-4 text-left rounded-sm w-72 text-black" placeholder="1234567890" />
                    {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                </div>
                <button type="submit" className="h-12 p-2 font-bold text-center text-white transition duration-500 ease-in-out rounded-sm w-72 bg-secondary hover:bg-white hover:text-secondary">
                    JOIN
                </button>
            </form>
        </section>
    )
}

export default SignUp
