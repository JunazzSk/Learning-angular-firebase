import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
public form = new FormGroup({
 name: new FormControl('', [Validators.required,Validators.minLength(2)]),
description: new FormControl('',[
  Validators.required,
  Validators.minLength(2),
]),
price: new FormControl(null,[Validators.required]),
});
constructor(public apiservice: ApiService){}
public submit(){
if(this.form.invalid) {
  alert('form is invalid')
  return;
}
console.log(this.form.value);
this.apiservice.addproduct(this.form.value)
.then(() =>{
  console.log("data added successfully");
})
.catch((err) =>{
  console.log(err);
});
}
public get name(): AbstractControl {
  return this.form.controls['name'];
}
public get description(): AbstractControl {
  return this.form.controls['description'];
}
public get price(): AbstractControl {
  return this.form.controls['price'];
}
}
