import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  constructor(private translate: TranslateService) {translate.setDefaultLang('es');}
  switchLanguage(language: string) {this.translate.use(language);}
  getTranslationClass(key: string): string {return `translation-${key.toLowerCase()}`;}}
