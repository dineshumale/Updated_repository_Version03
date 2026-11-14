import {test,expect} from '@playwright/test'
import { ConfigurationTwo } from '../../utils/configtwo'
import { BookPurchase } from '../../pages/BookPurchasePage'
import { LoginPagetwoNew } from '../../pages/LoginPagetwo'


let config2:ConfigurationTwo;

test.beforeEach(async({page})=>{
    config2=new ConfigurationTwo()
    await page.goto(config2.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('Registered customer purchases a book',async({page})=>{

    let login_two=new LoginPagetwoNew(page)
    await login_two.click_Login_Link()
    await login_two.Email_Password_Provided(config2.email,config2.password)
    await login_two.Login()

    let book=new BookPurchase(page)
    await book.click_BookTwo()
    await book.click_HealthBook()
    await book.VerifyBookName()
    await book.click_AddCart()
    await book.click_AddCartMain()
    await book.VerifyQuantity_Price("1","10")
    await book.click_TermsCheck()
    await book.click_Checkout()
    await book.click_Continue1()
    await book.click_Pick()
    await book.click_Continue2()
    await book.Click_Payment()
    await book.Click_Continue3()
    await book.Click_Continue4()
    await book.verifyTotal()
})