# YourBank | Digital Banking Platform

Welcome to YourBank, your premier digital banking platform. This React-based web application provides users with a modern and intuitive interface to manage their banking needs. With advanced features and a responsive design, YourBank delivers a seamless banking experience for all users.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Pages](#pages)
5. [Getting Started](#getting-started)
6. [API Integration](#api-integration)
7. [Local Storage Usage](#local-storage-usage)
8. [Contact](#contact)

---

## Overview

YourBank is a digital banking platform designed for users seeking an efficient and visually appealing solution for managing their finances. With a focus on accessibility and ease of use, YourBank is fully responsive, delivering a smooth user experience across all devices.

---

## Features

- **Login and sign-up functionality:**
  - Displays user’s name and a logout button after successful login.
  - Persistent data storage for user sessions.

- **Welcome Bonus Notification:**
  - One-time notification granting the user $50 upon successful account creation.

- **Currency Converter:**
  - Real-time conversion rates using an integrated API.

- **Local Storage Integration:**
  - Persistent storage of user session data.

- **Responsive Design:**
  - Optimized for desktops, tablets, and smartphones.

- **Dynamic User Interface:**
  - Aesthetic and interactive front-end components.

- **Password Reset Simulation:**
  - Fully functional password reset process using EmailJS API to send a reset link to the user’s email.
  - The reset link redirects to the password reset page on our platform, where the user can update their password successfully.
  - Updates are stored securely in local storage.

- **Job Application PDF Generation:**
  - On clicking "Apply Now" in the Job Openings section, a PDF job application is dynamically generated.

---

## Technologies Used

- **React (with Vite):** For fast and modular front-end development.
- **CSS:** For styling and responsiveness.
- **JavaScript:** For functionality and API integration.
- **Local Storage:** For storing user session data.
- **EmailJS API:** For email-based password reset functionality.
- **PDF Libraries:** For generating job application PDFs.

---

## Pages

1. **Home:**
   - Welcome page with a brief overview of services.

2. **Careers:**
   - Information about job opportunities and career paths.

3. **Security:**
   - Details about data protection and security measures.

4. **About:**
   - Learn more about YourBank’s mission and vision.

5. **Login:**
   - User authentication page for existing customers.

6. **Signup:**
   - Registration page for new users.

7. **Password Reset:**
   - Users can reset their password via the link sent to their email using EmailJS.

---

## Getting Started

### Prerequisites

- **Node.js** (version 16 or higher recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Elin23/YourBank.git
   cd YourBank
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## API Integration

YourBank uses external APIs to provide key functionalities:

- **Currency Converter:** Real-time exchange rates through [Exchangerate API](https://www.exchangerate-api.com).
- **Password Reset:** [EmailJS](https://dashboard.emailjs.com/) API for sending password reset links to users.

### Configuration

Ensure your `.env` file is set up with the following keys:

```env
VITE_API_KEY=your_currency_api_key_here
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id
```

For more details on obtaining these keys, refer to the respective API documentation.

---

## Local Storage Usage

YourBank leverages local storage for:

- Storing user session data.
- Simulating user information storage locally.
- Maintaining user preferences across sessions.
- Storing password reset confirmation.

### Example:

- Upon login, the user’s name and login status are saved in local storage.
- The logout button clears this data, ensuring session security.
- After resetting the password, the updated credentials are securely stored in local storage.

---

## Contact

For questions or support, please reach out at:

- **Email:** [elinshaia23@gmail.com](mailto:elinshaia23@gmail.com)

