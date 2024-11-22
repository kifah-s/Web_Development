## More Learning:

In Angular, **Custom Two-Way Binding** is a feature that allows developers to create a two-way binding mechanism for their custom components. It extends the default two-way binding concept (e.g., with `[(ngModel)]`) by enabling it for a property in your custom components. This is achieved by combining **Input** and **Output** properties in a specific way.

### How Custom Two-Way Binding Works

To implement custom two-way binding:

1. Use an **Input** property to receive data from the parent component.
2. Use an **Output** property with an `EventEmitter` to send updates back to the parent.
3. Name the `Output` property as `propertyChange`, where `property` matches the name of the `Input` property.

This naming convention allows Angular to recognize it as a two-way binding syntax.

---

### Steps to Create Custom Two-Way Binding

#### 1. Create a Custom Component

Suppose we have a custom component named `CounterComponent`.

##### Component Code:

```typescript
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ count }}</span>
      <button (click)="increment()">+</button>
    </div>
  `,
})
export class CounterComponent {
  @Input() count: number = 0; // Input property to receive data
  @Output() countChange = new EventEmitter<number>(); // Output property for two-way binding

  increment() {
    this.count++;
    this.countChange.emit(this.count); // Emit updated value
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count); // Emit updated value
  }
}
```

---

#### 2. Use the Component in a Parent

You can now use the `CounterComponent` in another component and enable two-way binding with the `[(count)]` syntax.

##### Parent Component Template:

```html
<app-counter [(count)]="value"></app-counter>
<p>Current Value: {{ value }}</p>
```

##### Parent Component Code:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  value: number = 10; // Initial value to bind with the custom component
}
```

---

### Explanation

1. **Input (`@Input() count`)**:
   - The `count` property allows the parent component to pass a value to the `CounterComponent`.
2. **Output (`@Output() countChange`)**:
   - The `countChange` event emits changes back to the parent component whenever the `count` value is updated.
3. **Binding**:
   - Using `[(count)]` in the parent component's template enables two-way data synchronization.

---

### Key Notes

1. **Naming Convention**:
   - The `Output` property must follow the naming pattern `propertyChange` (e.g., `countChange`) to enable two-way binding with `[(property)]`.
2. **Custom Use Cases**:
   - Useful when you have complex components (e.g., sliders, counters, date pickers) and want seamless two-way data binding like Angular's built-in controls.
3. **Flexibility**:
   - You can add validation or transformation logic inside the component while updating the value.

---

### Example in Action

- When the user clicks the "+" button in the `CounterComponent`:
  1. The `increment()` method updates the `count`.
  2. The updated `count` is emitted via `countChange`.
  3. The parent component updates its `value`, and the change reflects in the `CounterComponent`.

This approach ensures a dynamic, reusable, and modular implementation of two-way data binding in Angular.

#### (ChatGPT)

---
