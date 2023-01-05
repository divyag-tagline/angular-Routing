import { Injectable } from '@angular/core';
import { TechnologyBackEnd } from '../common';

@Injectable({
  providedIn: 'root'
})
export class DetailsDataService {
  ourTechnologies: string = 'Our Technologies';
  technologySidebar: string[] =
  ['Web', 'Mobile', 'Desktop', 'Plateform', 'Database / Data Storage', 'Big Data', 'Machine Learning', 'DevOps', 'Clouds'];
  technologyBackEndIcon: TechnologyBackEnd[] = [{
    backEnd: 'Back End',
    img: "../assets/images/ror.png",
    language: "Ruby on Rails"
  }, {
    img: "../assets/images/python.png",
    language: "Python"
  }, {
    img: "../assets/images/node_js.svg",
    language: "Node Js"
  }, {
    img: "../assets/images/php.png",
    language: "PHP"
  }, {
    img: "../assets/images/android-java.png",
    language: "Java"
  }, {
    img: "../assets/images/go.png",
    language: "Go Language"
  }]
  technologyFrontEndIcon: TechnologyBackEnd[] = [{
    backEnd: 'Front End',
    img: "../assets/images/react-js.png",
    language: "React Js"
  }, {
    img: "../assets/images/angular-icon.png",
    language: "Angular"
  }, {
    img: "../assets/images/typescript-icon.png",
    language: "Typescript"
  }, {
    img: "../assets/images/vue-js.png",
    language: "Vue Js"
  }, {
    img: "../assets/images/meter-js.png",
    language: "Mateor Js"
  }, {
    img: "../assets/images/javascript-icon.png",
    language: "Java Script"
  }, {
    img: "../assets/images/html5.png",
    language: "HTML 5"
  }];
  constructor() { }
}
