//app.component.ts
import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink,RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root', standalone: true,
  imports: [RouterOutlet, RouterLink, TranslateModule,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'})
export class AppComponent {
  menuActive = false; logo1 = 'assets/avatar.jpg';logo2 = 'assets/logo.png'; baseLogo=this.logo1;
  constructor(private translate: TranslateService, public router: Router) {translate.setDefaultLang('es');}
  switchLanguage(language: string) {this.translate.use(language);}
  getTranslationClass(key: string): string {return `translation-${key.toLowerCase()}`; }
  toggleMenu() {this.menuActive = !this.menuActive;}
  swapLogo(){this.baseLogo=this.logo2;}
  revertLogo() {this.baseLogo=this.logo1;}}

