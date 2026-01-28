
# 🌐 Personal Portfolio Website

A modern, responsive **personal portfolio website** built using **HTML, CSS, and JavaScript**.  
This website showcases my skills, projects, experience, and contact information with a clean UI, smooth interactions, and light/dark theme support.

---

## ✨ Features

- 📱 Fully responsive design (mobile, tablet & desktop)
- 🌙 Light / Dark mode (saved using LocalStorage)
- 🍔 Hamburger menu for small screens
- 🧭 Active navbar highlighting based on current page
- 🧩 Reusable Navbar & Footer using JavaScript
- 📂 Project showcase section
- 📄 **Download CV button downloads CV automatically (PDF)**
- 📬 Modern Contact page UI
- 🎨 Custom color theme & animations
- 🔗 Social media links integrated

---

## 🛠️ Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling & Responsive Design  
- **JavaScript (ES6)** – DOM manipulation & functionality  
- **Font Awesome** – Icons  

---

## 📁 Project Structure

```

portfolio/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── style.css
├── script.js
│
├── images/
│   └── (all images used in the website)
│
├── assets/
│   └── khyati_cv.pdf
│
└── README.md

````

---

## 📄 CV Download Feature

Clicking the **download cv** button automatically downloads my CV as a **PDF file** using the HTML `download` attribute.

```html
<a href="assets/khyati_cv.pdf" download>
  <button class="btn">Hire Me</button>
</a>
````

---

## 🌙 Dark Mode Logic

* Theme preference is stored in **LocalStorage**
* The selected theme remains active even after page reload

---

## 🚀 How to Run the Project

1. Download or clone the repository

   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```
2. Open `index.html` in your browser
3. Done ✅


