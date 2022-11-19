import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {

    public randomNumbersStream(count: number): Observable<number> {

        return new Observable((myObserver: Observer<number>) => {

            const timerId = setInterval(() => {
                const num = Math.floor(Math.random() * 100);
                myObserver.next(num);
                count--;

                if(count === 0) {
                    clearInterval(timerId);
                    myObserver.complete();
                }

                // if(count === 100) {
                //     clearInterval(timerId);
                //     myObserver.error("Some error Demo.");
                // }
            }, 400);
        });
    }
}
