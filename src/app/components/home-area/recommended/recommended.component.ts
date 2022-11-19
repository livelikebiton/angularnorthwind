import { Component } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent {

    private product = "Red Wine";

  public recommended(args: MouseEvent): void {
      alert("our recommended product: " + this.product);
  }

}
