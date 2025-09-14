const eventsData = [
  {
    "id": "event-001",
    "name": "Hackathon 2024",
    "date": "2024-03-15",
    "time": "09:00 AM",
    "venue": "Computer Science Lab",
    "category": "Technical",
    "description": "48-hour coding competition bringing together the brightest minds to solve real-world problems. Prizes worth ₹50,000 up for grabs!",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
  },
  {
    "id": "event-002",
    "name": "Annual Day Celebration",
    "date": "2024-02-28",
    "time": "06:00 PM",
    "venue": "Main Auditorium",
    "category": "Cultural",
    "description": "Grand celebration featuring cultural performances, awards, and recognition ceremonies. Join us for an evening of entertainment and celebration.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
  },
  {
    "id": "event-003",
    "name": "TechFest 2024",
    "date": "2024-09-20",
    "time": "10:00 AM",
    "venue": "Engineering Block",
    "category": "Technical",
    "description": "Annual technology festival showcasing innovations, projects, and technical workshops. Explore the latest in technology and innovation.",
    "image": "Techfest-2025-scaled.webp"
  },
  {
    "id": "event-004",
    "name": "Inter-College Cricket Tournament",
    "date": "2024-01-15",
    "time": "08:00 AM",
    "venue": "Sports Ground",
    "category": "Sports",
    "description": "Annual sports tournament featuring competitions in cricket, football, basketball, and more. Cheer for your college team!",
    "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop"
  },
  {
    "id": "event-005",
    "name": "Dance Night",
    "date": "2024-04-10",
    "time": "07:00 PM",
    "venue": "Cultural Center",
    "category": "Cultural",
    "description": "Spectacular dance performances showcasing various cultural traditions and modern styles. A night of rhythm and grace.",
    "image": "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&h=300&fit=crop"
  },
  {
    "id": "event-006",
    "name": "Alumni Meet 2024",
    "date": "2024-12-15",
    "time": "05:00 PM",
    "venue": "Conference Hall",
    "category": "Sports",
    "description": "Annual gathering of alumni featuring networking, sports events, and cultural activities. Reconnect with old friends and colleagues.",
    "image": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop"
  },
  {
    "id": "event-007",
    "name": "Robotics Competition",
    "date": "2024-11-25",
    "time": "09:30 AM",
    "venue": "Mechanical Engineering Lab",
    "category": "Technical",
    "description": "Inter-college robotics competition featuring autonomous and manual robot challenges. Showcase your engineering skills!",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop"
  },
  {
    "id": "event-008",
    "name": "Music Night",
    "date": "2024-10-05",
    "time": "07:30 PM",
    "venue": "Open Air Theater",
    "category": "Cultural",
    "description": "Musical extravaganza featuring student bands, solo performances, and guest artists. A night of melodies and harmonies.",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop"
  },
  {
    "id": "event-009",
    "name": "Sports Week",
    "date": "2024-08-12",
    "time": "08:00 AM",
    "venue": "Sports Complex",
    "category": "Sports",
    "description": "Week-long sports festival with various competitions and fitness activities for all students. Get ready for some healthy competition!",
    "image": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop"
  },
  {
    "id": "event-010",
    "name": "Departmental Seminar - AI & ML",
    "date": "2024-06-18",
    "time": "02:00 PM",
    "venue": "Lecture Hall 101",
    "category": "Academic",
    "description": "Expert seminar on Artificial Intelligence and Machine Learning trends. Learn from industry professionals and researchers.",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop"
  },
  {
    "id": "event-011",
    "name": "Cultural Night",
    "date": "2024-05-22",
    "time": "06:30 PM",
    "venue": "Main Auditorium",
    "category": "Cultural",
    "description": "A vibrant showcase of cultural diversity featuring traditional and contemporary performances from different regions.",
    "image": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=300&fit=crop"
  },
  {
    "id": "event-012",
    "name": "Startup Pitch Competition",
    "date": "2024-07-30",
    "time": "10:00 AM",
    "venue": "Business School",
    "category": "Academic",
    "description": "Present your innovative business ideas to a panel of industry experts. Win funding and mentorship opportunities.",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
  }
];

