import {
  Component,
  ViewChild,
  ngAfterViewInit,
  ViewEncapsulation
} from "@angular/core";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";
import {
  createSpinner,
  showSpinner,
  setSpinner
} from "@syncfusion/ej2-angular-popups";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("spinner") spinnerEle: any;
  public dataSource = new DataManager({
    url: "//js.syncfusion.com/ejServices/Wcf/Northwind.svc/",
    crossDomain: true
  });
  public query = new Query()
    .from("Products")
    .select("ProductID,ProductName")
    .take(10);
  public fields: Object = { id: "ProductID", text: "ProductName" };
  public headertitle = "Product Name";
  ngAfterViewInit() {
    createSpinner({
      target: this.spinnerEle.nativeElement
    });
    showSpinner(this.spinnerEle.nativeElement);
  }
  onActionComplete() {
    this.spinnerEle.nativeElement.style.display = "none";
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
