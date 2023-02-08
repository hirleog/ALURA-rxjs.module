import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';
import { Livro } from 'src/app/models/interfaces';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy, OnInit {

  listaLivros: Livro[];
  campoBusca: string = ''
  subscription: Subscription
  livro: Livro

  constructor(private service: LivroService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  buscarLivros() {
    this.subscription = this.service.buscar(this.campoBusca).subscribe({
      next: items => {
        this.listaLivros = this.livrosBuscaLivros(items)
      },
      error: erro => console.error(erro),
    }
    )
  }
  livrosBuscaLivros(item): Livro[] {
    const livros: Livro[] = [];

    item.forEach(item => {
      livros.push(this.livro = {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.previewLink,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail
      })
    });
    console.log('lalalal',livros);

    return livros;
  }




  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}



