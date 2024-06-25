import { Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
    { path: 'analysis', component: FileUploadComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent }
];
