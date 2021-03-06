import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'editar-modal', loadChildren: './editar-modal/editar-modal.module#EditarModalPageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'produto', loadChildren: './produto/produto.module#ProdutoPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
