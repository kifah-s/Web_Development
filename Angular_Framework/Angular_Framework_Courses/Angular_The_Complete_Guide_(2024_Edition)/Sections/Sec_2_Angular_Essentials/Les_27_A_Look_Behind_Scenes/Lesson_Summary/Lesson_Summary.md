## Lesson Summary:

In the context of **Angular**, the concept of **Change Detection** is crucial for synchronizing data (state) with the user interface (UI). This mechanism ensures that the UI is automatically updated when data changes. Understanding how change detection works behind the scenes is important for optimizing application performance and controlling update behavior.

### Overview of Change Detection

When data changes within the application, Angular needs to be informed to update the UI based on these changes. Angular uses a mechanism called **Zone.js** to monitor changes in data and automatically update the view.

#### Basic Steps in Change Detection:

1. **Trigger an Event**: Something happens that leads to a change in data (e.g., user input in a form or an API response).
2. **Start Change Detection**: Angular checks for changes within the components to ensure that new data is synchronized with the UI.
3. **Automatic Update**: If changes are detected, Angular will re-render the affected component or parts of the application.

### How Change Detection Works

Angular relies on an architectural model called **zones**, which isolates the execution of code that could lead to changes in the application’s state. The key tool in this context is **Zone.js**, a library that tracks asynchronous events such as:

- Browser events (clicks, scrolls, etc.).
- HTTP responses (e.g., API responses).
- Timers like `setTimeout` or `setInterval`.

#### What does Zone.js do?

1. When an event such as a button click or an HTTP response occurs, **Zone.js** captures it.
2. **Zone.js** notifies Angular about the event, which triggers the **Change Detection** mechanism to start working.

### Default Strategy: **Change Detection Strategy**

In Angular, there are two main strategies for change detection:

1. **Default Strategy**: In this case, Angular checks all child components of the root component and re-evaluates values in templates to update the UI if changes are detected.
2. **OnPush Strategy**: This strategy is used to improve performance by reducing the number of change detection checks. Angular only checks for changes when an input property changes or a specific event occurs in the component.

#### Differences Between Default and OnPush:

- **Default**: Angular updates the view in every change detection cycle, even if nothing has changed.
- **OnPush**: Angular only re-checks when an input changes or a specific event occurs, reducing the number of updates.

### How to Optimize Change Detection Performance

Change detection can impact performance, especially in large and complex applications. Here are some ways to optimize performance:

1. **Use OnPush**: If a component does not need continuous change detection, you can use the `OnPush` strategy to reduce the number of checks.

   ```typescript
   @Component({
     selector: "app-example",
     templateUrl: "./example.component.html",
     changeDetection: ChangeDetectionStrategy.OnPush,
   })
   export class ExampleComponent {
     // This component only checks for changes when input or event updates occur.
   }
   ```

2. **Use Detach and Reattach**: Developers can detach components from the change detection cycle and then manually reattach them when needed.

   ```typescript
   constructor(private cdRef: ChangeDetectorRef) {}

   // Detach from the change detection cycle
   this.cdRef.detach();

   // Reattach when necessary
   this.cdRef.reattach();
   ```

3. **Asynchronous Tasks**: Be mindful of asynchronous tasks like `setTimeout` or HTTP responses. Use **NgZone.runOutsideAngular** to execute code outside the Angular zone to avoid unnecessary change detection.

   ```typescript
   constructor(private ngZone: NgZone) {}

   this.ngZone.runOutsideAngular(() => {
     // Code here won't trigger change detection
     setTimeout(() => {
       this.ngZone.run(() => {
         // Code here will trigger change detection
       });
     }, 1000);
   });
   ```

### Additional Notes on Change Detection Cycle:

- **Angular** triggers change detection when input properties (`@Input`) change in a component or when an event (`@Output`) is emitted.
- In some cases, developers might need to manually trigger **Change Detection** using `markForCheck` to ensure the view updates when values change.

### Summary

- **Angular Change Detection** tracks changes in data and updates the UI accordingly.
- It leverages **Zone.js** to monitor asynchronous events that may affect the state.
- The **Default Change Detection Strategy** checks all components for changes, while **OnPush** optimizes performance by checking only when necessary.
- Developers can fine-tune change detection by using strategies like `OnPush`, detaching components, and running tasks outside Angular’s zone.

#### (ChatGPT)

---

### - Behind The Scenes: Zone.js

---
