import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as $ from 'jquery';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

$('body').on('click','#nav li',function(e){
      if ( e && e.preventDefault ) 
          e.preventDefault(); 
      else 
          window.event.returnValue = false;

    var $othera=$('#nav a');
    $othera.removeClass('active');
    $(this).addClass('active');   
})