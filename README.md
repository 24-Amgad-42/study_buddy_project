# Study Buddy - Student Task Management System 📚

A simple, elegant, and responsive web application designed to help students organize their academic tasks, schedule study sessions, and track their progress efficiently.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Pages and Layout](#pages-and-layout)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Code Architecture](#code-architecture)
- [Team Members](#team-members)
- [Grading Rubric](#grading-rubric)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Overview

**Study Buddy** is an interactive web application developed as part of the **Web Development Fundamentals (Web 1)** course. The application provides students with an intuitive interface to manage their academic workload effectively using modern web technologies.

### Key Objectives

- Apply HTML5, CSS3, and JavaScript skills in a real-world project
- Create a responsive and user-friendly interface
- Implement local data storage using browser's localStorage API
- Demonstrate understanding of DOM manipulation and event handling

---

## Features

### ✨ Core Features

| Feature | Description |
|---------|-------------|
| **Responsive Design** | Works seamlessly on mobile, tablet, and desktop devices |
| **Task Management** | Add, view, and delete academic tasks with ease |
| **Local Storage** | Persistent data storage using browser's localStorage |
| **Dark Mode** | Toggle between light and dark themes for comfortable viewing |
| **Form Validation** | Ensures data integrity with client-side validation |
| **Intuitive Navigation** | Easy-to-use navigation bar for quick access to all pages |
| **Task Details** | Store task title, description, and due date |

### 🎨 User Interface

- Clean and modern design
- Consistent color scheme throughout
- Smooth transitions and animations
- Accessible and easy-to-navigate layout
- Mobile-first responsive approach

---

## Technologies Used

### Frontend Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **HTML** | HTML5 | Semantic structure and markup |
| **CSS** | CSS3 | Styling, layout, and responsiveness |
| **JavaScript** | ES6+ | Interactivity and DOM manipulation |
| **Storage** | localStorage API | Client-side data persistence |

### Key Techniques

**HTML5 Features:**
- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Form elements with validation attributes
- Proper document structure

**CSS3 Features:**
- CSS Variables for theme management
- Flexbox layout system
- Media queries for responsive design
- CSS transitions for smooth animations
- Dark mode support with `data-theme` attribute

**JavaScript Features:**
- Event listeners for user interactions
- localStorage API for data persistence
- DOM manipulation and element creation
- Array methods (forEach, filter, map)
- JSON parsing and stringification

---

## Project Structure

```
study_buddy_project/
│
├── index.html                    # Home page
│   └── Introduction and navigation
│
├── tasks.html                    # Tasks display page
│   └── List of all saved tasks
│
├── add_task.html                 # Task creation page
│   └── Form to add new tasks
│
├── about.html                    # About page
│   └── Project information and team details
│
├── style.css                     # Global stylesheet
│   └── Styling for all pages
│
├── script.js                     # JavaScript logic
│   └── Core functionality and interactivity
│
└── README.md                     # Project documentation
    └── This file
```

---

## Pages and Layout

### 1. Home Page (index.html)

The landing page that welcomes users and provides an overview of the application.

**Components:**
- Navigation bar with links to all pages
- Welcome message and project description
- Quick action buttons to add tasks or view existing tasks
- Theme toggle button for dark mode

**Purpose:** Provide users with a clear entry point and navigation options.

### 2. Tasks Page (tasks.html)

Displays all saved tasks in an organized list format.

**Components:**
- Navigation bar
- Task list container
- Individual task cards showing:
  - Task title
  - Task description
  - Due date
  - Delete button
- Empty state message when no tasks exist

**Purpose:** Allow users to view and manage their tasks.

### 3. Add Task Page (add_task.html)

Form page for creating new tasks.

**Components:**
- Navigation bar
- Task creation form with fields:
  - Task title (required)
  - Task description (optional)
  - Due date (required)
- Submit button
- Form validation feedback

**Purpose:** Provide a simple interface for adding new tasks.

### 4. About Page (about.html)

Information about the project and team members.

**Components:**
- Navigation bar
- Project overview
- Project objectives
- Team member information table
- Course and project details

**Purpose:** Provide context and transparency about the project.

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required
- No external dependencies

### Installation

#### Method 1: Direct File Opening

```bash
# Clone or download the repository
git clone https://github.com/24-Amgad-42/study_buddy_project.git
cd study_buddy_project

# Open in browser
open index.html
# or simply double-click index.html
```

#### Method 2: Using a Local Server

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server

# Then open browser and navigate to:
# http://localhost:8000
```

#### Method 3: Using GitHub Pages

Once deployed to GitHub Pages, access the live version at:
```
https://24-Amgad-42.github.io/study_buddy_project/
```

---

## Usage Guide

### Adding a Task

1. Click on **"Add Task"** in the navigation menu
2. Fill in the task details:
   - **Title** (required): Enter a descriptive task name
   - **Description** (optional): Add additional details
   - **Due Date** (required): Select a deadline
3. Click **"Save Task"** button
4. You'll be redirected to the Tasks page

### Viewing Tasks

1. Click on **"Tasks"** in the navigation menu
2. All saved tasks will be displayed in a list
3. Each task shows:
   - Title
   - Description
   - Due date
   - Delete button

### Deleting a Task

1. Navigate to the Tasks page
2. Find the task you want to delete
3. Click the **"Delete"** button
4. Confirm the deletion in the popup dialog
5. The task will be removed from localStorage

### Toggling Dark Mode

1. Click the **"Toggle Mode"** button in the top-right corner
2. The page will switch between light and dark themes
3. Your preference is saved automatically

---

## Code Architecture

### JavaScript - Theme Management

```javascript
// Get saved theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}

// Handle theme toggle
themeToggle.addEventListener('click', () => {
    let theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
```

### JavaScript - Task Management

```javascript
// Handle form submission
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const date = document.getElementById('task-date').value;
    
    // Create task object
    const newTask = {
        id: Date.now(),
        title,
        desc,
        date
    };
    
    // Get existing tasks
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Add new task
    tasks.push(newTask);
    
    // Save to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    // Show success message
    alert('Task saved successfully!');
    
    // Reset form
    addTaskForm.reset();
    
    // Redirect to tasks page
    window.location.href = 'tasks.html';
});
```

### JavaScript - Display Tasks

```javascript
function displayTasks() {
    const taskListContainer = document.getElementById('task-list');
    const noTasksMsg = document.getElementById('no-tasks');
    
    // Retrieve tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    if (tasks.length > 0) {
        // Hide empty state message
        if (noTasksMsg) noTasksMsg.style.display = 'none';
        
        // Clear previous content
        taskListContainer.innerHTML = '';
        
        // Display each task
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.innerHTML = `
                <div class="task-info">
                    <h3>${task.title}</h3>
                    <p>${task.desc}</p>
                    <small>Due: ${task.date}</small>
                </div>
                <div class="task-actions">
                    <button onclick="deleteTask(${task.id})">Delete</button>
                </div>
            `;
            taskListContainer.appendChild(taskElement);
        });
    }
}
```

### JavaScript - Delete Task

```javascript
function deleteTask(id) {
    // Confirm deletion
    if (confirm('Are you sure you want to delete this task?')) {
        // Get tasks
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Filter out deleted task
        tasks = tasks.filter(task => task.id !== id);
        
        // Save updated tasks
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Refresh display
        displayTasks();
    }
}
```

### CSS - Theme Variables

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #f5f5f5;
    --text-color: #333;
    --bg-color: #fff;
    --card-bg: #fff;
    --border-color: #ddd;
}

[data-theme="dark"] {
    --primary-color: #357abd;
    --secondary-color: #1a1a1a;
    --text-color: #f5f5f5;
    --bg-color: #121212;
    --card-bg: #1e1e1e;
    --border-color: #333;
}
```

