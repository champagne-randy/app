import { 
	NgModule 
}							from '@angular/core';
import { 
	RouterModule, 
	Routes 
} 							from '@angular/router';

import { 
	FileUploadComponent 
}							from './file-upload/file-upload.component';
import { 
	MindMapComponent 
}							from './mind-map/mind-map.component'
import { 
	UserAuthComponent 
} 							from './user-auth/user-auth.component';



const routes: Routes = [
	// paths
	{ 
		path: '',  	
		component: UserAuthComponent 
	},
	//{ 
	//	path: 'map',  	
	//	component: MindMapComponent 
	//},
	//{ 
	//	path: 'upload',  	
	//	component: FileUploadComponent 
	//},

	// redirects
	//{ 
	//	path: '', 
	//	redirectTo: '/login', 
	//	pathMatch: 'full' 
	//},
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})


export class AppRoutingModule {}



