import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlHandlingStrategy } from '@angular/router';
import { Empowerbox } from 'src/app/common';

@Component({
  selector: 'app-box-cards-choose-tagline',
  templateUrl: './box-cards-choose-tagline.component.html',
  styleUrls: ['./box-cards-choose-tagline.component.scss']
})
export class BoxCardsChooseTaglineComponent implements OnInit {
  @Input() boxCards !: Empowerbox;
  product: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    // this.route.params.subscribe((res)=>console.log("res",res)
    // console.log(this.route.params.subscribe());

    // )
  }

  ngOnInit(): void | any {


  }
  // getAboutId() {

  //   console.log(this.router.navigateByUrl(`/about`, {
  //     state: this.product
  //   }));
  // }
  getAboutId(url:string,id: number,data:any) {
    console.log("about id", id);
    // this.router.navigateByUrl(`/${url}/${id}`)
    //  var  url:any = '/about';
    // console.log(this.router.navigate([id]))
    //   )
    this.router.navigate([url,id,data]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!",data);
      } else {
        console.log("Navigation has failed!",e);
      }
    });
    }
}
