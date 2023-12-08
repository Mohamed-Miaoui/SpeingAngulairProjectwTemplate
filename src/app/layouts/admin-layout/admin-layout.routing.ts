import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UniversitiesComponent } from 'src/app/pages/universities/universities.component';
import { InfosComponent } from 'src/app/pages/infos/infos.component';
import { AddUniComponent } from 'src/app/pages/add-uni/add-uni.component';
import { EdituniComponent } from 'src/app/pages/edituni/edituni.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'universities',           component: UniversitiesComponent },
    { path: 'info',           component: InfosComponent },
    { path: 'addUni',           component: AddUniComponent },
    { path: 'editUni/:id',           component: EdituniComponent }
];
