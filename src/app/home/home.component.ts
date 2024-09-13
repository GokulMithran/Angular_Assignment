import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  menuItems:string[] = ['Home', 'Services', 'Contact us'];
  selectedMenu = 'Home';
  selectedColor:string="green"

  selectMenu(menu: string) {
    this.selectedMenu = menu; 
  }

}
