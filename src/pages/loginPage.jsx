import {useState} from "react";
import {useForm} from "react-hook-form";
import axiosInstance from "../api/axios.js";
import {login} from "../store/authSlice.js";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { Eye, EyeOff } from "lucide-react";


export function LoginPage () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const loginFunction = async (data) => {
        setLoading(true);
        setError("")
        try{

            if (!data.email || !data.password){
                console.error("email and password are required");
                setError("Email and password are required");
                return
            }

            const userData = await axiosInstance.post(
                "/api/login",
                {
                    email: data.email,
                    password: data.password,
                })

                if(userData){
                    dispatch(login(userData.data))
                    navigate("/");
                }else{
                    console.error("User not found");
                    setError("User not found");
                    navigate("/signup")
                }

        }catch(err){
            console.error(err)
            setError(err.message || "Login Failed")
        }finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#FDF8E8] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-[#F9F1DC] rounded-xl shadow-lg p-8">

                <h1 className="font-logo text-4xl text-[#C8553D] text-center mb-2">
                    Welcome Back
                </h1>

                <p className="text-[#666666] text-center mb-8">
                    Sign in to continue
                </p>

                <form onSubmit={handleSubmit(loginFunction)} className="space-y-5">

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#222222] mb-2"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="text"
                            className="w-full rounded-lg border border-[#C8553D]/30 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C8553D]"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
                                    message: "Please enter a valid email address",
                                },
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-[#222222] mb-2"
                        >
                            Password
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className="
                                            w-full
                                            rounded-lg
                                            border
                                            border-[#C8553D]/30
                                            px-4
                                            py-3
                                            pr-12
                                            bg-white
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-[#C8553D]
                                        "
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-[#666666]
                                            hover:text-[#C8553D]
                                            transition-colors
                                        "
                            >
                                {showPassword ? (
                                    <EyeOff size={20} />
                                ) : (
                                    <Eye size={20} />
                                )}
                            </button>
                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {!!error && (
                        <p className="text-red-500 text-sm text-center">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full hover:cursor-pointer bg-[#C8553D] text-white py-3 rounded-lg font-semibold hover:bg-[#b64a34] transition-colors disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="mt-6 flex flex-col gap-3 text-center">
                    <Link
                        to="/forgot-password"
                        className="text-[#C8553D] hover:underline"
                    >
                        Forgot Password?
                    </Link>

                    <Link
                        to="/sign-up"
                        className="text-[#666666] hover:text-[#C8553D] transition-colors"
                    >
                        Not a user yet? Sign up instead
                    </Link>
                </div>
            </div>
        </div>
    )


}