
import {mount as productShow} from "mfProducts/ProductIndex"
import {mount as cartShow} from "mfCart/CartShow"


productShow(document.querySelector("#my-products"));
cartShow(document.querySelector("#my-cart"));
