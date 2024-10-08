# Pets Tips & Stories (PETS) - Client

**Pets Tips & Stories (PETS)** is a social media platform dedicated to pet lovers, where users can share valuable pet care tips, heartwarming stories, and interact with other pet owners. The platform supports premium content features, social interactions, and payment integration. This README file covers the **client-side** of the project.

## Project Overview

"Pet Care Tips & Stories" provides practical advice on pet nutrition, exercise, grooming, and health, as well as inspiring stories about pet adoption, love, and loyalty. The platform offers both free and premium content for users, encouraging a sense of community among pet lovers while supporting exclusive, paid content for those who subscribe to premium features.

## Project Objectives

The key goals of the project include:

- Building a fully responsive web application.
- Enabling user authentication, profile management, and content creation.
- Supporting premium content features with integrated payment solutions (Aamarpay/Stripe).
- Implementing search and filter capabilities for easy content discovery.
- Facilitating social interactions through following, upvoting/downvoting, and commenting on posts.
- Allowing users to generate pet nutrition PDFs through a dashboard tool.

## Technologies Used

- **Frontend Framework**: [Next.js](https://nextjs.org) (React-based framework for server-side rendering)
- **State Management**: [TanStack Query](https://tanstack.com/query/v4) (Data fetching, caching, and syncing)
- **HTTP Client**: [Axios](https://axios-http.com) (For making API requests)
- **UI Library**: [NextUI](https://nextui.org) (Modern React UI components)
- **Language**: TypeScript (TSX for strongly typed React components)
- **Backend**: Node.js with Express.js, MongoDB, Mongoose

## Features

### User Features

- **User Authentication**:
  - Registration and login using JWT-based authentication.
  - Password recovery feature for users who forgot their passwords.
- **Profile Management**:
  - Update personal information such as username, profile picture, and bio.
  - View and manage personal posts, followers, and followed users.
- **Content Creation**:

  - Users can create posts for pet tips and stories, categorized into "Tips" or "Stories."
  - Rich text editor for writing and formatting posts.
  - Attach images to make posts more engaging.
  - Ability to delete or edit personal posts.

- **Upvote & Downvote**:

  - Users can upvote or downvote posts.
  - Sorting options to display most-upvoted content.

- **Commenting**:

  - Users can comment on posts and edit or delete their own comments.

- **Premium Content**:
  - Premium users can create exclusive content that only premium members can access.
  - Payment integration (Aamarpay/Stripe) for unlocking premium features and content.
- **News Feed**:

  - Dynamic, real-time news feed showcasing pet care tips and stories.
  - Infinite scroll to load more content as users scroll.
  - Advanced search and filtering options to sort by upvote count and categories.
  - Premium content marked with a badge and accessible after payment.

- **Following System**:

  - Users can follow/unfollow other authors and view their content in a personalized feed.

- **Nutrition PDF Generation**:
  - A tool in the user dashboard to generate nutrition PDFs based on pet age, weight, and health.

### Admin Features

- **Admin Dashboard**:
  - Manage users, posts, and payments.
  - Admins can update user roles, publish/unpublish posts, and monitor content quality.

## Pages

### User-Facing Pages

1. **Login/Registration**:
   - User authentication with forms for login and registration.
2. **User Dashboard**:
   - Personalized dashboard for users showing their posts, followers, and followed users.
3. **News Feed**:
   - A constantly updating feed showcasing tips, stories, and premium content.
4. **Profile Page**:

   - Users can view and edit their profile, as well as see their posts and interactions.

5. **About Us Page**:

   - Information about the project and its mission to support pet owners.

6. **Contact Us Page**:

   - A form to submit user inquiries and support requests.

7. **Premium Content Page**:
   - Displays premium posts with special badges and payment options to unlock.

### Admin-Facing Pages

1. **Admin Dashboard**:
   - Manage users, roles, and content publication.
   - View payment history and control access to premium content.

## UI Design

- **Responsive Design**:
  - The platform is fully responsive, ensuring a seamless experience on mobile, tablet, and desktop.
- **Consistent Theme**:
  - A cohesive color scheme and smooth animations to enhance user experience.
- **Micro Animations**:
  - Hover effects, smooth transitions, and loading animations to create an engaging user interface.

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Ensure MongoDB is set up and running)

### Steps to Run Locally

1. **Clone the Repository client-side**:

   ```bash
   git clone https://github.com/AbuBokorprog/pet-tips-stories-client
   cd pets-tips-stories-client
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to view the application.

   1. **Clone the Repository server-side**:

   ```bash
   git clone https://github.com/AbuBokorprog/pet-tips-stories-server
   cd pets-tips-stories-client
   ```

4. **Install Dependencies**:

   ```bash
   yarn install
   ```

5. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:5000` to view the application.

## API Integration

- The client communicates with the backend via RESTful APIs built with Express.js and MongoDB. All requests (such as for authentication, post creation, etc.) are handled using Axios.
- **State Management**: TanStack Query is used to fetch, cache, and sync data between the client and server, ensuring smooth interactions for the user without reloading pages.

## Future Enhancements

- **Real-Time Notifications**: Implement WebSockets to notify users of new followers, comments, and upvotes in real time.
- **Push Notifications**: Mobile push notifications for premium content and updates.
- **Social Sharing**: Allow users to share tips and stories on external social media platforms.
- **Improved Search**: Add filters for post types (tips vs stories), pet categories, and more.

## Authorization

- Admin
  Email: superadmin@gmail.com
  password: superadmin1234@

- User 1
  Email: saidul@gmail.com
  Password: 123456

- User 2
  Email: abubokor@gmail.com
  Password: 123456
