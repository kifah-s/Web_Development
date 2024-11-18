## More Learning:

In **Angular**, the concept of **Extracting Input Values via Template Variables** refers to a method for directly accessing input values in an HTML template using **template variables** without needing additional data binding or event handling logic.

## What does this mean?

Using template variables, you can define a variable that references an HTML element (like an `<input>` field), allowing you to access its properties or values directly in the template.

### General Syntax

```html
<input #inputVar type="text" />
<button (click)="doSomething(inputVar.value)">Submit</button>
```

### Explanation of the Example:

1. **`#inputVar`**:

   - This defines a template variable named `inputVar`.
   - It references the `<input>` element.

2. **`inputVar.value`**:

   - Accesses the value of the `<input>` field through the template variable.

3. **`(click)="doSomething(inputVar.value)"`**:
   - When the button is clicked, the `doSomething` function is called, passing the value of the input (`inputVar.value`) as an argument.

### Benefits of Using Template Variables:

- **Quick and Simple**: No need for complex bindings between the template and the component.
- **Clarity**: Makes the template code more readable.
- **Code Reduction**: Avoids defining variables or methods in the component just to access input values.

### Complete Practical Example

#### HTML

```html
<div>
  <label for="name">Name:</label>
  <input #nameInput id="name" type="text" />
  <button (click)="logName(nameInput.value)">Log Name</button>
</div>
```

#### TypeScript

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  logName(name: string): void {
    console.log("Entered name:", name);
  }
}
```

### How Does It Work?

1. When the user enters a value in the text field (`<input>`), it is stored in the `value` property of the input element.
2. Upon clicking the button, the input value is passed to the `logName` function.

### When to Use This Approach:

- When you need quick and direct access to an input value.
- If the input value is temporary or doesn’t require complex handling.
- If you don’t need to store the value in the component (e.g., no persistent state tracking).

### Notes:

- If the input value needs to be synchronized with the component's data model permanently, consider using **Two-way Data Binding** (`[(ngModel)]`).

#### (ChatGPT)

---

In Angular, we can use template variables to capture the values of HTML elements directly in the template without needing to create a model-binding. Here’s how to use this method:

1. **Add Template Variables**:
   You can add template variables using `#variableName` in the input element. For example:

   ```html
   <input #usernameInput type="text" placeholder="Enter your username" />
   ```

2. **Use the Variables in the Template**:
   You can access the value of the input element inside the template using the template variable:

   ```html
   <button (click)="onSubmit(usernameInput.value)">Submit</button>
   ```

   In this example, when the submit button is clicked, the input value `usernameInput.value` is passed to the `onSubmit` function in the component.

3. **Define the Function in the Component**:
   Now, you can define the `onSubmit` function in the TypeScript file of the component to do whatever you want with the input value.
   ```typescript
   export class AppComponent {
     onSubmit(value: string) {
       console.log("Username:", value);
     }
   }
   ```

This way, you can easily extract input values via template variables in Angular. If you need more details or have any other questions, feel free to ask!

#### (Copilot)

---