---

## Team Members

| Name | Student ID | Role | Responsibilities |
|------|-----------|------|------------------|
| Ali Al-Sarari | 20201234 | HTML Structure | Page structure, semantic markup, forms |
| Omar Al-Kahtani | 20205678 | CSS Styling | Styling, responsiveness, color scheme |
| Huda Muhammad | 20207890 | JavaScript Logic | Functionality, localStorage, interactivity |

---

## Grading Rubric

| Criterion | Points | Notes |
|-----------|--------|-------|
| HTML Structure (Semantic, Correct) | 15 | Proper use of semantic HTML elements |
| CSS Styling & Responsiveness | 15 | Mobile-first responsive design |
| JavaScript Interactivity | 20 | Smooth functionality and user interactions |
| Use of localStorage | 10 | Proper data persistence implementation |
| Website Design & Layout (UI/UX) | 10 | Attractive and intuitive interface |
| Code Readability & Comments | 10 | Clean, organized, well-documented code |
| Project Completeness & Functionality | 10 | All features working correctly |
| Team Collaboration | 5 | Clear role division and cooperation |
| On-time Submission | 5 | Delivered before deadline |
| **Total** | **100** | - |

---

## Technical Notes

### localStorage Specifications

- **Storage Limit:** Typically 5-10 MB per domain
- **Data Persistence:** Data remains until manually cleared
- **Scope:** Domain-specific, not shared across domains
- **Format:** Stores data as strings (use JSON for objects)

