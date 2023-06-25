import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
// Add more routes for other components as needed
];

const headerFooterRoutes: Routes = [
{ path: '', component: HeaderComponent, outlet: 'header' },
{ path: '', component: FooterComponent, outlet: 'footer' },
];

@NgModule({
imports: [RouterModule.forRoot(routes), RouterModule.forChild(headerFooterRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
