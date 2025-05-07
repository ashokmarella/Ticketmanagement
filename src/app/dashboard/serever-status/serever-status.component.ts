import { Component } from '@angular/core';

@Component({
  selector: 'app-serever-status',
  standalone: true,
  imports: [],
  templateUrl: './serever-status.component.html',
  styleUrl: './serever-status.component.css'
})
export class SereverStatusComponent {
  currentStatus = 'online';
}
