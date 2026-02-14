# 🚀 CODEGRITY - 1 HOUR LAUNCH GUIDE

**WAIT FOR "MOVE TO NEXT" COMMAND BEFORE PROCEEDING TO EACH STEP!**

---

## ✅ STEP 1: DOWNLOAD & SETUP (5 minutes)

### What to Download:
Download the ENTIRE `codegrity-website-complete` folder.

### Your Folder Structure Should Look Like This:
```
codegrity-website-complete/
├── index.html              ← Homepage
├── about.html              ← About page
├── contact.html            ← Contact page
├── README.md               ← Project info
├── DEPLOYMENT.md           ← Full guide
├── css/
│   └── main.css           ← All styles
├── js/
│   └── main.js            ← All JavaScript
├── assets/
│   └── logos/
│       ├── codegrity-logo-horizontal.svg
│       ├── codegrity-icon-square.svg
│       ├── codegrity-logo-white.svg
│       └── codegrity-logo-dark.svg
└── images/
    ├── projects/          ← Put project screenshots here later
    ├── team/              ← Put team photos here later
    └── misc/              ← Other images
```

### What You Need to Install:
1. **VS Code** - https://code.visualstudio.com/download
2. **Live Server Extension** (we'll install this in VS Code)

### Action Items:
- [ ] Download the `codegrity-website-complete` folder
- [ ] Save it somewhere easy to find (like Desktop or Documents)
- [ ] Install VS Code if you don't have it

**TYPE "move to next" WHEN READY FOR STEP 2**

---

## ✅ STEP 2: OPEN IN VS CODE & TEST LOCALLY (5 minutes)

### Instructions:

1. **Open VS Code**

2. **Open Your Folder:**
   - Click: File → Open Folder
   - Navigate to `codegrity-website-complete`
   - Click "Select Folder"

3. **Install Live Server Extension:**
   - Click the Extensions icon (left sidebar, looks like 4 squares)
   - Search: "Live Server"
   - Find "Live Server" by Ritwick Dey
   - Click "Install"

4. **Launch Your Site:**
   - In VS Code, click on `index.html` in the file tree
   - Right-click anywhere in the file
   - Select "Open with Live Server"
   - Your browser opens with your site!

5. **Test Everything:**
   - Click all navigation links
   - Test the custom cursor (move your mouse around)
   - Scroll down to see the percentage indicator
   - Click "Start Project" button
   - Try the contact form

### What You Should See:
- ✅ Dark website with Code Lock logo
- ✅ Custom cursor following your mouse
- ✅ Scroll percentage in bottom left
- ✅ All pages work
- ✅ Everything looks professional

**If it works locally, TYPE "move to next" FOR STEP 3**

---

## ✅ STEP 3: CREATE GITHUB ACCOUNT & REPOSITORY (10 minutes)

### Part A: Create GitHub Account (if you don't have one)

1. Go to: https://github.com/signup
2. Enter your email
3. Create password
4. Choose username (can be your company name)
5. Verify account
6. Sign in

### Part B: Create New Repository

1. **Click the "+" icon** (top right) → "New repository"

2. **Repository Settings:**
   - Repository name: `codegrity-website`
   - Description: `CodeGrity company website`
   - Public ✅ (or Private if you prefer)
   - ❌ DO NOT check "Add a README file"
   - Click "Create repository"

3. **You'll see a page with commands - LEAVE IT OPEN**

### Part C: Upload Your Files

**EASIEST METHOD - GitHub Desktop (Recommended):**

1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in with your GitHub account
3. Click: File → Add Local Repository
4. Choose your `codegrity-website-complete` folder
5. Click "Publish repository"
6. Done! Your files are on GitHub

**ALTERNATIVE - Command Line:**

1. Open Terminal/Command Prompt
2. Navigate to your folder:
   ```bash
   cd path/to/codegrity-website-complete
   ```
3. Run these commands (one at a time):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - CodeGrity website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/codegrity-website.git
   git push -u origin main
   ```

**Verify:** Refresh your GitHub repository page - you should see all your files!

**TYPE "move to next" WHEN FILES ARE ON GITHUB**

---

## ✅ STEP 4: DEPLOY TO VERCEL (10 minutes)

### Part A: Sign Up for Vercel

1. Go to: https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Complete signup

### Part B: Import Your Project

1. Click "Add New..." → "Project"
2. Find `codegrity-website` in your repository list
3. Click "Import"

### Part C: Deploy

1. **Project Settings (don't change anything):**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

2. **Click "Deploy"**

3. **Wait 30-60 seconds** while Vercel deploys

4. **Success!** You'll see confetti 🎉
   - Your site is live!
   - URL will be something like: `codegrity-website.vercel.app`

5. **Click "Visit"** to see your live site!

### Test Your Live Site:
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Contact form displays
- [ ] Custom cursor works
- [ ] Everything looks good

**TYPE "move to next" WHEN SITE IS LIVE ON VERCEL**

---

## ✅ STEP 5: CONNECT YOUR CUSTOM DOMAIN (15 minutes)

### Prerequisites:
- You own www.codegrity.com
- You can access your domain registrar (GoDaddy, Namecheap, etc.)

### Part A: Add Domain in Vercel

1. In your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Enter: `www.codegrity.com`
4. Click "Add"
5. Vercel will show you DNS records to add

### Part B: Update DNS Records

**In Your Domain Registrar (GoDaddy, Namecheap, etc.):**

1. Log in to your domain registrar
2. Find DNS settings for codegrity.com
3. Add these records:

   **Record 1:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

   **Record 2:**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 76.76.21.21
   TTL: 3600
   ```

4. Save DNS changes

### Part C: Verify & Wait

1. Back in Vercel, click "Verify"
2. Wait 5-60 minutes for DNS to propagate
3. Vercel will automatically issue SSL certificate

### Test:
- Visit https://www.codegrity.com
- Should see your site with HTTPS!

**TYPE "move to next" WHEN DOMAIN IS WORKING**

---

## ✅ STEP 6: QUICK CUSTOMIZATIONS (10 minutes)

### Update Contact Information:

1. **In VS Code, open `contact.html`**

2. **Find and replace:**
   - Line ~84: Change `hello@codegrity.com` to YOUR email
   - Line ~91: Add YOUR phone number
   - Update LinkedIn/GitHub URLs (lines ~98, 105)

3. **Save the file**

4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated contact information"
   git push
   ```

5. **Vercel auto-deploys in 30 seconds!**

### Update About Page:

1. **Open `about.html`**

2. **Update team section** (around line ~200):
   - Replace "Your Name" with your actual name
   - Update titles and bios
   - Update company stats (years, projects, etc.)

3. **Save and push:**
   ```bash
   git add .
   git commit -m "Updated about page"
   git push
   ```

**TYPE "move to next" WHEN UPDATES ARE LIVE**

---

## ✅ STEP 7: FINAL CHECKS & LAUNCH! (10 minutes)

### Test Everything:

1. **Visit www.codegrity.com**

2. **Check all pages:**
   - [ ] Homepage loads fast
   - [ ] About page shows your info
   - [ ] Contact page has correct email
   - [ ] All navigation works
   - [ ] Forms work
   - [ ] Mobile version looks good (resize browser)

3. **Test on mobile:**
   - Open on your phone
   - Check everything works

### Add to Google:

1. **Google Search Console:**
   - Go to: https://search.google.com/search-console
   - Add property: www.codegrity.com
   - Verify ownership (HTML tag method)

2. **Google Analytics** (Optional - can do later):
   - Go to: https://analytics.google.com
   - Create account
   - Add tracking code to all pages

### Announce Your Launch:

- [ ] Share on LinkedIn
- [ ] Email your network
- [ ] Update email signature
- [ ] Update business cards

---

## 🎉 YOU'RE LIVE!

Your professional website is now live at **www.codegrity.com**!

### What You Accomplished:
✅ Professional website design  
✅ Custom Code Lock logo  
✅ Deployed to internet  
✅ Custom domain connected  
✅ HTTPS security enabled  
✅ Auto-deployment from GitHub  

### Next Steps (Later):
- Add project screenshots to `/images/projects/`
- Add team photos to `/images/team/`
- Write blog posts
- Gather client testimonials
- Set up email marketing

---

## 🆘 IF SOMETHING GOES WRONG

**Site not loading?**
- Wait 24 hours for DNS propagation
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check DNS records are correct

**Changes not showing?**
- Wait 30 seconds for Vercel to rebuild
- Clear cache
- Check you pushed to GitHub

**Need help?**
- Vercel Support: https://vercel.com/support
- GitHub Help: https://docs.github.com

---

**LET'S GO! START WITH STEP 1 AND TYPE "move to next" WHEN READY!**
