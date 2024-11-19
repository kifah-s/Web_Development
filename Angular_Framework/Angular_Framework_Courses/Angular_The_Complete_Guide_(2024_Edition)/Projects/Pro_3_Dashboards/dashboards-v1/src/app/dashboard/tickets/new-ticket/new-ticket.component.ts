import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, ticketText: string) {
    // console.log('SUBMITTED !!');
    // console.log(titleElement); // Output as a "Input".
    // console.dir(titleElement); // Output as a "Object".
    // console.log(titleElement.value); // Output as a "Value".

    // const enteredTitle = titleElement.value;
    // console.log('ENTERED TITLE:' + enteredTitle); // Output as a "Value".

    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}
