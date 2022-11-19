import { NotifyService } from './../../../services/notify.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();

    public imageVisited: boolean;

    constructor(
        private myProductsService: ProductsService,
        private myRouter: Router,
        private notify: NotifyService) { }

    public saveImage(args: Event): void {
        this.product.image = (args.target as HTMLInputElement).files;
    }
    
    public imageBlur():void {
        this.imageVisited = true;
    }

    public async send() {
        try {
            await this.myProductsService.addProduct(this.product);
            this.notify.success("product has been added");
            this.myRouter.navigateByUrl("/products");
        }
        catch (err) {
            this.notify.error(err);
        }
    }

}
