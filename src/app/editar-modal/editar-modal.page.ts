import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // importar etapa 2
import { ModalController } from '@ionic/angular'; // importar etapa 2

@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.page.html',
  styleUrls: ['./editar-modal.page.scss'],
})
export class EditarModalPage implements OnInit {

  //Criando a varios usuarios que é uma lista com as chaves nome e foto
  usuarios = {
    "nome": "",
    "foto": ""
  }
  //Etapa 2 - Adicionar ao construtor o ModalController e Camera
  constructor(public modalController: ModalController, private camera: Camera) { }

  ngOnInit() {
  }
  //Etapa 2 - Metodo que chama a camera para tirar a foto
  tirar_foto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.usuarios.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err)
    });
  }

  //Etapa 2 - Metodo Atualizar
  atualizar() {
    this.modalController.dismiss(this.usuarios)
  }

}