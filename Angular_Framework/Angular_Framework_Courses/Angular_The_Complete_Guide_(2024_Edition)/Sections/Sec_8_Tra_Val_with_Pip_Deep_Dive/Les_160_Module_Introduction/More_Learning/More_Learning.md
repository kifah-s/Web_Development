## More Learning:

In **Angular**, **Pipes** are tools used to transform data in **HTML templates** in a simple and reusable way. Pipes process the output before displaying it to the user, making data presentation clearer and more organized.

### **Benefits of Using Pipes:**

1. **Data formatting**: Transform numbers, dates, and text into a specific format.
2. **Reduce repetitive code**: You can create a Pipe and use it in multiple places instead of writing the same code repeatedly.
3. **Improved readability**: They make templates cleaner and easier to understand.

### **Built-in Pipes in Angular:**

### 1. **Date Pipe**: Formats dates in different styles.

```html
<p>{{ today | date:'dd/MM/yyyy' }}</p>
```

### 2. **UpperCase/LowerCase Pipes**: Converts text to uppercase or lowercase.

```html
<p>{{ 'hello world' | uppercase }}</p>
<!-- Output: HELLO WORLD -->
```

### 3. **Currency Pipe**: Formats numbers as currencies.

```html
<p>{{ 1500 | currency:'USD' }}</p>
<!-- Output: $1,500.00 -->
```

### 4. **Decimal Pipe**: Adjusts the number of decimal places.

```html
<p>{{ 3.14159 | number:'1.2-2' }}</p>
<!-- Output: 3.14 -->
```

### 5. **Json Pipe**: Converts objects to JSON.

```html
<p>{{ {name: 'Angular', version: 12} | json }}</p>
```

### **Creating a Custom Pipe:**

### Steps:

1. Create a new file using the **CLI**:
   ```bash
   ng generate pipe pipe-name
   ```
2. Modify the code in the **Pipe** file:

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split("").reverse().join("");
  }
}
```

3. Use the **Pipe** in the template:

```html
<p>{{ 'Angular' | reverse }}</p>
<!-- Output: ralugnA -->
```

### **Important Notes:**

- You can pass **parameters** to a **Pipe** to modify its behavior.
- **Multiple Pipes** can be combined together.

#### (ChatGPT)

---

In the Angular world, Pipes are simple yet powerful mechanisms that allow you to transform data before displaying it in your application's template. Think of them as filters that refine or shape data to appear in the desired format for the user.

**Why use Pipes?**

- **Data Formatting:** Convert dates into readable formats, transform numbers into currencies, or even convert text to uppercase.
- **Data Filtering:** Display specific elements from a list based on certain conditions.
- **Changing the Display Format:** Alter the appearance of text, such as converting it to lowercase or uppercase, or adding special characters.

**How do Pipes work?**

Pipes work seamlessly with the interpolation syntax in Angular templates. When a value is passed to a Pipe, the Pipe applies its transformations and returns the final result to be displayed in the template.

**Examples of common Pipes:**

- **Date transformation Pipe:** `date`
- **Number to currency Pipe:** `currency`
- **Text to lowercase Pipe:** `lowercase`
- **Text to uppercase Pipe:** `uppercase`
- **List filtering Pipe:** `async`

**Practical Example:**

```html
<p>Today is: {{ today | date }}</p>
<p>The total price is: {{ price | currency }}</p>
```

In the above example:

- The `date` Pipe transforms the `today` value into a readable date.
- The `currency` Pipe transforms the `price` value into a currency format.

**Types of Pipes:**

- **Built-in Pipes:** These are Pipes that come with Angular by default, such as `date`, `currency`, `uppercase`, and others.
- **Custom Pipes:** You can create your own Pipes to meet your specific application needs.

**Why prefer using Pipes?**

- **Code Reusability:** A single Pipe can be used in multiple places in the application.
- **Readability:** Makes application templates more readable and maintainable.
- **Separation of concerns:** Helps separate transformation logic from the presentation in the template.

**In conclusion,**

Pipes are a powerful tool in Angular that helps you enhance the look and user experience of your application. By understanding how they work and using them correctly, you can create more efficient Angular applications.

**Notes:**

- You can find a complete list of built-in Pipes in the official Angular documentation.
- To create a custom Pipe, you need to create a new class that extends `PipeTransform`.
- Multiple Pipes can be chained together to apply multiple transformations to the same value.

#### (Gemini)

---

In **Angular**, **Pipes** are classified into two main types: **Pure Pipes** and **Impure Pipes**. The key difference between them lies in how the **Pipe** is invoked and re-evaluated when data changes.

### **1. Pure Pipes:**

### **Definition:**

- **Pure Pipes** are only invoked when there is a change in the **reference** of the data (e.g., the object or array itself, not just its content).

### **Characteristics:**

- **Performance-efficient**: They are only re-evaluated when necessary.
- **Default**: All **Pipes** in Angular are **Pure** by default.

### **Example:**

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "double",
  pure: true,
})
export class DoublePipe implements PipeTransform {
  transform(value: number): number {
    return value * 2;
  }
}
```

