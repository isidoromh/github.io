//app.component.ts
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root', standalone: true,
  imports: [TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'})
export class AppComponent {
  menuActive = false;
  constructor(private translate: TranslateService) {translate.setDefaultLang('en');}
  switchLanguage(language: string) {this.translate.use(language);}
  getTranslationClass(key: string): string {return `translation-${key.toLowerCase()}`; }
  toggleMenu() {this.menuActive = !this.menuActive;}
  navigate(section: string) {
    // Handle navigation logic here
  }
}

