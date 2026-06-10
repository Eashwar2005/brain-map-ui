# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🧠 MindOS - Interactive Brain Map

MindOS is a futuristic skill visualization platform that represents a user's abilities as a holographic neural network inside a 3D brain.

The project combines React, Three.js, React Three Fiber, and Framer Motion to create an immersive dashboard where skills are mapped to different regions of a holographic brain model.

---

## ✨ Features

### 🧠 Interactive 3D Brain

- Holographic brain model (.glb)
- Auto-rotation
- Bloom glow effects
- Transparent futuristic appearance
- Dynamic lighting

### ⚡ Neural Network Visualization

- Skills represented as neural nodes
- Animated glowing pathways
- Curved neural connections
- Pulsing node effects
- Real-time visual feedback

### 📊 Skill Analytics

Each skill displays:

- Skill Name
- Mastery Percentage
- Region Placement
- Neural Connections

Example skills:

- Programming
- Analytical Thinking
- Communication
- Leadership
- UI / UX
- Database Systems
- Core Intelligence

### 🌌 Immersive Environment

- Floating particles
- Holographic glow
- Bloom post-processing
- Dark futuristic UI

---

## 🛠 Tech Stack

### Frontend

- React
- Vite

### 3D Rendering

- Three.js
- React Three Fiber
- Drei

### Animation

- Framer Motion

### Visual Effects

- React Three Postprocessing
- Bloom Effects

---

## 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd brain-map-ui
```

Install dependencies:

```bash
npm install
```

Install required packages:

```bash
npm install three
npm install @react-three/fiber
npm install @react-three/drei
npm install @react-three/postprocessing
npm install framer-motion
```

---

## 🚀 Run Project

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 📁 Project Structure

```text
brain-map-ui
│
├── public
│   └── models
│       └── brain.glb
│
├── src
│   ├── components
│   │   ├── Brain3D.jsx
│   │   ├── BrainMap.jsx
│   │   ├── Sidebar.jsx
│   │   └── SkillPanel.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## 🧠 Future Enhancements

### AI Integration

- Skill prediction
- Learning recommendations
- Career path analysis
- Personalized insights

### Advanced Visualization

- Neural activity simulation
- Dynamic pathway generation
- Brain region clustering
- Interactive node selection

### Analytics Dashboard

- Progress tracking
- Learning streaks
- Skill growth charts
- Performance reports

### Gamification

- Achievements
- XP System
- Skill leveling
- Leaderboards

---

## 🎯 Vision

MindOS aims to transform traditional learning dashboards into an interactive cognitive visualization system where users can literally see their knowledge, skills, and growth represented as a living digital brain.

---

## 📜 License

MIT License

---

Developed using React, Three.js, React Three Fiber and Framer Motion.