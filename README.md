# GetPayIn Store App

A React Native mobile application featuring authentication, product management, and security features including auto-lock and biometric authentication.

## Overview

This is a minimal 4-screen store application built with React Native and TypeScript. It integrates with DummyJSON for product data and authentication, featuring modern mobile security practices including biometric unlock, auto-lock mechanisms, and persistent offline caching.

## Features

### Core Features
- **Authentication**: DummyJSON login with token storage and session restoration
- **Auto-Lock Security**: Automatic lock after 10 seconds when app goes to background
- **Biometric Unlock**: Face/fingerprint authentication with password fallback
- **Product Management**: Browse all products with category filtering
- **Superadmin Privileges**: Designated admin users can delete products
- **Offline Support**: Persistent query cache with MMKV for offline browsing
- **Connection Check**: light to diplay if there is a connection or not

### Screens
1. **Login Screen**: DummyJSON authentication
2. **All Products Screen**: Complete product list with delete functionality for superadmins
3. **Category Screen**: Filtered products by selected category
4. **User Screen**: To display user's data.


### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mohammad-Eldabaa/GetPayIn_task.git
   cd GetPayIn_task
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install pod dependencies (iOS only)**
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Run the app**
   
   **iOS:**
   ```bash
   npm run ios
   # or
   yarn ios
   ```

   **Android:**
   ```bash
   npm run android
   # or
   yarn android
   ```

## Configuration

### Superadmin User
The following user has superadmin privileges and can delete products:
- **Username**: `avat`
- **Password**: `avatpass`


### Default Test Credentials
You can use any valid DummyJSON user for testing:
- Username: `emilys` | Password: `emilyspass`
- Username: `michaelw` | Password: `michaelwpass`

Refer to [DummyJSON Docs](https://dummyjson.com/docs) for more test users.


### Technologies Used
- **React Native**: Mobile framework
- **TypeScript**: Type-safe development
- **React Navigation**: Screen navigation
- **React Query**: Server state management and caching
- **MMKV**: Fast persistent storage for offline support
- **Redux Toolkit**: Application state management
- **React Navigation** – Navigation system  
  - `@react-navigation/bottom-tabs` (v7.4.9)  
  - `@react-navigation/stack` (v7.4.9)  
- **Redux Persist** – Persistent Redux state  
- **Axios** – API calls and HTTP requests  
- **Formik** – Form management  
- **Yup** – Schema validation for forms  
- **JWT Decode** – JWT token decoding  
- **Expo Local Authentication** – Biometric authentication (Face ID / Fingerprint)  
- **NetInfo** – Network status detection  
- **React Native Toast Message** – Toast notifications  
- **React Native Safe Area Context** – Safe area handling  
- **React Native Keyboard Aware Scroll View** – Handling keyboard in scroll views  
- **@expo/vector-icons** – Icon set for React Native  


## Architecture

### Folder Structure
```
src/
├── home/             # All Products, Category, User
├── auth/             # Login
├── components/       # Reusable UI components
├── call/             # API calls and DummyJSON integration
├── store/            # Redux configuration
├── routing/          # stack and bottom tab navigation
├── sytles/           # All style sheet files
```



### Login
1. Launch the app and enter valid DummyJSON credentials
2. Token is automatically stored and validated on app restart
3. If a valid session exists, biometric unlock modal appears

### Viewing Products
1. After successful login, browse all products
2. Tap a product's category to view filtered items
3. Superadmins see delete buttons on each product

### Deleting Products
- Only superadmins can delete products (simulated delete; not persisted to DummyJSON)

### Auto-Lock & Unlock
- App automatically locks after 10 seconds when app goes to background
- Unlock via biometrics or fallback password

### Offline Mode
- All previously loaded products remain available
- Offline indicator displays at the top

## API Integration

### Endpoints Used
- `POST /auth/login` — User authentication
- `GET /auth/me` — Session validation
- `GET /products` — All products
- `GET /products/categories` — Available categories
- `GET /products/category/{category}` — Category-filtered products
- `DELETE /products/{id}` — Delete product (simulated)

**Base URL**: https://dummyjson.com


## Testing

### Manual Testing Checklist
- [ ] Login with valid credentials
- [ ] Session persists after app close/reopen
- [ ] Biometric unlock works (or falls back to password)
- [ ] App locks after 10s on background
- [ ] All products load and display
- [ ] Category filtering works correctly
- [ ] Superadmin delete button appears and works
- [ ] Offline indicator displays when disconnected
- [ ] Cached content visible in offline mode



## Author

Mohammad Eldabaa
