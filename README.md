# **Intellect UI Library**

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [System Design](#system-design)
4. [Usage](#usage)

## **Project Overview**

This project is a reusable React component library designed using Atomic Design principles and TypeScript. It centralizes UI components, utility functions, and services, ensuring consistency and reusability across multiple web projects.

The library includes atoms, molecules, organisms, templates, pages, and services that can be used to build scalable and maintainable React applications.

### **Components**

- **Atoms:** The smallest building blocks, like buttons, inputs, etc.
- **Molecules:** Combinations of atoms working together as a unit, like a card with a title and content.
- **Organisms:** Larger components composed of molecules, such as a header with a logo, navigation, and search bar.
- **Templates:** Page layouts combining organisms and molecules without specific content.
- **Pages:** Complete pages that bring together templates and content.
- **Services:** Business logic such as API calls, logging, and utility functions.

## **Installation**

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone git@github.com:anujsinghwd/intellect-ui-lib.git
    cd intellect-ui-lib
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

# **System Design**

## **Architecture Overview**

This library is designed using Atomic Design principles and organized into components that can be combined to build full pages or applications. The design focuses on modularity, reusability, and maintainability.

### **Core Concepts**

- **Atomic Design**: A methodology for creating design systems by breaking down the interface into smaller, reusable components.
- **Component Isolation**: Components are self-contained with their own styles.
- **TypeScript**: Provides type safety and improves code quality.

### **Component Flow**

1. **Atoms**: Basic building blocks (e.g., buttons, inputs).
2. **Molecules**: Groups of atoms (e.g., a card with a title and content).
3. **Organisms**: Complex components composed of molecules (e.g., a header with multiple elements).
4. **Templates**: Layouts combining organisms and molecules.
5. **Pages**: Complete pages ready to be used in an application.

### **Data Flow**

- **Props**: Components communicate via props to pass data and trigger actions.
- **State Management**: Managed locally within components or lifted to higher-order components if necessary.

### **Services**

- **API Calls**: Fetch data from remote servers and handle API interactions.
- **Logging**: Centralized logging to track errors and application behavior.


# **Usage**

## **1. Importing from Git**

To use the component library from a Git repository in your React application, follow these steps:

### **Step 1: Add the Library to Your Project**

You can add the component library directly to your project by specifying the Git repository URL in your `package.json` file or by using npm/yarn:

#### Using npm:

```bash
npm install git@github.com:anujsinghwd/intellect-ui-lib.git
```

#### Using yarn:

```bash
yarn add git@github.com:anujsinghwd/intellect-ui-lib.git
```

### **Step 2: Import Components**

Once the library is installed, you can start using the components in your React application.

```tsx
import React from 'react';
import { Button, Input } from '@intellect/ui';

function App() {
  return (
    <div>
      <h1>Welcome to My Application</h1>
      <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
      <Input placeholder="Type here..." />
    </div>
  );
}

export default App;
```
