import {Page,Locator} from "@playwright/test"


export class BookPurchase
{
    private readonly page:Page
    private readonly bookLink:Locator
    private readonly HealthBook:Locator
    private readonly bookname:Locator
    private readonly shortdesc:Locator
    private readonly price:Locator
    private readonly addCart:Locator
    private readonly addCartMain:Locator
    private readonly bookquantity:Locator
    private readonly cart_Price:Locator
    private readonly terms:Locator
    private readonly checkoutBtn:Locator
    private readonly continue1:Locator
    private readonly pick:Locator
    private readonly continue2:Locator
    private readonly payment:Locator
    private readonly continue3:Locator
    private readonly continue4:Locator
    private readonly total:Locator

    constructor(page:Page)
    {
        this.page=page
        this.bookLink=page.getByRole("link",{name:'Books'})
        this.HealthBook=page.locator(".product-title a")
        this.bookname=page.locator(".product-name")
        this.shortdesc=page.locator(".short-description")
        this.price=page.locator(".price-value-22")
        this.addCart=page.locator("#add-to-cart-button-22")
        this.addCartMain=page.locator("//a[normalize-space()='shopping cart']")
        this.bookquantity=page.locator("input[value='1']")
        this.cart_Price=page.locator(".product-price")
        this.terms=page.locator("#termsofservice")
        this.checkoutBtn=page.locator("#checkout")
        this.continue1=page.locator("(//input[@onclick='Billing.save()'])[1]")
        this.pick=page.locator("#PickUpInStore")
        this.continue2=page.locator("//input[@onclick='Shipping.save()']")
        this.payment=page.locator("#paymentmethod_0")
        this.continue3=page.locator("input[class='button-1 payment-method-next-step-button']")
        this.continue4=page.locator("input[class='button-1 payment-info-next-step-button']")
        this.total=page.locator(".product-price.order-total")


    }

    async click_BookTwo()
    {
        await this.bookLink.first().click()
    }
    
    async click_HealthBook()
    {
        await this.HealthBook.nth(4).click()
    }

     async VerifyBookName()
    {
        const mybook=await this.bookname.innerText()
        const mydesc=await this.shortdesc.innerText()
        const myprice=await this.price.innerText()
        console.log(`Book name is :${mybook} and short description is ${mydesc} with price ${myprice}` )
    }

    async click_AddCart()
    {
        await this.addCart.click()
    }

     async click_AddCartMain()
    {
        await this.addCartMain.click()
    }

     async VerifyQuantity_Price(qunatity:string,MyCartPrice:string)
    {
        await this.bookquantity.fill(qunatity)
        const quant=await this.bookquantity.inputValue()
        console.log(`Quantity is :${quant}`)

       const priceShown= await this.cart_Price.first().innerText()
       
        console.log(`Price shown is :${priceShown}`)
    }

     async click_TermsCheck()
    {
        await this.terms.check()
    }

     async click_Checkout()
    {
        await this.checkoutBtn.click()
         await this.page.waitForLoadState('domcontentloaded');

    console.log("Current URL:", this.page.url());
    console.log("Page Title:", await this.page.title());

    console.log(
        "Billing Continue Count:",
        await this.continue1.count()
    );

    console.log(
        "Login Link Count:",
        await this.page.getByRole('link', {name: 'Log in'}).count()
    );
    }

     async click_Continue1()
    {
       console.log("Waiting for Billing Continue button");

    await this.continue1.waitFor({
        state: 'visible',
        timeout: 10000
    });

    await this.continue1.click();

    console.log("Billing Continue clicked successfully");
    }

    async click_Pick()
    {
        await this.pick.check()
    }

    async click_Continue2()
    {
        await this.continue2.click()
    }

      async Click_Payment()
    {
        await this.payment.check()
    }

    async Click_Continue3()
    {
        await this.continue3.click()
    }

    async Click_Continue4()
    {
        await this.continue4.click()
    }

    async verifyTotal()
    {
        let mytotal=await this.total.innerText()
        console.log(`Total shown on  UI is :${mytotal}`)
    }



   

    
}