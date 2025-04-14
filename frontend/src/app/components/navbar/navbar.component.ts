import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentRoute = '#home';

  // Listen for scroll events to update the active section
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = ['home', 'about', 'experience', 'skill', 'project', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          this.currentRoute = `#${section}`;
        }
      }
    });
  }
}
