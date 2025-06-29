# La Villa Pine - Project Management Guide

## Quick Start

### Running the Website
```bash
# Start the development server
npm run dev
```
The website will be available at: `http://localhost:5000`

### File Structure Overview
```
├── client/src/           # Frontend code
│   ├── pages/           # Website pages
│   ├── components/      # Reusable UI components
│   └── lib/            # Utilities and API client
├── server/             # Backend API server
├── assets/             # Images and media files
└── shared/             # Shared types and schemas
```

## Editing Website Content

### 📝 Text Content Files

**Navigation Menu:**
- File: `client/src/components/layout/header.tsx`
- Lines 12-17: Menu items (Главная, О нас, Галерея, Бронирование, Контакты)

**Contact Information:**
- Header: `client/src/components/layout/header.tsx` (lines 20-23)
- Footer: `client/src/components/layout/footer.tsx` (lines 14-29, 63-73)
- Contact Page: `client/src/pages/contacts.tsx` (lines 32-49)
- Booking Page: `client/src/pages/booking.tsx` (contact section at bottom)

**Home Page Content:**
- File: `client/src/pages/home.tsx`
- Lines 49-53: Hero section text
- Lines 70-78: Main description
- Lines 26-42: Features list

**About Page Content:**
- File: `client/src/pages/about.tsx`
- Lines 14-31: Main text content
- Lines 86-119: Features list

**Gallery Page:**
- File: `client/src/pages/gallery.tsx`
- Lines 47-53: Page title and description

**Booking Page:**
- File: `client/src/pages/booking.tsx`
- Modern full-screen page with background image
- Placeholder for third-party booking system integration
- Contact information and booking details

### 🖼️ Managing Images

**Image Locations:**
- Hero carousel: `assets/images/hero/`
- Gallery photos: `assets/images/gallery/`
- About page: `assets/images/about/`
- Logos: `assets/logos/`

**Logo Management:**
- Logo Component: `client/src/components/ui/logo.tsx`
- To replace placeholder logo:
  1. Upload your logo to `assets/logos/logo.png`
  2. In `client/src/components/ui/logo.tsx`, uncomment the img tag and remove the placeholder div
  3. Adjust size classes if needed (sm/md/lg options available)

**Adding New Images:**
1. Upload files to appropriate asset folders
2. Update image arrays in the page files:
   - Hero: `client/src/pages/home.tsx` (lines 7-17)
   - Gallery: `client/src/pages/gallery.tsx` (lines 3-70)
   - About: `client/src/pages/about.tsx` (lines 50-62)

### 🎨 Colors and Styling

**Main Color Scheme:**
- File: `client/src/index.css`
- Lines 5-26: Light theme colors
- Lines 28-48: Dark theme colors

**Current Colors:**
- Accent: Warm terracotta/brick orange `hsl(18, 65%, 55%)`
- Primary text: Warm dark gray `hsl(15, 8%, 25%)`
- Secondary text: Warm medium gray `hsl(20, 12%, 50%)`

### 📞 Contact Information

**Current Contact Details:**
- Phone: +7 918 924 0007
- Email: lavillapine@yandex.ru
- Address: Кольцевая улица, 4, посёлок Тульский, Майкопский район, Республика Адыгея

**Social Media Links:**
- Instagram: https://www.instagram.com/lavillapine/
- Telegram: https://t.me/LaVillaPine
- VKontakte: https://vk.com/lavillapine

**New Features:**
- Updated Telegram and VK icons using react-icons
- Separate booking page with modern design
- Logo component with placeholder for easy replacement
- Enhanced text shadow on main page title

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npx tsc --noEmit
```

### Project Structure Details

**Frontend (React + TypeScript):**
- `client/src/pages/` - Main website pages
- `client/src/components/` - Reusable components
- `client/src/components/layout/` - Header and footer
- `client/src/components/ui/` - UI components (forms, galleries, etc.)

**Backend (Express + TypeScript):**
- `server/index.ts` - Main server file
- `server/routes.ts` - API endpoints
- `server/storage.ts` - Data storage logic

**Shared:**
- `shared/schema.ts` - Database schemas and types

## Common Tasks

### 1. Adding New Photos
1. Upload images to `assets/images/gallery/`
2. Edit `client/src/pages/gallery.tsx`
3. Add new entries to `galleryImages` array

### 2. Updating Contact Info
Edit these files:
- `client/src/components/layout/header.tsx`
- `client/src/components/layout/footer.tsx`
- `client/src/pages/contacts.tsx`

### 3. Changing Colors
- Edit `client/src/index.css`
- Modify the `:root` and `.dark` CSS variables

### 4. Adding New Pages  
1. Create new file in `client/src/pages/`
2. Add route to `client/src/App.tsx`
3. Add navigation link to header and footer

### 5. Managing Logo
1. Upload logo image to `assets/logos/logo.png`
2. Edit `client/src/components/ui/logo.tsx`
3. Replace placeholder with actual image

### 6. Form Submissions
Contact form data is stored in memory and handled by:
- Frontend: `client/src/components/ui/contact-form.tsx`
- Backend: `server/routes.ts` (POST /api/contact)
- Storage: `server/storage.ts`

### 7. Third-Party Booking Integration
The booking page (`client/src/pages/booking.tsx`) is designed to accommodate:
- Third-party booking widgets
- Payment processing systems
- Calendar integration
- Reservation management systems

## Deployment

The project is ready for deployment. All static assets are served properly, and the build system is configured.

## Troubleshooting

**Images not loading:**
- Check file paths in code match actual file locations
- Ensure files are in `assets/` folder
- Restart development server

**Colors not updating:**
- Clear browser cache
- Check CSS variable names are correct
- Restart development server

**Contact form not working:**
- Check browser console for errors
- Verify backend server is running
- Check network tab for API calls

## File Locations Quick Reference

| Content Type | File Location |
|--------------|---------------|
| Hero text | `client/src/pages/home.tsx` |
| About text | `client/src/pages/about.tsx` |
| Contact info | `client/src/pages/contacts.tsx` |
| Navigation | `client/src/components/layout/header.tsx` |
| Footer | `client/src/components/layout/footer.tsx` |
| Gallery images | `client/src/pages/gallery.tsx` |
| Booking page | `client/src/pages/booking.tsx` |
| Logo component | `client/src/components/ui/logo.tsx` |
| Colors | `client/src/index.css` |
| Hero images | `assets/images/hero/` |
| Gallery photos | `assets/images/gallery/` |
| Logo files | `assets/logos/` |

This guide covers all the essential aspects of managing your La Villa Pine website. Keep this file as reference for future updates!