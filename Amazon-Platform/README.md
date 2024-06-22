## Amazon HackON 4.0
This repository contains the solutions to the problems I solved during the Amazon HackON 4.0 coding.


# E-commerce Platform

A full-stack e-commerce website with features such as a shopping cart, product reviews, user profiles, admin management, and more.

## Features

- **Full featured shopping cart**: Add/remove products, update quantities, checkout functionality.
- **Product reviews and ratings**: Users can rate and review products.
- **Top products carousel**: Display top-rated or featured products.
- **Product pagination**: Paginate through a list of products.
- **Product search feature**: Search products by name or category.
- **User profile with orders**: View order history and manage profile.
- **Admin product management**: CRUD operations for products.
- **Admin user management**: CRUD operations for users (admin only).
- **Admin Order details page**: View details of orders.
- **Mark orders as delivered option**: Update order status.
- **Checkout process**: Select shipping options, payment methods.
- **PayPal / credit card integration**: Payment gateway integration.
- **Database seeder**: Populate database with initial data (products & users).
- **Env Variables**: Configuration through environment variables.

## Environment Variables

Create a `.env` file in the root and add the following:



### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = Enter your mongoDB URI 
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = PayPal ID
```

### Install Dependencies (frontend & backend)

```
In the root directory (Amazon-Platform)
npm install 
cd frontend
npm install
```

### Run

```
# Run frontend at port (:3000) & backend at port (:5000)
In the root directory (Amazon-Platform)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```
### Seed Database

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```


### Sample User Logins

```
admin@gmail.com (Admin)
123456

john@gmail.com (Customer)
123456


```
## Some Valid Product Key to test the right product listing

```
9334107860aacceh

2623456780aacdef

4634667890ibndef

7034567890zbcgui

1234283740abcrgf

2471527890abcsfr

7264783890qbswef

6781273990abddhf

6845478904abvfdf

1268855204athdef

1234567345abidef

964567890dfsssef

2584567672sxadef

```
