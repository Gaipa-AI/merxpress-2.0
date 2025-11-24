'use client'
import { PayPalButtons, PayPalScriptProvider, PayPalButtonsComponentProps, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import { useCart } from '../cart/CartContext';

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID as string;

const { state } = useCart();
const price = state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
console.log('Total price for PayPal:', price);



// interface MessageProps {
//     content: string;
// }
// interface OrderData {
//     id: string;
//     details?: Array<{
//       issue: string;
//       description: string;
//     }>;
//     debug_id?: string;
// }

// function Message({ content }: MessageProps) {
//   return <p>{content}</p>;
// }

export default function PayBtn() {
    const initialOptions: ReactPayPalScriptOptions = {
        clientId: CLIENT_ID,
        "enable-funding": "venmo",
        "buyer-country": "US",
        //currency: "USD",
        components: "buttons",
        // Add other options as needed
    };
    
    const styles: PayPalButtonsComponentProps["style"] = {
        shape: "rect",
        layout: "vertical",
        color: "gold",
        borderRadius: 10,
        
    };
    const displayOnly: PayPalButtonsComponentProps["displayOnly"] = ["vaultable"];

    // const createOrder: PayPalButtonsComponentProps["createOrder"] = async () => {
    //     try {
    //         const response = await fetch("/my-server/create-paypal-order", {
    //             method: "POST",
                
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //                 cart: [{ id: "YOUR_PRODUCT_ID", quantity: "YOUR_PRODUCT_QUANTITY",amount: "1.00" }],
    //             }),
    //         });

    //       const orderData: OrderData = await response.json();

    //       if (!orderData.id) {
    //           const errorDetail = orderData?.details?[0];

    //           const errorMessage = errorDetail
    //               ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
    //               : "Unexpected error occurred, please try again.";

    //           throw new Error(errorMessage);
    //       }

    //       return orderData.id;

    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // };

    return (
        <div className="paypal-button-container">
            <PayPalScriptProvider options={initialOptions} >
              <PayPalButtons style={styles} displayOnly={displayOnly} />
            </PayPalScriptProvider>
        </div>
    );
}  