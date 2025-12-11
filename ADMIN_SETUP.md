# Admin Setup Guide - Chalet Lièvre

## Overview
This admin interface allows you to manage images for your chalet website using Netlify CMS (Decap CMS).

## Setup Steps

### 1. Enable Netlify Identity in Netlify Dashboard

1. Go to your Netlify site dashboard: https://app.netlify.com
2. Navigate to **Site settings** → **Identity**
3. Click **Enable Identity**
4. Under **Registration preferences**, select **Invite only**
5. Click **Enable Git Gateway** (this allows the CMS to commit to your GitHub repo)

### 2. Invite Your Email

1. In Netlify dashboard, go to **Identity** → **Invite users**
2. Enter your email: `matthieubeaulac@gmail.com`
3. Click **Send invite**
4. Check your email and accept the invitation
5. Set a password for your account

### 3. Configure GitHub OAuth (for Git Gateway)

1. In Netlify dashboard, go to **Identity** → **Services** → **Git Gateway**
2. Click **Enable Git Gateway**
3. You may need to authorize Netlify to access your GitHub repository

### 4. Set Environment Variable (if needed)

If you're using GitHub OAuth:
1. Go to **Site settings** → **Environment variables**
2. Add `GITHUB_CLIENT_ID` if required by your setup

### 5. Access the Admin Panel

1. Visit: `https://chalet-lievre-verbier.com/admin/`
2. Click **Login with Netlify Identity**
3. Enter your email: `matthieubeaulac@gmail.com`
4. Enter your password
5. You'll now have access to manage:
   - **Gallery Images**: Add, edit, or remove gallery photos
   - **Hero Section**: Change the main hero background image
   - **About Section**: Update the about section image
   - **Bedroom Images**: Manage bedroom photos and details

## How to Use

### Adding Gallery Images

1. Go to **Gallery Images** in the admin panel
2. Click **New Gallery Image**
3. Upload an image
4. Add alt text for accessibility
5. Choose grid span (how the image appears in the gallery)
6. Set order (lower numbers appear first)
7. Click **Publish**

### Changing Hero Image

1. Go to **Hero Section** → **Hero Image**
2. Click on the current image
3. Upload a new image
4. Update alt text if needed
5. Click **Publish**

### Managing Bedrooms

1. Go to **Bedroom Images**
2. Click **New Bedroom** or edit an existing one
3. Upload bedroom image
4. Add room name, bed type, guest capacity
5. Add features (en-suite, mountain view, etc.)
6. Click **Publish**

## File Structure

```
content/
  ├── gallery/          # Gallery images (managed via CMS)
  ├── bedrooms/         # Bedroom data (managed via CMS)
  ├── hero.json         # Hero section image
  └── about.json        # About section image

images/
  └── uploads/         # All uploaded images are stored here
```

## Important Notes

- All images are stored in `images/uploads/`
- Changes are automatically committed to GitHub
- Netlify will rebuild your site after each change
- Make sure images are optimized (recommended: under 2MB each)

## Troubleshooting

**Can't login?**
- Make sure Netlify Identity is enabled
- Check that you've accepted the email invitation
- Verify Git Gateway is enabled

**Images not showing?**
- Check that images are uploaded to `images/uploads/`
- Verify the public folder path in `admin/config.yml`
- Make sure the image paths in content files are correct

**Changes not appearing?**
- Check Netlify build logs for errors
- Verify the build completed successfully
- Clear your browser cache


