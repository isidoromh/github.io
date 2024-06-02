//app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
export const routes: Routes = [
  {path: 'inicio',component: InicioComponent},
  {path: 'resumen',component: ResumenComponent},  
  {path: 'portafolio',component: PortafolioComponent},
  {path: 'certificaciones',component: CertificacionesComponent},
  {path: 'contacto',component: ContactoComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' }];
