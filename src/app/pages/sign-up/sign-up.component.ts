import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    templateUrl: './sign-up.component.html',
    imports: [CommonModule, HeaderComponent,RouterLink]
})
export class SignUpComponent {
    formSections = [
        { label: 'Username', placeholder: 'Type Username', id: 'username', type: 'text', required: true },
        { label: 'Password', placeholder: 'Password', id: 'password', type: 'password', required: true },
        { label: 'Confirm Password', placeholder: 'Retype password', id: 'confirm-password', type: 'password', required: true },
        { label: 'Company Name', placeholder: 'Type Company Name', id: 'companyName', type: 'text', required: true },
        { label: 'Year of Establishment', placeholder: 'Year of Establishment', id: 'establishment', type: 'text', required: true },
        { label: 'Company Size', placeholder: 'Company Size', id: 'companySize', type: 'text', required: true },
        { label: 'Company Address', placeholder: 'Type Company Address', id: 'companyAddress', type: 'text', required: true },
        { label: 'Industry Type', placeholder: 'Year of Establishment', id: 'industryType', type: 'text', required: true },
        { label: 'Business/ Trade License No', placeholder: 'Business/ Trade License No', id: 'licenseNo', type: 'text', required: true },
        { label: "Contact Person's Name", placeholder: "Type Contact Person's Name", id: 'contactName', type: 'text', required: true },
        { label: "Contact Person's Designation", placeholder: "Contact Person's Designation", id: 'contactDesignation', type: 'text', required: true },
        { label: "Contact Person's Mobile", placeholder: "Contact Person's Mobile", id: 'contactMobile', type: 'text' },
    ];
}
