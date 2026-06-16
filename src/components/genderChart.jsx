import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export function GenderDoughnutChart({ users = [] }) {
    const maleCount = users.filter(
        (user) => user.gender === "male"
    ).length;

    const femaleCount = users.filter(
        (user) => user.gender === "female"
    ).length;

    const data = {
        labels: ["Male", "Female"],
        datasets: [
            {
                data: [maleCount, femaleCount],

                backgroundColor: [
                    "#C8553D",
                    "#F2D06B",
                ],

                borderColor: [
                    "#FDF8E8",
                    "#FDF8E8",
                ],

                borderWidth: 4,
                hoverOffset: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        cutout: "65%",

        plugins: {
            legend: {
                position: "bottom",

                labels: {
                    color: "#222222",
                    padding: 20,
                    font: {
                        family: "Karla",
                        size: 14,
                        weight: 600,
                    },
                },
            },

            tooltip: {
                backgroundColor: "#4A3B32",
                titleColor: "#FDF8E8",
                bodyColor: "#FDF8E8",
            },
        },
    };

    return (
        <div className="bg-[#F9F1DC] rounded-2xl shadow-md p-6 border border-[#C8553D]/10">
            <h2 className="text-xl font-semibold text-[#222222] mb-4">
                Gender Distribution
            </h2>

            <div className="h-[320px]">
                <Doughnut data={data} options={options} />
            </div>

            <div className="mt-4 flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#C8553D]" />
                    <span>{maleCount} Male</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#F2D06B]" />
                    <span>{femaleCount} Female</span>
                </div>
            </div>
        </div>
    );
}