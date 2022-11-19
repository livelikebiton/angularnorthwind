import { Component, OnInit } from '@angular/core';
import ArrayService from 'src/app/services/array-service';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css'],

    // providers: [ArrayService]
})
export class InventoryComponent implements OnInit {

    public stock = [100, 150, 200, 70];
    public total: number;
    
    constructor(private myArrayService: ArrayService) {}

    ngOnInit(): void {
        this.total = this.myArrayService.getSum(this.stock);
    }

}
