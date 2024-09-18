import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';  // Importando AOS corretamente
// import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auto-service';

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

  }
}
