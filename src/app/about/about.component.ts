import { Component, OnInit } from '@angular/core';
import { Empowerbox } from '../common';
interface ChooseTagline {
  title: string,
  details: string
}
interface Empowerbox1 {
  empower: string,
  your: string,
  business: string,
  heading: string,
  boxButton: string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  chooseTagline: ChooseTagline = {
    title: "Why Choose Tagline Infotech ?",
    details: 'We have a team of developers who use their expertise to provide complete web\
  development, mobile app development, testing & assurance, SaaS development,\
  and designing services. Tagline Infotech has a team of developers that you can\
  hire by mentioning the requirements for your project. Save time and money by\
  hiring our developers for your startup or large-scale company. Our team of\
  developers has the experience to understand the business ideas of the clients\
  to provide solutions that focus on the core values of the business. Here you\
  will find some benefits of hiring developers from us.'
  }
  boxCards: Empowerbox[] = [{
    img: "../assets/images/choose-roadmap.png",
    heading: '01',
    heading1: 'Progressive Roadmap',
    detail: 'Our team of developers creates a progressive roadmap that includes a\
    strategic plan to define a goal and major steps to reach that goal. We\
    have a team of developers that uses progressive',
  }, {
    img: "../assets/images/choose-project.png",
    heading: '02',
    heading1: 'Efficient Project Management',
    detail: 'We believe in efficient project management and our experienced developers\
  use project management tools like Wrike and Zoho. Our developers use these\
  project management tools efficiently',
  }, {
    img: "../assets/images/choose-flexible.svg",
    heading: '03',
    heading1: 'Flexible Engagement Model',
    detail: 'We provide flexible engagement models so that clients can hire developers\
  for their projects. These engagement models are flexible so if you aren’t\
  satisfied with any model you can switch to another.',
  }, {
    img: "../assets/images/choose-cost.png",
    heading: '04',
    heading1: 'Cost-Effective',
    detail: 'Our team of developers provides the best development services at\
  affordable prices. We believe that high-quality solutions can be delivered\
  at cost-effective prices and that’s why we provide different hiring',
  }, {
    img: "../assets/images/choose-delivery.png",
    heading: '05',
    heading1: 'Consistent Delivery',
    detail: `Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.`
  }];
  empowerboxLast: Empowerbox1 = {
    empower: 'Empower',
    your: 'Your',
    business: 'Business',
    heading: 'with Dedicated Developers',
    boxButton: 'Talk to our Exper'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
