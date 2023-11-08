import { useStore } from "@nanostores/solid";
import { $cart, removeItemFromCart, subtotal } from "../stores/cart";
import styles from "./cart.module.css";
import { Show, createSignal } from "solid-js";

function formatCurrency(amount: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

const EmptyState = () => {
	return (
		<>
			<p class={styles.icon}>
				<span role="img" aria-label="hot dog">
					🌭
				</span>
			</p>
			<p class={styles.empty}>
				Your cart is empty! Add a sandwich kit or two and give flavor a change.
			</p>
		</>
	);
};
