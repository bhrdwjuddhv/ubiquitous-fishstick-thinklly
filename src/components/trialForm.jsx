import axiosInstance from "../api/axios.js";
import {useForm} from "react-hook-form";
import {useState} from "react";

export function TrialForm() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFormSubmit = async (data) => {
        setLoading(true);
        setError("");
    try{

        const response = await axiosInstance.post('/api/v1/trial-form',
            {
                fullName:data.fullName,
                email:data.email,
                password:data.password,
                username:data.username,
            }
            )
        if(!response){
            console.error("Error submitting form");
            setError("Error submitting");
        }

    }catch(error){
        console.error("Error submitting form", error);
        setError("Error submitting");
    }finally {
        setLoading(false);
    }
    }

    return (

                <form
                    onSubmit={handleSubmit(handleFormSubmit)}
                    className="space-y-5"
                >

                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-[#222222] mb-2"
                        >
                            Full Name
                        </label>

                        <input
                            type="text"
                            id="fullName"
                            className="
                        w-full
                        rounded-lg
                        border
                        border-[#C8553D]/20
                        px-4
                        py-3
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#C8553D]
                    "
                            {...register("fullName", {
                                required: "Please enter your full name",
                            })}
                        />

                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.fullName.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#222222] mb-2"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            className="
                        w-full
                        rounded-lg
                        border
                        border-[#C8553D]/20
                        px-4
                        py-3
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#C8553D]
                    "
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
                                    message:
                                        "Please enter a valid email address",
                                },
                            })}
                        />

                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Username */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-[#222222] mb-2"
                        >
                            Username
                        </label>

                        <input
                            type="text"
                            id="username"
                            className="
                        w-full
                        rounded-lg
                        border
                        border-[#C8553D]/20
                        px-4
                        py-3
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#C8553D]
                    "
                            {...register("username", {
                                required: "Username is required",
                                pattern: {
                                    value:
                                        /^(?!.*\.\.)(?!.*\.$)[a-zA-Z][a-zA-Z0-9._]{2,29}$/,
                                    message:
                                        "Username must start with a letter and contain only letters, numbers, dots, and underscores",
                                },
                            })}
                        />

                        {errors.username && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-[#222222] mb-2"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            className="
                        w-full
                        rounded-lg
                        border
                        border-[#C8553D]/20
                        px-4
                        py-3
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#C8553D]
                    "
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value:
                                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                    message:
                                        "Password must contain 8+ characters, one uppercase letter and one number",
                                },
                            })}
                        />

                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* API Error */}
                    {error && (
                        <div className="text-center text-red-500 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                    w-full
                    bg-[#C8553D]
                    text-white
                    py-3
                    rounded-lg
                    font-semibold
                    hover:bg-[#b64a34]
                    transition-colors
                    disabled:opacity-50
                "
                    >
                        {loading
                            ? "Creating Account..."
                            : "Start Free Trial"}
                    </button>
                </form>

    )





}