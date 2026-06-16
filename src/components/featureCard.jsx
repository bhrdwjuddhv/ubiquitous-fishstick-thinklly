import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export function FeatureCard({ feature }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="
                bg-[#F9F1DC]
                rounded-2xl
                border
                border-[#C8553D]/10
                shadow-md
                overflow-hidden
                flex
                flex-col
                lg:flex-row
            ">
                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-center">

                    <h2 className="text-3xl font-bold text-[#222222]">
                        {feature.title}
                    </h2>

                    <p className="mt-4 text-[#666666]">
                        {feature.description}
                    </p>

                    <Link
                        to={feature.route}
                        className="
                            mt-6
                            inline-block
                            w-fit
                            bg-[#C8553D]
                            text-white
                            px-5
                            py-3
                            rounded-lg
                            font-medium
                            hover:bg-[#b64a34]
                            transition-colors
                        "
                    >
                        View Feature
                    </Link>
                </div>

                {/* Image */}
                <div className="lg:w-[400px]">
                    <img
                        src={feature.image}
                        alt={feature.title}
                        onClick={() => setExpanded(true)}
                        className="
                            h-full
                            w-full
                            object-cover
                            cursor-pointer
                            hover:scale-105
                            transition-transform
                        "
                    />
                </div>
            </div>

            {/* Modal */}
            {expanded && (
                <div
                    onClick={() => setExpanded(false)}
                    className="
                        fixed
                        inset-0
                        bg-black/70
                        flex
                        items-center
                        justify-center
                        z-50
                        p-4
                    "
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative"
                    >
                        <button
                            onClick={() => setExpanded(false)}
                            className="
                                absolute
                                top-3
                                right-3
                                bg-white
                                rounded-full
                                p-2
                                shadow-lg
                            "
                        >
                            <X size={20} />
                        </button>

                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="
                                max-w-[90vw]
                                max-h-[90vh]
                                rounded-xl
                            "
                        />
                    </div>
                </div>
            )}
        </>
    );
}