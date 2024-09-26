## More Learning:

In **Angular**, the **`EventEmitter`** is a tool used to transfer data or signals from a child component to a parent component. It is used with the **`@Output()`** decorator to enable communication between components, especially when a child component needs to notify the parent component about an event or specific data.

### **Concept of `EventEmitter`:**

- **`EventEmitter`** allows child components to emit events that can be subscribed to by the parent component.
- It is mainly used when there's a need to pass data or notify the parent component when an action occurs in the child component, like clicking a button or submitting a form.

### **How to Use `EventEmitter`:**

#### **1. In the Child Component:**

In the child component, we define the **`EventEmitter`** using **`@Output()`** and use it to emit events to the parent component.

#### **Example:**

##### **TypeScript - Child Component:**

```typescript
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `<button (click)="sendData()">Send Data to Parent</button>`,
})
export class ChildComponent {
  @Output() dataEmitter = new EventEmitter<string>();

  sendData() {
    const data = "Hello Parent!";
    this.dataEmitter.emit(data); // Emit event with data
  }
}
```

- **@Output() dataEmitter**: Here, we define the `dataEmitter` variable as an `EventEmitter` of type **`string`**.
- **emit()**: Used to send the data or event to the parent component.

#### **2. In the Parent Component:**

In the parent component, we subscribe to the event emitted from the child component using the **`(dataEmitter)`** property in the child component's element.

##### **HTML - Parent Component:**

```html
<app-child (dataEmitter)="handleData($event)"></app-child>
```

##### **TypeScript - Parent Component:**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  template: `<p>Received Data: {{ receivedData }}</p>`,
})
export class ParentComponent {
  receivedData: string = "";

  handleData(data: string) {
    this.receivedData = data; // Receive data from the child component
  }
}
```

- **(dataEmitter)="handleData($event)"**: Here, we capture the data or event emitted from the child component. The data is passed to the `handleData` function in the parent component.

### **Importance of `EventEmitter`:**

1. **Component Communication**: `EventEmitter` facilitates sending data from child components to parent components, making it easier to achieve interaction between components.
2. **Event Emission**: It allows sending specific events, such as button clicks or form submissions, to the parent component for further handling.

### **Common Uses of `EventEmitter`:**

- Sending user input data from a form in the child component to the parent component.
- Notifying the parent component when a certain action is performed in the child component, such as clicking a button or changing a state.

### **Summary:**

- **`EventEmitter`** is a class used with **`@Output()`** to emit events from a child component to a parent component.
- It is used to pass data or send signals from the child component to the parent component.
- The emitted events are subscribed to using the syntax `(eventEmitter)="function()"` in HTML.

#### (ChatGPT)

---

**What is an Event Emitter?**
An Event Emitter in Angular is a powerful mechanism that allows different components within an application to communicate and exchange data. Think of it as a way to emit an event or signal from one component to another, similar to events in desktop applications.

**Why use Event Emitters?**

- **Inter-component communication:** When you have multiple components and want an event in one component to affect another, Event Emitters are the ideal solution.
- **Building complex applications:** Event Emitters allow you to build more complex applications by enabling components to interact and communicate flexibly.
- **Controlling data flow:** You can precisely control how data flows between components using Event Emitters.

**How do Event Emitters work?**

1. **Creating an Event Emitter:** In the component that wants to emit the event, a new instance of `EventEmitter` is created.
2. **Emitting the event:** When something happens in the component, the `emit()` method is called on the `EventEmitter` instance to emit the event with the data to be sent.
3. **Listening to the event:** In the component that receives the event, the event is subscribed to using the `(event)` directive, where the name of the event created in the other component is specified.

**Practical Example:**

Let's say we have a search component and a results component. When a user enters text in the search field, we want to update the search results in the other component.

```typescript
// search.component.ts
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search",
  template: ` <input type="text" (input)="onSearch($event.target.value)" /> `,
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(searchTerm: string) {
    this.searchEvent.emit(searchTerm);
  }
}
```

```typescript
// results.component.ts
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-results",
  template: `
    <div *ngFor="let result of results">
      {{ result }}
    </div>
  `,
})
export class ResultsComponent {
  @Input() results: string[] = [];
}
```

```html
<app-search (searchEvent)="onSearch($event)"></app-search>
<app-results [results]="searchResults"></app-results>
```

```typescript
// app.component.ts
import { Component } from "@angular/core";

@Component({
  // ...
})
export class AppComponent {
  searchResults: string[] = [];

  onSearch(searchTerm: string) {
    // Here, perform the search and update the results array
    this.searchResults = ["result1", "result2"];
  }
}
```

**In this example:**

- The search component emits a `searchEvent` when the search text changes.
- The results component listens to this event and updates the results array.

**Key Points:**

- **@Output():** Used to specify that a property is an Event EventEmitter.
- **@Input():** Used to bind data between components.
- **(event):** Used to listen to events in templates.

**In summary,** Event Emitters are a powerful tool in Angular that helps you build more flexible and interactive applications. By understanding how they work and using them correctly, you can create more complex and efficient Angular applications.

#### (Google Gemini)

---
