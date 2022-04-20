import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//1) importation activateRoute
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Friandise } from 'src/app/models/friandise.model';
import { FriandisesService } from 'src/app/services/friandises.service';



@Component({
  selector: 'app-friandise-details',
  templateUrl: './friandise-details.component.html',
  styleUrls: ['./friandise-details.component.scss']
})
export class FriandiseDetailsComponent implements OnInit {

// 2)instancier activateRoute et friandisesService dans le constructeur
  constructor(private Route:ActivatedRoute,private friandisesService:FriandisesService,private route:ActivatedRoute,
    private router:Router) { }
currentFriandise:Friandise={
  _id:'',
  brand:'',
  cie:'',
  price:'',
};
//lors de l'initialisation de la page
  ngOnInit(): void {
    //recuperer le id avec la methode get disponible dans snapshot.paramMap et de l'envoyer dans la console
    console.log(this.Route.snapshot.paramMap.get('id'))
    this.getFriandise(this.Route.snapshot.paramMap.get('id'));

  }
  //recuperation les donnees dans la methosde findbyId et les envoyer dans le console
  getFriandise(_id:any):void{
      this.friandisesService.findById(_id).subscribe({
      next:(data)=> this.currentFriandise=data,
      error: (e)=>console.error(e),
      complete:()=>console.log(this.currentFriandise)

      });
  }
  updateFriandise():void{
    this.friandisesService.update(this.currentFriandise._id,this.currentFriandise).subscribe({
      next:()=>console.log("update done"),
      complete:()=>this.router.navigate(['/friandises']),
      error:(e)=>console.error(e)
    });


  }
  deleteFriandise():void{
    this.friandisesService.delete(this.currentFriandise._id).subscribe({
      next:()=>console.log("suppression fait"),
      complete:()=>this.router.navigate(['/friandises']),
      error:(e)=>console.error(e)

    });

  }
  cancelFriandise():void{
    console.log("test")
    this.router.navigate(['/friandises'])
}

}
