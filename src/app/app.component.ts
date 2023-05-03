import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleeje1 = 'Formulario';
  name: string = ""
  cant: string = ""
  code: string = ""
  
  getDatosBasic() {
    this.name
    this.cant
    this.code

  }
}
