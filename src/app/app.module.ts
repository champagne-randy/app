// Angular modules
import { 
	BrowserModule 
} 							from '@angular/platform-browser';
import { 
	NgModule 
} 							from '@angular/core';

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
	UserAuthComponent 
} 							from './user-auth/user-auth.component';
import { 
	ClassroomComponent 
} 							from './classroom/classroom.component';



@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		FileUploadComponent,
		MindMapComponent,
		UserAuthComponent,
		VersionComponent,
		ClassroomComponent
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }





