import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.serve";

@Component({
    selector: "Test",
    templateUrl: "./test.component.html",
})
export class TestComponent implements OnInit {

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

        this.noticias.agregar("Hola");
        this.noticias.agregar("Holaa");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
