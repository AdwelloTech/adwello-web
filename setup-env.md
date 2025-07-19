# Quick Environment Setup

## Create .env.local file

Create a file named `.env.local` in your project root with these contents:

```
NEXT_PUBLIC_SANITY_PROJECT_ID="7cteymqs"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2025-07-19"
```

## What's Fixed

✅ **Schema Updated**: Added "Show on Homepage" boolean field with validation
✅ **Images Fixed**: Added proper image handling and fallbacks
✅ **Next.js Config**: Added Sanity image domain support
✅ **Validation**: Maximum 4 featured posts enforced

## Next Steps

1. Create the `.env.local` file with the content above
2. Restart your development server
3. Go to `http://localhost:3001/studio`
4. Create a new blog post
5. You should now see the "Show on Homepage" field
6. Toggle it to feature posts on the homepage

The blog section should now display properly with images and the Sanity integration should work correctly!
