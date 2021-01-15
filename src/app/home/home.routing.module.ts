import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { SignInComponent } from '../home/signin/signin.component';
import { SignUpComponent } from '../home/signup/signup.component';
import { HomeComponent } from '../home/home.component';
import { LoginGuard } from '../core/auth/login.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Sign in'
                }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {
                    title: 'Sign up'
                }
            },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]

})
export class HomeRoutingModule{

}