# recruitment-pipeline
A modern, responsive recruitment management system built with React and Next.js. This application provides a Kanban-style interface for managing candidates through different stages of the recruitment process.
Features

    Kanban Board Interface: Visual pipeline with drag-and-drop functionality
    Candidate Management: View, move, and track candidates through recruitment stages
    Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
    Interactive UI: Click to view candidate details, drag to move between stages
    Modern Tech Stack: Built with React, Next.js, and CSS Modules

Tech Stack

    Frontend: React 18, Next.js 14 (App Router)
    Styling: CSS Modules (no external CSS frameworks)
    TypeScript: Full type safety
    State Management: React useState hooks
    Build Tool: Next.js with Turbopack for development

Prerequisites

Before you begin, ensure you have the following installed:

    Node.js (version 18.0 or higher)
    npm, yarn, or pnpm package manager
    Git

Setup Instructions
1. Clone the Repository

git clone <your-repository-url>
cd recruitment-pipeline

2. Install Dependencies

Using npm:

npm install

Using yarn:

yarn install

Using pnpm:

pnpm install

3.Run the Development Server

npm run dev
# or
yarn dev
# or
pnpm dev

4. Open the Application

Navigate to http://localhost:3000 in your browser to see the application.
Project Structure

recruitment-pipeline/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── candidate-card.tsx
│   ├── candidate-card.module.css
│   ├── filter-bar.tsx
│   ├── filter-bar.module.css
│   ├── header.tsx
│   ├── header.module.css
│   ├── job-header.tsx
│   ├── job-header.module.css
│   ├── kanban-board.tsx
│   ├── kanban-board.module.css
│   ├── kanban-column.tsx
│   ├── kanban-column.module.css
│   ├── recruitment-pipeline.tsx
│   └── recruitment-pipeline.module.css
├── data/
│   └── candidates.ts
├── public/
│   └── images/
└── README.md

Available Scripts

    npm run dev - Start the development server with Turbopack
    npm run build - Build the application for production
    npm run start - Start the production server
    npm run lint - Run ESLint for code quality checks

Design Decisions & Assumptions
Architecture Decisions

    Next.js App Router: Chose the modern App Router over Pages Router for better performance and developer experience
    CSS Modules: Used CSS Modules instead of Tailwind CSS as per requirements, providing scoped styling and better maintainability
    Component-Based Architecture: Modular design with reusable components for better code organization
    TypeScript: Full TypeScript implementation for type safety and better developer experience

Styling Approach

    Responsive Design: Mobile-first approach with CSS Grid and Flexbox
    Color Scheme: Matched the original design with stage-specific colors:
        Applying Period: Orange (#ff8c00)
        Screening: Purple (#9966cc)
        Interview: Blue (#4a90e2)
        Test: Green (#50c878)
    Hover Effects: Added subtle animations and hover states for better UX

Data Management

    Dummy Data: Created realistic candidate data with various scenarios (referred candidates, different scores, etc.)
    Local State: Used React useState for state management (suitable for this scope)
    Drag & Drop: Implemented basic drag-and-drop functionality using HTML5 APIs

UI/UX Decisions

    Modal for Details: Candidate details shown in a modal overlay for better user experience
    Visual Feedback: Hover effects and transitions for interactive elements
    Accessibility: Semantic HTML and proper ARIA attributes where applicable

Assumptions Made

    Single Job Pipeline: The interface assumes management of one job posting at a time
    Static Data: Currently uses hardcoded dummy data (no backend integration)
    Basic Authentication: No user authentication implemented (would be added in production)
    Browser Support: Targets modern browsers with ES6+ support
    Image Placeholders: Uses placeholder images for candidate avatars

Future Enhancements
Frontend Improvements

    Add search and filtering functionality
    Implement advanced drag-and-drop with react-beautiful-dnd
    Add candidate form for creating new entries
    Implement dark mode support
    Add data export functionality

Backend Integration

    REST API for candidate CRUD operations
    Database integration (PostgreSQL/MongoDB)
    User authentication and authorization
    Real-time updates with WebSockets
    File upload for candidate documents

Running Frontend and Backend Separately
Current Setup (Frontend Only)

This project currently contains only the frontend application. To run:

npm run dev

Future Backend Setup

When a backend is added, the typical setup would be:
Backend (Node.js/Express)

cd backend
npm install
npm run dev  # Usually runs on port 3001 or 8000

Frontend (Next.js)

cd frontend  # or root directory
npm install
npm run dev  # Runs on port 3000

Environment Variables

Create a .env.local file for environment-specific configurations:

NEXT_PUBLIC_API_URL=http://localhost:3001/api
DATABASE_URL=your_database_connection_string

If you encounter any issues or have questions, please:

    Check the existing issues in the repository
    Create a new issue with detailed information
    Contact me.
