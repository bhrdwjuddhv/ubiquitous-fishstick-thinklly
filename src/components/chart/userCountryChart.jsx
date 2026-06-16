import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

export function UsersByCountryBarChart({ users = [] }) {

    const countryCounts = users.reduce((acc, user) => {
        const country = user.location.country;

        acc[country] = (acc[country] || 0) + 1;

        return acc;
    }, {});

    const labels = Object.keys(countryCounts);

    const values = Object.values(countryCounts);

    const data = {
        labels,
        datasets: [
            {
                label: "Users",
                data: values,
                backgroundColor: "#C8553D",
                borderRadius: 8,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false,
            },

            tooltip: {
                backgroundColor: "#4A3B32",
                titleColor: "#FDF8E8",
                bodyColor: "#FDF8E8",
            },
        },

        scales: {
            x: {
                grid: {
                    display: false,
                },

                ticks: {
                    color: "#666666",
                },
            },

            y: {
                beginAtZero: true,

                ticks: {
                    precision: 0,
                    color: "#666666",
                },

                grid: {
                    color: "rgba(200,85,61,0.1)",
                },
            },
        },
    };

    return (
        <div className="bg-[#F9F1DC] rounded-2xl shadow-md p-6 border border-[#C8553D]/10">
            <h2 className="text-xl font-semibold text-[#222222] mb-4">
                Users by Country
            </h2>

            <div className="h-[320px]">
                <Bar
                    data={data}
                    options={options}
                />
            </div>
        </div>
    );
}