import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  venda = {
    "produto": "",
    "data": "",
    "desconto": "",
    "valor": "",
  }

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

  add() {
    this.modal.dismiss(this.venda)
  }

}
