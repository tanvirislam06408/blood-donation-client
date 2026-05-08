"use client";

import Link from "next/link";
import { Droplet, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { authClient } from "@/lib/auth.client";
import { useRouter } from "next/navigation";

const LoginForm = () => {

    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const [err, setErr] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const form = e.target;

        const email = form.email.value.trim();
        const password = form.password.value.trim();

        const newErrors = {
            email: "",
            password: "",
        };

        setErr("");

        // validations
        if (!email) {
            newErrors.email = "Email is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(
            (value) => value !== ""
        );

        if (hasError) return;

        // login
        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (data?.user) {

            Swal.fire({
                title: "Login Successful!",
                icon: "success",
            });

            form.reset();

            router.push("/");
        }

        if (error) {
            setErr(error.message);
        }
    };

    // google login
    const handleGoogleLogin = async () => {

        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">

            <div className="w-full max-w-md rounded-[32px] border border-red-100 bg-white p-8 shadow-sm">

                {/* logo */}
                <div className="flex flex-col items-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-red-400">
                        <Droplet
                            className="text-white"
                            fill="currentColor"
                            size={28}
                        />
                    </div>

                    <h1 className="mt-6 text-2xl font-bold text-gray-900 md:text-4xl">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Login to your BloodBridge account.
                    </p>

                </div>

                {/* form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-5"
                >

                    {/* email */}
                    <div className="space-y-2">

                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                        />

                        {errors.email && (
                            <p className="text-sm text-red-500">
                                {errors.email}
                            </p>
                        )}

                    </div>

                    {/* password */}
                    <div className="space-y-2">

                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="••••••••"
                                className="w-full rounded-2xl border border-gray-200 px-4 py-3 pr-12 outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-100"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                            >
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

                        {err && (
                            <p className="text-sm text-red-500">
                                {err}
                            </p>
                        )}

                    </div>

                    {/* forgot password */}
                    <div className="text-right">

                        <Link
                            href="/login"
                            className="text-sm font-medium text-red-500 hover:underline"
                        >
                            Forgot Password?
                        </Link>

                    </div>

                    {/* button */}
                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-red-400 py-3 font-semibold text-white transition-all hover:scale-[1.01]"
                    >
                        Login
                    </button>

                </form>

                {/* divider */}
                <div className="my-8 flex items-center gap-4">

                    <div className="h-px flex-1 bg-gray-200"></div>

                    <span className="text-sm text-gray-400">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-gray-200"></div>

                </div>

                {/* google login */}
                <button
                    onClick={handleGoogleLogin}
                    className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white py-3 font-medium transition-all hover:bg-gray-50"
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-5 w-5"
                    >
                        <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                        />
                        <path
                            fill="#FF3D00"
                            d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.3-6.5 6.6l6.2 5.2C39.5 36.5 44 30.9 44 24c0-1.3-.1-2.3-.4-3.5z"
                        />
                    </svg>

                    Continue with Google

                </button>

                {/* register */}
                <p className="mt-8 text-center text-gray-500">

                    Don’t have an account?{" "}

                    <Link
                        href="/register"
                        className="font-semibold text-red-500"
                    >
                        Register
                    </Link>

                </p>

            </div>
        </div>
    );
};

export default LoginForm;