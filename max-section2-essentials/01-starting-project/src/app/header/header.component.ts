import { Component } from '@angular/core';

// this is a decorator
@Component({
  selector: 'app-header', // this will be the tag name for the component
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
