# Alaguselvam N - Professional Portfolio

A modern, responsive portfolio website built for freshers and entry-level developers showcasing skills, projects, experience, and education.

## Features

✨ **Modern Design**
- Gradient backgrounds and smooth animations
- Responsive grid layouts
- Clean, professional typography
- Dark mode ready

🎯 **Key Sections**
- **Hero Section**: Eye-catching introduction with CTA buttons
- **About**: Professional summary and statistics
- **Skills**: Categorized technical skills with tags
- **Experience**: Timeline view of work experience
- **Projects**: Showcase of academic and professional projects
- **Education**: Educational background and achievements
- **Contact**: Multiple contact options and social links

📱 **Responsive Design**
- Mobile-first approach
- Works perfectly on all screen sizes
- Optimized for tablets, desktops, and mobile devices

⚡ **Interactive Features**
- Smooth scrolling navigation
- Scroll animations
- Hover effects on cards and buttons
- Active navigation indicators
- Font Awesome icons for social links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Smooth interactions and animations
- **Font Awesome**: Icon library

## File Structure

```
portfolio/
├── index.html       # Main HTML file
├── style.css        # Complete styling
├── script.js        # Interactive features
└── README.md        # This file
```

## Sections Breakdown

### Hero Section
- Prominent headline and subtitle
- Call-to-action buttons
- Social media links
- Animated elements

### About Section
- Professional summary
- Key statistics (Projects, Experience, Technologies)
- Career objective

### Skills Section
- Organized by categories
  - Languages (Java, Python, HTML/CSS, JavaScript)
  - Frameworks & Tools (Spring Boot, Angular, REST APIs, Git)
  - Databases & Design (MySQL, JDBC, UI/UX, Figma)

### Experience Section
- Timeline view of internships
- Job responsibilities and achievements
- Company links

### Projects Section
- Project cards with descriptions
- Technology stacks
- Key achievements
- Project links

### Education Section
- Degree/Certification information
- Institution details
- CGPA/Percentage
- Year of completion

### Contact Section
- Email address
- Phone number
- Location
- Social media links (LinkedIn, GitHub)

## Customization Guide

### Updating Personal Information

1. **Name and Title**: Edit in hero section (index.html, line ~37-39)
2. **Email & Phone**: Update in contact section (index.html, line ~289-296)
3. **Social Links**: Modify URLs in social links (index.html, line ~52-55, 315-320)
4. **Location**: Update in contact section (index.html, line ~297-299)

### Changing Colors

Edit the CSS variables in `style.css` (lines 1-10):
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent */
    --accent-color: #ec4899;       /* Accent color */
    /* ... more colors ... */
}
```

### Adding New Projects

Add a new `project-card` div in the projects section:
```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <span class="project-badge">Category</span>
    </div>
    <p class="project-description">Description...</p>
    <div class="tech-stack">
        <span class="tech">Technology 1</span>
        <span class="tech">Technology 2</span>
    </div>
    <ul class="project-details">
        <li>Achievement 1</li>
        <li>Achievement 2</li>
    </ul>
</div>
```

### Adding New Skills

Update the skill categories in the skills section:
```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

## Browser Compatibility

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE 11: ⚠️ Limited support (no animations)

## Performance Tips

1. **Optimize Images**: Use web-optimized formats (WebP, JPEG)
2. **Lazy Loading**: Consider adding lazy loading for images
3. **Minify CSS/JS**: Minify files for production
4. **CDN**: Host on a CDN for faster delivery

## SEO Best Practices

- Update meta description in `<head>`
- Add Open Graph tags for social sharing
- Use semantic HTML5 elements
- Add schema.org structured data for job profile

## Deployment Options

1. **GitHub Pages**: Free hosting directly from GitHub
2. **Netlify**: Easy drag-and-drop deployment
3. **Vercel**: Optimized for web projects
4. **Traditional Web Hosting**: Upload files via FTP

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Download resume as PDF
- [ ] Animated skill progress bars
- [ ] Filter projects by technology
- [ ] Testimonials section
- [ ] Newsletter subscription

## Support

For issues or questions, contact:
- Email: alagu1637@gmail.com
- LinkedIn: linkedin.com/in/alagu-selvam-757a99250
- GitHub: github.com/Alaguselvam003

---

**Created**: May 2026
**Last Updated**: May 2026
**Version**: 1.0