### Browser Compatibility

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ Opera (all versions)

### Security Considerations

- This project is for educational purposes
- No sensitive data is transmitted to external servers
- All data remains on the client side
- No API keys or credentials are stored

---

## Future Enhancements

Potential improvements for future versions:

1. **Backend Integration** - Connect to a database for cloud storage
2. **Edit Functionality** - Allow users to modify existing tasks
3. **Task Filtering** - Sort and filter tasks by date, priority, or status
4. **Notifications** - Alert users when deadlines approach
5. **User Authentication** - Create user accounts and sync across devices
6. **Export Features** - Download tasks as PDF or CSV
7. **Collaboration** - Share tasks with other users
8. **Categories** - Organize tasks by subject or category
9. **Priority Levels** - Mark tasks as high, medium, or low priority
10. **Recurring Tasks** - Create repeating tasks for regular assignments

---

## Troubleshooting

### Issue: Tasks not saving

**Solution:** Check if localStorage is enabled in your browser settings.

### Issue: Dark mode not persisting

**Solution:** Clear browser cache and reload the page.

### Issue: Form validation not working

**Solution:** Ensure you're using a modern browser that supports HTML5 form validation.

### Issue: Styling looks broken

**Solution:** Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R) to clear CSS cache.

---

## Contributing

This is an educational project. For improvements or bug reports, please open an issue on GitHub.

---

## License

This project is open source and available for educational use.

---

## Support

For questions or issues, please:

1. Check the documentation in this README
2. Review the code comments in the source files
3. Open an issue on GitHub
4. Contact the development team

---

## Acknowledgments

- Developed as part of Web Development Fundamentals course
- Built with HTML5, CSS3, and Vanilla JavaScript
- Inspired by the need for simple task management tools for students

---

## Project Information

| Detail | Information |
|--------|-------------|
| **Project Name** | Study Buddy |
| **Version** | 1.0.0 |
| **Release Date** | June 2, 2026 |
| **Status** | Complete and Production Ready |
| **Repository** | https://github.com/24-Amgad-42/study_buddy_project |
| **Live Demo** | https://24-Amgad-42.github.io/study_buddy_project/ |

---

**Last Updated:** June 2, 2026  
**Maintained By:** Study Buddy Development Team  
**Status:** ✅ Active and Maintained
