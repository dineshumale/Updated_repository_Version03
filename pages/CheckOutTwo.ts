import { Page, Locator, expect } from '@playwright/test'


export class CheckoutCasesTwo {
    private readonly page: Page;

    private readonly checkoutBtn: Locator
    private readonly termscheckbox: Locator
    private readonly continue1: Locator
    private readonly pickup: Locator
    private readonly continue2: Locator
    private readonly continue3:Locator


    private readonly PurchaseOrderRadio: Locator
    private readonly PurchaseOrderNumber: Locator;
    private readonly continue4:Locator
    private readonly total: Locator


    constructor(page: Page) {
        this.page = page;

        this.checkoutBtn = page.locator("#checkout")
        this.termscheckbox = page.locator("#termsofservice")
        this.continue1 = page.locator("//input[@onclick='Billing.save()']")
        this.pickup = page.locator("#PickUpInStore")
        this.continue2 = page.locator("(//input[@onclick='Shipping.save()'])[1]")
        this.PurchaseOrderRadio  = page.locator("#paymentmethod_3")
        this.continue3=page.locator("(//input[@class='button-1 payment-method-next-step-button'])[1]")
        this.PurchaseOrderNumber=page.locator("#PurchaseOrderNumber")
        this.continue4=page.locator("//input[@class='button-1 payment-info-next-step-button']")
        this.total = page.locator(".product-price")



    }



    async click_CheckOutButton() {

        await this.checkoutBtn.click()
        // let display=await this.page.locator("#terms-of-service-warning-box").innerText()
        //console.log(`you have not selected terms and condition checkbox. Message shown as ${display}`)
    }

    async Click_ContinueOne() {
        await this.continue1.click()
    }

    async SelectPickUP() {
        await this.pickup.check();
    }

    async VerifyTermsCheckBox() {
        await this.termscheckbox.check();
    }

        async Click_Continue2() {
        await this.continue2.click();
    }


    async SelectPaymentMethod() {
        await this.PurchaseOrderRadio.check()  
    }

    async Click_Continue3() {
        await this.continue3.click()  
    }

    async VerifyPO(MyPO:string) {
        await this.PurchaseOrderNumber.fill(MyPO)
        let displayPO=await this.PurchaseOrderNumber.inputValue()
        console.log(`Provided PO shown on UI as ${displayPO}`)
    }

     async Click_Continue4() {
        await this.continue4.click()  
    }

    async VerifyTotal() {
        let mytotal=await this.total.first().innerText()
        console.log(`Total shown on UI is :${mytotal}`)  
    }

    

}