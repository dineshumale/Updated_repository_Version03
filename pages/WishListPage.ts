import {Page,Locator} from '@playwright/test'

export class WishList
{
    private readonly page:Page;
    private readonly digitalLink:Locator
    private readonly album:Locator
    private readonly Add_WishListBtn:Locator
    private readonly wishquantity:Locator
    private readonly wishlistLink:Locator
    private readonly wishQuantityAdded:Locator

    constructor(page:Page)
    {
        this.page=page;
        this.digitalLink=page.locator("//a[normalize-space()='Digital downloads']")
        this.album=page.locator("//a[normalize-space()='3rd Album']")
        this.Add_WishListBtn=page.locator("#add-to-wishlist-button-53")
        this.wishquantity=page.locator("#addtocart_53_EnteredQuantity")
        this.wishlistLink=page.locator("//span[normalize-space()='Wishlist']")
        this.wishQuantityAdded=page.locator("input[value='3']")


    }

    async Click_digitalLink()
    {
        await this.digitalLink.last().click()
    }

     async Click_AlbumLink()
    {
        await this.album.click()
    }

       async Click_AddToWishList()
    {
        await this.Add_WishListBtn.click()
    }
       async VerifyWishQunatity(wish_quantity:string)
    {
        await this.wishquantity.fill(wish_quantity)
        let Inputted_wish=await this.wishquantity.inputValue()
        console.log(`Inputted Wish quantity is :${Inputted_wish}`)
    }

        async Click_WishListMain()
    {
        await this.wishlistLink.click()
    }

        async VerifyWishQunatityMainLink(wish_quantitymain:string)
    {
        await this.wishQuantityAdded.fill(wish_quantitymain)
        let Inputted_wishmain=await this.wishQuantityAdded.inputValue()
        console.log(`Inputted Wish quantity shown on wishlist linkis :${Inputted_wishmain}`)

        let product_WishList=await this.page.locator("//a[normalize-space()='3rd Album']").innerText()
        console.log(`Product shown on Wishlist is :${product_WishList}`)
    }
}