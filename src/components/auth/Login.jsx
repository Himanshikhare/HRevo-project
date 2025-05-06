import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Login = () => {
     const [errors, setErrors] = useState({});
     const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

     // Scroll to top when the component is mounted
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const validateForm = () => {
        const newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!input.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(input.email)) {
            newErrors.email = "Invalid email format.";
        }

        if (!input.password) {
            newErrors.password = "Password is required.";
        } else if (input.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
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
        formData.append("email", input.email);
        formData.append("password", input.password);
       
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: { 'Content-Type': "application/json" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/");
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
                <form onsubmit={submitHandler}
                    className='w-full max-w-xl bg-white p-6 md:p-8 rounded-lg shadow-lg '>
                    <div className="flex justify-center mb-6">
                        <img 
                            src="public\Hrevo_Logo-Without_background.png" 
                            alt="logo"
                            className="h-12 md:h-16"
                            >
                        </img>
                    </div>

                    <h1 className='text-xl md:text-2xl font-bold text-center mb-6'>Login</h1>
                    <div className="mb-4">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="abc2@gmail.com"
                            className="w-full"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                            required
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full my-4 bg-[blue] text-white hover:cursor-pointer hover:bg-black"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader className="w-5 h-5 animate-spin" />
                                Logging in...
                            </span>
                        ) : (
                            'Login'
                        )}
                    </Button>
                    <span className='text-sm'>Don't have an account? <Link to="/Signup" className='text-blue-600 hover:underline'>Signup</Link></span>

                </form>

            </div>
            </motion.div>
        </div>
    )
}

export default Login