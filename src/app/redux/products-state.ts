import ProductModel from 'src/app/models/product.model';

export class ProductsState {
    public products: ProductModel[] = [];
}

export enum ProductActionType {
    productsDownloaded = "productsDownloaded",
    productAdded = "productAdded",
    productUpdated = "productUpdated",
    productDeleted = "productDeleted"
}

export interface ProductAction {
    type: ProductActionType;
    payload: any;
}

export function productsDownloadedAction(products: ProductModel[]): ProductAction {
    return { type: ProductActionType.productsDownloaded, payload: products };
}
export function productAddedAction(product: ProductModel): ProductAction {
    return { type: ProductActionType.productAdded, payload: product };
}
export function productUpdatedAction(product: ProductModel): ProductAction {
    return { type: ProductActionType.productUpdated, payload: product };
}
export function productDeletedAction(id: number): ProductAction {
    return { type: ProductActionType.productDeleted, payload: id };
}

export function productsReducer(currentState: ProductsState = new ProductsState(), action: ProductAction): ProductsState {
    const newState = { ...currentState };

    switch (action.type) {

        case ProductActionType.productsDownloaded: {
            newState.products = action.payload;
            break;
        }

        case ProductActionType.productAdded: {
            newState.products.push(action.payload);
            break;
        }

        case ProductActionType.productUpdated: {
            const index = newState.products.findIndex(p => p.id === action.payload.id);
            newState.products[index] = action.payload;
            break;
        }

        case ProductActionType.productDeleted: {
            const index = newState.products.findIndex(P => P.id === action.payload);
            newState.products.splice(index, 1);
            break;
        }

    }
    return newState;
}
