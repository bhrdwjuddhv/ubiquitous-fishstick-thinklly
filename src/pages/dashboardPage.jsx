import axios from "axios";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { UserTable } from "../components/dataTable.jsx";
import { AdminDashboard } from "../components/adminDashboard.jsx";

export function DashboardPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [numberOfUsers, setNumberOfUsers] = useState(10);

    const [activeView, setActiveView] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const response = await axios.get(
                    `https://api.freeapi.app/api/v1/public/randomusers`,
                    {
                        params: {
                            page: 1,
                            limit: numberOfUsers,
                        },
                    }
                );
                console.log(response.data.data.data);
                setUsers(response.data.data.data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [numberOfUsers]);

    const handleNumberOfUsers = (e) => {
        const value = e.target.value;
        setNumberOfUsers(value);
    };

    return (
        <div className="min-h-screen bg-[#FDF8E8] flex">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                fixed md:static
                top-0 left-0
                h-screen
                w-64
                bg-[#F9F1DC]
                border-r border-[#C8553D]/10
                shadow-md
                z-40
                transition-transform
                duration-300

                ${
                    sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                }
            `}
            >
                <div className="p-6 border-b border-[#C8553D]/10">
                    <h1 className="font-logo text-3xl text-[#C8553D]">
                        Thinklly
                    </h1>
                </div>

                <div className="p-4 space-y-3">

                    <button
                        onClick={() => {
                            setActiveView("dashboard");
                            setSidebarOpen(false);
                        }}
                        className={`
                        w-full text-left px-4 py-3 rounded-xl font-medium transition-all

                        ${
                            activeView === "dashboard"
                                ? "bg-[#C8553D] text-white"
                                : "text-[#222222] hover:bg-[#F2D06B]/40"
                        }
                    `}
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={() => {
                            setActiveView("table");
                            setSidebarOpen(false);
                        }}
                        className={`
                        w-full text-left px-4 py-3 rounded-xl font-medium transition-all

                        ${
                            activeView === "table"
                                ? "bg-[#C8553D] text-white"
                                : "text-[#222222] hover:bg-[#F2D06B]/40"
                        }
                    `}
                    >
                        User Table
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">

                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between p-4 bg-[#F9F1DC] border-b">
                    <button
                        onClick={() =>
                            setSidebarOpen(!sidebarOpen)
                        }
                    >
                        {sidebarOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>

                    <h2 className="font-logo text-2xl text-[#C8553D]">
                        Thinklly
                    </h2>
                </div>

                <div className="p-6">

                    {/* User Count Control */}
                    <div className="mb-6">
                        <label className="block mb-2 text-[#222222] font-medium">
                            Number of Users
                        </label>

                        <input
                            type="number"
                            value={numberOfUsers}
                            min={1}
                            max={100}
                            className="
                                w-40
                                rounded-lg
                                border
                                border-[#C8553D]/20
                                px-4
                                py-2
                                bg-white
                            "
                            onChange={(e) => {handleNumberOfUsers(e)}}
                        />
                    </div>

                    {loading && (
                        <p className="text-[#666666]">
                            Loading...
                        </p>
                    )}

                    {error && (
                        <p className="text-red-500">
                            {error}
                        </p>
                    )}

                    {!loading && !error && (
                        <>

                            {activeView === "dashboard" && (
                                <AdminDashboard users={users} />
                            )}

                            {activeView === "table" && (
                                <UserTable users={users} />
                            )}
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}