# Contact Form Email Setup

The contact form is now configured to use Netlify Forms. To receive email notifications when someone submits the form, you need to configure email notifications in your Netlify dashboard.

## Steps to Configure Email Notifications:

1. **Go to your Netlify Dashboard**
   - Visit https://app.netlify.com
   - Select your site: `chalet-lievre-verbier`

2. **Navigate to Forms Settings**
   - Click on **Site settings** (gear icon) in the top navigation
   - Click on **Forms** in the left sidebar

3. **Set Up Form Notifications**
   - Find the form named **"contact"** in the list
   - Click on **"Add notification"** or **"Edit notifications"**
   - Select **"Email notification"**

4. **Configure Email Recipient**
   - **To:** Enter `matthieubeaulac@gmail.com`
   - **From:** You can customize this (e.g., `noreply@chalet-lievre-verbier.com` or leave as default)
   - **Subject:** Customize if desired (e.g., "New Inquiry from Chalet Lièvre Website")
   - **Email body:** You can customize the email template or use the default

5. **Save the Settings**
   - Click **"Save"** or **"Add notification"**

## Testing the Form

After the site rebuilds:
1. Visit your live site
2. Fill out the contact form
3. Click "Send Inquiry"
4. Check your email inbox at `matthieubeaulac@gmail.com`

## Form Fields

The form collects:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Preferred Dates** (required)
- **Number of Guests** (required)
- **Message** (optional)

All submissions will also be visible in your Netlify dashboard under **Forms** > **contact**.

