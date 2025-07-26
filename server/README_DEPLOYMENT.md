# Deployment Configuration for Render

## Environment Variables Required

Make sure to set these environment variables in your Render dashboard:

1. **NODE_ENV**: `production`
2. **MONGO_URI**: Your MongoDB connection string
3. **SECRET_KEY**: Your JWT secret key
4. **CLOUDINARY_CLOUD_NAME**: Your Cloudinary cloud name
5. **CLOUDINARY_API_KEY**: Your Cloudinary API key
6. **CLOUDINARY_API_SECRET**: Your Cloudinary API secret
7. **STRIPE_SECRET_KEY**: Your Stripe secret key

## Cookie Configuration

The application now properly handles cookies for production:
- `secure: true` (only for HTTPS)
- `sameSite: "none"` (allows cross-origin requests)
- `domain: ".onrender.com"` (for Render domain)

## Troubleshooting Authentication Issues

If users are being logged out on refresh:

1. Check that `NODE_ENV=production` is set in Render
2. Verify that cookies are being sent with requests
3. Check the server logs for authentication errors
4. Ensure CORS is properly configured for your Vercel domain 