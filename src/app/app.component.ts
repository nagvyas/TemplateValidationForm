import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Form';

  username :string;
  email :string;
  nickname :string;
  password:string;

  onSubmit(Tform:NgForm){

    if(Tform.valid)
      {
        
    }
  }
}

