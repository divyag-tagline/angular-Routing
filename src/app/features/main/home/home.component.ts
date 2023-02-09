import { Component, OnInit } from '@angular/core';
import {
  AwardsRecognitions,
  ChooseTagline,
  Empowerbox,
  Empowerbox1,
  ExperienceDetailsLeft,
  ExperienceDetailsRight,
  FooterDetails,
  FooterHelp,
  FooterHrInquiry,
  FooterLastPortion,
  FormDetails,
  GlobalPresence,
  Headtext,
  OurBlogs,
  OurClientele,
  RatingBox,
  ServiceCard1,
  ServiceCard2,
  ServiceCard3,
  TechnologyBackEnd,
} from 'src/app/common';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'angularRouting';
  headtext: Headtext = {
    headText: 'Software Development Company',
    headText1: 'IT Consultancy',
    headText2: 'Serving',
    headText3: 'Serving',
    headText4: 'Start-UPs To Fortune 500',
    headText5:
      'With the help of Innovation and Technology, We give you the power to',
    headText6: 'change the world with your ideas.',
    headButton: 'Schedule a meeting',
    img: '../assets/images/images.png',
  };

  constructor() {}

  ngOnInit(): void {}
}
