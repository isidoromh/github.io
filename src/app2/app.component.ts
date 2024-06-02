//app.component.ts
import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root', standalone: true,
  imports: [RouterOutlet, RouterLink, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'})
export class AppComponent {
  menuActive = false;
  constructor(private translate: TranslateService, public router: Router) {translate.setDefaultLang('es');}
  switchLanguage(language: string) {this.translate.use(language);}
  getTranslationClass(key: string): string {return `translation-${key.toLowerCase()}`; }
  toggleMenu() {this.menuActive = !this.menuActive;}}

