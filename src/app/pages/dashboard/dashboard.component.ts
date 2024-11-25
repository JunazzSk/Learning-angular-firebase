import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  [x: string]: any;
public products;
  constructor(public apiService: ApiService, public router:Router){
  this.getdata()
}
public async getdata(){
  this.products= await this.apiService.getproducts();
  console.log(this.products);
}
public async delData(pid) {
 await this.apiService.deleteproduct(pid).then(()=>{ 
    this.getdata();
    alert('The item has been deleted!');
  })
  .catch((err) => {
    alert(''+ err);
  });
  }
}

