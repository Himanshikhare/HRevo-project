import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';



const Requestfordemo = () => {
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

    const [loading, setLoading] = useState(false); // For managing the loading state
    const navigate = useNavigate();
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
            setLoading(true);// Dispatch loading state
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/Login");// Redirect to login page
                toast.success(res.data.message);// Show success notification
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'An error occurred'); // Show error notification
        }
        finally {
            setLoading(false); // Reset loading state
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

                {/* Responsive container for form */}
                <div className='mt-20 flex justify-center items-center px-4 sm:px-6 lg:px-8 py-10 bg-gray-100 min-h-screen'>
                    <form onSubmit={submitHandler} className=' w-full max-w-xl bg-white p-6 sm:p-8 rounded-lg shadow-lg'>

                        {/* Company Logo */}
                        <div><img src="\Hrevo_Logo-Without_background.png" alt="logo"></img></div>
                        <h1 className='text-2xl sm:text-3xl font-bold text-center mb-6'>Request For Demo</h1>

                        {/* Full Name Field */}
                        <div>
                            <Label>Full Name</Label>
                            <Input
                                type="text"
                                value={input.fullname}
                                name="fullname"
                                onChange={changeEventHandler}
                                placeholder="enter your full name"
                            />
                            {errors.fullname && (
                                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
                            )}
                        </div>
                        {/* Email Field */}
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="abc2s@gmail.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        {/* Phone Number Field */}
                        <div>
                            <Label>Phone Number</Label>
                            <Input
                                type="text"
                                value={input.phoneNumber}
                                name="phoneNumber"
                                onChange={changeEventHandler}
                                placeholder="00000-22222"
                            />
                            {errors.phoneNumber && (
                                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                            )}
                        </div>
                        {/* Password Field */}
                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="password"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full my-4 bg-blue-500 text-white hover:bg-blue-700 flex justify-center items-center"
                            aria-busy={loading ? "true" : "false"}
                            aria-live="assertive"
                        >
                            {loading ? (
                                <>
                                    {/* Spinner */}
                                    <div className="animate-spin h-5 w-5 border-4 border-t-4 border-white rounded-full"></div>
                                    <span className="ml-2">Requesting...</span>
                                </>
                            ) : (
                                'Request Demo'
                            )}
                        </Button>



                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default Requestfordemo