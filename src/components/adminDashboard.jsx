import {TotalUsers, uniqueCountries, AverageAge} from "../utils/userCardUtilityFunctions.js";
import {GenderDoughnutChart} from "./genderChart.jsx";

function DataCard({ title, data }) {
    return (
        <div className="
            bg-[#F9F1DC]
            rounded-xl
            p-6
            shadow-sm
            border
            border-[#C8553D]/10
            hover:shadow-md
            transition-all
        ">
            <h3 className="text-sm text-[#666666] font-medium">
                {title}
            </h3>

            <p className="mt-2 text-3xl font-bold text-[#C8553D]">
                {data}
            </p>
        </div>
    );
}

export function AdminDashboard({ users }) {
    return (
        <div className="min-h-screen bg-[#FDF8E8] p-6">

            <div className="max-w-7xl mx-auto space-y-8">

                {/* Page Title */}
                <div>
                    <h1 className="font-logo text-4xl text-[#C8553D]">
                        Dashboard
                    </h1>

                    <p className="text-[#666666] mt-2">
                        User analytics and insights
                    </p>
                </div>

                {/* KPI Cards */}
                <div className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                ">
                    <DataCard
                        title="Total Users"
                        data={TotalUsers(users)}
                    />

                    <DataCard
                        title="Unique Countries"
                        data={uniqueCountries(users)}
                    />

                    <DataCard
                        title="Average Age"
                        data={AverageAge(users)}
                    />
                </div>

                {/* Charts */}
                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-6
                ">
                    <div className="
                        bg-[#F9F1DC]
                        rounded-2xl
                        p-6
                        shadow-sm
                        border
                        border-[#C8553D]/10
                    ">
                        <GenderDoughnutChart users={users} />
                    </div>

                    <div className="
                        bg-[#F9F1DC]
                        rounded-2xl
                        p-6
                        shadow-sm
                        border
                        border-[#C8553D]/10
                        flex
                        items-center
                        justify-center
                    ">
                        <p className="text-[#666666]">
                            Future Chart Here
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

