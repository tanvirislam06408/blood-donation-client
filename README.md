# BloodBridge - Blood Donation Management Platform

BloodBridge is a centralized platform designed to facilitate blood donation by connecting donors with those in need. The application focuses on efficiency, security, and a modern user experience to streamline the process of finding and managing blood donors.

---

## Live Site and Screenshots

- **Live Application**: [blood-donation-client-two.vercel.app](https://blood-donation-client-two.vercel.app/)
- **Interface Preview**: [![Interface Preview](https://i.ibb.co/Q3C65SCt/blood-donation-client-two-vercel-app.png)](https://blood-donation-client-two.vercel.app/)

---

## Features and Functionality

- **Donor Search and Discovery**: A comprehensive directory of donors with filtering capabilities based on blood group and location.
- **Real-time Blood Statistics**: Interactive data visualization using custom chart components to display blood group availability.
- **Secure User Authentication**: Complete authentication flow including registration, login, and profile management using Better Auth.
- **Donor Profiles**: Individual profiles where users can manage their donation status, contact information, and donation history.
- **Emergency Notifications**: Integrated alert systems for urgent blood requirements.
- **Responsive Layout**: A mobile-first design ensuring accessibility across all device types.

---

## Technology Stack

### Frontend Framework
- **Next.js 16**: Utilizing the App Router architecture for optimized routing and server-side rendering.
- **React 19**: Leveraging the latest React features, including enhanced hook support and the React Compiler for performance optimizations.

### UI and Styling
- **HeroUI**: Used for core UI components such as Avatars, Buttons, and Layout elements.
- **Tailwind CSS 4**: Implementing the latest utility-first CSS framework for rapid and maintainable styling.
- **Lucide & Gravity Icons**: Providing a consistent and modern iconography set.
- **React Spinners**: Handling loading states across the application.
- **SweetAlert2**: Managing interactive user notifications and confirmation dialogs.

### Backend and Authentication
- **Better Auth**: A comprehensive authentication solution managing sessions and user identity.
- **MongoDB**: The primary database for storing user data, donor information, and site content.
- **Mongo Adapter**: Utilizing `@better-auth/mongo-adapter` for seamless integration between the authentication layer and the database.

### Development Tools
- **Babel React Compiler Plugin**: Integrated for experimental build-time optimizations.
- **ESLint**: Maintaining code quality and consistency.

---

## Installation and Local Development

To set up the project locally, ensure you have Node.js installed and follow these steps:

### 1. Repository Setup
```bash
git clone https://github.com/tanvirislam06408/blood-donation-client.git
cd blood-donation-client
```

### 2. Dependency Management
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Running the Application
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

---

## Project Structure

- `src/app`: Contains the main application routes, layouts, and API endpoints.
- `src/components`: Houses reusable UI components, including shared elements like Navigation and Footer.
- `src/lib`: Logic for authentication, data fetching (`data.js`), and server actions (`action.js`).
- `src/assets`: Static assets like images and branding materials.

---

## License

This project is licensed under the MIT License.
