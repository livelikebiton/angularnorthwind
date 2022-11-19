import { environment } from 'src/environments/environment';
import EmployeeModel from 'src/app/models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import store from '../redux/store';
import { employeesDownloadedAction } from '../redux/employees-state';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private http: HttpClient) { }

    public async getAllEmployees() {
        if (store.getState().employeesState.employees.length === 0) {
            const employees = await this.http.get<EmployeeModel[]>(environment.employeesUrl).toPromise();
            store.dispatch(employeesDownloadedAction(employees));
        }
        return store.getState().employeesState.employees;
    }
}
