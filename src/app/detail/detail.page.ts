import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id;
  venda;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.venda = this.http.get("https://5d262f92eeb36400145c59c4.mockapi.io/venda/" + this.id).subscribe(
      (data) => {
        this.venda = data
      }
    )
    
  }

  ngOnInit() {
  }

}
