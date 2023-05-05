import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pract1';
fullname: string="";
email:string="";
password:string="";
confirmpassword:string="";
gender:string="";
course:string="";
country:string="";
comment:string="";
licenseAgreement:boolean=false;
msg:string="";
msg2:Array<string>=[];
  RegisterStudent(studentForm: NgForm): void {   
    console.log(studentForm.value);
       this.msg = "Name : "+this.fullname
       +"<br/>Email:"+this.email
        +"<br/>Password:"+this.password
       +"<br/>ConfirmPassword:"+this.confirmpassword
       +"<br/>Gender : "+this.gender
       +"<br/>Country : "+this.country
        +"<br/>comment:"+this.comment
       +"<br/>License Agreement : "+this.licenseAgreement;
      this.msg2= this.msg.split('<br/>');
  }

}
