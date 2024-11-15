import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  onSubmit(titleElement: HTMLInputElement) {
    // console.log('SUBMITTED !!');
    // console.log(titleElement); // Output as a "Input".
    // console.dir(titleElement); // Output as a "Object".
    // console.log(titleElement.value); // Output as a "Value".

    const enteredTitle = titleElement.value;
    console.log('ENTERED TITLE:' + enteredTitle); // Output as a "Value".
  }
}
