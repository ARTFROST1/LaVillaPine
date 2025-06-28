# La Villa Pine - Guest House Website

## Overview

La Villa Pine is a modern React-based website for a luxury guest house rental business. The application showcases two exclusive guest houses with modern loft-style design, featuring amenities like heated pools, saunas, and forest views. The site is built with a focus on visual appeal, user experience, and lead generation through contact forms.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React hooks and React Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL sessions
- **Development**: Hot reload with Vite middleware integration

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schema with Zod validation
- **Migrations**: Drizzle Kit for database migrations
- **Fallback**: In-memory storage implementation for development

## Key Components

### Pages
- **Home**: Hero carousel with property showcase, features, and call-to-action
- **About**: Company story, statistics, and property details
- **Gallery**: Interactive image gallery with grid/carousel views and lightbox
- **Contacts**: Contact form, business information, and social media links
- **404**: Custom not found page

### Layout Components
- **Header**: Sticky navigation with mobile menu support
- **Footer**: Site links, contact info, and social media
- **Mobile-responsive**: Adaptive design for all screen sizes

### Interactive Features
- **Image Carousel**: Auto-advancing hero slider with manual controls
- **Gallery**: Dual-mode (grid/slider) with lightbox functionality
- **Contact Form**: Validated form with toast notifications
- **Responsive Design**: Mobile-first approach with breakpoint management

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Form data validated using Zod schema
3. Data sent to `/api/contact` endpoint
4. Server validates and stores message in database
5. Success/error feedback displayed via toast notifications

### Gallery System
1. Static image data defined in components
2. Gallery supports grid and carousel view modes
3. Lightbox overlay for full-size image viewing
4. Navigation controls for browsing images

### Carousel Implementation
1. Custom hook manages slide state and auto-advance
2. Image preloading for smooth transitions
3. Touch/swipe support for mobile devices
4. Pause on user interaction, resume after timeout

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Data and Forms
- **React Hook Form**: Form validation and management
- **Zod**: Schema validation
- **React Query**: Server state management and caching
- **Date-fns**: Date utility functions

### Database and Backend
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL
- **Express.js**: Web application framework
- **Connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
1. **Development**: Vite dev server with HMR and Express API
2. **Production Build**: 
   - Frontend: Vite builds static assets to `dist/public`
   - Backend: esbuild bundles server code to `dist/index.js`
3. **Deployment**: Single deployment with static files served by Express

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL`
- **Sessions**: PostgreSQL-backed session storage
- **Static Assets**: Express serves built frontend files
- **API Routes**: Express handles `/api/*` endpoints

### Replit Integration
- **Development Banner**: Replit-specific development tools
- **Vite Plugin**: Cartographer plugin for Replit environment
- **Runtime Error Overlay**: Development error handling

## Changelog

Changelog:
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.