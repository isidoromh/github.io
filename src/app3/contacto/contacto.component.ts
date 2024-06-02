import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'})
export class ContactoComponent {
  constructor(private translate: TranslateService) {translate.setDefaultLang('es');}
  switchLanguage(language: string) {this.translate.use(language);}
  getTranslationClass(key: string): string {return `translation-${key.toLowerCase()}`;}}
