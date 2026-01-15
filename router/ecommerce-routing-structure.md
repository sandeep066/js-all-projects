# E-Commerce Route Path Diagram + Folder Structure (React Router v6)

<details>
  <summary><strong>1. E-commerce route path diagram (public + app + admin + 403 + 404)</strong></summary>

Public (no login)
- /
- /search
- /product/:slug
- /category/:categorySlug
- /cart
- /checkout            (can be guarded: requires login)
- /login
- /register
- /forgot-password
- /order/track         (optional: public tracking)
- /403
- /404 (global)
- *(global 404 catch-all)

App (logged-in)
- /app
- /app/account
- /app/account/profile
- /app/account/addresses
- /app/account/payments
- /app/account/security
- /app/orders
- /app/orders/:orderId
- /app/wishlist
- /app/notifications
- /app/support/tickets
- /app/support/tickets/:ticketId
- /app/*               (nested 404 inside app)

Admin (role-based)
- /admin
- /admin/dashboard
- /admin/products
- /admin/products/new
- /admin/products/:productId/edit
- /admin/orders
- /admin/orders/:orderId
- /admin/users
- /admin/users/:userId
- /admin/coupons
- /admin/settings
- /admin/*             (nested 404 inside admin)

Security rules (interview-ready)
- Not logged in → redirect to /login (replace)
- Logged in but not allowed → show /403
- Unknown route → 404 (global or nested)

</details>

<details>
  <summary><strong>2. Folder structure (feature-based, scalable – final corrected)</strong></summary>

```text
Root
└── src/
    ├── app/
    │   ├── providers/
    │   │   ├── AuthProvider.tsx
    │   │   └── PermissionsProvider.tsx
    │   │
    │   ├── routes/
    │   │   ├── index.tsx              (router configuration)
    │   │   ├── routePaths.ts          (centralized route constants)
    │   │   ├── guards/
    │   │   │   ├── RequireAuth.tsx
    │   │   │   ├── RequireRole.tsx
    │   │   │   └── RequirePermission.tsx
    │   │   ├── layouts/
    │   │   │   ├── PublicLayout.tsx
    │   │   │   ├── AppLayout.tsx
    │   │   │   └── AdminLayout.tsx
    │   │
    │   └── pages/
    │       ├── Forbidden403.tsx
    │       └── NotFound404.tsx
    │
    └── features/
        ├── public/
        │   └── pages/
        │       ├── Home.tsx
        │       ├── Search.tsx
        │       ├── ProductDetails.tsx
        │       ├── Category.tsx
        │       ├── Cart.tsx
        │       ├── Checkout.tsx
        │       ├── Login.tsx
        │       ├── Register.tsx
        │       ├── ForgotPassword.tsx
        │       └── TrackOrder.tsx
        │
        ├── account/
        │   └── pages/
        │       ├── Profile.tsx
        │       ├── Addresses.tsx
        │       ├── Payments.tsx
        │       └── Security.tsx
        │
        ├── orders/
        │   └── pages/
        │       ├── OrdersList.tsx
        │       └── OrderDetails.tsx
        │
        ├── support/
        │   └── pages/
        │       ├── Tickets.tsx
        │       └── TicketDetails.tsx
        │
        └── admin/
            └── pages/
                ├── AdminHome.tsx
                ├── Dashboard.tsx
                ├── Products.tsx
                ├── ProductCreate.tsx
                ├── ProductEdit.tsx
                ├── Orders.tsx
                ├── OrderDetails.tsx
                ├── Users.tsx
                ├── UserDetails.tsx
                ├── Coupons.tsx
                └── Settings.tsx
Notes:

src/ is the root

app/ = routing infrastructure (providers, guards, layouts)

features/ = business features (pages)
```
</details>


<details>
  <summary><strong>3. Route file layout (how teams usually structure it)</strong></summary>

- One router config file that wires:
  - PublicLayout routes
  - AppLayout routes (RequireAuth)
  - AdminLayout routes (RequireRole/Permission)
  - Global 404 catch-all

Recommended grouping
- Public routes grouped under PublicLayout
- Private routes grouped under AppLayout + RequireAuth
- Admin routes grouped under AdminLayout + RequireRole
- Add nested 404 for /app/* and /admin/*

</details>

<details>
  <summary><strong>4. How to design guards (auth vs role vs permission)</strong></summary>

Guard responsibilities
- RequireAuth
  - If no session → redirect to /login (replace)
- RequireRole / RequirePermission
  - If logged in but forbidden → show 403

Rule (interview line)
- Authentication decides login
- Authorization decides access
- UI hiding is separate from route security

</details>

<details>
  <summary><strong>5. Where to put 404s (global + nested)</strong></summary>

Global 404
- Handles unknown public routes

Nested 404 (app)
- Handles unknown routes inside /app
- Better UX than sending logged-in users to public 404

Nested 404 (admin)
- Handles unknown routes inside /admin
- Keeps admin look & feel consistent

</details>

<details>
  <summary><strong>6. How to map sidebar menus to routes safely</strong></summary>

Menu rules
- Menu can hide unauthorized items (UX)
- Route must still be protected (security)
- Menu config should store:
  - label
  - path
  - requiredRole/permissions (optional)
- Build menu by filtering allowed items

Interview trap
- “We hide the admin menu so it’s safe” is wrong.
- Routes must be guarded.

</details>

<details>
  <summary><strong>7. Common production issue checklist (e-commerce ready)</strong></summary>

- Refresh 404 on /product/:slug → server rewrite missing
- Redirect loops between /login and /app → guard order wrong
- Flicker on protected pages → guard not waiting for auth loading
- 403 shown as 404 → wrong error semantics
- Sharing checkout URL fails → route state used incorrectly (should use params/query/backend)

</details>

<details>
  <summary><strong>8. Quick “route decision rules” (memorize)</strong></summary>

- WHO is it? → URL params
- HOW to display? → query params
- TEMP transfer (form submit) → route state
- App UI state → context/redux
- Persistence (non-sensitive) → localStorage
- Security/real data → backend fetch + server authorization

</details>
