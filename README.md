# DevConnect

DevConnect is a full-stack developer-focused social platform where users can register, log in, create posts, like/unlike posts, and manage their own content. Built with a Node.js/Express backend and a clean HTML/CSS/JS frontend.

---

## 🔗 Live Links

- **Backend API**: [https://devconnect-api.onrender.com](https://devconnect-api.onrender.com)
- **Frontend (Static)**: [https://nuel999.github.io/devconnect-frontend/](https://nuel999.github.io/devconnect-frontend)
---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Joi Validation
- Render (for deployment)
- Postman (for testing)

### Frontend
- HTML, CSS, JavaScript (Vanilla)
- Hosted on [e.g. Netlify / Render / Vercel]

---

## 📦 Backend Features

- ✅ User Registration & Login (JWT)
- 📝 Create, Update, and Delete Posts (with ownership checks)
- 👍 Like / Unlike Posts
- 🌍 Get All Posts or Posts by Specific User
- 🔒 Protected Routes with Middleware
- 📏 Input Validation using Joi
- ⚠️ Centralized Error Handling
- ☁️ Live API on Render
- 🔐 Secure JWT middleware-based access

---

## 💡 Frontend Features

- 🌐 Public Post Feed
- 🧍 My Posts Page (only user’s created posts)
- 🧾 Create Post Page
- ✏️ Edit Post Page
- ❌ Delete Post (only by creator)
- 👍 Like / Unlike Buttons (real-time update)
- 🔐 Protected Pages (JWT required)
- 🚪 Logout Functionality
- 📸 Fully Screenshot Documented

---

## 🖼 Screenshots

### 🔐 Authentication
- **Register Page**  
  ![Register Page](./screenshots/Register-Page.png)

- **Login Page**  
  ![Login Page](./screenshots/Login-Page.png)

---

### 🏠 Home Page
- **Home Page with Like/Unlike Buttons**  
  ![Home Page](./screenshots/Home%20page-with%20posts-like-unlike%20buttons.png)

- **Get All Posts (API)**  
  ![Get Post](./screenshots/Get-all-post.png)

---

### 📝 Create & Edit
- **Create Post Page**  
  ![Create Post](./screenshots/Create-post-page.png)

- **Edit Post Page**  
  ![Edit Post](./screenshots/Edit-post-page.png)

---

### 🙋 My Posts
- **My Post Page (with Edit & Delete Buttons)**  
  ![My Post Page](./screenshots/My-Posts-page-with%20Edit%20&%20Delete.png)

---

### ❤️ Post Interactions
- **Like Post**  
  ![Like Post](./screenshots/Liked-Post.png)

- **Unlike Post**  
  ![Unlike Post](./screenshots/Unlike-Post.png)

---

### 🔐 API Responses
- **Register Success (API)**  
  ![Register Success](./screenshots/Register-User.png)

- **Login Success (API)**  
  ![Login Success](./screenshots/Login-User.png)

- **Protected Route Access**  
  ![Protected Route](./screenshots/Protected-Route.png)

---

## 📁 Project Structure (Brief)



---

## 📌 Notes

- All protected routes require a valid JWT token.
- Only authenticated users can create/edit/delete their own posts.
- Likes can be toggled (like/unlike) by any logged-in user.
- Ensure `.env` and deployment configurations are properly secured.

---

## 👨‍💻 Author

Built by Emmanuel Maurice 
Feel free to fork, clone, and contribute!

