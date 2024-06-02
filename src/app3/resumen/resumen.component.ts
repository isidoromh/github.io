import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'})
export class ResumenComponent {
  constructor(private translate: TranslateService) {translate.setDefaultLang('es');}
  switchLanguage(language: string) {this.translate.use(language);}
  getTranslationClass(key: string): string {return `translation-${key.toLowerCase()}`; }}
