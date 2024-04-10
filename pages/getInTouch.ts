import { expect } from "@playwright/test";
import { homePage } from "./homePage";

export class getInTouch {

    page: any;
    inputTextField: any;

    constructor (page){
        this.page = page;
        this.inputTextField = page.getByPlaceholder('Short description');
    }


async assertInputField (){
   await this.page.getInTouch;
   await expect(this.page.inputTextField).toBeEnabled();
}







}