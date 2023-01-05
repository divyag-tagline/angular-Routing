import { Component, OnInit } from '@angular/core';
import { AwardsRecognitions, ChooseTagline, Empowerbox, Empowerbox1, ExperienceDetailsLeft, ExperienceDetailsRight, FooterDetails, FooterHelp, FooterHrInquiry, FooterLastPortion, FormDetails, GlobalPresence, Headtext, OurBlogs, OurClientele, RatingBox, ServiceCard1, ServiceCard2, ServiceCard3, TechnologyBackEnd } from 'src/app/common';
import { DetailsDataService } from '../../details-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angularRouting';
  ourTechnologies: string = "";
  technologySidebar: string[] = [];
  technologyBackEndIcon: TechnologyBackEnd[] = [];
  technologyFrontEndIcon: TechnologyBackEnd[] = [];
  service: string = "";
  serviceCard1: ServiceCard1 = {
    text1: '',
    text2: '',
    text3: ''
  }
  serviceCard2: ServiceCard2[] = [];
  serviceCard6: ServiceCard3 = {
    heading: '',
    span: '',
    buttonText: ''
  }
  chooseTagline: ChooseTagline = {
    title: '',
    details: ''
  }
  boxCards: Empowerbox[] = [];
  empowerboxLast: Empowerbox1 = {
    empower: '',
    your: '',
    business: '',
    heading: '',
    boxButton: ''
  }
  experienceDetailsLeft: ExperienceDetailsLeft = {
    heading: '',
    details: '',
    expButton: ''
  }
  expProfessional: ExperienceDetailsRight[] = [];
  ourClientele: OurClientele = {
    title: '',
    detail1: '',
    details2: ''
  }
  ratingStars: RatingBox[] = [];
  awardsRecognitions: AwardsRecognitions = {};
  awardsRecognitionsImg: string[] = [];
  ourBlogs: OurBlogs[] = [];
  globalPresence: GlobalPresence[] = [];
  formDetails: FormDetails = {
    title: '',
    formButton: ''
  }
  footerDetails: FooterDetails = {
    title: '',
    heading: '',
    heading1: '',
    heading2: '',
    heading3: '',
    footerButton: '',
    details: ''
  }
  footerHrInquiry: FooterHrInquiry[] = [];
  footerHelp: FooterHelp[] = [];
  footerServices: string[] = [];
  footerHireDevlopers: string[] = [];
  footerLastPortion: FooterLastPortion = {
    img: '',
    followUs: '',
    portion1: '',
    portion2: '',
    portion3: '',
    portion4: ''
  }
  headtext: Headtext = {
    headText: 'Software Development Company',
    headText1: 'IT Consultancy',
    headText2: 'Serving',
    headText3: 'Serving',
    headText4: 'Start-UPs To Fortune 500',
    headText5: 'With the help of Innovation and Technology, We give you the power to',
    headText6: 'change the world with your ideas.',
    headButton: 'Schedule a meeting',
    img: "../assets/images/images.png"

  }
  // headers: string[] = ["About Us", "Hire Developer", "Technology", "Industry",]



  constructor(private detailsDataService: DetailsDataService) { }

  ngOnInit(): void {

    this.ourTechnologies = this.detailsDataService.ourTechnologies;
    this.technologySidebar = this.detailsDataService.technologySidebar;
    this.technologyBackEndIcon = this.detailsDataService.technologyBackEndIcon;
    this.technologyFrontEndIcon = this.detailsDataService.technologyFrontEndIcon;
    this.service = this.detailsDataService.service;
    this.serviceCard1 = this.detailsDataService.serviceCard1;
    this.serviceCard2 = this.detailsDataService.serviceCard2;
    this.serviceCard6 = this.detailsDataService.serviceCard6;
    this.chooseTagline = this.detailsDataService.chooseTagline;
    this.boxCards = this.detailsDataService.boxCards;
    this.empowerboxLast = this.detailsDataService.empowerboxLast;
    this.experienceDetailsLeft = this.detailsDataService.experienceDetailsLeft;
    this.expProfessional = this.detailsDataService.expProfessional;
    this.ourClientele = this.detailsDataService.ourClientele;
    this.ratingStars = this.detailsDataService.ratingStars;
    this.awardsRecognitions = this.detailsDataService.awardsRecognitions;
    this.awardsRecognitionsImg = this.detailsDataService.awardsRecognitionsImg;
    this.ourBlogs = this.detailsDataService.ourBlogs;
    this.globalPresence = this.detailsDataService.globalPresence;
    this.formDetails = this.detailsDataService.formDetails;
    this.footerDetails = this.detailsDataService.footerDetails;
    this.footerHrInquiry = this.detailsDataService.footerHrInquiry;
    this.footerHelp = this.detailsDataService.footerHelp;
    this.footerServices = this.detailsDataService.footerServices;
    this.footerHireDevlopers = this.detailsDataService.footerHireDevlopers;
    this.footerLastPortion = this.detailsDataService.footerLastPortion;

  }

}
