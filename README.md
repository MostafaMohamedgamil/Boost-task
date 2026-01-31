# Role Dashboard

A modern Angular application demonstrating role-based access control with a clean, user-friendly dashboard interface.

## 🚀 Features

- **Role-Based Access Control**: Secure routing with role guards
- **Dynamic Role Selection**: Users can select their role from a dedicated selection page
- **Protected Routes**: Routes guarded based on user roles
- **Custom Directives**: 
  - `hasRole`: Show/hide elements based on user roles
  - `showIf`: Conditional rendering directive
- **Modern Angular**: Built with Angular 21+ using standalone components
- **Styled with Tailwind CSS**: Utility-first CSS framework
- **PrimeNG Components**: Rich UI component library
- **Signal-Based State Management**: Leveraging Angular signals for reactive state

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm 10.8.2 or higher
- Angular CLI 21.1.2

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd role-dashboard
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development Server

Start the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes to the source files.

## 🏗️ Project Structure

```
src/app/
├── core/
│   └── guards/
│       └── role.guard.ts        # Route protection based on roles
├── pages/
│   ├── data/                    # Data display page (role-protected)
│   ├── error/                   # Error page
│   └── role-selection/          # Role selection interface
├── services/
│   ├── role.service.ts          # Role state management
│   └── data.service.ts          # Data fetching service
└── shared/
    └── directives/
        ├── has-role.directive.ts    # Role-based visibility directive
        └── show-if.directive.ts     # Conditional display directive
```

## 🔐 Role Management

The application uses a signal-based `RoleService` to manage user roles:

- **setRole(role: string)**: Assign a role to the current user
- **getRole()**: Retrieve the current user's role
- **hasRole()**: Check if a user has a role assigned

The `roleGuard` protects routes and redirects unauthorized users to the role selection page.

## 🎨 Styling

This project uses:
- **Tailwind CSS 4**: Utility-first CSS framework
- **PrimeNG**: UI component library with theming support
- **SCSS**: For component-specific styles

## 🧪 Testing

Run unit tests with Vitest:

```bash
npm test
# or
ng test
```

## 📦 Building

Build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory, optimized for performance.

## 🛠️ Code Scaffolding

Generate new components, services, directives, etc.:

```bash
# Generate a component
ng generate component component-name

# Generate a service
ng generate service service-name

# Generate a directive
ng generate directive directive-name --standalone
```

For all available schematics:
```bash
ng generate --help
```

## 📚 Technologies

- **Angular 21.1.0**: Modern web framework
- **TypeScript 5.9.2**: Typed JavaScript
- **RxJS 7.8.0**: Reactive programming library
- **PrimeNG 21.1.1**: UI component suite
- **Tailwind CSS 4.1.12**: Utility-first CSS
- **Vitest 4.0.8**: Fast unit testing framework

## 📄 License

This project is private and not licensed for public use.

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
