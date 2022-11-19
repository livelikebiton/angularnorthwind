import { NotifyService } from 'src/app/services/notify.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-update-product',
    templateUrl: './update-product.component.html',
    styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
    private product = new ProductModel;

    public productForm: FormGroup;

    public nameControl: FormControl;
    public priceControl: FormControl;
    public stockControl: FormControl;
    public imageControl: FormControl;


    constructor(
        private myActivatedRoute: ActivatedRoute,
        private myProductService: ProductsService,
        private notify: NotifyService,
        private myRouter: Router) {
        this.nameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
        this.priceControl = new FormControl(null, Validators.required);
        this.stockControl = new FormControl(null, Validators.required);
        this.imageControl = new FormControl();
        this.productForm = new FormGroup({
            nameControl: this.nameControl,
            priceControl: this.priceControl,
            stockControl: this.stockControl,
            imageControl: this.imageControl
        });
    }

    async ngOnInit() {
        try {
            this.product.id = +this.myActivatedRoute.snapshot.params.id;
            const product = await this.myProductService.getOneProduct(this.product.id);
            this.nameControl.setValue(product.name);
            this.priceControl.setValue(product.price);
            this.stockControl.setValue(product.stock);
        }
        catch (err) {
            this.notify.error(err);
        }
    }

    public saveImage(args: Event): void {
        this.product.image = (args.target as HTMLInputElement).files;
    }

    public async update() {
        try {
            this.product.name = this.nameControl.value;
            this.product.price = this.priceControl.value;
            this.product.stock = this.stockControl.value;
            await this.myProductService.updateProduct(this.product);
            this.notify.success("Product has been update.");
            this.myRouter.navigateByUrl("/products");
        }
        catch (err) {
            this.notify.error(err);
        }
    }

}
