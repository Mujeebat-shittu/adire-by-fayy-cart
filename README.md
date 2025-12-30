# Adire by Fayy Cart

**Adire by Fayy Cart** is a React-based e-commerce application with user authentication, cart management, and a responsive UI. It uses Supabase for authentication and backend storage and includes a dark/light theme toggle, a responsive mobile menu, and interactive notifications.

---

## Features

### Authentication
- Sign in / Sign up with email and password using Supabase.
- Forgot password functionality with email recovery.
- Session persistence with automatic profile fetching.
- Sign-out functionality with confirmation and toast notifications.
- Dynamic display of login/sign-out buttons based on user session.
- Profile avatar and first name display when logged in.

### Cart Management
- Add items to cart with quantity tracking.
- Dynamic cart icon showing total items.
- Cart data persisted across sessions using React Context.

### UI/UX
- Responsive header and mobile navigation menu.
- Desktop navigation highlights the active page.
- Light/Dark theme toggle.
- Password visibility toggle in login/sign-up forms.
- Toast notifications for feedback (errors, success messages).

### Navigation
- Pages: Home, About, Product, Cart.
- Dynamic NavLink highlighting for the current page.
- Smooth mobile menu toggle with open/close icons.

### State Management
- Uses React Context API for authentication and cart state.
- `loading` states used for async operations (sign-in/sign-out).

### Product Filtering
- Filter products by category.
- Filter products by attributes (e.g., type, style, or tags).
- Filters update products instantly without page reload.

---

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, React Router DOM, Lucide-react icons  
- **Backend & Auth:** Supabase (Auth + Database)  
- **Notifications:** react-hot-toast  
- **State Management:** React Context API

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/adire-by-fayy-cart.git
cd adire-by-fayy-cart
```
2. Install dependencies
```bash
npm install
# or
yarn install

```

3. Configure Supabase
- Create a supabase project
- Create a users table with at least id, first_name.
- Copy your Supabase URL and anon key into src/config/supabaseClient.ts:
```bash
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-supabase-url.supabase.co'
const supabaseAnonKey = 'your-anon-key'

const supabase = createClient(supabaseUrl, supabaseAnonKey)
export default supabase
```

4. Run the development server
```bash
npm start
# or
yarn start

```
## Usage
- Sign Up / Sign In: Users can create an account or log in with existing credentials.
- Cart: Users can add products to the cart, view cart count, and navigate to the cart page.
- Profile: Logged-in users see their first name and avatar in the header.
- Sign Out: Click the log-out icon or button; a confirmation prompt prevents accidental sign-outs.
- Theme Toggle: Switch between dark and light modes from the header.
- Mobile Navigation: Click the menu icon to open/close the mobile menu.

## Folder Structure
src/
├─ assets/         # Images and icons
├─ components/     # Header, ThemeToggle, Forms
├─ context-and-reducer/
│  ├─ AuthContext.tsx
│  ├─ CartContext.tsx
│  └─ reducer.ts
├─ pages/          # Home, About, Product, Cart, SignIn, SignUp
├─ config/
│  └─ supabaseClient.ts
└─ App.tsx

## Future Improvements
- Add product search.
- Add checkout and payment integration.
- Improve mobile navigation animations.
- Add more detailed user profile management.
- Persistent cart across devices for logged-in users.

## License
This project is open-source and available under the MIT License

