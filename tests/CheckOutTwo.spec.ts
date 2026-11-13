import { test, expect } from '@playwright/test'
import { MyCartVerification } from '../pages/CartPage1'
import { LoginCombine } from '../pages/Login_Combine'
import { Configuration } from '../utils/config'
import { CheckoutCasesTwo } from '../pages/CheckOutTwo'




let config = new Configuration()

test.beforeEach(async ({ page }) => {

    await page.goto(config.appURL)
})

test.afterEach(async ({ page }) => {
    await page.close()
})

test('Checkout without terms', async ({ page }, testInfo) => {

    console.log("Current test Title-->", testInfo.title)
    console.log("Current test status-->", testInfo.status)

    let login = new LoginCombine(page)
    await login.MyCombineLogin(config.email, config.password)

    let cart = new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
    await cart.Click_AddTOCart()
    await cart.ShoppingCartView()

    let checkoutTwo=new CheckoutCasesTwo(page)
    await checkoutTwo.click_CheckOutButton()
   
    

    
    
});

test('Checkout with terms', async ({ page }, testInfo) => {

    console.log("Current test Title-->", testInfo.title)
    console.log("Current test status-->", testInfo.status)

    let login = new LoginCombine(page)
    await login.MyCombineLogin(config.email, config.password)

    let cart = new MyCartVerification(page)
    await cart.Click_BooksLink()
    await cart.Click_FictionBook()
    await cart.Click_AddTOCart()
    await cart.ShoppingCartView()

    let checkoutTwo=new CheckoutCasesTwo(page)
    await checkoutTwo.VerifyTermsCheckBox()
   
    await checkoutTwo.click_CheckOutButton()
    await checkoutTwo.Click_ContinueOne()
    await checkoutTwo.SelectPickUP()
    await checkoutTwo.Click_Continue2()
    await checkoutTwo.SelectPaymentMethod()
    await checkoutTwo.Click_Continue3()
    await checkoutTwo.VerifyPO("Test33")
    await checkoutTwo.Click_Continue4()
    await checkoutTwo.VerifyTotal()
    
})