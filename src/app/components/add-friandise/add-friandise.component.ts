import { Component, OnInit } from '@angular/core';
import { Friandise } from 'src/app/models/friandise.model';
import { FriandisesService } from 'src/app/services/friandises.service';
import { ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-add-friandise',
  templateUrl: './add-friandise.component.html',
  styleUrls: ['./add-friandise.component.scss']
})
export class AddFriandiseComponent implements OnInit {

  friandise: Friandise={
    brand:'',
    cie:'',
    price:'',

  };
  saveFriandise(): void{
    const data ={
      brand:this.friandise.brand,
      cie:this.friandise.cie,
      price:this.friandise.price
    }
    this.friandisesService.create(data).subscribe({
      next: () => console.log("ajout fait"),
      error:(e) =>console.error(e),
      complete:()=>this.router.navigate(['/friandises'])
    })
  }
  constructor(private friandisesService: FriandisesService,private router:Router) {

   }

  ngOnInit(): void {

  }


}
