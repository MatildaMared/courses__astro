/** @jsxImportSource react */
import { addItemToCart } from "../stores/cart";

export const AddToCart = ({ item }: { item: ShopItem }) => {
	return (
		<button onClick={() => addItemToCart(item)} className="big-link">
			Add to Cart
		</button>
	);
};
