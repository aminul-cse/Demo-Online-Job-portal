import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-apply-now',
    standalone: true,
    templateUrl: './apply-now.component.html',
    imports: [RouterLink, HeaderComponent]
})
export class ApplyNowComponent {

}
