# Portfolio Website Customization Guide

## Overview
Your premium portfolio website is now ready! This guide will help you customize the content, images, and settings to make it truly yours.

## Quick Start

The website is built with React, TypeScript, and Tailwind CSS. All components are located in `src/app/components/`.

## Customization Checklist

### 1. Personal Information

#### Navigation & Footer (`src/app/components/Navigation.tsx` & `src/app/components/Footer.tsx`)
- Replace `"Your Name"` with your actual name

#### Hero Section (`src/app/components/Hero.tsx`)
- **Line 35**: Replace `"Your Name"` with your name
- **Line 40**: Update `"Technical Designer & Digital Product Builder"` with your title
- **Lines 47-49**: Customize your positioning statement

### 2. About Section (`src/app/components/About.tsx`)
- **Lines 33-54**: Update the biographical content to reflect your experience
- **Lines 59-66**: Customize the statistics to match your background

### 3. Skills Section (`src/app/components/Skills.tsx`)
- **Lines 7-44**: Modify the skill categories and individual skills
- Add or remove categories as needed
- Update skill names within each category

### 4. Projects Section (`src/app/components/Projects.tsx`)
- **Lines 13-139**: Update the 6 featured projects with your actual work
- For each project, customize:
  - `title`: Project name
  - `summary`: Brief description
  - `problem`: Challenge you solved
  - `solution`: Your approach
  - `role`: Your specific contribution
  - `features`: Key features you built
  - `technologies`: Tech stack used
  - `impact`: Results and outcomes
  - `category`: Project type
- Add project images by replacing the placeholder div (see Images section below)

### 5. Experience Section (`src/app/components/Experience.tsx`)
- **Lines 6-49**: Update the work experience entries
- Modify role, company, period, description, and highlights
- Add or remove experience entries as needed

### 6. How I Work Section (`src/app/components/HowIWork.tsx`)
- **Lines 8-39**: Customize your work principles and methodology
- **Line 94**: Update the project flow steps if needed

### 7. CV Section (`src/app/components/CV.tsx`)
- **Lines 10-18**: Update the `handleDownload` function with your actual CV file path
- Example implementation:
```typescript
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/your-cv.pdf'; // Place your CV in the public folder
  link.download = 'Your-Name-CV.pdf';
  link.click();
};
```
- **Line 53**: Update the "Updated" date

### 8. Contact Section (`src/app/components/Contact.tsx`)
- **Line 73**: Replace `your.email@example.com` with your email
- **Line 88**: Update LinkedIn URL
- **Line 103**: Update GitHub URL
- **Line 118**: Update WhatsApp number in the format `https://wa.me/YOUR_NUMBER`
- **Lines 27-32**: Integrate with your preferred form service (e.g., Formspree, EmailJS, or custom backend)

Example form integration:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Using Formspree example
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  if (response.ok) {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  }
};
```

### 9. Footer (`src/app/components/Footer.tsx`)
- **Line 16**: Update your name and tagline
- **Lines 21-51**: Update all social links

## Adding Project Images

### Option 1: Using Placeholder Images (Unsplash)
For quick setup, you can use the Unsplash integration:
1. The website already has access to Unsplash photos
2. Update the project cards in `src/app/components/Projects.tsx`

### Option 2: Using Your Own Images
1. Place your images in a public directory (e.g., `public/images/projects/`)
2. Update the project image placeholder in `Projects.tsx`:

```tsx
// Replace this (around line 235):
<div className="w-full h-48 mb-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900">
  {/* ... */}
</div>

// With this:
<img 
  src="/images/projects/your-project.jpg" 
  alt={project.title}
  className="w-full h-48 mb-6 rounded-xl object-cover"
/>
```

3. Do the same in `ProjectModal.tsx` (around line 54)

## Color Scheme Customization

The website uses a sophisticated dark theme by default. To customize colors:

1. **Accent Colors**: Update gradient colors in components
   - Example in `Hero.tsx` line 18: Change `rgba(120,119,198,0.1)` to your preferred color

2. **Button Colors**: Update in component files
   - Primary buttons: `bg-white text-black hover:bg-zinc-200`
   - Outline buttons: `border-white/20 hover:bg-white/10`

## File Structure

```
src/app/
├── App.tsx                    # Main application component
├── components/
│   ├── Navigation.tsx         # Sticky navigation bar
│   ├── Hero.tsx              # Hero section with CTA
│   ├── About.tsx             # About me section
│   ├── Skills.tsx            # Skills showcase
│   ├── Projects.tsx          # Project cards grid
│   ├── ProjectModal.tsx      # Project detail modal
│   ├── Experience.tsx        # Work experience timeline
│   ├── HowIWork.tsx          # Methodology section
│   ├── CV.tsx                # CV download section
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer with links
│   └── hooks/
│       └── useInView.tsx     # Scroll animation hook
```

## Testing Your Changes

After making changes:
1. The dev server should auto-reload
2. Check the preview to see your updates
3. Test all navigation links
4. Test the contact form
5. Test the CV download
6. Verify all external links open correctly

## Deployment Tips

When ready to deploy:
1. Ensure all placeholder content is replaced
2. Add your actual CV file
3. Test the contact form submission
4. Verify all social media links
5. Replace demo images with real project screenshots
6. Test on mobile devices

## Need Help?

- All components use TypeScript for better development experience
- All styling uses Tailwind CSS v4
- Animations are powered by Motion (Framer Motion)
- The website is fully responsive and mobile-optimized

Happy customizing! 🚀
