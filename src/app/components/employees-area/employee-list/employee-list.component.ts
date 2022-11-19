import { environment } from 'src/environments/environment';
import EmployeeModel from 'src/app/models/employee.model';
import { NotifyService } from 'src/app/services/notify.service';
import { EmployeesService } from './../../../services/employees.service';
import { Component, Input, OnInit } from '@angular/core';
import store from 'src/app/redux/store';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    public employees: EmployeeModel[];

    public imageUrl = environment.employeesImagesUrl;

    constructor(private myEmployeesService: EmployeesService, private notify: NotifyService) { }

    async ngOnInit() {
        try {
            this.employees = await this.myEmployeesService.getAllEmployees();
        }
        catch (err) {
            this.notify.error(err)
        }
    }

}
