import React from "react";
import pic1 from "../assets/daniel-2.png";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ total }) => {
  const priceForStripe = total * 100;
  const publishableKey =
    "pk_test_51Kw15CBYK0kRFOeJojl0jbX0TT6pa33MdbS6m8pKtrLfTWpy9Ne6epZgfmJsMKYBXXiCG8VrEpaSFw1rwkyqPy2j001wmLPC4c";
  const onToken = (token) => {
    console.log(token);
    alert("Your Payment was sucessful");
  };
  return (
    <StripeCheckout
      label="Pay  Now"
      name="Redux Toolkit"
      bitcoin
      billingAddress
      shippingAddress
      image={pic1}
      description={`Your total is $${total}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
