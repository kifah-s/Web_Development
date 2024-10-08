## More Learning:

In Angular, **Pipes** are a powerful tool that allows you to transform and display data in templates easily and simply. Pipes help improve the readability and formatting of data, such as converting text to uppercase, formatting numbers as currencies, or displaying dates in a specific format.

### What are Pipes?

**Pipes** are simple functions that are applied to data in a template to transform the output from one format to another. They are used with the vertical bar `|` in templates to pass values that need to be processed before being displayed.

### How do Pipes work?

When using a Pipe in Angular, data from the template is passed through the Pipe to apply the required transformation. For example, if you have text that you want to convert to uppercase, you can use the `uppercase` Pipe.

### Syntax:

```html
{{ value | pipeName }}
```

- `value`: The value you want to process (text, number, date, etc.).
- `pipeName`: The name of the Pipe you want to apply.

### Examples of common Pipes:

#### 1. `uppercase` Pipe:

Converts text to uppercase.

```html
<p>{{ 'angular' | uppercase }}</p>
```

Output: **ANGULAR**

#### 2. `lowercase` Pipe:

Converts text to lowercase.

```html
<p>{{ 'ANGULAR' | lowercase }}</p>
```

Output: **angular**

#### 3. `date` Pipe:

Formats dates.

```html
<p>{{ currentDate | date:'fullDate' }}</p>
```

Output: **Saturday, October 8, 2024** (for example)

#### 4. `currency` Pipe:

Formats numbers as currency.

```html
<p>{{ 1500 | currency:'USD' }}</p>
```

Output: **$1,500.00**

#### 5. `percent` Pipe:

Converts a number to a percentage.

```html
<p>{{ 0.25 | percent }}</p>
```

Output: **25%**

### Using Pipes with parameters:

Some Pipes can take additional parameters to customize the result. For example, in the `date` Pipe, you can specify the date format you want.

#### Example:

```html
<p>{{ currentDate | date:'short' }}</p>
```

Output: **10/8/24** (short date format)

### Creating custom Pipes:

In addition to the built-in Pipes provided by Angular, you can create custom Pipes to suit your specific needs.

#### Example of creating a custom Pipe:

Suppose you want to create a Pipe to transform text in a specific way.

#### 1. Generate the Pipe file:

```bash
ng generate pipe customPipe
```

#### 2. Define the Pipe:

```typescript
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customPipe",
})
export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    // Transform the text in a specific way
    return value.split("").reverse().join("");
  }
}
```

#### 3. Use the Pipe in the template:

```html
<p>{{ 'angular' | customPipe }}</p>
```

Output: **ralugna** (reversed text)

### When to use Pipes?

- When you need to format data before displaying it in the user interface.
- When you need to reuse a specific transformation across the application.
- To simplify the logic in the template and reduce complex code.

### Benefits:

- **Clarity**: Pipes make templates more readable and clearer.
- **Reusability**: You can use Pipes in multiple places in the application, ensuring consistent data formatting.
- **Separation of concerns**: The team can focus on processing data in components and leave the data presentation to Pipes.

#### (ChatGPT)

---

**What are Pipes?**

Pipes in Angular are filters that transform data before displaying it in a template. In other words, they are pure functions that take a value as input and return a new value after applying some transformations. Pipes allow you to format data and display it in a more user-friendly and readable way.

**Why Use Pipes?**

- **Data Formatting:** Convert dates, numbers, and currencies into more readable formats.
- **Text Transformation:** Transform text to uppercase, lowercase, or title case.
- **Text Splitting:** Split text into smaller segments.
- **Conditional Display:** Show or hide parts of the template based on certain conditions.

**Types of Pipes:**

- **Built-in Pipes:** These are a set of pipes that come with Angular by default, such as:
  - `DatePipe`: For formatting dates.
  - `NumberPipe`: For formatting numbers.
  - `CurrencyPipe`: For formatting currencies.
  - `PercentPipe`: For formatting percentages.
  - `UpperCasePipe`, `LowerCasePipe`, `TitleCasePipe`: For changing case.
  - `JsonPipe`: For displaying data in JSON format.
  - `SlicePipe`: For slicing arrays or strings.
- **Custom Pipes:** You can create your own custom pipes to meet your specific application needs.

**How to Use Pipes?**

Pipes are used within the template after the variable name using the pipe symbol (`|`).

````html
{{ myDate | date: 'dd/MM/yyyy' }} {{ myNumber | currency:'USD' }} {{ myString |
uppercase }} ``` **Example of Creating a Custom Pipe:** ```typescript import {
Pipe, PipeTransform } from '@angular/core'; @Pipe({ name: 'highlight' }) export
class HighlightPipe implements PipeTransform { transform(value: string, term:
string): string { if (!value) return value; return value.replace(new
RegExp(term, 'gi'), '<span class="highlight">$&</span>'); } }
````

**Important Notes:**

- Pipes are pure functions, meaning they don't modify the original data.
- Multiple pipes can be chained together to apply multiple transformations to data.
- Pipes are an integral part of Angular's data binding system.

**Benefits of Using Pipes:**

- **Improved Code Readability:** Makes templates more readable by separating presentation logic from application logic.
- **Increased Code Reusability:** Pipes can be reused in multiple places in the application.
- **Facilitates Localization:** Pipes can be used to translate text into different languages.

**Summary:**

Pipes are a powerful tool in Angular that help format and display data in a visually appealing way. By understanding how they work and using them, you can build more professional and readable Angular applications.

**Additional Topics:**

- **Custom Pipes:** Creating custom pipes to meet specific application needs.
- **Pipe Chaining:** Chaining multiple pipes together to apply multiple transformations.
- **Pipe Performance:** Performance considerations when using pipes extensively.

**Additional Examples:**

- **Formatting numbers:** `{{ myNumber | number:'1.2-3' }}`
- **Translating text:** `{{ 'Hello' | translate:'fr' }}` (assuming a translation module is in place)
- **Slicing arrays:** `{{ myArray | slice:1:3 }}`

#### (Google Gemini)

---
