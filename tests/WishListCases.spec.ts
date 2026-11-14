import{test,expect} from '@playwright/test'
import { WishList } from '../pages/WishListPage'
import { Configuration } from '../utils/config'

test.beforeEach(async({page})=>{

    let config=new Configuration()
    await page.goto(config.appURL)
})

test.afterEach(async({page})=>{
    await page.close()
})

test('wishlist cases @regression',async({page})=>{

    let wish=new WishList(page)
    await wish.Click_digitalLink()
    await wish.Click_AlbumLink()
    await wish.VerifyWishQunatity('3')
    await wish.Click_AddToWishList()
    await wish.Click_WishListMain()
    await wish.VerifyWishQunatityMainLink("3")
    //await page.waitForTimeout(3000)
})