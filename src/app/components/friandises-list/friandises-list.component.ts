import { Component, OnInit } from '@angular/core';
import { Friandise } from 'src/app/models/friandise.model';
import { FriandisesService } from 'src/app/services/friandises.service';

@Component({
  selector: 'app-friandises-list',
  templateUrl: './friandises-list.component.html',
  styleUrls: ['./friandises-list.component.scss']
})
export class FriandisesListComponent implements OnInit {
   friandises:Friandise[] |undefined;
  constructor(private FriandisesService:FriandisesService) { }

  ngOnInit(): void {
     this.retrieveFriandises();
  }
  retrieveFriandises(){
    this.FriandisesService.getAll().subscribe({
      next: (data)=>this.friandises=(data),
      error:(e)=>console.error(e),
      complete:()=>console.log('get all done')
   })
}

}
