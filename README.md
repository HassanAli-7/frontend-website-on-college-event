CampusConnect - College Event Management Website

A responsive, modern website for managing and displaying college events, built according to the Software Requirements Specification (SRS).



CampusConnect is a comprehensive event management website designed to showcase college events, activities, and community engagement. The website is built as a static site with JSON data sources, featuring a modern, responsive design with interactive elements.

Features

Home Page
- Welcome message with animated hero section
- Banner slideshow with multiple slides
- Navigation menu to all sections
- Upcoming events highlights
- Feature cards showcasing key functionalities
- Responsive design with smooth animations

About Page
- College information and highlights
- Annual events timeline organized by category:
  - **Technical Events**: Hackathon, TechFest, Robotics Competition
  - **Cultural Events**: Annual Day, Dance Night, Music Night
  - **Sports Events**: Inter-college matches, Alumni Meet, Sports Week
- Interactive timeline with event cards

Events Page
- Comprehensive event listing with filtering and sorting
- **Filtering Options**:
  - Category (Academic, Cultural, Sports, Departmental)
  - Search by event name or description
- **Sorting Options**:
  - Date (upcoming first)
  - Event name (alphabetical)
  - Category
- **View Modes**:
  - Card view for visual browsing
  - Table view for detailed information
- Bookmarking functionality for favorite events

Gallery Page
- Event photo gallery with filtering options
- **Filter Options**:
  - Year (2022, 2023, 2024)
  - Category (Technical, Cultural, Sports, Academic)
  - Event-specific filtering
- **View Modes**:
  - Grid layout for organized display
  - Masonry layout for dynamic arrangement
- Image modal with zoom functionality
- Bookmarking for favorite images
- Download functionality for images

Feedback Page
- Static feedback form (no backend processing)
- **Form Fields**:
  - Name and Email (required)
  - User Type selection
  - Event Attended (past 1 month)
  - 5-star rating system
  - Comments section
  - Newsletter subscription option
- Interactive star rating with hover effects
- Form validation and local storage

Contact Page
- Faculty and Student Coordinator information
- **Faculty Coordinators**: Name, Designation, Department, Contact details
- **Student Coordinators**: Name, Role, Department, Contact details
- Google Maps integration for campus location
- Contact form for inquiries
- Responsive card layout for contact information

Bookmarking System
- Local storage-based bookmarking
- Bookmark events and images
- Persistent across browser sessions
- Visual indicators for bookmarked items
- Easy management of bookmarked content

Technical Specifications

Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Bootstrap 5.3.0**: Responsive framework
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome 6.0.0**: Icons and visual elements
- **JSON**: Data storage and management

Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Responsive Design
- Mobile-first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Optimized for all screen sizes
- Touch-friendly interface

Project Structure

```
college_event/
├── index.html              # Home page
├── about.html              # About page
├── events.html             # Events listing page
├── gallery.html            # Photo gallery page
├── feedback.html           # Feedback form page
├── contact.html            # Contact information page
├── css/
│   └── style.css           # Custom styles
├── js/
│   ├── main.js             # Main JavaScript functionality
│   ├── events.js           # Events page specific code
│   ├── gallery.js          # Gallery page specific code
│   ├── feedback.js         # Feedback form handling
│   └── contact.js          # Contact page functionality
├── data/
│   ├── events.json         # Events data
│   ├── gallery.json        # Gallery images data
│   └── contact.json        # Contact information data
└── README.md               # Project documentation
```

Getting Started

Prerequisites
- Modern web browser
- Local web server (for JSON file loading)

Installation
1. Clone or download the project files
2. Place all files in a web server directory
3. Ensure all JSON files are accessible
4. Open `index.html` in a web browser

 Local Development

- **Live Server** (VS Code extension)


Data Structure

 Events JSON
```json
{
  "id": "event-001",
  "name": "Event Name",
  "date": "2024-03-15",
  "time": "09:00 AM",
  "venue": "Location",
  "category": "Technical|Cultural|Sports|Academic",
  "description": "Event description"
}
```

Gallery JSON
```json
{
  "id": "img-001",
  "title": "Image Title",
  "url": "https://example.com/image.jpg",
  "event": "Event Name",
  "year": "2024",
  "category": "Technical|Cultural|Sports|Academic",
  "description": "Image description"
}
```

Contact JSON
```json
{
  "faculty": [
    {
      "name": "Name",
      "designation": "Position",
      "department": "Department",
      "phone": "Phone Number",
      "email": "email@domain.com"
    }
  ],
  "students": [...]
}
```

Design Features

Color Scheme
- Primary: Blue (#0d6efd)
- Success: Green (#198754)
- Warning: Yellow (#ffc107)
- Info: Light Blue (#0dcaf0)
- Custom gradients for visual appeal

Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes
- Clear hierarchy and readability

Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions
- Loading animations
- Bookmark pulse effects

Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

Customization

Adding New Events
1. Edit `data/events.json`
2. Add new event object with required fields
3. Ensure proper date format (YYYY-MM-DD)

Adding Gallery Images
1. Edit `data/gallery.json`
2. Add new image object with URL and metadata
3. Use high-quality images (500x300px recommended)

Modifying Contact Information
1. Edit `data/contact.json`
2. Update faculty and student coordinator details
3. Maintain consistent data structure

Troubleshooting

Common Issues
1. **JSON not loading**: Ensure files are served from a web server
2. **Images not displaying**: Check image URLs and internet connection
3. **Bookmarks not saving**: Check browser localStorage support
4. **Responsive issues**: Clear browser cache and test on different devices

Browser Console
Check browser console for JavaScript errors and network issues.

License

This project is created for educational purposes as per the SRS requirements.

Contributing

This is a static website project. For modifications:
1. Edit the respective HTML, CSS, or JavaScript files
2. Update JSON data files as needed
3. Test across different browsers and devices

Support

For technical support or questions about the implementation, refer to the contact information provided in the contact page.

---

**Note**: This is a static website with no backend functionality. All forms are for demonstration purposes and data is stored locally in the browser.

**LIVE LINK**:https://ourcampusconnect.netlify.app/

