## More Learning:

In the **Angular framework**, **Directives** are a core concept that allows developers to enhance the functionality of page components and improve their interactivity.

### What are Directives?

**Directives** are instructions or custom attributes added to HTML elements to make them interactive or to add specific behaviors. They can be categorized into three main types:

### 1. **Attribute Directives**

- These **change the appearance or behavior of an existing HTML element or component**.
- They are used to modify the properties of existing DOM elements, such as changing colors or adjusting settings.

### Common Examples:

- **`ngClass`**: Dynamically apply CSS classes.
  ```html
  <div [ngClass]="{'active': isActive, 'disabled': !isActive}"></div>
  ```
- **`ngStyle`**: Apply styles directly to an element.

  ```html
  <div [ngStyle]="{'color': color, 'font-size': fontSize + 'px'}"></div>
  ```

- **Creating a Custom Directive:**

  ```typescript
  import { Directive, ElementRef, Renderer2 } from "@angular/core";

  @Directive({
    selector: "[appHighlight]",
  })
  export class HighlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
      this.renderer.setStyle(
        this.el.nativeElement,
        "backgroundColor",
        "yellow"
      );
    }
  }
  ```

  **Usage:**

  ```html
  <p appHighlight>This text is highlighted.</p>
  ```

### 2. **Structural Directives**

- These **change the structure of the DOM** by adding, removing, or repeating HTML elements.
- They are identified by the `*` symbol preceding the directive.

### Common Examples:

- **`*ngIf`**: Displays an element based on a condition.

  ```html
  <div *ngIf="isVisible">This text is visible</div>
  ```

- **`*ngFor`**: Repeats an element based on a list.

  ```html
  <ul>
    <li *ngFor="let item of items">{{ item }}</li>
  </ul>
  ```

- **`*ngSwitch`**: Implements multi-branch logic.
  ```html
  <div [ngSwitch]="value">
    <p *ngSwitchCase="'case1'">Case 1</p>
    <p *ngSwitchCase="'case2'">Case 2</p>
    <p *ngSwitchDefault>Default case</p>
  </div>
  ```

### 3. **Components Directives**

- **Components themselves are a special type of Directive**.
- They have a template associated with them.
- Used to create interactive parts of the UI.

### Example:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-custom-component",
  template: `<h1>A Custom Component!</h1>`,
})
export class CustomComponent {}
```

**Usage:**

```html
<app-custom-component></app-custom-component>
```

### Differences Between the Types:

| Type                      | Purpose                                                         | Examples             |
| ------------------------- | --------------------------------------------------------------- | -------------------- |
| **Attribute Directives**  | Modify properties or styles of existing elements                | `ngClass`, `ngStyle` |
| **Structural Directives** | Change the page structure by adding/removing/repeating elements | `*ngIf`, `*ngFor`    |
| **Components Directives** | Create independent components with their own UI                 | Custom components    |

#### (ChatGPT)

---

In the **Angular framework**, both **Directives** and **Components** are essential elements for building user interfaces. While they share similarities, they serve different purposes in development.

### **1. What are Directives?**

- **Directives** are custom instructions used to influence the behavior or appearance of DOM elements.
- They are applied directly to HTML elements or used to enhance the element's interaction.

### **Types of Directives:**

1. **Attribute Directives**: Modify the behavior or properties of an element (e.g., `ngClass`, `ngStyle`).
2. **Structural Directives**: Change the DOM structure by adding or removing elements (e.g., `*ngIf`, `*ngFor`).
3. **Custom Directives**: Created to provide specific and custom behavior (e.g., a directive to change text color).

### **When to Use Directives?**

- When the goal is to modify the appearance or behavior of an existing DOM element.
- Examples:
  - Changing the color on mouse hover.
  - Hiding an element based on a condition.

### **2. What are Components?**

- **Components** are a special type of **Directives** but with additional capabilities.
- They consist of:
  1. **Template**: Defines the component's UI structure.
  2. **Logic**: Written in TypeScript to handle data and events.
  3. **Styles**: Add custom design to the component.

### **When to Use Components?**

- When the goal is to create an independent part of the user interface.
- Components typically:
  - Represent a part of the page (e.g., a navigation bar or product card).
  - Handle and process data or interactions.

### **Example of a Component:**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <h1>Welcome to My App</h1>
    </header>
  `,
  styles: [
    `
      header {
        background-color: blue;
        color: white;
        text-align: center;
      }
    `,
  ],
})
export class HeaderComponent {}
```

**Usage:**

```html
<app-header></app-header>
```

### **Key Differences Between Directives and Components:**

| **Feature**         | **Directives**                                             | **Components**                              |
| ------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| **Purpose**         | Modify the behavior or appearance of existing DOM elements | Create independent user interface parts     |
| **Definition**      | Does not contain a template or styles                      | Contains a template (HTML) and styles (CSS) |
| **Usage**           | Enhances or alters existing elements                       | Creates new UI components                   |
| **Application**     | Applied as an attribute to an existing element             | Used as a custom HTML element               |
| **Common Examples** | `ngClass`, `ngIf`, `ngStyle`                               | Navigation bar, product card, header        |

### **Additional Notes:**

- **Directives** are primarily used for providing small, specific functionalities.
- **Components** are used to break down the application into reusable parts.

#### (ChatGPT)

---

In the **Angular framework**, **Attribute Directives** are used to modify the appearance or behavior of existing HTML elements or components. They are applied as attributes to elements, allowing you to dynamically control their properties or styles.

### **What are Attribute Directives?**

- They are a type of **Directive** used to modify the properties, styles, or behaviors of DOM elements without altering the structure of the page (DOM structure).
- Ideal for applying visual or behavioral changes directly to elements.

### **Common Examples of Attribute Directives:**

### 1. **`ngClass`**

- Used to dynamically apply or remove CSS classes based on a condition.

```html
<div [ngClass]="{'active': isActive, 'disabled': !isActive}">
  This is a styled div.
