import { useStore } from "@nanostores/solid";
import { $cart, removeItemFromCart, subtotal } from "../stores/cart";
import styles from "./cart.module.css";
import { show, createSignal } from "solid-js";

function formatCurrency(amount: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}
