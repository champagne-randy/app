// Angular modules
import { 
	BrowserModule 
} 							from '@angular/platform-browser';
import { 
	NgModule 
} 							from '@angular/core';
import { 
	Router 
}							from '@angular/router';

// Project routes
import { 
	AppRoutingModule 
}     						from './app-routing.module';

// Project components
import { 
	AppComponent 
} 							from './app.component';
import { 
	FileUploadComponent 
}							from './file-upload/file-upload.component';
import { 
	MindMapComponent 
} 							from './mind-map/mind-map.component';
import { 
	VersionComponent 
} 							from './version/version.component';
import { 
	HotjarComponent 
} 							from './analytics/hotjar.component';
import { 
	UserAuthComponent 
} 							from './user-auth/user-auth.component';
import { 
	ClassroomComponent 
} 							from './classroom/classroom.component';



@NgModule({
	declarations: [
		AppComponent,
		FileUploadComponent,
		HotjarComponent,
		MindMapComponent,
		UserAuthComponent,
		VersionComponent,
		ClassroomComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { 

  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}





