📋 Project Overview
The Prestige Lawn landing page is engineered to serve as a high-performance marketing and lead-generation asset. It transitions away from traditional, generic lawn care designs by adopting a premium, cinematic visual language—utilizing rich near-black textures mixed with sharp emerald accents to convey elite craftsmanship and reliability.

Core Features
Staggered Micro-Interactions: Fluid entry animations on text, badges, and structural layouts that drive visitor engagement from the millisecond the page loads.

Centralized Configuration Engine: A strict separation of content and structure, allowing global text copy, branding metadata, and background asset references to be updated globally from a single file.

Fully Responsive Web Design: Hand-tailored utility breakpoints ensuring pixel-perfect layouts across mobile devices, tablets, laptops, and ultra-wide displays.

High-Conversion CTAs: Strategically positioned Call-to-Action buttons utilizing interactive hover states to organically guide users toward requesting free estimates.

🛠️ Architecture & Technical Execution
The project is built around a modern front-end stack designed for optimal execution speed, developer experience, and maintainability.

🚀 The Tech Stack
Framework: React 19 + Vite

Execution: Chosen for blazing-fast Hot Module Replacement (HMR) during development and incredibly lightweight, optimized asset bundling for production deployment.

Language: TypeScript

Execution: Implemented strict type safety across configuration models, component props, and animation variants to catch errors at compile time and ensure long-term code maintainability.

Styling: Tailwind CSS v4

Execution: Leveraged Tailwind v4's updated architectural engine to apply high-performance utility classes, custom theme layers, and advanced opacity blending directly within the markup.

Animations: Framer Motion

Execution: Leveraged declaration-based layout animations to orchestrate complex, sequenced transitions without cluttering the React component rendering lifecycles.

Icons: Lucide React

Execution: Clean, vector-based SVG iconography rendering natively within the Virtual DOM.

📁 Directory Structure
The workspace follows a highly scalable, domain-driven component pattern:

Plaintext
src/
├── assets/           # Global static graphics, textures, and asset files
├── components/       # Self-contained, modular UI building blocks
│   ├── About/        # About section outlining company history and story
│   ├── Contact/      # Comprehensive estimate intake and contact form
│   ├── Footer/       # Bottom layout featuring navigation mappings and copyright
│   ├── Gallery/      # Premium project visual showcase display layout
│   ├── Hero/         # Above-the-fold screen with staggered text entries
│   ├── Nav/          # Responsive navigation header with mobile toggle handling
│   ├── Process/      # Step-by-step sequential customer workflow mapping
│   ├── Reviews/      # Customer testimonials slider and grid layout
│   ├── Services/     # Feature grid breaking down primary service offerings
│   └── TrustBar/     # Key performance metrics and social proof validation ribbon
├── config/           # Core configuration files (site.config.ts)
├── App.tsx           # Main application hub assembling the component tree
└── main.tsx          # Application entry point mounting the React DOM
🧠 Technical Architecture & Design Decisions
1. Component-Driven Architecture
The Decision: Instead of crafting a single monolithic page template, the user interface was decoupled into highly isolated, self-contained components within src/components/.

The Rationale: This guarantees that editing a feature inside the step-by-step workflow (Process.tsx) or altering an interactive map block inside the intake section (Contact.tsx) will never inadvertently cause visual regression or style bleed inside the header navigation (Nav.tsx) or main intro screen (Hero.tsx).

2. Centralized Configuration Modeling (site.config.ts)
The Decision: All text configurations, messaging, contact coordinates, service breakdowns, and universal structural background paths are completely decoupled from the presentation components. They are managed through a centralized configuration file.

The Rationale: This treats the React components as reusable UI engines. If the client updates a phone number, scales pricing, swaps a core tagline, or adjusts the universal background image textures, the modification is executed in one single line of code inside site.config.ts without needing to parse, modify, or test individual tsx markup layouts.

3. Advanced Animation Orchestration (Staggered Children)
The Decision: Instead of elements clumsily appearing all at once or relying on fragile, time-delayed CSS animations, Framer Motion parent/child variants were structured into the layout.

The Rationale: By defining containerVariants with properties like staggerChildren: 0.15 and delayChildren: 0.2, the entry flow automatically sequences itself. The premium capsule badge fades and slides up first, instantly followed by the primary title text, the descriptive paragraph, and finally the interactive action buttons. This structural scaffolding delivers an immersive user experience without hurting performance.

4. Background Layering and High-Contrast Accessibility
The Decision: Overlays are meticulously structured using background images combined with responsive Tailwind opacity controls.

The Rationale: To maintain an industrial, premium texture across sections like the Hero, global configuration background paths (such as concreteTexture) are bound directly to element style tags. To ensure the white and emerald typography passes strict color contrast accessibility rules, custom background filters (bg-black/70) are applied over the imagery, ensuring crisp text legibility on all screen sizes.

💻 Local Installation & Development
To spin up this project in a local development environment, follow these steps:

Prerequisites
Make sure you have Node.js installed on your computer.

1. Install Project Dependencies
Navigate to the root directory containing the package.json file and run:

Bash
npm install
2. Launch Local Development Server
Boot up Vite's lightning-fast local testing server:

Bash
npm run dev
Open your browser and navigate to the local server URL provided in the terminal output (typically http://localhost:5173).

3. Compiling for Production
To bundle, optimize, and tree-shake the TypeScript source code into highly compressed static assets ready for production deployment:

Bash
npm run build
The compiled build output will be successfully written to the local /dist directory.

4. Local Build Preview
To spin up a local node server to preview the production-ready build and measure raw performance before deployment:

Bash
npm run preview