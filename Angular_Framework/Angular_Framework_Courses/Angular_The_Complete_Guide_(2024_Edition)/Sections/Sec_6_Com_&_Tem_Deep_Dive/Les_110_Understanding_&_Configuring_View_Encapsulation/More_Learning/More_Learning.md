## More Learning:

In Angular, **View Encapsulation** is about how styles are applied to components in the application. Choosing an encapsulation type affects how styles apply to a component's elements and whether they will remain specific to that component or affect others.

There are three types of View Encapsulation in Angular:

1. **None**:

   - This option allows styles to apply globally to every element, both within the component and across the entire application. In other words, styles will be _global_ and will affect all other components.
   - It’s commonly used if you want a component's styles to impact external styles or other components.

   ```typescript
   @Component({
     selector: 'app-example',
     templateUrl: './example.component.html',
     styleUrls: ['./example.component.css'],
     encapsulation: ViewEncapsulation.None
   })
   ```

2. **Emulated** (the default setting):

   - In this mode, Angular creates a scoped area for the component where styles apply only within it and don’t affect other components.
   - Angular achieves this by adding a unique attribute to each HTML element in the component, ensuring that styles remain restricted to the component itself.

   ```typescript
   @Component({
     selector: 'app-example',
     templateUrl: './example.component.html',
     styleUrls: ['./example.component.css'],
     encapsulation: ViewEncapsulation.Emulated
   })
   ```

3. **Shadow DOM**:

   - This option uses `Shadow DOM`, a Web Components technology that creates a unique shadow root for the component, isolating its styles from the rest of the application.
   - This type relies on browser support for `Shadow DOM`.

   ```typescript
   @Component({
     selector: 'app-example',
     templateUrl: './example.component.html',
     styleUrls: ['./example.component.css'],
     encapsulation: ViewEncapsulation.ShadowDom
   })
   ```

### When to Use Each Type?

- **None**: When you need styles to be global across all components.
- **Emulated**: The default, used in most cases, as it provides local styling without requiring `Shadow DOM`.
- **Shadow DOM**: When you want to isolate styles using modern browser technology with `Shadow DOM`.

#### (ChatGPT)

---

In the Angular framework, the concept of Configuring View Encapsulation is important to understand how styles (CSS) are applied to your components. View Encapsulation means defining how the styles and unique styles are encapsulated in each Angular component. There are three main types of View Encapsulation in Angular:

1. **Emulated**: This is the default mode. Styles are emulated to be encapsulated so that the component's styles are applied only to that component and its contents. This is achieved by assigning unique attributes to elements.

2. **Native**: In this mode, the browser's native Shadow DOM encapsulation is used, where styles are isolated in the component's Shadow DOM.

3. **None**: In this mode, no style encapsulation is applied. All the styles in the component will be available globally in the document.

### Configuration:

You can define View Encapsulation when defining your component using the `encapsulation` property in `@Component` as follows:

```typescript
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.css"],
  encapsulation: ViewEncapsulation.Emulated, // You can change this to ViewEncapsulation.Native or ViewEncapsulation.None
})
export class ExampleComponent {
  // Component code
}
```

### Pros and Cons:

- **Emulated**: Provides a good balance between performance and encapsulation, and is the default choice in most cases.
- **Native**: Provides stronger encapsulation but may not be supported in all browsers.
- **None**: Allows for reuse of styles but may lead to unintended style conflicts.

#### (Copilot)

---
