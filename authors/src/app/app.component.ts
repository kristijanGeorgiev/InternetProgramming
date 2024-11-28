import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { Author } from '../models/author';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  data: Author[] = [];
  title = 'Authors';

  constructor(private http: HttpClient) {
  }

  async ngOnInit() {
    const url = 'https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data/authors.json';
    const response = await this.http.get<{ authors: Author[]}>(url).toPromise();
    this.data = response!.authors;
  }

  formatIndex(index: number) {
    return `index: #${index + 1}`;
  }
}
