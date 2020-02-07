import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {
  pagesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.pagesObservable = this.GetPages("/pages");
  }

  GetPages(listpatch): Observable<any[]> {
    return this.db.list(listpatch).valueChanges();
  }
}