const galleryData = [
  {
    "id": "img-001",
    "title": "Hackathon 2023 Winners",
    "url": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
    "event": "Hackathon 2023",
    "year": "2023",
    "category": "Technical",
    "description": "Winning team celebrating their victory at the annual hackathon competition."
  },
  {
    "id": "img-002",
    "title": "Annual Day Performance",
    "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
    "event": "Annual Day 2023",
    "year": "2023",
    "category": "Cultural",
    "description": "Students performing traditional dance during the annual day celebration."
  },
  {
    "id": "img-003",
    "title": "Cricket Match Action",
    "url": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop",
    "event": "Inter-College Cricket",
    "year": "2023",
    "category": "Sports",
    "description": "Exciting moment from the inter-college cricket tournament."
  },
  {
    "id": "img-004",
    "title": "TechFest Exhibition",
    "url": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=350&fit=crop",
    "event": "TechFest 2023",
    "year": "2023",
    "category": "Technical",
    "description": "Students showcasing their innovative projects at the technology festival."
  },
  {
    "id": "img-005",
    "title": "Music Night Performance",
    "url": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    "event": "Music Night 2023",
    "year": "2023",
    "category": "Cultural",
    "description": "Student band performing live music during the annual music night."
  },
  {
    "id": "img-006",
    "title": "Robotics Competition",
    "url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
    "event": "Robotics Competition 2023",
    "year": "2023",
    "category": "Technical",
    "description": "Students competing in the robotics competition with their autonomous robots."
  },
  {
    "id": "img-007",
    "title": "Alumni Meet 2023",
    "url": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=350&fit=crop",
    "event": "Alumni Meet 2023",
    "year": "2023",
    "category": "Sports",
    "description": "Alumni gathering for networking and reconnecting with their alma mater."
  },
  {
    "id": "img-008",
    "title": "Dance Performance",
    "url": "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&h=400&fit=crop",
    "event": "Dance Night 2023",
    "year": "2023",
    "category": "Cultural",
    "description": "Students performing contemporary dance during the cultural night."
  },
  {
    "id": "img-009",
    "title": "Sports Week Basketball",
    "url": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop",
    "event": "Sports Week 2023",
    "year": "2023",
    "category": "Sports",
    "description": "Basketball match during the annual sports week competition."
  },
  {
    "id": "img-010",
    "title": "Academic Seminar",
    "url": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop",
    "event": "AI & ML Seminar 2023",
    "year": "2023",
    "category": "Academic",
    "description": "Expert delivering a seminar on Artificial Intelligence and Machine Learning."
  },
  {
    "id": "img-011",
    "title": "Hackathon 2024 Setup",
    "url": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
    "event": "Hackathon 2024",
    "year": "2024",
    "category": "Technical",
    "description": "Students setting up their workstations for the 48-hour hackathon competition."
  },
  {
    "id": "img-012",
    "title": "Annual Day 2024 Stage",
    "url": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=400&fit=crop",
    "event": "Annual Day 2024",
    "year": "2024",
    "category": "Cultural",
    "description": "Beautiful stage setup for the annual day celebration ceremony."
  },
  {
    "id": "img-013",
    "title": "Cricket Tournament 2024",
    "url": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&h=300&fit=crop",
    "event": "Inter-College Cricket 2024",
    "year": "2024",
    "category": "Sports",
    "description": "Action shot from the inter-college cricket tournament final match."
  },
  {
    "id": "img-014",
    "title": "TechFest 2024 Innovation",
    "url": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=350&fit=crop",
    "event": "TechFest 2024",
    "year": "2024",
    "category": "Technical",
    "description": "Students demonstrating their innovative technology projects."
  },
  {
    "id": "img-015",
    "title": "Cultural Night 2024",
    "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
    "event": "Cultural Night 2024",
    "year": "2024",
    "category": "Cultural",
    "description": "Traditional cultural performance during the cultural night celebration."
  },
  {
    "id": "img-016",
    "title": "Robotics 2024 Competition",
    "url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
    "event": "Robotics Competition 2024",
    "year": "2024",
    "category": "Technical",
    "description": "Students competing with their advanced robotics projects."
  },
  {
    "id": "img-017",
    "title": "Music Night 2024",
    "url": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    "event": "Music Night 2024",
    "year": "2024",
    "category": "Cultural",
    "description": "Live music performance during the annual music night event."
  },
  {
    "id": "img-018",
    "title": "Sports Week 2024",
    "url": "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop",
    "event": "Sports Week 2024",
    "year": "2024",
    "category": "Sports",
    "description": "Students participating in various sports activities during sports week."
  },
  {
    "id": "img-019",
    "title": "Academic Conference 2024",
    "url": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop",
    "event": "AI & ML Conference 2024",
    "year": "2024",
    "category": "Academic",
    "description": "Academic conference on emerging technologies and research."
  },
  {
    "id": "img-020",
    "title": "Alumni Meet 2024",
    "url": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=350&fit=crop",
    "event": "Alumni Meet 2024",
    "year": "2024",
    "category": "Sports",
    "description": "Annual alumni gathering for networking and celebration."
  }
];

