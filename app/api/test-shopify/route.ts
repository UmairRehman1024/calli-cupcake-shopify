// app/api/test-shopify/route.js

export async function GET() {
  const query = `
      {
        shop {
          name
        }
      }
    `;

  if (!process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error('Missing Shopify Access Token');
  }

  const res = await fetch(`${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-04/graphql.json`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
    }),
    body: JSON.stringify({ query })
    // cache: "no-store", // Uncomment if you want to disable caching
  });

  const data = await res.json();

  return Response.json(data);
}
