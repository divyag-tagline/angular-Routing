import { Component } from '@angular/core';

interface Headers {
  name: string,
  link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  caseStudy: string = "Case Study";

  buttonText: string = 'GET QUOTE';
  logo: string = "/assets/images/tagline.png"
  headers: Headers[] = [
    {
      name: "Home",
      link: "home"
    },
    {
      name: "About Us",
      link: "about"
    },
    {
      name: "Hire Developer",
      link: "devloper/hiredeveloper"
    },
    {
      name: "Technology",
      link: "devloper"
    },
    {
      name: "Industry",
      link: "home"
    }
  ];

}
