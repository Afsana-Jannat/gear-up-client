# API Integration

## Project

GearUp - Sports & Outdoor Gear Rental Platform (Frontend)

**Frontend:** Next.js 16 + TypeScript + Tailwind CSS

**Backend API:**
https://gear-up-vlxn.onrender.com

---

# Authentication

| Frontend Feature | Method | Backend Endpoint        |
| ---------------- | ------ | ----------------------- |
| Register         | POST   | /api/auth/register      |
| Login            | POST   | /api/auth/login         |
| Refresh Token    | POST   | /api/auth/refresh-token |
| Get Profile      | GET    | /api/users/me           |

---

# Home Page

| Frontend Component | Method | Backend Endpoint |
| ------------------ | ------ | ---------------- |
| Featured Gear      | GET    | /api/gears       |
| Categories         | GET    | /api/categories  |
| Customer Reviews   | GET    | /api/reviews     |

---

# Gear

| Frontend Feature | Method | Backend Endpoint |
| ---------------- | ------ | ---------------- |
| All Gear         | GET    | /api/gears       |
| Single Gear      | GET    | /api/gears/:id   |

---

# Rental

| Frontend Feature         | Method | Backend Endpoint          |
| ------------------------ | ------ | ------------------------- |
| Create Rental            | POST   | /api/rentals              |
| My Rentals               | GET    | /api/rentals/my-orders    |
| Provider Rental Requests | GET    | /api/provider/rentals     |
| Update Rental Status     | PATCH  | /api/provider/rentals/:id |

---

# Payment

| Frontend Feature       | Method | Backend Endpoint     |
| ---------------------- | ------ | -------------------- |
| Create Stripe Checkout | POST   | /api/payments/create |
| Payment History        | GET    | /api/payments        |
| Payment Success        | GET    | /payment/success     |
| Payment Cancel         | GET    | /payment/cancel      |

---

# Reviews

| Frontend Feature   | Method | Backend Endpoint |
| ------------------ | ------ | ---------------- |
| Get Public Reviews | GET    | /api/reviews     |
| Create Review      | POST   | /api/reviews     |

---

# Customer Dashboard

| Frontend Page      | Backend Endpoint           |
| ------------------ | -------------------------- |
| Dashboard Overview | GET /api/rentals/my-orders |
| Rental History     | GET /api/rentals/my-orders |
| Payment History    | GET /api/payments          |
| Leave Review       | POST /api/reviews          |

---

# Provider Dashboard

| Frontend Page        | Backend Endpoint                |
| -------------------- | ------------------------------- |
| Dashboard Overview   | GET /api/provider/gears         |
| My Gear              | GET /api/provider/gears         |
| Add Gear             | POST /api/provider/gears        |
| Update Gear          | PATCH /api/provider/gears/:id   |
| Delete Gear          | DELETE /api/provider/gears/:id  |
| Rental Requests      | GET /api/provider/rentals       |
| Update Rental Status | PATCH /api/provider/rentals/:id |

---

# Admin Dashboard

| Frontend Page      | Backend Endpoint           |
| ------------------ | -------------------------- |
| Dashboard          | GET /api/admin/dashboard   |
| Users              | GET /api/admin/users       |
| Update User Status | PATCH /api/admin/users/:id |
| Categories         | GET /api/categories        |
| Create Category    | POST /api/categories       |
| Update Category    | PATCH /api/categories/:id  |
| Delete Category    | DELETE /api/categories/:id |
| All Gear           | GET /api/gears             |
| All Rentals        | GET /api/rentals           |

---

# Middleware Protection

The application uses Next.js Middleware with JWT authentication.

Protected routes include:

- /customer-dashboard/\*
- /provider-dashboard/\*
- /admin-dashboard/\*

Role-based access is enforced for:

- CUSTOMER
- PROVIDER
- ADMIN

---

# Data Fetching

The application uses:

- Server Components
- Fetch API
- React Server Actions
- Cache Revalidation
- Dynamic Rendering where required

---

# Error Handling

Implemented UI error handling includes:

- Toast notifications
- Form validation messages
- Loading states
- Empty states
- 404 page
- Error boundaries
- Payment success/cancel feedback

---

# Payment Gateway

Stripe Checkout integration is implemented.

Flow:

Customer Rental
→ Create Checkout Session
→ Stripe Checkout
→ Payment Success / Cancel
→ Dashboard updated

---

# Notes

- All frontend data is consumed from the backend REST API.
- Authentication uses JWT stored in HttpOnly cookies.
- Route protection is implemented using Next.js Middleware.
- Role-based UI rendering is supported throughout the application.
