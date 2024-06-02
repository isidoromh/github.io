import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-inicio', standalone: true,
  imports: [TranslateModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(private translate: TranslateService) {translate.setDefaultLang('es');}
  switchLanguage(language: string) {this.translate.use(language);}
  getTranslationClass(key: string): string {return `translation-${key.toLowerCase()}`; }}
