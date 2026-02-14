# 🚀 CodeGrity Website - Complete Deployment Guide

## Table of Contents
1. [Project Setup](#project-setup)
2. [File Structure](#file-structure)
3. [Local Development](#local-development)
4. [Deployment Options](#deployment-options)
5. [Post-Deployment Checklist](#post-deployment-checklist)
6. [Maintenance & Updates](#maintenance--updates)

---

## PROJECT SETUP

### Step 1: Download All Files
Download the complete `codegrity-website` folder to your computer.

### Step 2: Install Visual Studio Code
1. Download VS Code from: https://code.visualstudio.com/
2. Install it on your computer
3. Open VS Code

### Step 3: Open Project in VS Code
1. In VS Code: File → Open Folder
2. Navigate to your `codegrity-website` folder
3. Click "Select Folder"

### Step 4: Install Recommended Extensions
Open VS Code Extensions (Ctrl/Cmd + Shift + X) and install:
- **Live Server** by Ritwick Dey (for local preview)
- **Prettier - Code formatter** (for code formatting)
- **HTML CSS Support** (for better autocomplete)

---

## FILE STRUCTURE

```
codegrity-website/
├── index.html                  # Homepage
├── about.html                  # About Us page
├── contact.html                # Contact page
├── services.html               # Services overview (you'll add content)
├── work.html                   # Portfolio page (you'll add projects)
├── css/
│   └── main.css                # Main stylesheet
├── js/
│   └── main.js                 # Main JavaScript
├── assets/
│   └── logos/
│       ├── codegrity-logo-horizontal.svg
│       ├── codegrity-icon-square.svg
│       ├── codegrity-logo-white.svg
│       └── codegrity-logo-dark.svg
├── images/                     # Your project images go here
│   ├── projects/
│   ├── team/
│   └── misc/
├── README.md                   # This file
└── DEPLOYMENT.md               # Deployment instructions
```

---

## LOCAL DEVELOPMENT

### Method 1: Using Live Server (Recommended)

1. **Open index.html** in VS Code
2. **Right-click** anywhere in the file
3. Click **"Open with Live Server"**
4. Your browser will open at `http://localhost:5500`

**Benefits:**
- Auto-refresh on save
- Works on mobile devices on same network
- Easy to test changes instantly

### Method 2: Direct File Open

1. Navigate to your project folder
2. Double-click `index.html`
3. Opens in your default browser

**Note:** Some features may not work without a server (like external CSS/JS)

---

## DEPLOYMENT OPTIONS

## 🔥 OPTION 1: Vercel (RECOMMENDED - Easiest & Free)

**Why Vercel:**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Custom domain support
- ✅ Automatic deployments from Git
- ✅ Zero configuration needed

### Step-by-Step Vercel Deployment:

#### A. Create GitHub Repository (5 minutes)

1. **Go to GitHub.com**
   - Create account if you don't have one
   - Click "New repository"

2. **Repository Settings:**
   - Name: `codegrity-website`
   - Description: "CodeGrity company website"
   - Public or Private (your choice)
   - Don't initialize with README
   - Click "Create repository"

3. **Upload Your Files:**
   
   **Option A - Using GitHub Desktop (Easier):**
   - Download GitHub Desktop: https://desktop.github.com/
   - Install and sign in
   - File → Add Local Repository
   - Choose your `codegrity-website` folder
   - Click "Publish repository"
   
   **Option B - Using Command Line:**
   ```bash
   # Open Terminal/Command Prompt in your project folder
   cd path/to/codegrity-website
   
   # Initialize git
   git init
   git add .
   git commit -m "Initial commit"
   
   # Add remote (replace YOUR-USERNAME)
   git remote add origin https://github.com/YOUR-USERNAME/codegrity-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

#### B. Deploy to Vercel (3 minutes)

1. **Go to Vercel.com**
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Import your `codegrity-website` repository
   - Click "Import"

3. **Configure:**
   - Framework Preset: **Other**
   - Root Directory: **./  (leave as is)**
   - Click "Deploy"

4. **Wait 30-60 seconds**
   - Vercel will build and deploy
   - You'll get a URL like: `codegrity-website.vercel.app`

#### C. Add Custom Domain (5 minutes)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter: `www.codegrity.com`
   - Click "Add"

2. **In Your Domain Registrar** (GoDaddy, Namecheap, etc.):
   - Go to DNS settings for codegrity.com
   - Add these records:

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

3. **Verify Domain:**
   - Back in Vercel, click "Verify"
   - Wait 5-10 minutes for DNS propagation
   - Your site will be live at www.codegrity.com

**🎉 DONE! Your site is now live!**

---

## OPTION 2: Netlify (Also Great & Free)

### Step-by-Step Netlify Deployment:

1. **Go to Netlify.com**
   - Click "Sign up"
   - Choose GitHub login

2. **Deploy Method A - Drag & Drop (Fastest):**
   - Go to https://app.netlify.com/drop
   - Drag your entire `codegrity-website` folder
   - Drop it on the page
   - Wait 30 seconds
   - Done! You get a URL like: `random-name-123.netlify.app`

3. **Deploy Method B - From GitHub (Better):**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select `codegrity-website` repository
   - Click "Deploy site"

4. **Custom Domain:**
   - Site settings → Domain management
   - Add custom domain: `www.codegrity.com`
   - Follow DNS instructions (similar to Vercel)

---

## OPTION 3: Traditional Web Hosting (cPanel/FTP)

### If you have traditional hosting (GoDaddy, Bluehost, etc.):

1. **Using File Manager:**
   - Log into cPanel
   - Open File Manager
   - Navigate to `public_html`
   - Upload all files from `codegrity-website` folder
   - Done!

2. **Using FTP:**
   - Download FileZilla: https://filezilla-project.org/
   - Get FTP credentials from your host
   - Connect to your server
   - Upload all files to `public_html`
   - Done!

---

## POST-DEPLOYMENT CHECKLIST

### ✅ Immediate Checks (Do these right after deployment)

- [ ] **Homepage loads** - Visit www.codegrity.com
- [ ] **All pages work** - Click every nav link
- [ ] **Images display** - Check all images load
- [ ] **Forms work** - Test contact form
- [ ] **Mobile responsive** - Check on phone
- [ ] **Logo displays** - Verify Code Lock logo shows
- [ ] **Cursor works** - Move mouse around
- [ ] **Links work** - Test all external links
- [ ] **SSL active** - URL shows HTTPS padlock

### ✅ SEO & Performance

1. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add property: `www.codegrity.com`
   - Verify ownership (use HTML tag method)
   - Submit sitemap: `www.codegrity.com/sitemap.xml` (you'll need to create this)

2. **Google Analytics:**
   - Go to https://analytics.google.com
   - Create property
   - Get tracking ID
   - Add to all pages in `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

3. **Performance Test:**
   - Go to https://pagespeed.web.dev/
   - Enter your URL
   - Aim for 90+ score
   - Fix any issues flagged

### ✅ Content Updates Needed

- [ ] **Update contact info** in `contact.html`
  - Change email to your actual email
  - Add your phone number
  - Update LinkedIn/GitHub links

- [ ] **Add team photos** in `about.html`
  - Replace emoji placeholders
  - Add actual team member names and bios

- [ ] **Update company stats** in `about.html`
  - Years in business
  - Projects completed
  - Actual client satisfaction %

- [ ] **Add real projects** to `work.html`
  - Upload project screenshots to `/images/projects/`
  - Update project descriptions
  - Add case studies

---

## MAINTENANCE & UPDATES

### Making Changes to Your Live Site

#### If Using Vercel/Netlify with GitHub:

1. **Make changes in VS Code**
2. **Save files**
3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated contact info"
   git push
   ```
4. **Vercel/Netlify auto-deploys** (30-60 seconds)
5. **Check live site** - Changes are live!

#### If Using Traditional Hosting:

1. **Make changes in VS Code**
2. **Save files**
3. **Upload via FTP/File Manager**
4. **Replace old files** with new ones
5. **Check live site**

### Regular Maintenance Tasks

**Weekly:**
- [ ] Check contact form submissions
- [ ] Monitor Google Analytics
- [ ] Respond to inquiries

**Monthly:**
- [ ] Update blog/news (if you add a blog)
- [ ] Check for broken links
- [ ] Review site performance
- [ ] Update portfolio with new projects

**Quarterly:**
- [ ] Review and update content
- [ ] Add new case studies
- [ ] Update team photos/bios
- [ ] Refresh stats and testimonials

**Annually:**
- [ ] Update copyright year in footer
- [ ] Review and refresh design if needed
- [ ] Major content audit
- [ ] Renew domain registration

---

## TROUBLESHOOTING

### Common Issues & Solutions

**Issue: CSS/JS not loading**
- Solution: Check file paths in HTML
- Verify files are uploaded to correct folders
- Clear browser cache (Ctrl/Cmd + Shift + R)

**Issue: Images not showing**
- Solution: Check image file names match HTML
- Ensure images are uploaded to `/images/` folder
- Check file extensions (.jpg, .png, etc.)

**Issue: Contact form not working**
- Solution: You need to add backend form handling
- Options:
  - Formspree: https://formspree.io/ (easiest)
  - Netlify Forms (if on Netlify)
  - Custom backend with PHP/Node.js

**Issue: Domain not connecting**
- Solution: Wait 24-48 hours for DNS propagation
- Double-check DNS records
- Try clearing DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

**Issue: Mobile menu not working**
- Solution: Add mobile menu JavaScript (currently not implemented)
- Or keep simplified nav for now

---

## NEXT STEPS AFTER DEPLOYMENT

### 1. Set Up Analytics (Week 1)
- Google Analytics
- Google Search Console
- Hotjar or Microsoft Clarity for heatmaps

### 2. Content Creation (Weeks 2-4)
- Write 3-5 blog posts
- Create detailed case studies
- Gather client testimonials
- Take professional photos

### 3. SEO Optimization (Month 2)
- Create sitemap.xml
- Optimize meta descriptions
- Add schema markup
- Build backlinks

### 4. Marketing (Ongoing)
- Share on LinkedIn
- Update business listings
- Email announcement to network
- Consider Google Ads

---

## SUPPORT & RESOURCES

### Learning Resources
- **HTML/CSS:** https://www.w3schools.com/
- **Git/GitHub:** https://try.github.io/
- **Vercel Docs:** https://vercel.com/docs
- **Web Dev:** https://developer.mozilla.org/

### Tools You'll Need
- **VS Code:** Code editor
- **GitHub Desktop:** Git management (optional)
- **FileZilla:** FTP client (if needed)
- **Figma:** Design mockups (optional)

### Getting Help
- **Vercel Support:** support@vercel.com
- **GitHub Community:** https://github.community/
- **Stack Overflow:** https://stackoverflow.com/

---

## 🎉 CONGRATULATIONS!

You now have a professional, live website for CodeGrity!

**What you've achieved:**
✅ Modern, premium website design
✅ Custom Code Lock logo
✅ Mobile-responsive layout
✅ Fast, optimized performance
✅ Professional online presence

**Your site is ready to:**
- Attract clients
- Showcase your work
- Generate leads
- Build your brand

---

*Last Updated: February 2026*
*CodeGrity - Engineering Excellence, Delivered with Integrity*
