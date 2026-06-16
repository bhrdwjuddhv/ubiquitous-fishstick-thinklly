import { Link } from "react-router-dom";
import {
    Layout,
    Layers,
    Database,
    Shield,
    Monitor,
    Package,
    Star,
    Zap,
    Eye,
    Folder,
} from "lucide-react";

function ApproachCard({ badge, title, icon: Icon, points }) {
    return (
        <div className="
            bg-[#F9F1DC]
            border border-[#C8553D]/10
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-md
            hover:border-[#C8553D]/30
            transition-all
            duration-300
            flex flex-col
        ">
            <div className="flex items-center gap-3 mb-5">
                <div className="
                    w-10 h-10
                    rounded-xl
                    bg-[#C8553D]/10
                    flex items-center justify-center
                    flex-shrink-0
                ">
                    <Icon size={20} color="#C8553D" />
                </div>
                <div>
                    <p className="
                        text-[10px]
                        font-semibold
                        text-[#C8553D]
                        font-['Karla']
                        uppercase
                        tracking-widest
                        mb-0.5
                    ">
                        {badge}
                    </p>
                    <h3 className="
                        text-[#222222]
                        font-semibold
                        text-base
                        leading-tight
                        font-['Karla']
                    ">
                        {title}
                    </h3>
                </div>
            </div>

            <ul className="space-y-2.5 flex-1">
                {points.map((point, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-2.5 text-[#666666] text-sm font-['Karla'] leading-relaxed"
                    >
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C8553D]/50" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const approachSections = [
    {
        badge: "Visual Design",
        title: "Design Philosophy",
        icon: Layout,
        points: [
            "Consistent color system applied across every page and component: #FDF8E8 as page background, #F9F1DC as card surface, and #C8553D as the primary accent.",
            "Custom font pairing — Fredericka the Great for the Thinklly logo mark and Karla for all navigation and body text.",
            "Card-based UI with #C8553D/10 borders, rounded-2xl corners, and hover:shadow-md transitions provide visual depth without noise.",
            "All styling is implemented exclusively through Tailwind CSS utility classes — no third-party component library was used.",
        ],
    },
    {
        badge: "Architecture",
        title: "Component Architecture",
        icon: Layers,
        points: [
            "Centralized Layout component wraps every route via a react-router-dom Outlet — NavBar renders once and all pages slot in cleanly.",
            "Router built with createBrowserRouter and createRoutesFromElements for a declarative, readable route hierarchy in main.jsx.",
            "Route-level pages (DashboardPage, LoginPage, TrialFormPage) compose smaller, focused components such as AdminDashboard, UserTable, and chart components.",
            "Barrel export in pages/index.js keeps all route-level import paths clean and avoids deep relative chains.",
        ],
    },
    {
        badge: "Redux Toolkit",
        title: "State Management",
        icon: Database,
        points: [
            "Redux Toolkit (configureStore + createSlice) manages auth state with two actions: login stores status and userData; logout resets to initial state.",
            "Redux Provider wraps the RouterProvider in main.jsx, making auth state globally accessible to any component.",
            "Local useState handles page-scoped UI state: loading, error, activeView, sidebarOpen, searchTerm, genderFilter, and numberOfUsers.",
            "useEffect with [numberOfUsers] as its dependency triggers API re-fetching only when the user explicitly changes the count input.",
        ],
    },
    {
        badge: "React Hook Form",
        title: "Form Validation Strategy",
        icon: Shield,
        points: [
            "React Hook Form (useForm, register, handleSubmit, formState.errors) powers both the Login and Trial Form — uncontrolled inputs minimize re-renders.",
            "Email is validated via a regex pattern; error messages render conditionally below each field only after the field is touched.",
            "Username enforces: must start with a letter, 3–30 characters, only letters/numbers/dots/underscores, no consecutive dots.",
            "Password requires a minimum of 8 characters with at least one uppercase letter and one digit.",
            "Submit buttons use disabled:opacity-50 during API calls to prevent duplicate submissions.",
        ],
    },
    {
        badge: "Mobile-First",
        title: "Responsive Design",
        icon: Monitor,
        points: [
            "Mobile-first approach throughout: base Tailwind classes target small screens, with md: and lg: breakpoints progressively enhancing the layout.",
            "NavBar collapses to a hamburger toggle (Menu / X from lucide-react) on mobile; the desktop menu uses hidden md:flex.",
            "Dashboard sidebar uses fixed md:static combined with translate-x transition for a smooth slide-in drawer on small screens.",
            "A bg-black/30 overlay behind the mobile sidebar dismisses it on backdrop click — standard native drawer UX.",
            "Dashboard controls stack vertically with flex-col on mobile and align in a row with md:flex-row on larger viewports.",
        ],
    },
    {
        badge: "Components",
        title: "Reusable Components",
        icon: Package,
        points: [
            "DataCard is a generic KPI display card accepting title and data props — reused for Total Users, Unique Countries, and Average Age in AdminDashboard.",
            "FeatureCard is a composable content-plus-image layout card with a built-in image-enlarge modal, used across the landing page.",
            "UserTable and UserTableCell are split: the container maps over the array and the cell renders a single user — easy to test independently.",
            "GenderDoughnutChart and UsersByCountryBarChart both accept a users prop, keeping data-fetching concerns in the parent DashboardPage.",
            "navLinkClass is a utility function that centralizes active/inactive NavLink styling — one change updates every nav link.",
        ],
    },
    {
        badge: "UX",
        title: "User Experience",
        icon: Star,
        points: [
            "NavLink isActive prop highlights the current route in the NavBar — users always have a clear sense of location.",
            "Password visibility toggle (Eye / EyeOff icons) is present on both the Login and Trial Form to reduce user friction.",
            "The image enlarge modal in FeatureCard lets users inspect feature screenshots without navigating away from the page.",
            "Inline field error messages appear directly below each input rather than in toasts or banners, minimizing context switches.",
            "The DashboardPage renders a 'Loading...' message and a red error string during async data operations so users always know the system state.",
        ],
    },
    {
        badge: "Performance",
        title: "Performance Optimizations",
        icon: Zap,
        points: [
            "Chart.js tree-shaking: only the required elements (ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend) are manually registered.",
            "Client-side search and gender filtering use Array.filter on already-fetched data, requiring zero additional network requests.",
            "useEffect dependency on [numberOfUsers] ensures the FreeAPI endpoint is called only when the user explicitly changes the count input.",
            "React Hook Form manages field state through uncontrolled inputs with refs, reducing per-keystroke re-renders compared to controlled inputs.",
            "Utility functions (TotalUsers, AverageAge, uniqueCountries) are pure functions isolated in utils/ — independently composable and easy to memoize.",
        ],
    },
    {
        badge: "A11y",
        title: "Accessibility",
        icon: Eye,
        points: [
            "Semantic HTML is used throughout: <nav> for navigation, <aside> for the sidebar, <main> for primary content, and <label> for all form fields.",
            "Every form input has an associated <label> element with a correct text descriptor.",
            "Focus rings (focus:ring-2 focus:ring-[#C8553D]) are preserved on all inputs and selects, keeping keyboard navigation fully visible.",
            "<button> elements — not divs — are used for all interactive controls: sidebar toggle, view switching, and form submission.",
            "Color choices maintain readable contrast: #C8553D on #F9F1DC for primary UI elements and #222222 on #FDF8E8 for body text.",
        ],
    },
    {
        badge: "Structure",
        title: "Project Structure Decisions",
        icon: Folder,
        points: [
            "Organized by concern: pages/ for route-level components, components/ for shared UI, store/ for Redux, api/ for HTTP config, utils/ for pure functions.",
            "A single Axios instance in api/axios.js configures baseURL from import.meta.env, withCredentials: true, and Content-Type once for the whole app.",
            "Chart components are isolated in components/chart/ to keep them separate from general UI components.",
            "Utility functions in utils/userCardUtilityFunctions.js are completely decoupled from any component — independently readable and testable.",
        ],
    },
];

export function DesignAndDevelopmentApproach() {
    return (
        <div className="min-h-screen bg-[#FDF8E8] py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Page Header */}
                <div className="text-center mb-12">

                    <h1 className="
                        font-['Fredericka_the_Great']
                        text-4xl md:text-5xl
                        text-[#C8553D]
                        mb-5
                        leading-tight
                    ">
                        Design & Development Approach
                    </h1>

                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap justify-center gap-2 mb-14">
                    {[
                        "React 18",
                        "Vite",
                        "React Router v6",
                        "Redux Toolkit",
                        "React Hook Form",
                        "Chart.js",
                        "Tailwind CSS",
                        "Axios",
                        "Lucide React",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="
                                bg-[#F9F1DC]
                                border border-[#C8553D]/20
                                text-[#222222]
                                text-sm
                                px-4 py-1.5
                                rounded-full
                                font-['Karla']
                                font-medium
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Approach Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {approachSections.map((section) => (
                        <ApproachCard key={section.title} {...section} />
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="
                    bg-[#F9F1DC]
                    border border-[#C8553D]/10
                    rounded-2xl
                    p-8
                    text-center
                    shadow-sm
                ">
                    <h2 className="
                        font-['Fredericka_the_Great']
                        text-2xl
                        text-[#C8553D]
                        mb-3
                    ">
                        Explore the Application
                    </h2>

                    <p className="
                        text-[#666666]
                        font-['Karla']
                        text-sm
                        mb-6
                        max-w-md
                        mx-auto
                    ">
                        See these patterns in action across the Dashboard, Login, and Trial Form pages.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            to="/dashboard"
                            className="
                                bg-[#C8553D]
                                hover:bg-[#b64a34]
                                text-white
                                font-['Karla']
                                font-semibold
                                px-6 py-2.5
                                rounded-xl
                                transition-colors
                                duration-300
                            "
                        >
                            View Dashboard
                        </Link>

                        <Link
                            to="/login"
                            className="
                                border border-[#C8553D]
                                text-[#C8553D]
                                hover:bg-[#C8553D]/5
                                font-['Karla']
                                font-semibold
                                px-6 py-2.5
                                rounded-xl
                                transition-colors
                                duration-300
                            "
                        >
                            View Login
                        </Link>

                        <Link
                            to="/trial-form"
                            className="
                                border border-[#C8553D]
                                text-[#C8553D]
                                hover:bg-[#C8553D]/5
                                font-['Karla']
                                font-semibold
                                px-6 py-2.5
                                rounded-xl
                                transition-colors
                                duration-300
                            "
                        >
                            View Trial Form
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
