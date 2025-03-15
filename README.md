# ZippyLink Documentation

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Deployment Plan](#deployment-plan)
- [Database Considerations](#database-considerations)
- [Diagrams](#diagrams)
  - [Activity Diagram](#activity-diagram)
  - [Sequence Diagram](#sequence-diagram)
  - [Class Diagram](#class-diagram)
  - [Entity Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
  - [Component Diagram](#component-diagram)
  - [Deployment Diagram](#deployment-diagram)

---

## Introduction

ZippyLink is a modern, high-performance URL shortener built using a monorepo architecture with **Node.js (Express) for the backend** and **Astro + Svelte for the frontend**. It is designed to be scalable, fast, and cloud-native, leveraging AWS services for hosting, database, and storage solutions.

## Project Structure

```plaintext
zippylink/ (Monorepo Root)
│── apps/
│   ├── api/       # Node.js + Express Backend
│   ├── web/       # Astro + Svelte Frontend
│── packages/      # Shared libraries (utilities, database handlers, etc.)
│── nx.json        # Nx monorepo configuration
│── package.json   # Dependencies and scripts
│── README.md      # Documentation
```

## Tech Stack

- **Monorepo Tooling:** Nx
- **Backend:** Node.js + Express
- **Frontend:** Astro + Svelte
- **Database:** AWS DynamoDB or DocumentDB (to be determined)
- **Storage:** AWS S3 (for static assets)
- **CDN:** AWS CloudFront
- **Compute:** AWS Lambda or EC2 (decision pending based on Express support and monorepo build pipelines)

## Deployment Plan

1. **Frontend (Web)**
   - Built with Astro + Svelte.
   - Hosted on **AWS S3** with **CloudFront** for CDN distribution.
2. **Backend (API)**
   - Built with Node.js and Express.
   - Deployed on either **AWS Lambda** (if Express and monorepo builds are supported) or **EC2**.
3. **Database**
   - Either **DynamoDB** (serverless, highly available) or **DocumentDB** (MongoDB-compatible, flexible schema).
4. **Monorepo Management**
   - Nx handles dependency management, builds, and pipeline execution.

## Database Considerations

- **DynamoDB**: Good for serverless, high-speed, key-value data access.
- **DocumentDB**: Better for MongoDB-like structured data with query capabilities.
- **Decision Criteria**: Based on performance, cost, and compatibility with business logic.

## Diagrams

### Activity Diagram

_To be included_

### Sequence Diagram

_To be included_

### Class Diagram

_To be included_

### Entity Relationship Diagram (ERD)

_To be included_

### Component Diagram

_To be included_

### Deployment Diagram

_To be included_

---

## Notes

- **Code follows Clean Architecture principles**.
- **Modular design using packages for shared logic**.
- **AWS-native integration ensures scalability and performance**.

This documentation will be updated with diagrams and more details as the project progresses.
