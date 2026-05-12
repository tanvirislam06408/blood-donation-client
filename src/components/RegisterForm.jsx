"use client";

import Link from "next/link";
import { Droplet, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth.client";
import Swal from "sweetalert2";
import { redirect, useRouter } from "next/navigation";
import SocialLogin from "./shared/SocialLogin";

const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const router=useRouter();
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
    });
    const [err, setErr] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        const image = form.image.value.trim();

        const newErrors = {
            name: "",
            email: "",
            password: "",
            image: "",
        };
        setErr('')
        // required validations
        if (!name) {
            newErrors.name = "Name is required";
        }

        if (!email) {
            newErrors.email = "Email is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        // optional image validation
        if (image && !image.startsWith("http")) {
            newErrors.image = "Please enter a valid image URL";
        }

        setErrors(newErrors);

        // stop submit if error exists
        const hasError = Object.values(newErrors).some(
            (value) => value !== ""
        );

        if (hasError) return;

        const { data, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password,
            image: image,
            callbackURL: "/",
        });
        console.log(data, error);
        if (data.user) {
            Swal.fire({
                title: "Register Successfully!",
                icon: "success",
                draggable: true
            });
            form.reset();
            router.refresh();
            redirect('/')

        }
        if (error) {
            setErr(error.message)
        }

    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">

            <div className="w-full max-w-md rounded-[32px] border border-red-100 bg-white p-8 shadow-sm">

              
                <div className="flex flex-col items-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-400">
                        <Droplet
                            className="text-white"
                            fill="currentColor"
                            size={28}
                        />
                    </div>

                    <h1 className="mt-6 text-2xl font-bold text-gray-900 md:text-4xl">
                        Join BloodBridge
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Become a hero. Create your account.
                    </p>

                </div>

                {/* form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-5"
                >

                   
                    <div className="space-y-2">

                        <label className="text-sm font-medium text-gray-700">
                            Name
                        </label>

                        <input type="text" name="name" placeholder="John Doe" className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100" />

                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}

                    </div>

                    {/* email */}
                    <div className="space-y-2">

                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input type="email" name="email" placeholder="you@example.com" className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100" />

                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}

                    </div>

                    {/* image */}
                    <div className="space-y-2">

                        <label className="text-sm font-medium text-gray-700">
                            Photo URL (optional)
                        </label>

                        <input type="text" name="image" placeholder="https://..." className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100" />

                        {errors.image && (
                            <p className="text-sm text-red-500">
                                {errors.image}
                            </p>
                        )}

                    </div>

                    {/* password */}
                    <div className="space-y-2">

                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <div className="relative">

                            <input type={showPassword ? "text" : "password"} name="password" placeholder="••••••••" className="w-full rounded-2xl border border-gray-200 px-4 py-3 pr-12 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100" />

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>

                        </div>

                        {errors.password && (
                            <p className="text-sm text-red-500">
                                {errors.password}
                            </p>
                        )}
                        <p className="text-red-500 text-sm">{err}</p>
                    </div>

                    
                    <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-400 py-3 font-semibold text-white transition-all hover:scale-[1.01]">
                        Register
                    </button>

                </form>

               
                <div className="my-8 flex items-center gap-4">

                    <div className="h-px flex-1 bg-gray-200"></div>

                    <span className="text-sm text-gray-400">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-gray-200"></div>

                </div>

               
                <SocialLogin/>
                
                <p className="mt-8 text-center text-gray-500">

                    Already have an account?{" "}

                    <Link
                        href="/login"
                        className="font-semibold text-red-500"
                    >
                        Login
                    </Link>

                </p>

            </div>
        </div>
    );
};

export default RegisterForm;