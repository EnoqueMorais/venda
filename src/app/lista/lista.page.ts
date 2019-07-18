import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../services/service.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProdutoPage } from '../produto/produto.page';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {

  vendas;

  constructor(private http: HttpClient, public service: ServiceService, public loadingController: LoadingController, public modalController: ModalController) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.list().subscribe(
        (data) => {
          this.vendas = data
          loader.dismiss()
        }
      )
    })
  }

  remove(venda) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.delete(venda.id).subscribe(
        (data) => {
          var i = this.vendas.indexOf(venda);
          this.vendas.splice(i, 1);
          loader.dismiss()
        }
      )
    })
  }

  add(venda) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.post(venda).subscribe(
        (data) => {
          this.vendas.push(data)
          loader.dismiss()
        }
      )
    })
  }

  async modal() {
    const modal = await this.modalController.create({
      component: ProdutoPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.add(dados.data)
    })
  }

}
