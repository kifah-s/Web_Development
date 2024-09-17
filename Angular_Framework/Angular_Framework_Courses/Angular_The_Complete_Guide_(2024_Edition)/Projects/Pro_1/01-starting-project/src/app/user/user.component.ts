import { Component, Input, Output, EventEmitter } from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Input.
  @Input({ required: true }) user!: User;

  // Output.
  @Output() select = new EventEmitter<string>();

  // Getter.
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
