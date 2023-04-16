# Krishi Bazaar

## Brief

Our app is the solution to creating a sustainable, transparent, and ethical food supply chain.

By connecting local farmers directly to consumers, we can ensure that you know exactly where your food comes from and that farmers receive fair compensation for their hard work.

With our app, you can easily browse and order fresh, locally sourced produce, while supporting your community and reducing your carbon footprint. Say goodbye to the uncertainty and opacity of the traditional food system, we hope to build a better future for food!

## Description

Krishi Bazaar is mobile application designed to bridge the gap between farmers and consumers by providing a platform for direct communication and transaction. The app allows farmers to list their produce for sale and consumers to browse and purchase products directly from the farmer.

Farmers can create a profile, add their produce with details such as quantity, quality, and price. Consumers can search for products by category, location, and other filters. They can also view the farmer's profile, read reviews, and connect with them to discuss product details or negotiate prices.

The app also offers a payment gateway for secure transactions and facilitates delivery arrangements between the farmer and the consumer. It aims to promote transparency, traceability, and fair pricing in the agricultural value chain, while also supporting small farmers and promoting local, sustainable food systems.

Overall, the Farmer Consumer Connect app aims to create a more efficient and equitable market for both farmers and consumers, while also promoting the benefits of buying locally sourced, fresh, and seasonal produce.

## Objective

- The main objective of the farmer-consumer app is to create a direct link between farmers and consumers.

- By eliminating intermediaries, farmers can earn a better price for their crops, and consumers can purchase fresh produce at a lower cost.

- The app also aims to promote sustainable farming practices and support small-scale farmers who may not have access to traditional markets.

## Features

| No. | Feature               | Description                                                                                                                                                                                                                                                             |
| --- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Farmer profiles       | Farmers can create profiles on the app, which will include information such as their location, the types of crops they grow, and their pricing.                                                                                                                         |
| 2.  | Consumer profiles     | Consumers can create profiles on the app, which will include their location and preferences.                                                                                                                                                                            |
| 3.  | Location-based search | Consumers can search for farmers near their location using the app's location-based search feature.                                                                                                                                                                     |
| 4.  | Direct communication  | Farmers and consumers can communicate directly through the app's messaging feature, which allows them to discuss pricing, availability, and delivery.                                                                                                                   |
| 5.  | Online transactions   | The app will have a secure payment gateway that will allow consumers to make online payments for their purchases.                                                                                                                                                       |
| 6.  | Reviews and ratings   | Consumers can rate and review farmers based on their experience with them, which will help other consumers make informed decisions.                                                                                                                                     |
| 7.  | Farmer education      | The app will also have a section dedicated to farmer education, which will provide information on sustainable farming practices, crop management, and other relevant topics.                                                                                            |
| 8.  | News and updates      | The app will provide farmers with news and updates on weather conditions, crop prices, and other relevant information.                                                                                                                                                  |
| 9.  | Target audience       | The target audience for the farmer-consumer app includes small-scale farmers who have difficulty accessing traditional markets and consumers who are interested in buying fresh produce directly from farmers. The app will be available in both urban and rural areas. |

## Challenges

One of the major challenges in developing the farmer-consumer app will be to ensure that farmers have access to smartphones and the internet. The app may also face resistance from intermediaries who currently control the supply chain. The app will need to ensure that the quality of the produce is maintained during transportation and delivery. |

## Implementations
The implementation plan for a React Native app that connects farmers and customers involves designing UI/UX, implementing Firebase as backend, integrating payment API, and adding features such as push notifications and analytics.

• Design UI/UX for the app (registration, login, product listings, cart, and payment)
• Create navigation system for the app
• Implement forms for user registration and login
• Create screens for farmers to list their products and for customers to view and purchase products
• Implement search function for customers to search for specific products
• Create cart system for customers to add products and proceed to checkout
• Display order confirmation and status updates for customers

Backend:

• Set up Firebase project for the app
• Implement Firebase Cloud Firestore as the database
• Set up security rules to control access to data
• Create functions for user registration and login
• Implement functions for product listings and orders

Payment Interface:

• Integrate Razorpay and Paytm API into the app for payment processing
• Implement functions to handle payments and order status updates
• Ensure secure handling of payment information

Other Features:

• Add push notifications to notify customers of order status updates
• Implement analytics to track user behavior and app performance
• Implement error logging and monitoring to quickly address issues and bugs

Testing and Deployment:

• Thoroughly test app on different devices and platforms
• Deploy app to app stores and distribute to user
• It's important to note that this implementation plan is a high-level overview and may need to be adapted based on the specific requirements of your app.

## Delivery

//todo

## Contribution

1. Make a fork of this repository
2. Clone the forked repository to local development environment
3. Make sure that you have **npm** installed
   ```sh
   npm --version
   ```
   If not, install the LTS version of Node and then proceed
4. Install all the dependencies
   ```sh
   npm i
   ```
5. Execute the following command from root directory
   ```sh
   mkdir -p Firebase && touch Firebase/firebase-config.json
   ```
6. Open the Firebase Folder and open firebase-config.json

   Copy the below config and fill it with correct configuration from Firebase Console -> Project details

   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: "YOUR-API-KEY",
     authDomain: "YOUR-AUTH-DOMAIN",
     projectId: "YOUR-PROJECT-ID",
     storageBucket: "YOUR-STORAGE-BUCKET",
     messagingSenderId: "YOUR-SENDER-ID",
     appId: "YOUR-APP-ID",
     measurementId: "YOUR-MEASUREMENT-ID",
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   const auth = getAuth(app);

   const db = getFirestore();

   export { auth, db };
   ```
