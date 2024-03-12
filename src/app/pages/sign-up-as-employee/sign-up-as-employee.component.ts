import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-sign-up-as-employee',
    standalone: true,
    templateUrl: './sign-up-as-employee.component.html',
    imports: [RouterLink, HeaderComponent]
})
export class SignUpAsEmployeeComponent {

}
