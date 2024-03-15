import CartContainer from "../components/pages/cart/CartContainer"
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer"
import DetailContainer from "../components/pages/itemDetailContainer/DetailContainer"
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer"

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer
    },
    {
        id: "detail",
        path: "/item/:id",
        Element: DetailContainer
    },
    {
        id: "cart",
        path: "/cartContainer",
        Element: CartContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
]