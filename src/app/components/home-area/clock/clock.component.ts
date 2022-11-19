import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    public time: string;
    public timeId: number;

    constructor() { }

    ngOnInit(): void {
        this.timeId = window.setInterval(() => {
            const d = new Date();
            this.time = d.toLocaleTimeString();
        }, 1000);
    }

    ngOnDestroy(): void {
        window.clearInterval(this.timeId);
    }

}
