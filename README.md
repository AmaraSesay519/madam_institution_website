# Online Food Ordering System

A complete web-based food ordering system with responsive design, built using HTML5, CSS3, JavaScript, PHP, and MySQL.

## Project Overview

The **Online Food Ordering System** is a web-based application designed to allow users to browse food menus, register accounts, and simulate food ordering through an interactive web interface. The system demonstrates the core features of an online food ordering platform and provides different dashboards based on user roles.

The project was developed as part of a **Web Programming course project** and focuses on implementing frontend technologies such as **HTML, CSS, and JavaScript** ** For the backend it facuses on implementing php and MySql for the database integration**.

## Features

### Customer Features
- **User Authentication**: Secure login and signup
- **Restaurant Browsing**: Search and browse restaurants by cuisine, location
- **Menu Viewing**: Detailed menu items with descriptions and pricing
- **Shopping Cart**: Add/remove items, modify quantities
- **Order Placement**: Easy checkout with delivery address and payment options
- **Order Tracking**: View order history and status
- **User Profile**: Manage profile information and saved addresses

### Admin/Restaurant Features
- Restaurant management (to be implemented)
- Menu management (to be implemented)
- Order management (to be implemented)

## System Requirements

### Frontend
- HTML5 for page structure
- CSS3 for responsive design and styling
- Vanilla JavaScript for interactivity and AJAX requests

### Backend
- PHP 7.4+ with MySQLi support
- MySQL 5.7+ or MariaDB

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Project Structure

```
food-ordering-system/
├── pages/                          # HTML pages
│   ├── index.html                 # Home page
│   ├── login.html                 # User login
│   ├── signup.html                # User registration
│   ├── restaurants.html           # Restaurant listing
│   ├── menu.html                  # Restaurant menu
│   ├── cart.html                  # Shopping cart
│   ├── checkout.html              # Order checkout
│   ├── orders.html                # Order history
│   └── profile.html               # User profile
├── assets/
│   ├── css/
│   │   └── style.css              # Main stylesheet
│   ├── js/
│   │   ├── app.js                 # Main application logic
│   │   ├── auth.js                # Authentication handlers
│   │   ├── home.js                # Home page logic
│   │   ├── restaurants.js         # Restaurant page logic
│   │   ├── menu.js                # Menu page logic
│   │   ├── cart.js                # Shopping cart logic
│   │   ├── checkout.js            # Checkout logic
│   │   ├── orders.js              # Orders page logic
│   │   └── profile.js             # Profile page logic
│   └── images/                    # Image assets
├── backend/
│   ├── config.php                 # Database configuration
│   ├── handlers/
│   │   ├── auth.php               # Authentication API
│   │   ├── restaurants.php        # Restaurant API
│   │   ├── users.php              # User management API
│   │   ├── cart.php               # Shopping cart API
│   │   └── orders.php             # Orders API
│   └── api/                       # Additional API endpoints
└── database/
    └── schema.sql                 # Database schema
```

## Source Code Repository

The full source code for this project is available on GitHub:

**GitHub Repository:**
https://github.com/Yaqubkabazinamara/online-food-ordering-system



## Author

Name: *GROUP TWO MEMBERS*
Course: Web Programming
Project: Online Food Ordering System

## Installation & Setup

### 1. Database Setup

1. Open phpMyAdmin or MySQL command line
2. Create database:
   ```sql
   CREATE DATABASE food_ordering_system;
   ```
3. Import the schema:
   ```sql
   SOURCE database/schema.sql;
   ```

Or use phpMyAdmin to import `database/schema.sql`

### 2. Configure Database Connection

Edit `backend/config.php` and update database credentials:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'your_password');
define('DB_NAME', 'food_ordering_system');
```

### 3. File Permissions

Ensure these directories are writable:
```bash
chmod 755 assets/images/
```

### 4. Start Your Server

If using XAMPP:
- Place the project in `C:\xampp\htdocs\food-ordering-system`
- Start Apache and MySQL from XAMPP Control Panel
- Access via `http://localhost/food-ordering-system/pages/index.html`

## API Endpoints

