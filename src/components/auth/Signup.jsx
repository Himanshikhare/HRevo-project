import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { USER_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { Label } from '@radix-ui/react-label';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { motion } from 'framer-motion';


const Signup = () => {
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: ""
    });
 // Scroll to top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!input.fullname.trim()) {
            newErrors.fullname = "Full name is required.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!input.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(input.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!input.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required.";
        }

        if (!input.password) {
            newErrors.password = "Password is required.";
        } else if (input.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
        }

        if (!input.role) {
            newErrors.role = "Please select a role.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/Login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >

                <div className='mt-20 flex justify-center items-center h-screen bg-gray-100'>
                    <form onSubmit={submitHandler} className=' mt-20 w-full max-w-xl bg-white p-8 rounded-lg shadow-lg'>
                        <div className="flex justify-center mb-4">
                            <img src="public\Hrevo_Logo-Without_background.png" alt="logo" className="h-12 md:h-16"></img>
                        </div>

                        {/* Signup heading */}
                        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">Signup</h1>
                        <div className="mb-4">
                            <Label>Full Name</Label>
                            <Input
                                type="text"
                                value={input.fullname}
                                name="fullname"
                                onChange={changeEventHandler}
                                placeholder="enter your full name"
                                className="w-full"

                            />
                            {errors.fullname && (
                                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="abc2s@gmail.com"
                                className="w-full"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Label>Phone Number</Label>
                            <Input
                                type="text"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                onChange={changeEventHandler}
                                placeholder="00000-22222"
                                className="w-full"
                            />
                            {errors.phoneNumber && (
                                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <Label>Password</Label>
                            <Input
                                type="password"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="password"
                                className="w-full"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                        <div classNmae='mb-6'>
                            <RadioGroup className='flex flex-col sm:flex-row items-center gap-4'>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="HRMS"
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r1">HRMS</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="radio"
                                        name="role"
                                        value="Recruitment"
                                        className="cursor-pointer"
                                    />
                                    <Label htmlFor="r2">Recruitment</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <Button type="submit" className="w-full my-4 bg-[blue] text-white hover:bg-black">Signup</Button>
                        <span className='text-sm'>Already have an account? <Link to="/Login" className='text-blue-600 hover:underline '>Login</Link></span>

                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Signup