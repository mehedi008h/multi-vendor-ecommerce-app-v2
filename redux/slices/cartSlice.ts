import { CartItem, Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "../store";

interface CartState {
    cartItems: CartItem[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
}

// localStorage.getItem("cartItems")
//         ? JSON.parse(localStorage.getItem("cartItems")!)
//         :
const initialState: CartState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity:
                        state.cartItems[existingIndex].cartQuantity + 1,
                };
                toast.info("Increased product quantity.", {
                    position: "top-left",
                });
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
                toast.success("Product added to cart.", {
                    position: "top-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseCart(state, action: PayloadAction<Product>) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info("Decreased product quantity.", {
                    position: "top-left",
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = nextCartItems;

                toast.error("Product removed from cart.", {
                    position: "top-left",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action: PayloadAction<Product>) {
            const itemIdToRemove = action.payload.id;
            const nextCartItems = state.cartItems.filter(
                (item) => item.id !== itemIdToRemove
            );

            state.cartItems = nextCartItems;

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Product removed from cart!", { position: "top-left" });
        },
        getTotals(state) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Cart cleared", { position: "top-left" });
        },
    },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
    cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
