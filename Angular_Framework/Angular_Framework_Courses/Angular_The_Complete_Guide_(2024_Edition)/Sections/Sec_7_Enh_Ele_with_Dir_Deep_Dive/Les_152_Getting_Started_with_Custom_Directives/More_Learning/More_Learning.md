## More Learning:

### **Custom Directives in Angular:**

**Directives** in Angular are powerful tools used to manipulate the **DOM** elements' behavior and display. When you need to apply **custom behavior** that is not provided by default directives, you can create **custom directives**.

### **Types of Directives in Angular:**

1. **Structural Directives:**

   - These change the **DOM structure** by adding or removing elements.
   - Examples: `*ngIf`, `*ngFor`, `*ngSwitch`.

2. **Attribute Directives:**

   - These modify the **behavior** or **appearance** of elements without changing the DOM structure.
   - Examples: `ngClass`, `ngStyle`.

3. **Custom Directives:**
   - Directives created to apply **custom behavior** to **DOM** elements.

### **Steps to Create a Custom Directive:**

#### **1. Create a Simple Directive:**

##### **Example: A Directive to Change Text Color on Mouse Hover**

1. **Create the Directive:**
   You can create it manually or using the **Angular CLI**:

   ```bash
   ng generate directive Highlight
   ```

2. **Implement the Directive:**

   ```typescript
   import {
     Directive,
     ElementRef,
     HostListener,
     Renderer2,
   } from "@angular/core";

   @Directive({
     selector: "[appHighlight]", // The name of the directive used in the template
   })
   export class HighlightDirective {
     constructor(private el: ElementRef, private renderer: Renderer2) {}

     // Listen to mouse enter event
     @HostListener("mouseenter") onMouseEnter() {
       this.renderer.setStyle(this.el.nativeElement, "color", "blue");
     }

     // Listen to mouse leave event
     @HostListener("mouseleave") onMouseLeave() {
       this.renderer.setStyle(this.el.nativeElement, "color", "black");
     }
   }
   ```

3. **Use the Directive in the Template:**

   ```html
   <p appHighlight>Hover over me to change the color!</p>
   ```

### **Key Elements Explained:**

1. **`@Directive`:**

   - Used to define that this class is a **custom directive**.
   - The **`selector`** defines the name used to apply the directive in the template.

2. **`ElementRef`:**

   - Provides access to the DOM element the directive is applied to.

3. **`Renderer2`:**

   - Used to safely manipulate the **DOM**, instead of directly modifying the elements.

4. **`@HostListener`:**
   - Used to listen for **DOM events**, such as `mouseenter` and `mouseleave`.

### **Advanced Example: Conditional Directive**

#### **Directive to Add or Remove an Element Based on a Condition:**

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appIfElse]",
})
export class IfElseDirective {
  @Input() set appIfElse(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
```

**Usage:**

```html
<p *appIfElse="isLoggedIn">You are logged in!</p>
<p *appIfElse="!isLoggedIn">Please log in!</p>
```

### **Benefits of Using Custom Directives:**

1. **Code Reusability:**

   - The same behavior can be applied to multiple elements without repeating the code.

2. **Code Organization:**

   - **Behavior** can be separated from **components**, making the code cleaner and easier to maintain.

3. **Easy Interaction with DOM:**
   - Directives provide full control over **display** and **behavior**.

### **Conclusion:**

- **Custom directives** allow you to extend Angular's functionality and add new behaviors easily.
- They improve **code reusability** and **organization**, making applications more flexible and maintainable.

#### (ChatGPT)

---

### What are Custom Directives?

Custom directives in Angular are a powerful mechanism that allows you to extend the capabilities of basic HTML and create new UI elements and custom behaviors. Simply put, they are additional instructions you give to Angular to understand how to handle specific HTML elements in a special way.

### Why use Custom Directives?

- **Reusability of behavior:** You can create reusable directives to implement a specific behavior in multiple places in your application, such as input validation, adding special effects, or creating custom components.
- **Separation of concerns:** It helps you separate the presentation logic from the application logic, making your code more organized and maintainable.
- **Customization of HTML elements:** You can modify the behavior of existing elements or create entirely new elements.
- **Building complex components:** You can build complex components by combining multiple directives together.

### Types of Custom Directives

There are three main types of custom directives in Angular:

1. **Attribute Directives:**

   - Added as attributes to existing HTML elements.
   - Used to change the appearance or behavior of an existing element.
   - **Example:** The `ngClass` directive to change CSS classes based on a condition.

2. **Structural Directives:**

   - Used to create, remove, or transform HTML elements.
   - Used to control the DOM structure.
   - **Examples:** `*ngIf`, `*ngFor`.

3. **Component Directives:**
   - Are essentially components, but they are also considered directives.
   - Used to create complex reusable components.

### How to create a custom directive

1. **Create a class:** Create a new class that represents the directive, and decorate it with the `@Directive` decorator.
2. **Define the selector:** Define the selector that will be used to identify the elements that the directive will be applied to.
3. **Implement the behavior:** In the `ngOnInit` or `ngAfterViewInit` method, implement the behavior you want the directive to add to the element.

**Example: A directive to change the text color**

```typescript
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight("yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

**Using the directive:**

```html
<p appHighlight>This text will change color when you hover over it</p>
```

### Benefits of Custom Directives

- **Extensible:** Can be customized to meet your specific needs.
- **Reusable:** Can be used in multiple places in your application.
- **Makes code more readable and maintainable:** By separating concerns.
- **Allows creating custom components:** To build complex user interfaces.

### Summary

Custom directives are a powerful tool in Angular that allow you to customize the behavior of HTML elements and create custom components. By understanding how to create and use directives, you can build more robust and flexible Angular applications.

#### (Gemini)

---
