# The Calligraphy Cupcake - Gluten & Dairy-Free Cupcake E-commerce Website

![Screenshot Placeholder](the-calligraphy-cupcake.PNG)

This repository contains the code for the [Your Store Name] e-commerce website, specializing in gluten and dairy-free cupcakes. It's built using Next.js 15 and integrates directly with the Shopify GraphQL API for product management and checkout.

The project leverages the Vercel/commerce template as a foundation, utilizing modern web technologies for a high-performance, server-rendered shopping experience.

## Key Features

- **Modern Tech Stack:** Built with Next.js 15 (App Router), React Server Components, Server Actions, and Suspense.
- **Shopify Integration:** Uses the Shopify GraphQL API for fetching products, managing cart, and handling checkout.
- **Custom Pickup Selector:** Features a custom-built component in the cart allowing customers to select their preferred pickup date and time.
- **Optimized Performance:** Leverages Next.js features for fast page loads and a smooth user experience.
- **SEO & Social Media Ready:** Implemented SEO best practices and Open Graph tags for better discoverability and sharing.
- **Custom UI Design:** Features a unique user interface designed specifically for the brand.
- **Responsive Design:** Adapts to various screen sizes for a seamless experience on desktop and mobile.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **E-commerce Backend:** Shopify (GraphQL API)
- **Language:** TypeScript
- **Styling:** Tailwind
- **Deployment:** Vercel (Recommended)

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- Node.js (Version specified in `.nvmrc` or latest LTS recommended)
- npm, yarn, or pnpm
- Git
- Access to a Shopify Store with API credentials (Storefront API access token)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/UmairRehman1024/calli-cupcake-shopify.git
    cd calli-cupcake-shopify
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    - Duplicate the `.env.example` file and rename it to `.env.local`.
    - Fill in the required Shopify API credentials and other environment variables as listed in the `.env.example` file.

    ```bash
    cp .env.example .env.local
    ```

    **`.env.local` Example:**

    ```env
    COMPANY_NAME="The Calligraphy Cupcake"
    SITE_NAME="The Calligraphy Cupcake"
    # Shopify
    SHOPIFY_STORE_DOMAIN=your-store-name.myshopify.com
    SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
    SHOPIFY_REVALIDATION_SECRET=your-revalidation-secret

    ```

### Configuration & Deployment Guide

- **Shopify Integration & Vercel Deployment:** For detailed instructions on configuring the Shopify Storefront API integration and deploying this project to Vercel, please follow this official guide:
  - [Vercel Shopify Integration Guide](https://vercel.com/docs/integrations/ecommerce/shopify)

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.
[Toronto Cupcakes dribble design](https://dribbble.com/shots/22086624-Toronto-Cupcakes-Redesign)
