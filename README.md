# Dulani Jayakody - Portfolio Website

A modern, animated portfolio website built with React.js and Tailwind CSS.

## 🚀 Features

- ✨ Advanced animations and transitions
- 📱 Fully responsive design
- 🎨 Modern gradient-based UI
- 🖱️ Interactive hover effects
- 📊 Parallax scrolling effects
- 🎯 Smooth navigation
- 💫 3D card transforms
- 🌟 Typewriter effect
- 🔄 Mouse-tracking effects

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── HeroSection.js
│   ├── AboutSection.js
│   ├── EducationSection.js
│   ├── ProjectsSection.js
│   ├── SkillsSection.js
│   ├── CertificationsSection.js
│   ├── ReferencesSection.js
│   └── Footer.js
├── App.js
├── index.js
├── index.css
└── tailwind.config.js
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Create a new React app**
```bash
npx create-react-app dulani-portfolio
cd dulani-portfolio
```

2. **Install dependencies**
```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. **Initialize Tailwind CSS**
```bash
npx tailwindcss init -p
```

4. **Replace files**
- Copy all the component files into `src/components/` folder
- Replace `src/App.js` with the provided App.js
- Replace `src/index.js` with the provided index.js
- Replace `src/index.css` with the provided index.css
- Replace `tailwind.config.js` with the provided tailwind.config.js
- Replace `package.json` with the provided package.json

5. **Create the components folder**
```bash
mkdir src/components
```

6. **Add your profile image** (Optional)
- Place your profile image in `public/` folder (e.g., `public/profile.jpg`)
- Update the image path in `HeroSection.js`:
```javascript
<img src="/profile.jpg" alt="Dulani Jayakody" className="w-full h-full object-cover" />
```

7. **Update GitHub links**
- Open `ProjectsSection.js`
- Replace `github: "#"` with your actual repository URLs

8. **Update LinkedIn URL**
- Search for `https://linkedin.com` in all files
- Replace with your actual LinkedIn profile URL

9. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🎨 Customization

### Colors
To change the color scheme, modify the gradient colors in the components:
- `from-purple-400 to-pink-400` - Change these throughout the components
- Update hover states with your preferred colors

### Content
- **Profile Info**: Update in `HeroSection.js`
- **About**: Modify in `AboutSection.js`
- **Education**: Edit the `education` array in `EducationSection.js`
- **Projects**: Update the `projects` array in `ProjectsSection.js`
- **Skills**: Modify the `skills` object in `SkillsSection.js`
- **Certifications**: Edit the `certifications` array in `CertificationsSection.js`
- **References**: Update the `references` array in `ReferencesSection.js`

### Animations
All animations are defined in `index.css`. You can:
- Adjust animation durations
- Modify animation delays
- Add new keyframe animations
- Change easing functions

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## 🔧 Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **CSS3** - Custom animations

## 📝 License

This project is open source and available under the MIT License.

## 👤 Contact

**Dulani Jayakody**
- Email: dulanijayakody596@gmail.com
- Phone: +94 71 1960738
- GitHub: [@Dj0083](https://github.com/Dj0083)
- Location: Horana, Sri Lanka

---

Built with ❤️ using React & Tailwind CSS