</div>
```

### 2. **`ngStyle`**

- Used to apply CSS styles directly to an HTML element.

```html
<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">
  This text has dynamic styles.
</div>
```

### 3. **`[hidden]`**

- Used to hide an element conditionally.

```html
<p [hidden]="isHidden">This text is conditionally hidden.</p>
```

### **Creating a Custom Attribute Directive:**

You can create a custom directive to implement specific functionality for HTML elements.

### **Example: Changing Text Color on Hover**

#### 1. Define the Directive:

```typescript
import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHoverHighlight]",
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, "color", "blue");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, "color", "black");
  }
}
```

#### 2. Use it in a Template:

```html
<p appHoverHighlight>Hover over this text to change its color.</p>
```

### **When to Use Attribute Directives?**

- When you need to modify the appearance or style of an element.
- To apply small functionalities such as responding to events (Hover, Click).
- To avoid directly manipulating the DOM using JavaScript/TypeScript.

### **Difference Between Attribute Directives and Structural Directives:**

| **Attribute Directives**                        | **Structural Directives**                            |
| ----------------------------------------------- | ---------------------------------------------------- |
| Modify the behavior or appearance of an element | Modify the DOM structure by adding/removing elements |
| Do not add or remove elements in the DOM        | Add or remove elements conditionally                 |
| Examples: `ngClass`, `ngStyle`                  | Examples: `*ngIf`, `*ngFor`                          |

#### (ChatGPT)

---

In the **Angular framework**, **Structural Directives** are a type of directive used to modify the **structure of the DOM**. These directives control the addition, removal, or alteration of HTML elements in the DOM based on specific conditions or dynamic data.

### **What are Structural Directives?**

- They are used to change the UI structure (DOM Structure) by adding, removing, or repeating HTML elements.
- These directives are identified by the asterisk (`*`) prefix.

### **Common Examples of Structural Directives:**

### 1. **`*ngIf`**

- Used to conditionally display or hide an element.

```html
<div *ngIf="isVisible">This content is visible.</div>
<div *ngIf="!isVisible">This content is hidden.</div>
```

### 2. **`*ngFor`**

- Used to repeat an element based on a list or data array.

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

### 3. **`*ngSwitch`**

- Used for multi-branch logic.

```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="'case1'">This is case 1</p>
  <p *ngSwitchCase="'case2'">This is case 2</p>
  <p *ngSwitchDefault>This is the default case</p>
