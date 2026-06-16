import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="min-h-screen bg-[#FDF8E8] flex items-center justify-center px-4">

            <div className="text-center max-w-lg">

                <h1 className="font-logo text-8xl text-[#C8553D] mb-4">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-[#222222] mb-4">
                    Page Not Found
                </h2>

                <p className="text-[#666666] mb-8">
                    The page you are looking for does not exist or may have
                    been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        to="/"
                        className="
                            bg-[#C8553D]
                            text-white
                            px-6
                            py-3
                            rounded-lg
                            font-medium
                            hover:bg-[#b64a34]
                            transition-colors
                        "
                    >
                        Go Home
                    </Link>

                    <Link
                        to="/dashboard"
                        className="
                            bg-[#F9F1DC]
                            border
                            border-[#C8553D]/20
                            text-[#222222]
                            px-6
                            py-3
                            rounded-lg
                            font-medium
                            hover:bg-[#F2D06B]/20
                            transition-colors
                        "
                    >
                        Dashboard
                    </Link>

                </div>

            </div>

        </div>
    );
}