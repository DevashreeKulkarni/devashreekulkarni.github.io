# Devashree Kulkarni - Personal Portfolio Website

This is my personal portfolio website created as part of Assignment 3 for the *Introduction to Software Systems course.

The website is fully designed and implemented using **HTML**, **CSS**, and **JavaScript**, and is hosted using **GitHub Pages**.

---

## 🌐 Website Features

- Full-screen responsive background with aesthetic light blue theme
- Smooth animated navigation between sections
- Hover-based pop effects for images and icons
- Scroll-triggered animations for content
- Click & view event logger using JavaScript
- Fully functional 10,000+ word **Text Analyser** built with JavaScript
- Downloadable and embedded **PDF CV**
- Organized and accessible code structure

---

## 📁 Folder Structure

```
📂 images/            → All images (profile photo, icons, gallery)
📂 assets/            → CV PDF
📄 index.html         → Main HTML structure
📄 style.css          → Custom styles
📄 script.js          → Navigation, event logging, analyser logic
📄 README.md          → Project documentation
```

---

## 📌 Assignment Breakdown

### ✅ Question 1: Personal Website (25 marks)

I created a multi-section website with the following:

- **Home:** Profile picture (click to enlarge), name, tagline, and social media icons
- **About:** Introductory paragraph, and a "Place of Birth-Badlapur & Family" gallery
- **Education:** Styled vertical timeline of academic background
- **Achievements:** Animated bullet points that reveal one-by-one
- **Skills:** Grouped by level (basic, intermediate, advanced) and animated reveal
- **Text Analyser:** JavaScript-based tool to analyze user input
- **CV:** PDF download and viewing options

Each section is styled to match a light blue aesthetic and animated using scroll-based and button-triggered reveals.

---

### ✅ Question 2: Event Logging (15 marks)

Implemented a **JavaScript-based global event logger** that captures:

- **Click events**: Logs type (button, image, etc.) and timestamp
- **View events**: Logs when any section becomes visible in the viewport

#### 📋 Format:
```
2025-04-13T15:20:51.123Z - click - image
2025-04-13T15:20:55.456Z - view - section#skills
```

These logs are printed to the **browser console** using `console.log`.

---

### ✅ Question 3: Text Analyser (15 marks)

I developed a JavaScript-based **text analyser** that:

- Accepts user input in a styled textarea
- Analyzes and displays:
  - Number of letters, words, spaces, newlines, and symbols
  - Frequency of **pronouns**, **prepositions**, and **indefinite articles**
- Output is displayed in a structured, styled format grouped under headings

The results are only shown after the user clicks **"Analyze Text"**, and the input resets on every visit to the analyser section.

---

## ✨ Assumptions Made

- Section view is only logged once (first time it becomes visible)
- Only relevant HTML tags are tracked for click/view logs
- The user manually uploads the correct icons and images to `/images/`
- Font Awesome or icon libraries are not used; image-based icons are assumed

---

## 📄 Live Link

👉 [https://devashreekulkarni.github.io/](https://devashreekulkarni.github.io/)

you can access the repository at https://github.com/DevashreeKulkarni/devashreekulkarni.github.io
---

## 👩‍💻 Contact

**Devashree Kulkarni**  
📧 devashree.kulkarni@research.iiit.ac.in  

---

## ✅ Final Notes

To execute the file , can click on index.html OR just open website link in the browser (https://devashreekulkarni.github.io)
Hope this website fulfills its required purpose and provides the answers that the assignment asks for!

Thank you!