const contactData = {
  "faculty": [
    {
      "name": "Dr. SanaUllah",
      "designation": "Professor & Head",
      "department": "Computer Science",
      "phone": "+92 300 0000000",
      "email": "sanaullah@campusconnect.edu"
    },
    {
      "name": "Prof. Misbah-ul-Haq",
      "designation": "Associate Professor",
      "department": "Electrical Engineering",
      "phone": "+92 300 0000000",
      "email": "misbah.ul.haq@campusconnect.edu"
    },
    {
      "name": "Dr. Esha Ali",
      "designation": "Professor",
      "department": "Mechanical Engineering",
      "phone": "+92 300 0000000",
      "email": "esha.ali@campusconnect.edu"
    },
    {
      "name": "Prof. Dawood Jadoon",
      "designation": "Assistant Professor",
      "department": "Business Administration",
      "phone": "+92 300 0000000",
      "email": "dawood.jadoon@campusconnect.edu"
    },
    {
      "name": "Dr. Sikander Awan",
      "designation": "Professor",
      "department": "Mathematics",
      "phone": "+92 300 0000000",
      "email": "sikander.awan@campusconnect.edu"
    },
    {
      "name": "Prof. Junaid Raza",
      "designation": "Associate Professor",
      "department": "Physics",
      "phone": "+92 300 0000000",
      "email": "junaid.raza@campusconnect.edu"
    }
  ],
  "students": [
    {
      "name": "Ali Raza",
      "designation": "Student Coordinator",
      "department": "Computer Science",
      "phone": "+92 300 0000000",
      "email": "ali.raza@student.campusconnect.edu"
    },
    {
      "name": "Ubaid Khan",
      "designation": "Cultural Secretary",
      "department": "Electrical Engineering",
      "phone": "+92 300 0000000",
      "email": "ubaid.khan@student.campusconnect.edu"
    },
    {
      "name": "Hassan Ramiz",
      "designation": "Sports Captain",
      "department": "Mechanical Engineering",
      "phone": "+92 300 0000000",
      "email": "hassan.ramiz@student.campusconnect.edu"
    },
    {
      "name": "Ahmed Raza",
      "designation": "Event Coordinator",
      "department": "Business Administration",
      "phone": "+92 300 0000000",
      "email": "ahmed.raza@student.campusconnect.edu"
    },
    {
      "name": "Usman Sheikh",
      "designation": "Technical Head",
      "department": "Computer Science",
      "phone": "+92 300 0000000",
      "email": "usman.sheikh@student.campusconnect.edu"
    },
    {
      "name": "Ayesha Malik",
      "designation": "Cultural Head",
      "department": "Mathematics",
      "phone": "+92 300 0000000",
      "email": "ayesha.malik@student.campusconnect.edu"
    }
  ]
};
