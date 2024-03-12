import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-employee-profile',
    standalone: true,
    templateUrl: './employee-profile.component.html',
    imports: [RouterLink, HeaderComponent]
})
export class EmployeeProfileComponent {

}