</div>
```

### **How Structural Directives Work:**

- When using **Structural Directives**, Angular adds or removes elements from the DOM based on the specified condition or data.
- The asterisk (`*`) is a shorthand that Angular translates into a more detailed programmatic form internally.

### **Example of `*ngIf` after Translation:**

```html
<div *ngIf="isVisible">Content</div>
```

Internally translated to:

```html
<ng-template [ngIf]="isVisible">
  <div>Content</div>
</ng-template>
```

### **Creating a Custom Structural Directive:**

You can create a custom directive to implement specific logic for modifying the DOM structure.

### **Example: Displaying an Element Only If a List is Not Empty**

#### 1. Define the Directive:

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appShowIfNotEmpty]",
})
export class ShowIfNotEmptyDirective {
  @Input() set appShowIfNotEmpty(items: any[]) {
    if (items && items.length > 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
```

#### 2. Usage in the Template:

```html
<div *appShowIfNotEmpty="myList">This list is not empty!</div>
```

## **When to Use Structural Directives?**

- When you need to modify the page structure based on conditions or data.
- Examples:
  - Displaying specific content based on a state or value.
  - Repeating elements dynamically based on data.

### **Difference Between Structural Directives and Attribute Directives:**

| **Structural Directives**                               | **Attribute Directives**                               |
| ------------------------------------------------------- | ------------------------------------------------------ |
| Modify the DOM structure by adding or removing elements | Modify the appearance or behavior of existing elements |
| Add or remove elements based on conditions              | Change properties or styles of existing elements       |
| Examples: `*ngIf`, `*ngFor`, `*ngSwitch`                | Examples: `ngClass`, `ngStyle`                         |

#### (ChatGPT)

---

In the **Angular framework**, **Built-in Directives** are a set of pre-built directives provided by Angular to perform common tasks in applications, such as element manipulation, conditional rendering, looping, and more.

These directives help streamline the development of user interfaces without needing to write excessive custom code.

### **What are Built-in Directives?**

- **Built-in Directives** are directives provided by Angular to perform specific tasks like conditional rendering, element manipulation, and data-driven iteration, among others.
- These directives are commonly used in everyday applications to reduce the amount of code needed for UI development.

### **Examples of Built-in Directives in Angular**

### 1. **`*ngIf`** (Structural Directive)

- Used to conditionally display or hide an element based on a condition.

```html
<div *ngIf="isVisible">This content is visible.</div>
```

- In the example above, the content is displayed if the `isVisible` variable is true; otherwise, it is hidden.

### 2. **`*ngFor`** (Structural Directive)

- Used to repeat an element based on an array or data collection.

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

- In this example, the `<li>` element will be repeated for each item in the `items` array.

### 3. **`ngClass`** (Attribute Directive)

- Used to add or remove CSS classes on elements based on conditions.

```html
<div [ngClass]="{'active': isActive, 'disabled': !isActive}">
  This div will have a dynamic class.
</div>
```

- In this example, the `active` class will be added if `isActive` is true, and the `disabled` class will be added if `isActive` is false.

### 4. **`ngStyle`** (Attribute Directive)

- Used to apply CSS styles directly to an element based on conditions.

```html
<div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">
  This text has dynamic styles.
</div>
```

- In this example, the text color and font size will change based on the values of `textColor` and `fontSize`.

### 5. **`[hidden]`** (Attribute Directive)

- Used to conditionally hide or show an element.

```html
<p [hidden]="isHidden">This text is conditionally hidden.</p>
```

- If the `isHidden` value is true, the text will be hidden.

### 6. **`ngSwitch`** (Structural Directive)

- Used for multiple branching logic based on a specific value.

```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="'case1'">This is case 1</p>
  <p *ngSwitchCase="'case2'">This is case 2</p>
  <p *ngSwitchDefault>This is the default case</p>
</div>
```

- Based on the value of the `value` variable, the corresponding paragraph will be displayed.

### **How Do Built-in Directives Work?**

