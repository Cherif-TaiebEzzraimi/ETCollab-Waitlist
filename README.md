# ETCollab Waitlist

A React-based waitlist page for ETCollab, built with Vite and styled with Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern UI**: Clean, professional design with smooth animations
- **Component-based Architecture**: Modular React components for easy maintenance
- **Waitlist Integration**: Ready to connect with your waitlist form

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd ETCollab-Waitlist
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
ETCollab-Waitlist/
├── public/                 # Static assets
│   ├── Footer/            # Footer images
│   ├── login/             # Login-related images
│   ├── profile/           # Profile images
│   └── public/            # Contributor profile images
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Benefits.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── Contributors.jsx
│   │   └── footer.jsx
│   ├── pages/
│   │   ├── Waitlist.jsx   # Main waitlist page
│   │   └── waitlist.css   # Page-specific styles
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── main.css           # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Updating the Waitlist Form

To connect your waitlist form, update the `onClick` handler in `src/components/Hero.jsx`:

```jsx
<Hero onClick={() => window.open('https://your-waitlist-form-url', '_blank')} />
```

### Styling

The project uses Tailwind CSS for styling. You can customize colors and styles in:
- `src/main.css` - Global styles and Tailwind configuration
- `src/pages/waitlist.css` - Page-specific styles
- `src/components/Contributors.css` - Component-specific styles

### Content Updates

Update content in the respective component files:
- **Hero section**: `src/components/Hero.jsx`
- **How it works**: `src/components/HowItWorks.jsx`
- **Benefits**: `src/components/Benefits.jsx`
- **Testimonials**: `src/components/Testimonials.jsx`
- **Contributors**: `src/components/Contributors.jsx`

## Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.2** - Build tool and dev server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the ETCollab platform.