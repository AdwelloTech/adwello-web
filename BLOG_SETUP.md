# Sanity CMS Blog Integration Setup Guide

## Overview

This guide explains how to set up and use the Sanity CMS blog management system for the Adwello website. The system allows you to:

- Create, edit, and delete blog posts through Sanity Studio
- Feature up to 4 blog posts on the homepage
- Display all blog posts on the dedicated blog page
- Automatically validate the maximum 4 featured posts limit

## Features

### ✅ Implemented Features

1. **Blog Post Schema**: Enhanced with required fields and validation
2. **Featured Posts System**: Boolean field to mark posts for homepage display
3. **Maximum 4 Posts Validation**: Prevents more than 4 posts from being featured
4. **Dynamic Content**: Homepage and blog pages fetch data from Sanity
5. **Static Generation**: Blog posts are pre-generated for better performance
6. **Rich Text Support**: Portable Text for blog content with custom styling
7. **Image Support**: Featured images with alt text
8. **Date Formatting**: Automatic date formatting for display
9. **Read Time Calculation**: Automatic read time based on content length

### 🔧 Technical Implementation

- **Sanity Schema**: Enhanced `postType` with validation
- **API Queries**: Optimized GROQ queries for different use cases
- **TypeScript Support**: Full type safety with interfaces
- **Next.js Integration**: Server components with static generation
- **Responsive Design**: Maintains existing design system

## Setup Instructions

### 1. Prerequisites

Ensure you have the following packages installed:

```bash
npm install @portabletext/react
```

### 2. Sanity Studio Setup

1. **Start Sanity Studio**:

   ```bash
   npm run dev
   ```

   Then navigate to `http://localhost:3000/studio`

2. **Create Your First Blog Post**:
   - Click "Create new" → "Post"
   - Fill in the required fields:
     - **Title**: Your blog post title
     - **Slug**: Auto-generated from title (or customize)
     - **Excerpt**: Brief description (max 200 characters)
     - **Author**: Select from existing authors
     - **Main Image**: Upload and add alt text
     - **Categories**: Select relevant categories
     - **Published At**: Set publication date
     - **Show on Homepage**: Toggle to feature on homepage
     - **Body**: Write your blog content using the rich text editor

### 3. Featured Posts Management

#### Understanding the 4-Post Limit

- Only posts with "Show on Homepage" enabled appear on the homepage
- Maximum of 4 posts can be featured at any time
- The system will show a validation error if you try to feature a 5th post
- You must unfeature another post before featuring a new one

#### Managing Featured Posts

1. **To Feature a Post**:

   - Edit the post in Sanity Studio
   - Toggle "Show on Homepage" to ON
   - If you get a validation error, unfeature another post first

2. **To Unfeature a Post**:

   - Edit the post in Sanity Studio
   - Toggle "Show on Homepage" to OFF
   - Save the changes

3. **View Current Featured Posts**:
   - In Sanity Studio, filter posts by "Show on Homepage" = true
   - You'll see all currently featured posts

### 4. Content Guidelines

#### Blog Post Structure

1. **Title**: Clear, descriptive, SEO-friendly
2. **Excerpt**: Compelling summary (max 200 characters)
3. **Main Image**: High-quality, relevant image with descriptive alt text
4. **Body Content**: Use the rich text editor with:
   - Headings (H2, H3) for structure
   - Bullet points for lists
   - Bold text for emphasis
   - Links where appropriate

#### Image Requirements

- **Format**: JPG, PNG, WebP
- **Size**: Recommended 1200x630px for featured images
- **Alt Text**: Descriptive text for accessibility
- **Quality**: High resolution, professional appearance

### 5. Publishing Workflow

1. **Draft Creation**: Create post with all content
2. **Review**: Check preview in Sanity Studio
3. **Featured Decision**: Decide if post should appear on homepage
4. **Publish**: Set publication date and publish
5. **Verify**: Check live site to ensure proper display

## File Structure

```
sanity/
├── schemaTypes/
│   └── postType.ts          # Enhanced blog post schema
├── lib/
│   ├── client.ts            # Sanity client configuration
│   ├── queries.ts           # GROQ queries for blog data
│   ├── blog.ts              # Blog utility functions
│   └── validation.ts        # Featured posts validation
app/
├── components/
│   └── blog.tsx             # Homepage blog component
├── blog/
│   ├── page.tsx             # Blog listing page
│   └── [slug]/
│       └── page.tsx         # Individual blog post page
```

## API Endpoints

The system uses the following Sanity queries:

- `allPostsQuery`: Get all blog posts
- `featuredPostsQuery`: Get featured posts for homepage (max 4)
- `postBySlugQuery`: Get single post by slug
- `allPostSlugsQuery`: Get all slugs for static generation

## Troubleshooting

### Common Issues

1. **Validation Error: "Maximum 4 posts can be featured"**

   - Solution: Unfeature another post before featuring this one
   - Check current featured posts in Sanity Studio

2. **Images Not Displaying**

   - Ensure images are uploaded to Sanity
   - Check that alt text is provided
   - Verify image URLs are accessible

3. **Content Not Rendering**

   - Check that Portable Text content is properly formatted
   - Ensure all required fields are filled
   - Verify Sanity client configuration

4. **Performance Issues**
   - Blog posts use static generation for better performance
   - Featured posts are cached and updated on build
   - Consider implementing ISR for dynamic updates

### Debug Mode

To debug Sanity queries, you can use the Sanity Vision tool:

1. Navigate to `http://localhost:3000/studio/vision`
2. Test your GROQ queries
3. Check data structure and relationships

## Best Practices

1. **Content Management**:

   - Keep excerpts concise and compelling
   - Use descriptive titles and alt text
   - Maintain consistent publishing schedule

2. **Featured Posts**:

   - Rotate featured posts regularly
   - Feature your best/most recent content
   - Consider seasonal or promotional content

3. **SEO Optimization**:

   - Use descriptive slugs
   - Include relevant keywords in titles and excerpts
   - Optimize images with proper alt text

4. **Performance**:
   - Keep image sizes reasonable
   - Use appropriate image formats
   - Monitor build times with static generation

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify Sanity Studio configuration
3. Review console errors in browser
4. Check Sanity project settings and API keys

## Future Enhancements

Potential improvements for the blog system:

- [ ] Blog post categories and filtering
- [ ] Search functionality
- [ ] Related posts suggestions
- [ ] Social media sharing
- [ ] Comment system
- [ ] Newsletter integration
- [ ] Analytics tracking
- [ ] SEO meta tags management
