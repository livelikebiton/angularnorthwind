import { NotifyService } from './../../../services/notify.service';
import { GeneratorService } from './../../../services/generator.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, map, reduce, scan, take, takeLast, takeUntil, takeWhile, toArray } from "rxjs/operators";
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-observable-tester',
    templateUrl: './observable-tester.component.html',
    styleUrls: ['./observable-tester.component.css']
})
export class ObservableTesterComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    public arr: number[] = [];

    constructor(private generator: GeneratorService, private notify: NotifyService) { }

    ngOnInit(): void {
        // observable
        // this.generator.randomNumbersStream(20).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // filter
        // this.generator.randomNumbersStream(50).pipe(filter(n => n % 2 === 0)).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // map
        // this.generator.randomNumbersStream(50).pipe(map(m => m * m)).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // reduce
        // this.generator.randomNumbersStream(10).pipe(reduce((sum, r) => r + sum)).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // reduce find max
        // this.generator.randomNumbersStream(10).pipe(reduce((max, r) => max > r ? max: r)).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // take
        // this.generator.randomNumbersStream(50).pipe(take(5)).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // take last
        // this.generator.randomNumbersStream(10).pipe(takeLast(5)).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // take while
        // this.generator.randomNumbersStream(10).pipe(takeWhile(t => t < 80)).subscribe(
        //     (n: number) => this.arr.push(n) ,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // to array
        // this.generator.randomNumbersStream(10).pipe(toArray()).subscribe(
        //     (arr: number[]) => this.arr = arr,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // take and to array
        // this.generator.randomNumbersStream(10).pipe(take(5),toArray()).subscribe(
        //     (arr: number[]) => this.arr = arr,
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );

        // observable with no the-fly summary of the date:
        // if the reporting number are : 3, 1 , 5 , 2 , 7
        // the pipe will report: 3, 4 , 9 , 11 , 19
        //(performing on-the-fly):
        // this.generator.randomNumbersStream(10).pipe(scan((sum, n) => sum + n)).subscribe(
        //     (n: number) => this.arr.push(n),
        //     (err: any) => this.notify.error(err),
        //     () => this.notify.success("Done.")
        // );


        this.subscription = this.generator.randomNumbersStream(10).subscribe(
            (n: number) => this.arr.push(n),
            (err: any) => this.notify.error(err),
            () => this.notify.success("Done.")
        );

    }

    ngOnDestroy (): void {
        this.subscription.unsubscribe();
    }

}
