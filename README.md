
---

```markdown
# 🚀 Bike Service Management API

A powerful and efficient backend API to manage bike servicing, customers, and service records. Built with TypeScript, Express, and Prisma ORM.

---

## 🌐 Live API Link
**🔗 [Bike Service API – Deployed on Vercel](https://bike-service-pied.vercel.app)**

---

## 📁 GitHub Repository
**🔗 [GitHub – Rahib38/bike-service](https://github.com/Rahib38/bike-service)**

---

## 🛠 Tech Stack

- **Backend Framework**: Node.js + Express
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Hosting**: Vercel
- **Package Manager**: npm

---

## 📦 Setup Guide

### 🧰 Prerequisites

- Node.js (v18 or later)
- npm
- PostgreSQL Database
- Prisma CLI (`npm install prisma --save-dev`)

### ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rahib38/bike-service.git
   cd bike-service
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file and configure your database URL:

   ```
   DATABASE_URL="postgresql://username:password@host:port/dbname"
   ```

4. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

5. **Apply migrations (if needed):**

   ```bash
   npx prisma migrate dev --name init
   ```

6. **Start the development server:**

   ```bash
   npm run dev
   ```

7. **For production build:**

   ```bash
   npm run build
   npm start
   ```

---

## ✨ Key Features

- ✅ Create, read, update & delete (CRUD) for **Customers** and **Bikes**
- ✅ Record and manage **bike servicing schedules**
- ✅ Fetch pending or overdue services older than 7 days
- ✅ Auto-update status based on completion date
- ✅ RESTful routes with proper error handling
- ✅ Transaction-safe database operations with Prisma

---

## 📬 What to Submit

- ✅ GitHub Repo Link: [https://github.com/Rahib38/bike-service](https://github.com/Rahib38/bike-service)
- ✅ Live Backend URL: [https://bike-service-pied.vercel.app](https://bike-service-pied.vercel.app)

---

> Developed with ❤️ by [@Rahib38](https://github.com/Rahib38)

```


