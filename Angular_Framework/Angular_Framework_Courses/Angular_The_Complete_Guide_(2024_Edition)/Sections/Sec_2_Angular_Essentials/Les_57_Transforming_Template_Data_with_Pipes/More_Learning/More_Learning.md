## More Learning:

In **Angular**, **pipes** are a feature that allow you to transform data directly within templates. They provide a way to display data in a desired format without modifying the data itself in the component or service. Pipes are typically used in Angular templates to format strings, numbers, dates, and other data types.

### **Concept of Pipes:**

- A **pipe** takes in data as input, processes it, and returns a transformed output.
- Pipes are invoked using the **pipe operator (`|`)** within an Angular template.
- Angular provides many **built-in pipes**, and you can also create **custom pipes** to handle specific transformations.

### **How to Use Pipes:**

In an Angular template, you use pipes by applying the pipe operator (`|`) to the data that needs to be transformed.

#### **Syntax:**

```html
{{ value | pipeName }}
```

#### **Example - Built-in Pipes:**

```html
<!-- Formatting a date -->
<p>{{ todayDate | date:'fullDate' }}</p>
<!-- e.g., "Monday, January 1, 2024" -->

<!-- Formatting a number -->
<p>{{ price | currency }}</p>
<!-- e.g., "$1,000.00" -->

<!-- Converting text to uppercase -->
<p>{{ userName | uppercase }}</p>
<!-- e.g., "JOHN DOE" -->
```

### **Common Built-in Pipes:**

1. **`date`**: Formats date values.

   - Example: `{{ today | date:'shortDate' }}` → `12/25/2024`.

2. **`uppercase` / `lowercase`**: Transforms text to upper or lower case.

   - Example: `{{ 'hello' | uppercase }}` → `HELLO`.

3. **`currency`**: Formats numbers as currency.

   - Example: `{{ 1500 | currency }}` → `$1,500.00`.

4. **`percent`**: Formats numbers as percentages.

   - Example: `{{ 0.85 | percent }}` → `85%`.

5. **`json`**: Converts an object into a JSON string.

   - Example: `{{ { name: 'Angular' } | json }}` → `{"name": "Angular"}`.

6. **`slice`**: Extracts a portion of a string or array.
   - Example: `{{ 'Hello World' | slice:0:5 }}` → `Hello`.

### **Chaining Pipes:**

You can chain multiple pipes together in one expression. The output of the first pipe becomes the input for the next pipe.

#### **Example:**

```html
<p>{{ 'hello world' | uppercase | slice:0:5 }}</p>
<!-- Result: "HELLO" -->
```

### **Custom Pipes:**

If the built-in pipes do not meet your needs, you can create your own custom pipes to handle specific transformations.

#### **Example - Creating a Custom Pipe:**

To create a custom pipe, use the Angular CLI command:

```bash
ng generate pipe customPipeName
```

Then, define the transformation logic in the pipe class:

##### **TypeScript - Custom Pipe:**

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverseString",
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: string): string {
    return value.split("").reverse().join("");
  }
}
```

##### **Usage in Template:**

```html
<p>{{ 'hello' | reverseString }}</p>
<!-- Result: "olleh" -->
```

### **Key Points About Pipes:**

- **Pure Pipes**: Most pipes are **pure**, meaning they don’t track changes to complex objects (like arrays) unless the reference to the object changes. These are efficient but only update when inputs change.
- **Impure Pipes**: If a pipe needs to detect every internal change in its input, you can make it **impure**. However, impure pipes can affect performance because they get called more frequently.

### **Summary:**

- **Pipes** in Angular are used for transforming data in templates.
- Angular offers many built-in pipes like `date`, `currency`, `uppercase`, etc.
- You can create **custom pipes** for specific use cases.
- Pipes enhance readability and flexibility in formatting or transforming data in Angular templates.

#### (ChatGPT)

---

**What are Pipes?**

Pipes in Angular are simple functions that you can use in your templates to transform input values into desired output. Imagine you want to display a date in a human-readable format instead of a timestamp, or you want to round a number to a specific decimal place. This is where pipes come in handy.

**Why use Pipes?**

- **Data formatting:** Transform data into a more presentable format.
- **Separation of concerns:** Separate the logic of formatting data from the component template, making the code more readable and maintainable.
- **Reusability:** You can create custom pipes and reuse them in many places within your application.

**How do Pipes work?**

- **Applied to data:** Pipes are applied directly to data within the template.
- **Data transformation:** The pipe transforms the input data into a different form.
- **Returns the result:** The pipe returns the new, formatted value.

**Practical example:**

Let's say we have a date and we want to display it in a readable format:

```html
<p>Birthdate: {{ birthDate | date }}</p>
```

In this example:

- `birthDate` is a variable containing the date.
- `| date` is the pipe that transforms the date into a readable format.

**Types of Pipes:**

- **Built-in Pipes:** Angular provides a set of built-in pipes like `date`, `currency`, `number`, `uppercase`, and more.
- **Custom Pipes:** You can create custom pipes to perform more complex transformations.

**Example of a custom pipe:**

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.substring(0, limit) + "...";
  }
}
```

This pipe shortens a text to a specified number of characters.

**Using the custom pipe:**

```html
<p>Short description: {{ description | shorten: 20 }}</p>
```

**Advantages of Pipes:**

- **Easy to use:** Easy to apply in templates.
- **Readability:** Makes code more clear.
- **Extensibility:** You can create custom pipes to meet your specific needs.

**Summary:**

Pipes in Angular are a powerful tool for formatting data and displaying it attractively. They help separate concerns and improve code readability.

**Additional notes:**

- Pipes can be chained together to apply multiple transformations to data.
- You can pass additional parameters to pipes to customize their behavior.
- Pipes are particularly useful for displaying currency, dates, numbers, and text.

#### (Google Gemini)

---
