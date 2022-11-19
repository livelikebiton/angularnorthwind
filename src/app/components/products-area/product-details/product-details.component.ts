import { NotifyService } from 'src/app/services/notify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public imageUrl = environment.productImagesUrl

    constructor(private myActivatedRoute: ActivatedRoute,
        private notify: NotifyService,
        private myRouter: Router,
        private myProductService: ProductsService) { }

    public async delete() {
        try {
            const answer = confirm("Are you sure?");
            if (!answer) return;
            await this.myProductService.deleteProduct(this.product.id);
            this.notify.success("Product has been deleted.");
            this.myRouter.navigateByUrl("/products");
        }
        catch (err) {
            this.notify.error(err);
        }

    }

    async ngOnInit() {
        try {
            const id = +this.myActivatedRoute.snapshot.params.id;
            this.product = await this.myProductService.getOneProduct(id);
        }
        catch (err) {
            console.log(err);
        }
    }

}
