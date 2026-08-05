# EL Project - TanStack Start Application

A modern web application built with **TanStack Start**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. This project provides professional services for mobile app development (Android & iOS), desktop applications, modern websites, server setup, and IT consulting.

## 🚀 Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- **Router**: [TanStack Router](https://tanstack.com/router) - Type-safe routing
- **UI Library**: [React](https://react.dev/) 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Package Manager**: Bun (recommended) or npm/yarn

## 📦 Features

- **File-based Routing** with TanStack Router
- **Server-Side Rendering (SSR)** with TanStack Start
- **Type-safe API** with Zod validation
- **Modern UI Components** with Radix UI primitives
- **Form Handling** with React Hook Form
- **Data Fetching** with TanStack Query
- **Dark Mode** support with Tailwind CSS
- **Analytics** with Vercel Analytics
- **Error Reporting** with Lovable error tracking

## 🛠️ Prerequisites

- **Node.js** >= 18.x (or use [Bun](https://bun.sh/))
- **npm**, **yarn**, **pnpm**, or **bun**

## 📥 Installation

```bash
# Clone the repository
git clone <repository-url>
cd <project-directory>

# Install dependencies (using bun recommended)
bun install

# Or using npm
npm install
```

## 🏃‍♂️ Development

Start the development server:

```bash
# Using bun
bun run dev

# Using npm
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified in your environment).

### Ngrok Support

This project includes Ngrok support for local development tunneling. The allowed hosts are pre-configured in `vite.config.ts`.

## 🏗️ Building

### Production Build

```bash
# Using bun
bun run build

# Using npm
npm run build
```

### Development Build

```bash
# Using bun
bun run build:dev

# Using npm
npm run build:dev
```

## 🚀 Deployment

### Vercel

This project is configured for Vercel deployment out of the box. The Nitro preset is set to `vercel` in `vite.config.ts`.

1. Push your code to a Git repository
2. Import the project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Deploy!

### Preview Locally

```bash
# Using bun
bun run preview

# Using npm
npm run preview
```

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── assets/            # Imported assets (images, fonts, etc.)
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and configurations
│   ├── routes/            # File-based routes (TanStack Router)
│   │   ├── __root.tsx     # Root layout component
│   │   ├── index.tsx      # Home page (/)
│   │   ├── blog.tsx       # Blog page (/blog)
│   │   └── showcase.tsx   # Showcase page (/showcase)
│   ├── routeTree.gen.ts   # Auto-generated route tree (do not edit)
│   ├── router.tsx         # Router configuration
│   ├── server.ts          # Server-side entry point
│   ├── start.ts           # TanStack Start entry point
│   └── styles.css         # Global styles with Tailwind
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── vercel.json            # Vercel deployment configuration
```

## 🎨 UI Components

This project uses [Radix UI](https://www.radix-ui.com/) primitives along with custom components:

- Accordion, Alert Dialog, Aspect Ratio
- Avatar, Checkbox, Collapsible
- Context Menu, Dialog, Dropdown Menu
- Hover Card, Label, Menubar
- Navigation Menu, Popover, Progress
- Radio Group, Scroll Area, Select
- Separator, Slider, Slot
- Switch, Tabs, Toggle, Toggle Group
- Tooltip

Additional libraries:
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **clsx** + **tailwind-merge** - Conditional className utilities
- **cmdk** - Command palette component
- **embla-carousel-react** - Carousel/slider
- **recharts** - Charts and data visualization
- **sonner** - Toast notifications
- **vaul** - Drawer component
- **date-fns** + **react-day-picker** - Date handling

## ✍️ Code Quality

### Linting

```bash
# Run ESLint
bun run lint
```

### Formatting

```bash
# Format code with Prettier
bun run format
```

## 🔧 Configuration

### TypeScript

See `tsconfig.json` for TypeScript compiler options.

### Tailwind CSS

Tailwind CSS v4 is configured with the new Vite plugin. See `src/styles.css` for customizations.

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your-api-url
VITE_ANALYTICS_ID=your-analytics-id
```

Environment variables prefixed with `VITE_` are exposed to the client.

## 🌐 Routes

Routes are defined using file-based routing in `src/routes/`:

| File | URL | Description |
|------|-----|-------------|
| `index.tsx` | `/` | Home page |
| `blog.tsx` | `/blog` | Blog listing |
| `showcase.tsx` | `/showcase` | Portfolio/Showcase |

See `src/routes/README.md` for detailed routing conventions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for EL Project.

## 📞 Contact

**EL Project** - Professional IT Services

- **Services**: Mobile Apps (Android & iOS), Desktop Applications, Websites, Server Setup, IT Consulting
- **Website**: [www.elproject.studio](https://www.elproject.studio)
- **Location**: Yogyakarta, Indonesia

---

Built with ❤️ using TanStack Start, React, and TypeScript