#### **Usage:**

```html
<p>{{ 5 | double }}</p>
<!-- Output: 10 -->
```

If you change the value to a new `5`, Angular will re-evaluate the **Pipe**.

### **2. Impure Pipes:**

### **Definition:**

- **Impure Pipes** are invoked every time the template is re-evaluated, even if the data reference hasn't changed.

### **Characteristics:**

- **Less efficient**: They re-evaluate frequently.
- **Useful** for handling changes within objects or arrays.

### **Example:**

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterImpure",
  pure: false,
})
export class FilterImpurePipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    return items.filter((item) => item.includes(searchTerm));
  }
}
```

#### **Usage:**

```html
<ul>
  <li *ngFor="let item of items | filterImpure: 'Angular'">{{ item }}</li>
</ul>
```

In this example, the **Pipe** is invoked even when the items in the array are updated.

### **When to Use Pure vs. Impure Pipes:**

- **Pure Pipes**: Best for performance and relatively static data.
- **Impure Pipes**: Suitable for dynamic, frequently changing data that requires immediate updates.

#### (ChatGPT)

---

In Angular, pipes play a crucial role in transforming and formatting data before it's displayed in templates. Pipes are categorized into two main types: pure pipes and impure pipes.

### Pure Pipes

- **Definition:** Pure pipes are executed only when the input value passed to them changes. In other words, if the same value is passed to a pure pipe multiple times, the output value will only be recalculated if the input value changes.
- **Behavior:** Pure pipes contribute to better application performance, especially in cases where the pipe is called frequently with the same input.
- **Examples:** Most of the built-in pipes in Angular are pure, such as `date`, `currency`, `uppercase`, etc.
- **Use Cases:** Pure pipes are commonly used for data formatting, such as converting dates and numbers into user-friendly formats.

### Impure Pipes

- **Definition:** Impure pipes can be executed at any time, even if the input value doesn't change. These pipes may depend on external factors, such as time or values from other services.
- **Behavior:** Impure pipes can slightly impact application performance, as they may be executed repeatedly even if the input value doesn't change.
- **Examples:** Pipes that interact with external services or rely on real-time data are typically impure.
- **Use Cases:** Impure pipes are commonly used in cases where you need to update data continuously, such as displaying the current time or loading data from a server.

### When to use a pure pipe vs. an impure pipe?

- **Use a pure pipe:** When the output value depends solely on the input value and doesn't need to be updated continuously.
- **Use an impure pipe:** When you need to update the output value continuously or when it depends on external factors.

### Example of a pure and an impure pipe

```typescript
// Pure pipe: formats a number to a string
@Pipe({ name: "formatNumber" })
export class FormatNumberPipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(2);
  }
}

// Impure pipe: displays the current time
@Pipe({ name: "currentTime", pure: false })
export class CurrentTimePipe implements PipeTransform {
  transform(): Date {
    return new Date();
  }
}
```

### Summary

- **Pure pipes:** More efficient and performant, used for formatting static data.
- **Impure pipes:** Less efficient, used for updating data continuously or relying on external factors.

**Choosing the right type of pipe depends on your application requirements and use case.**

**Important notes:**

- You can specify whether a pipe is pure or impure using the `pure` property in the `@Pipe` decorator.
- Impure pipes should be used with caution, as they can impact application performance.
- In most cases, using pure pipes is the best choice.

**Would you like to know more about a specific aspect of pure and impure pipes in Angular?**

**Here are some additional points you might find helpful:**

- **Change detection:** Pure pipes are optimized for change detection, which means Angular can more efficiently determine when the output needs to be recalculated.
- **Performance:** For performance-critical applications, it's generally recommended to use pure pipes whenever possible.
- **Custom pipes:** You can create custom pipes to perform specific transformations on your data.

#### (Gemini)

---
