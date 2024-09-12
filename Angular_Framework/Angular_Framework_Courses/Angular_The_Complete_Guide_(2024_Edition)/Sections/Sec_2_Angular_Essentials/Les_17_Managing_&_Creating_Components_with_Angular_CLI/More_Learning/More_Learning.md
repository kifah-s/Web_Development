## More Learning:

Angular CLI (Command Line Interface) provides several commands that help streamline development, testing, and building Angular applications. Below are some of the most important and commonly used commands:

### 1. **Creating a New Angular Project**

```bash
ng new <project-name>
```

- Creates a new Angular project with the specified project name.
- Example: `ng new my-angular-app`

### 2. **Serving the Application**

```bash
ng serve
```

- Starts a development server and opens your app in the browser. It automatically reloads when changes are made to your code.
- Example: `ng serve --open` (Opens the app in the default browser automatically)

### 3. **Generating Components, Services, Pipes, etc.**

Angular CLI provides shortcuts to generate various pieces of Angular code:

```bash
ng generate component <component-name>
ng generate service <service-name>
ng generate pipe <pipe-name>
ng generate directive <directive-name>
ng generate module <module-name>
```

- Generates the specified Angular feature (component, service, etc.).
- Example: `ng generate component header` (Generates a new `header` component)

### 4. **Running Unit Tests**

```bash
ng test
```

- Runs unit tests using Karma and Jasmine.

### 5. **Running End-to-End Tests**

```bash
ng e2e
```

- Runs end-to-end tests using Protractor or Cypress (depending on your setup).

### 6. **Building the Application**

```bash
ng build
```

- Builds the application for deployment. It compiles your code and generates an optimized version.
- Example: `ng build --prod` (Builds the app in production mode)

### 7. **Linting the Project**

```bash
ng lint
```

- Lints the project’s code using the default linter configuration (usually TSLint or ESLint).

### 8. **Adding Features to an Existing Project**

```bash
ng add <package>
```

- Adds a package or library to your project and configures it automatically.
- Example: `ng add @angular/material` (Adds Angular Material to your project)

### 9. **Updating Angular and Dependencies**

```bash
ng update
```

- Updates Angular and other dependencies to the latest version.
- Example: `ng update @angular/core @angular/cli`

### 10. **Serving a Specific Configuration**

```bash
ng serve --configuration <configuration>
```

- Serves the app using a specific build configuration (like `development`, `production`, etc.).
- Example: `ng serve --configuration=production`

### 11. **Showing Help for Commands**

```bash
ng help
```

- Lists all available Angular CLI commands and their options.

### 12. **Building a Production Version**

```bash
ng build --prod
```

- Builds an optimized version of the app suitable for deployment.

### 13. **Generating Guards, Interceptors, Classes, etc.**

```bash
ng generate guard <guard-name>
ng generate interceptor <interceptor-name>
ng generate class <class-name>
ng generate enum <enum-name>
ng generate interface <interface-name>
```

- Allows generating other Angular artifacts like guards, interceptors, classes, enums, and interfaces.

### 14. **Running a Custom Schematic**

```bash
ng generate <schematic-name>
```

- You can run custom schematics provided by external libraries or Angular schematics you have created.

### 15. **Building with Custom Output Paths**

```bash
ng build --output-path <directory>
```

- Allows building the app and specifying a custom output path for the compiled files.

#### (ChatGPT)

---