- **Built-in Directives** are applied easily using HTML tags in templates.
- **Structural Directives** deal with changing the DOM structure (such as `*ngIf`, `*ngFor`, `*ngSwitch`).
- **Attribute Directives** deal with modifying the behavior or appearance of existing elements (such as `ngClass`, `ngStyle`, `ngModel`).

### **When to Use Built-in Directives?**

- **`*ngIf`**: When you need to show or hide elements based on a condition.
- **`*ngFor`**: When you need to repeat elements based on an array or data collection.
- **`ngClass` and `ngStyle`**: When you need to dynamically change the appearance of elements.
- **`ngSwitch`**: When you need to implement multiple conditional branches based on a value.

### **Difference Between Structural Directives and Attribute Directives:**

| **Structural Directives**                               | **Attribute Directives**                                                       |
| ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Modify the DOM structure by adding or removing elements | Modify the behavior or appearance of elements without changing their structure |
| Examples: `*ngIf`, `*ngFor`, `*ngSwitch`                | Examples: `ngClass`, `ngStyle`, `ngModel`                                      |

#### (ChatGPT)

---

In the **Angular framework**, **Building Custom Directives** is the process of creating a new directive that suits the specific needs of your application. Custom directives can be either **Structural Directives** or **Attribute Directives**, and they allow you to modify the behavior or appearance of HTML elements in a flexible and customized way.

### **What are Custom Directives?**

- Custom directives are directives that you create to apply specific logic or behavior to elements within your application.
- These directives allow you to add or modify functionality that is not provided by Angular's built-in directives.

### **Types of Custom Directives:**

1. **Attribute Directives**:

   - Modify the appearance or behavior of an HTML element.
   - They are similar to built-in directives like `ngClass` or `ngStyle` but are custom-built.

2. **Structural Directives**:
   - Modify the DOM structure by adding, removing, or repeating elements.
   - Similar to built-in directives like `*ngIf` or `*ngFor`.

### **How to Build a Custom Directive?**

### **1. Building a Custom Attribute Directive**

Let's create a custom directive that changes the text color when hovered (Hover Effect).

#### **Steps:**

1. **Create the Directive**:
   We need to use **`ElementRef`** to access the element the directive is applied to, and **`Renderer2`** to safely modify the element's properties.

```typescript
import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appHoverEffect]", // The directive will be applied to elements with this attribute
})
export class HoverEffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, "color", "blue"); // Change color on hover
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, "color", "black"); // Revert color when hover ends
  }
}
```

#### **2. Using the Directive in the Template (HTML)**:

```html
<p appHoverEffect>Hover over this text to change its color!</p>
```

In this example, when the user hovers over the text, the color will change to blue. When the mouse leaves the text, the color will revert to black.

### **2. Building a Custom Structural Directive**

Let's create a custom structural directive that only shows content if the list is not empty.

#### **Steps:**

1. **Create the Directive**:

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appShowIfNotEmpty]", // The directive will be applied to elements with this attribute
})
export class ShowIfNotEmptyDirective {
  @Input() set appShowIfNotEmpty(items: any[]) {
    if (items && items.length > 0) {
      this.viewContainer.createEmbeddedView(this.templateRef); // Show the element if the list is not empty
    } else {
      this.viewContainer.clear(); // Remove the element if the list is empty
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
```

#### **2. Using the Directive in the Template (HTML)**:

```html
<div *appShowIfNotEmpty="myList">The list is not empty!</div>
```

In this example, the text will only appear if the `myList` array contains items.

### **When to Use Custom Directives?**

- **Attribute Directives**: When you need to modify the appearance or behavior of elements, such as changing styles or adding extra functionality like mouse interaction.
- **Structural Directives**: When you need to modify the DOM structure, such as adding or removing elements based on a condition.

### **Tips for Building Custom Directives**

1. **Use `Renderer2`** to modify element properties instead of directly manipulating the DOM. This improves security and performance.
2. **`@HostListener`** allows you to interact with DOM events like `mouseenter` or `click`.
3. **`ng-template`** can be used in structural directives to represent content that can be repeated or displayed conditionally.

#### (ChatGPT)

---
