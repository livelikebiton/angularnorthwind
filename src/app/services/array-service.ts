import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

class ArrayService {

    public getSum(arr: number[]): number {
        let sum = 0;
        for(const item of arr) {
            sum += item;
        }
        return sum;
    }

}

export default ArrayService;