# Blogger App Web

A modern blogging platform built with React and TypeScript, featuring authentication and a clean, responsive interface styled with Tailwind CSS.

## Features

- 🔐 User Authentication
  - Social login support (Google, Facebook)
  - Protected routes for authenticated users
- 📝 Blog Management
  - Create and manage blog posts
  - Dashboard view for post management
  - Individual post view
- 🎨 Modern UI
  - Responsive design
  - Tailwind CSS styling
  - Clean and intuitive interface

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v7
- **HTTP Client:** Axios
- **State Management:** React Context
- **Authentication:** Cookie-based (js-cookie)

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/blogger-app-web.git
cd blogger-app-web
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:

```
REACT_APP_SERVER_URL=your_server_url_here
```

## Available Scripts

- **Start Development Server:**

  ```bash
  npm start
  ```

  Runs the app in development mode at [http://localhost:3002](http://localhost:3002)

- **Build for Production:**

  ```bash
  npm run build
  ```

  Creates an optimized production build in the `build` folder

- **Run Tests:**
  ```bash
  npm test
  ```
  Launches the test runner in interactive watch mode

## Project Structure

```
src/
├── assets/         # Static assets and SVG components
├── components/     # React components
│   ├── auth/      # Authentication related components
│   ├── blog/      # Blog related components
│   └── layout/    # Layout components
├── contexts/      # React contexts (e.g., AuthContext)
├── styles/        # Global styles and Tailwind config
└── utils/         # Utility functions and constants
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
