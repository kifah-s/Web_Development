import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Input.
  @Input() avatar!: string;
  @Input() name!: string;

  // Getter.
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
