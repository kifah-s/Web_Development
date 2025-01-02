## More Learning:

In **Angular**, **Pipes** are a way to transform data in templates before displaying it to the user. Pipes are categorized into two types: **Pure Pipes** and **Impure Pipes**. The distinction between them lies in how and when Angular re-evaluates their logic.

### 1. **Pure Pipes**

#### Definition:

A **Pure Pipe** is a pipe that Angular executes only when it detects **pure changes** in the input data. **Pure changes** are changes that do not mutate the original data structure but instead replace it with a completely new value.

#### Characteristics:

- **Default Behavior**: Pipes are pure by default.
- Angular executes a pure pipe **only when the input value or its reference changes**.
- Ideal for performance optimization since they are recalculated less frequently.

#### Example:

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pureExample",
  pure: true, // Default behavior
})
export class PureExamplePipe implements PipeTransform {
  transform(value: number): number {
    console.log("Pure pipe executed");
    return value * 2;
  }
}
```

#### Use Case:

Pure pipes are suitable when:

- Input data is immutable.
- You don’t need to detect changes caused by mutations inside objects or arrays.

#### Example in Template:

```html
<p>{{ myValue | pureExample }}</p>
```

Here, the pipe runs only when `myValue` changes to a new reference.

### 2. **Impure Pipes**

#### Definition:

An **Impure Pipe** is a pipe that Angular executes on **every change detection cycle**, regardless of whether the input data reference changes or not.

#### Characteristics:

- Marked explicitly as impure by setting `pure: false` in the pipe metadata.
- Angular re-evaluates the pipe logic **frequently**, which can affect performance for large applications.
- Useful for handling **mutations** in objects, arrays, or dynamic values.

#### Example:

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "impureExample",
  pure: false, // Makes the pipe impure
})
export class ImpureExamplePipe implements PipeTransform {
  transform(value: number[]): number[] {
    console.log("Impure pipe executed");
    return value.map((num) => num * 2);
  }
}
```

#### Use Case:

Impure pipes are suitable when:

- The input data changes frequently due to mutation (e.g., adding/removing elements in an array or modifying object properties).
- Real-time data updates are necessary.

#### Example in Template:

```html
<p>{{ myArray | impureExample }}</p>
```

Here, the pipe runs on every change detection, even if `myArray` is mutated but not reassigned.

### Comparison Between Pure and Impure Pipes

| Feature               | **Pure Pipe**                           | **Impure Pipe**                       |
| --------------------- | --------------------------------------- | ------------------------------------- |
| **Execution Trigger** | Runs only when input reference changes. | Runs on every change detection cycle. |
| **Performance**       | High performance.                       | Can degrade performance.              |
| **Use Case**          | Immutable data or infrequent changes.   | Mutable data or frequent updates.     |
| **Default Behavior**  | Yes                                     | No (explicitly marked as impure).     |

### Best Practices

1. Use **pure pipes** whenever possible for better performance.
2. Avoid **impure pipes** unless necessary to handle complex dynamic updates.
3. For mutable data structures, consider using **trackBy** with `*ngFor` or event bindings for better optimization instead of relying on impure pipes.

#### (ChatGPT)

---

In Angular, pipes are used to transform data and display it in a suitable format for the user. There are two main types of pipes: pure pipes and impure pipes. The difference between them lies in how they respond to changes in the input data and how they are executed.

**Pure Pipes:**

- **Definition:** These are pipes that are only executed when the input value changes fundamentally. That is, when the value of the input changes or when the reference of the input object changes.
- **Behavior:**
  - A pure pipe is not re-executed unless the input value actually changes.
  - Pure pipes are generally used for simple transformations on data such as:
    - Formatting dates and times
    - Converting text to uppercase or lowercase
    - Formatting numbers
- **Examples:**
  - The `date` pipe to format a date into a specific format
  - The `uppercase` pipe to convert text to uppercase
  - The `currency` pipe to format numbers as currency
- **Advantages:**
  - **Performance:** Pure pipes are more efficient because they are not executed unless necessary.
  - **Predictability:** Their behavior is easy to predict.

**Impure Pipes:**

- **Definition:** These are pipes that can be executed at any time, even if the input value does not change fundamentally.
- **Behavior:**
  - Impure pipes can depend on external factors such as the current time or the values of other services.
  - Impure pipes are typically used to perform more complex tasks such as:
    - Making calls to a server
    - Accessing local storage
    - Performing asynchronous operations
- **Examples:**
  - A custom pipe to make a call to an API to get dynamic data
  - A custom pipe to display a message based on the current time
- **Advantages:**
  - **Flexibility:** They offer greater flexibility in performing more complex operations.

**When to use each type of pipe?**

- **Pure Pipes:**
  - For simple data transformations that do not require additional operations.
  - When performance is important and you need to avoid recalculating values unnecessarily.
- **Impure Pipes:**
  - For more complex tasks that require accessing external services or performing asynchronous operations.
  - When you need to execute the pipe periodically regardless of input changes.

**Summary:**

| Feature     | Pure Pipes                            | Impure Pipes                       |
| ----------- | ------------------------------------- | ---------------------------------- |
| Execution   | Only when input changes fundamentally | Can be executed at any time        |
| Performance | More efficient                        | Less efficient                     |
| Uses        | Simple data transformations           | More complex tasks                 |
| Examples    | date, uppercase, currency             | API calls, accessing local storage |

**Tips:**

- Try to use pure pipes as much as possible to improve your application's performance.
- Use impure pipes with caution and avoid overusing them.
- If you need to implement complex logic, it's better to create a service instead of using an impure pipe.

**In conclusion,**

Understanding the difference between pure and impure pipes is essential for building high-performance Angular applications. By choosing the right type of pipe for each task, you can improve your application's performance and make it easier to maintain.

#### (Gemini)

---
