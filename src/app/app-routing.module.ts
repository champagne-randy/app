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
import { 
	ClassroomComponent 
} 							from './classroom/classroom.component';



const routes: Routes = [
	// paths
	{ 
		path: 'classroom',  	
		component: ClassroomComponent 
	},
	{ 
		path: 'login',  	
		component: UserAuthComponent 
	},
	{ 
		path: 'map',  	
		component: MindMapComponent 
	},
	{ 
		path: 'upload',  	
		component: FileUploadComponent 
	},

	// redirects
	{ 
		path: '', 
		redirectTo: '/login', 
		pathMatch: 'full' 
	},
];


@NgModule({
	imports: [ 
		RouterModule.forRoot(
			routes, 
			{enableTracing: true}
		) 
	],
	exports: [ 
		RouterModule 
	]
})


export class AppRoutingModule {}



