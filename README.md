# Web Template

This project is a basic web template using React, Vite, and Styled Components. It serves as a starting point for building modern web applications with a simple and fast development setup.

## Features

- React 18
- TypeScript
- Vite for fast development and build
- Styled Components for styling
- ESLint for linting
- Axios for HTTP requests
- React Router for navigation

## Installation

To get started with the project, clone this repository and install the dependencies.

### Clone the repository

```bash
git clone https://github.com/twoheaven/web_template.git
cd web_template
```

---

# Project Structure

This is the project directory structure, which organizes the code and assets in a maintainable way:

```
src/                      # Root source directory of the project
├── assets/               # Manages static assets (images, fonts, etc.)
│   ├── images/           # Stores image files used throughout the project
│   └── fonts/            # Stores font files used throughout the project
├── components/           # Manages reusable UI components
│   ├── common/           # Common components used across the project
│   │   ├── Button/       # Button component related files
│   │   │   ├── Button.tsx    # Button component implementation
│   │   │   ├── Button.styles.ts  # Styles for the Button component
│   │   │   └── index.ts  # Exports Button component module
│   │   └── Input/        # Input component related files
│   ├── layout/           # Layout components (Header, Footer, Sidebar, etc.)
│   │   ├── Header/       # Header component files
│   │   ├── Footer/       # Footer component files
│   │   └── Sidebar/      # Sidebar component files
│   └── feature/          # Feature-specific components
│       ├── Auth/         # Authentication-related components
│       └── Dashboard/    # Dashboard-related components
├── pages/                # Page-level components
│   ├── Home/             # Home page components
│   ├── Login/            # Login page components
│   └── Dashboard/        # Dashboard page components
├── hooks/                # Custom React hooks
│   ├── useAuth.ts        # Custom hook for authentication logic
│   └── useForm.ts        # Custom hook for form handling
├── apis/                 # API communication logic
│   ├── authApi.ts        # Functions for authentication-related APIs
│   └── userApi.ts        # Functions for user-related APIs
├── utils/                # Utility functions
│   ├── format.ts         # Utility functions for data formatting
│   ├── validation.ts     # Utility functions for input validation
│   └── paths.ts          # Enum for React Router paths management
├── types/                # TypeScript types definitions
│   ├── user.ts           # User-related types
│   └── common.ts         # Commonly used types
├── styles/               # Styling-related files
│   ├── global.ts         # Global style definitions
│   └── theme.ts          # Project's theme settings
└── store/                # State management files
    ├── auth/             # Authentication-related state management
    └── user/             # User-related state management

package.json             # Project configuration
tsconfig.json            # TypeScript configuration
vite.config.ts           # Vite configuration
eslint.config.js         # ESLint configuration
index.html               # Main HTML file for React mounting with `div#root`
```

---

## **`src/`**

This is the root folder that contains all the source code for the application. The directories are organized by their role and purpose.

---

### **1. `assets/`**

This folder stores static resources (images, fonts, etc.) used in the application.

- **`images/`**:  
  Stores image files such as PNG, JPG, SVG, etc., used across the project, including logos, background images, icons, etc.  
  Example: `logo.png`, `background.jpg`
- **`fonts/`**:  
  Stores font files. It can include Google Fonts, external resources, or custom fonts.  
  Example: `Roboto.woff`, `OpenSans.ttf`

---

### **2. `components/`**

This folder contains reusable UI components for the application, organized into `common/`, `layout/`, and `feature/`.

- **`common/`**:  
  Contains small UI components used across all screens.
  - **`Button/`**: Button component.
    - `Button.tsx`: The main file defining the button's behavior and events.
    - `Button.styles.ts`: Styles related to the Button component (CSS-in-JS).
    - `index.ts`: Exports the Button component for easy access from other parts of the project.
  - **`Input/`**: Input field components such as text boxes and checkboxes.
- **`layout/`**:  
  Contains components that define the layout of the page.
  - **`Header/`**: Header area (logo, navigation menu, etc.).
  - **`Footer/`**: Footer area (copyright, links, etc.).
  - **`Sidebar/`**: Sidebar (menus, settings, etc.).
- **`feature/`**:  
  Contains components specific to certain features.
  - **`Auth/`**: UI related to login, sign-up, etc.
  - **`Dashboard/`**: UI related to the dashboard.

---

### **3. `pages/`**

This folder contains page-level components, which are tied to specific routes.

- **`Home/`**:  
  The main home page, such as landing pages or introductory pages.
- **`Login/`**:  
  The login page, including forms for user login and social login buttons.
- **`Dashboard/`**:  
  The dashboard page, typically used for displaying user statistics or management tools.

---

### **4. `hooks/`**

This folder contains custom React hooks for managing state or reusable logic.

- **`useAuth.ts`**:  
  Custom hook to handle authentication logic, such as checking login status and retrieving user information.
- **`useForm.ts`**:  
  Custom hook for managing form data, such as handling input value validation and updating state.

---

### **5. `api/`**

This folder contains functions related to communicating with external APIs.

- **`auth.ts`**:  
  Functions for authentication-related API calls such as login, logout, and registration.
- **`user.ts`**:  
  Functions for handling user-related API requests, such as fetching or updating user data.

---

### **6. `utils/`**

This folder contains utility functions that are reusable across the application.

- **`format.ts`**:  
  Utility functions for formatting data.  
  Example: formatting dates, converting currencies, formatting phone numbers.
- **`validation.ts`**:  
  Functions for input validation.  
  Example: checking email format, verifying password strength.

---

### **7. `types/`**

This folder contains TypeScript type definitions.

- **`user.ts`**:  
  Type definitions related to users.  
  Example: `User`, `UserProfile`.
- **`common.ts`**:  
  Commonly used type definitions.  
  Example: `APIResponse`, `Error`.

---

### **8. `styles/`**

This folder contains global style definitions and theme settings.

- **`global.ts`**:  
  Global styles applied across the application.  
  Example: styles for `body`, `html`, and common classes.
- **`theme.ts`**:  
  Theme-related settings such as color palette, font sizes, spacing, etc.

---

### **9. `store/`**

This folder contains state management files.

- **`auth/`**:  
  State management for authentication-related data.
- **`user/`**:  
  State management for user-related data.

---

## Features

- React 18
- TypeScript
- Vite for fast development and build
- Styled Components for styling
- ESLint for linting
- Axios for HTTP requests
- React Router for navigation

## Installation

To get started with the project, clone this repository and install the dependencies.

### Clone the repository

```bash
git clone https://github.com/twoheaven/web_template.git
cd web_template
```

### Install dependencies

If you're using Yarn as your package manager (recommended for this project), run:

```bash
yarn install
```

Or, if you're using npm:

```bash
npm install
```

## Development

After installing the dependencies, you can start the development server using the following command:

```bash
yarn dev
```

This will start the Vite development server, and you can view your application at [http://localhost:3000](http://localhost:3000).

## Build

To build the project for production, use the following command:

```bash
yarn build
```

This will compile the TypeScript files and create an optimized build in the `dist/` directory.

## Linting

To run the ESLint checker for code quality, use:

```bash
yarn lint
```

## Preview

To preview the production build locally, use the following command:

```bash
yarn preview
```

This will serve the production build on a local server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
