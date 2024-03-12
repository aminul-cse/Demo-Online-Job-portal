import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],

  template: `
  <!--============================= Header ======================== -->
<section class="bg-blue-300 fixed w-full z-50" id="header">
    <header class="container h-[70px]">
        <nav class="flex justify-between h-full items-center">
            <div class="flex justify-between items-center h-full">
                <div class="flex gap-1 items-center">
                    <div>
                        <img src="../assets/images/2024-02-27 03 35 35.png" alt="" class="h-8 pl-6">
                        <div class="text-base font-bold title-gradient">Online Job portal</div>
                    </div>
                </div>
            </div>
            <div class="flex-1">
                <ul
                    class="lg:flex lg:items-center lg:justify-center px-4 py-4 lg:py-0 gap-4 cursor-pointer shadow lg:shadow-none rounded-lg">
                    <li
                        class="px-4 py-2 hover:bg-blue-600 rounded-lg hover:text-white transition duration-300 ease-in-out">
                        <a href="#home" class="text-lg font-semibold">Home</a>
                    </li>
                    <li
                        class="px-4 py-2 hover:bg-blue-600 rounded-lg hover:text-white transition duration-300 ease-in-out">
                        <a href="#about" title="About Us" class="text-lg font-semibold">About Us</a>
                    </li>
                </ul>
            </div>
                <!-- YourComponent.component.html -->
                <button (click)="toggleDropdown()" class="bg-black border p-[12px_25px] rounded-md text-white font-bold text-base hover:bg-green-900 transition-all ease-in-out duration-700 group relative">
                    <a>Sign in / Create Account</a>
                        <ul *ngIf="isDropdownVisible" class="absolute bg-white rounded-xl border px-5">
                            <div class="h-auto w-64 mt-4 mb-4 text-black text-base font-bold cursor-auto">
                                <div class="service-card ">
                                    <div class="padding">
                                        <div class="dev-pos">
                                            <img src="../assets/images/staff.png" class="h-12 pr-2" alt="">
                                        <h4 class="title-gradient">As a Employee</h4>
                                        </div>
                                        <p class="text-sm font-semibold mt-2">Sign in or create your online job portal account to manage your profile.</p>
                                    </div>
                                    <div class="text-sm font-bold flex items-center justify-center gap-2 mt-2">
                                        <button routerLink="/login" class="px-2 py-2 bg-amber-200 shadow-md border rounded-md text-black hover:bg-amber-600 transition-all ease-in-out duration-500"><a>sign in</a></button>
                                        <button routerLink="/sign-up-employee" class="px-2 py-2 bg-amber-200 shadow-md border rounded-md text-black hover:bg-amber-600 transition-all ease-in-out duration-500"><a>Create Account</a></button>
                                    </div>
                                </div>
                                <div class="service-card mt-4">
                                    <div class="padding">
                                        <div class="dev-pos">
                                            <img src="../assets/images/ownership.png" class="h-12 pr-2" alt="">
                                        <h4 class="title-gradient">Employers</h4>
                                        </div>
                                        <p class="text-sm font-semibold mt-2">Sign in or create account to find the best candidates in the fastest way.</p>
                                    </div>
                                    <div class="text-sm flex items-center justify-center gap-2 mt-2 font-bold">
                                        <button routerLink="/loginEmployers" class="px-2 py-2 bg-amber-200 shadow-md border rounded-md text-black hover:bg-amber-600 transition-all ease-in-out duration-500"><a>sign in</a></button>
                                        <button routerLink="/sign-up" class="px-2 py-2 bg-amber-200 shadow-md border rounded-md text-black hover:bg-amber-600 transition-all ease-in-out duration-500"><a>Create Account</a></button>
                                    </div>
                                </div>
                            </div>
                        </ul>
                </button>
        </nav>
    </header>
</section>
<!--============================./ Header=============================== -->
  `
})
export class HeaderComponent {
    isDropdownVisible: boolean = false;

    constructor(private el: ElementRef) { }

    toggleDropdown(): void {
        this.isDropdownVisible = !this.isDropdownVisible;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const clickedInsideButton = this.el.nativeElement.contains(event.target);

        // Close the dropdown only if the click is outside the button
        if (!clickedInsideButton) {
            this.isDropdownVisible = false;
        }
    }
}
