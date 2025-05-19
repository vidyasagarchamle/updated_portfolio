# Vidyasagar Chamle - Product Manager Portfolio

A modern, responsive, and visually rich portfolio website showcasing my experience, projects, and skills as a Product Manager.

## Features

- **Modern Design:** Clean, professional UI with smooth animations and interactive elements
- **Responsive Layout:** Fully optimized for all device sizes
- **Dark Mode Support:** Toggle between light and dark themes
- **Smooth Animations:** Using Framer Motion for engaging page interactions
- **Interactive Elements:** Hover effects, tooltips, and more
- **Contact Form:** Easy way for visitors to get in touch

## Tech Stack

- **Framework:** Next.js 14
- **UI Component Library:** shadcn/ui
- **Styling:** Tailwind CSS 
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theming:** next-themes
- **Form Handling:** React Hook Form

## Getting Started

### Prerequisites

- Node.js 16.8.0 or newer

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-site.git

# Navigate to the project directory
cd portfolio-site

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Structure

- **`/src/components`** - Reusable UI components
- **`/src/components/sections`** - Main page sections (Hero, About, etc.)
- **`/src/components/ui`** - shadcn/ui components
- **`/src/app`** - Next.js app directory
- **`/public`** - Static assets

## Customization

### Images
Replace placeholder images in the `/public/images` directory with your own.

### Content
Update text content in each section component located in `/src/components/sections`.

### Theming
Modify the color theme in `/src/app/globals.css` and `components.json`.

## Deployment

The site can be easily deployed to Vercel:

```bash
npm run build
```

Or push to your GitHub repository and connect to Vercel for automatic deployments.

## License

This project is available as open source under the terms of the MIT License.

---

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui.
