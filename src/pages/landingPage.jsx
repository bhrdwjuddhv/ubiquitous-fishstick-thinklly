import {FeatureCard} from "../components/featureCard.jsx";

export function LandingPage() {

    const features = [
        {
            id: 1,
            title: "Responsive Navigation Bar",
            description:
                "A fully responsive navigation system with desktop and mobile layouts, active route highlighting, and seamless navigation across the application.",
            image: "/navbar.png",
            route: "/",
        },

        {
            id: 2,
            title: "User Login Interface",
            description:
                "Authentication UI built with React Hook Form, including email validation, password validation, and password visibility toggle.",
            image: "/loginPage.png",
            route: "/login",
        },

        {
            id: 3,
            title: "Dashboard Page",
            description:
                "Interactive analytics dashboard featuring KPI cards, user statistics, gender distribution charts, and country-based insights.",
            image: "/dashboard.png",
            route: "/dashboard",
        },

        {
            id: 4,
            title: "Form Validation",
            description:
                "User registration and trial form demonstrating client-side validation, error handling, and responsive form design.",
            image: "/formWithValidations.png",
            route: "/trial-form",
        },

        {
            id: 5,
            title: "Data Table with Search & Filter",
            description:
                "Responsive user table displaying fetched user data with support for searching, filtering, and user information management.",
            image: "/userTable.png",
            route: "/dashboard",
        },

        {
            id: 6,
            title: "Design & Development Approach",
            description:
                "A detailed breakdown of the architectural decisions, design patterns, and engineering principles applied across the Thinklly frontend assessment — written for technical reviewers and hiring managers.",
            image: "/approach.png",   // add your screenshot to public/approach.png
            route: "/approach",
        },
    ];


    return (
        <div className="
            min-h-screen
            bg-[#FDF8E8]
            py-12
            px-4
        ">
            <div className="
                max-w-7xl
                mx-auto
                space-y-8
            ">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        feature={feature}
                    />
                ))}
            </div>
        </div>
    );
}