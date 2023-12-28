import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Value : any;

  public AcceptAmount(No:any)
  {
    console.log("Enter the amount"+No)
    this.Value = No;
  }
}
