# TAM Registration Portal

*(tamvercel | vtam | riv-f)*

A full-stack web platform built for managing registrations for the AI & ML Club (TAM), VIT Vellore.
Designed for scalability, smooth user experience, and efficient data handling during high-traffic registration periods.

---

## Overview

This project serves as the official registration portal for TAM club activities, enabling students to register seamlessly while allowing organizers to manage and process data efficiently.

Built with a focus on:

* Fast performance (Vercel deployment)
* Clean and intuitive UI
* Reliable backend handling
* Structured data collection

---

## Tech Stack

**Frontend**

* HTML5
* CSS3
* JavaScript
* React.js

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Deployment**

* Vercel

---

## Features

* User Registration System
  Collects participant details (name, email, branch, etc.) with validation

* Unique ID Generation
  Automatically generates a unique registration/team ID

* Backend Integration
  Securely stores data in the database

* Fast and Responsive UI
  Optimized for both desktop and mobile

* Admin-Friendly Structure
  Clean schema for easy filtering and access

---

## Project Structure

```
tamvercel/
│── client/          # Frontend (React)
│── server/          # Backend (Node + Express)
│── models/          # Database schemas
│── routes/          # API routes
│── utils/           # Helper functions
│── public/          # Static assets
│── package.json
```

---

## Installation and Setup

### Clone the repository

```
git clone https://github.com/your-username/tamvercel.git
cd tamvercel
```

### Install dependencies

```
npm install
cd client && npm install
```

### Run the application

```
# backend
npm run server

# frontend
cd client
npm start
```

---

## Deployment

Deployed on Vercel for fast global delivery.

```
vercel
```

---

## Use Case

* Club registrations (TAM)
* Hackathon or event onboarding
* Team-based registration systems
* Scalable student data collection

---

## Contribution

```
# Fork the repository
git checkout -b feature-name
git commit -m "Added feature"
git push origin feature-name
```

---

## License

MIT License

---

## Author

Sahaj Gaur
Web Lead – TAM AI & ML Club
Full Stack Developer

---

## Note

This project was used in real-world TAM registrations, handling actual user traffic and ensuring reliable data collection.
