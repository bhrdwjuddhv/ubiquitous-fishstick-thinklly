# Thinklly Frontend Assessment

**Live Deploy Link:** [https://ubiquitous-fishstick-thinklly.vercel.app/](https://ubiquitous-fishstick-thinklly.vercel.app/)
**Live Demo:** [https://www.youtube.com/watch?v=UJR5yE7Bz-E](https://www.youtube.com/watch?v=UJR5yE7Bz-E)
**Design and Development Approach** [https://ubiquitous-fishstick-thinklly.vercel.app/approach](https://ubiquitous-fishstick-thinklly.vercel.app/approach)


A responsive React.js web application developed as part of the Thinklly Frontend Assessment.

---

## Tech Stack

* React.js
* React Router DOM
* Tailwind CSS
* React Hook Form
* Redux Toolkit
* Axios
* Chart.js
* Lucide React

---

## Project Structure

```text
src
├── api
├── components
│   ├── chart
│   ├── adminDashboard.jsx
│   ├── dataTable.jsx
│   ├── featureCard.jsx
│   ├── navBar.jsx
│   ├── trialForm.jsx
│   └── userTable.jsx
│
├── pages
│   ├── dashboardPage.jsx
│   ├── formPage.jsx
│   ├── landingPage.jsx
│   ├── layout.jsx
│   └── loginPage.jsx
│
├── store
├── utils
├── App.jsx
└── main.jsx

public
├── dashboard.png
├── formWithValidations.png
├── loginPage.png
├── navbar.png
└── userTable.png
```

---

# Task 1: Frontend Application Development

### User Login Interface (UI Only)

Implemented in:

```text
src/pages/loginPage.jsx
```

Features:

* Email validation
* Password validation
* Password visibility toggle
* Responsive layout

---

### Dashboard Page

Implemented in:

```text
src/pages/dashboardPage.jsx
src/components/adminDashboard.jsx
```

Features:

* Analytics cards
* Gender Doughnut Chart
* Users by Country Bar Chart
* User statistics overview

---

### Responsive Navigation Bar

Implemented in:

```text
src/components/navBar.jsx
src/pages/layout.jsx
```

Features:

* Desktop navigation
* Mobile responsive menu
* Active route highlighting

---

### Data Table with Search and Filter Functionality

Implemented in:

```text
src/components/dataTable.jsx
src/components/userTable.jsx
```

Features:

* User listing
* Search by name/email
* Gender filtering
* Responsive table/card layout

---

### Form Validation for User Input

Implemented in:

```text
src/components/trialForm.jsx
src/pages/formPage.jsx
```

Validation includes:

* Full Name
* Email
* Username
* Password

Built using React Hook Form.

---

### Mobile & Desktop Responsive Design

Implemented throughout the application using:

```text
Tailwind CSS
```

Responsive behavior is available across:

* Landing Page
* Login Page
* Dashboard
* Data Table
* Trial Form

---

# Task 2: UI/UX Implementation

### Proper Component Structure

Components and pages are separated into dedicated folders:

```text
components/
pages/
utils/
api/
store/
```

---

### Responsive Layouts

Responsive layouts implemented using:

* Flexbox
* CSS Grid
* Tailwind responsive utilities

---

### Consistent Styling

A shared design system is used across the application:

* Primary Color: `#C8553D`
* Background: `#FDF8E8`
* Surface: `#F9F1DC`
* Typography:

    * Fredericka the Great
    * Karla

---

### Reusable Components

Examples:

```text
FeatureCard
DataTable
UserTable
AdminDashboard
TrialForm
NavBar
```

---

### Good User Experience Practices

Implemented:

* Form validation feedback
* Loading states
* Responsive navigation
* Search and filtering
* Modal image previews
* Clear visual hierarchy
* Accessible form labels

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/bhrdwjuddhv/ubiquitous-fishstick-thinklly
cd thinklly
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and paste contents of `.env.sample`:


### 4. Run Development Server

```bash
npm run dev
```

Application will start on:

```text
http://localhost:5173
```

### 5. Build for Production

```bash
npm run build
```

---

## Deployment

Application deployed on Vercel:

[https://ubiquitous-fishstick-thinklly.vercel.app/](https://ubiquitous-fishstick-thinklly.vercel.app/)