### Authentication
- `POST /backend/handlers/auth.php?action=register` - User registration
- `POST /backend/handlers/auth.php?action=login` - User login
- `GET /backend/handlers/auth.php?action=logout` - User logout
- `GET /backend/handlers/auth.php?action=check_session` - Check session status

### Restaurants
- `GET /backend/handlers/restaurants.php?action=get_all` - Get all restaurants
- `GET /backend/handlers/restaurants.php?action=get_one&id={id}` - Get restaurant details
- `GET /backend/handlers/restaurants.php?action=search&query={query}` - Search restaurants

### Shopping Cart
- `GET /backend/handlers/cart.php?action=get` - Get cart items
- `POST /backend/handlers/cart.php?action=add` - Add to cart
- `POST /backend/handlers/cart.php?action=update` - Update cart item
- `POST /backend/handlers/cart.php?action=remove` - Remove from cart
- `POST /backend/handlers/cart.php?action=clear` - Clear cart

### Orders
- `POST /backend/handlers/orders.php?action=create` - Create order
- `GET /backend/handlers/orders.php?action=get_user_orders` - Get user orders
- `GET /backend/handlers/orders.php?action=get_order&order_id={id}` - Get order details
- `POST /backend/handlers/orders.php?action=update_status` - Update order status

### User Management
- `GET /backend/handlers/users.php?action=get_profile` - Get user profile
- `POST /backend/handlers/users.php?action=update_profile` - Update profile
- `POST /backend/handlers/users.php?action=change_password` - Change password
- `POST /backend/handlers/users.php?action=add_address` - Add delivery address
- `GET /backend/handlers/users.php?action=get_addresses` - Get delivery addresses
- `GET /backend/handlers/users.php?action=delete_address&address_id={id}` - Delete address

## Database Schema

### Tables
- `users` - Customer and restaurant accounts
- `restaurants` - Restaurant information
- `menu_categories` - Food categories
- `menu_items` - Individual menu items
- `cart` - Shopping cart items
- `orders` - Order information
- `order_items` - Items in each order
- `payments` - Payment details
- `reviews` - Order reviews and ratings
- `delivery_addresses` - Saved delivery addresses

## Security Features

- Password hashing with bcrypt
- SQL prepared statements to prevent injection
- Session-based authentication
- CSRF protection ready

## Form Validation

- Frontend validation using HTML5 and JavaScript
- Backend validation on all API endpoints
- Email format validation
- Password strength requirements

## Responsive Design

The system is fully responsive with breakpoints at:
- 768px (tablets)
- 480px (mobile phones)

## Usage

1. **Sign Up**: Create new customer account
2. **Browse Restaurants**: Search by name, cuisine, or location
3. **View Menu**: Click restaurant to see menu items
4. **Add to Cart**: Select items and add to shopping cart
5. **Checkout**: Enter delivery address and payment method
6. **Track Orders**: View order history and status

## Payment Methods

Currently supports (UI ready for integration):
- Credit/Debit Card (Stripe integration ready)
- PayPal
- Apple Pay / Google Pay
- Cash on Delivery

## Future Enhancements

- Payment gateway integration (Stripe, PayPal)
- Real-time order tracking with GPS
- Restaurant dashboard
- Admin panel
- Email notifications
- SMS notifications
- Coupon and discount codes
- Ratings and reviews
- Customer feedback
- Multi-language support

## Troubleshooting

### Database Connection Error
- Check MySQL is running
- Verify credentials in `config.php`
- Ensure database name is correct

### Session Not Working
- Check cookies are enabled
- Verify PHP session path is writable
- Check browser security settings

### AJAX Requests Not Working
- Check browser console for errors
- Verify API endpoint URLs
- Check CORS settings if accessing from different domain

## Support

For issues or questions, please contact the development team.

## License

This project is provided as-is for educational purposes.

## Changelog

### Version 1.0 (Initial Release)
- Complete frontend with all pages
- Full backend API for user management
- Restaurant browsing and menu viewing
- Shopping cart functionality
- Order placement and tracking
- User profile management
- Responsive design for all devices
