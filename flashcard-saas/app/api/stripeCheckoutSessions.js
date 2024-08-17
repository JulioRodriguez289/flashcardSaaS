import stripe from "stripe"


// when a customer is ready to complete their purchase, a new checkout session is created
// create a stripe checkout session 
// what does this fucntion return ?
const session = await stripe.Checkout.sessions.create({

    // an array of objects , where each object 

    line_items : [ 
        { price: $10
        
        }, 

      
    
    ],

    mode: "payment"

    
// can save customer payment details by sending an api parmater when you create a session 

    // redirect users to post-payment process page that displays the outcome of the check out
    // i.e success page if checkout goes through
}); 