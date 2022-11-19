import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unsubscribe } from 'redux';
import store from 'src/app/redux/store';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
    
    public isAdmin: boolean;
    private unsubscribeMe: Unsubscribe;

    ngOnInit(): void {
        this.unsubscribeMe = store.subscribe(() => {
            this.isAdmin = store.getState().authState.user?.isAdmin;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribeMe();
    }

}
