# NaijaShop Deployment Guide - Namecheap + Vercel

## Step 1: Build Your Project
```bash
npm run build
```

## Step 2: Deploy to Vercel (Free & Easy)

### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option B: GitHub Integration
1. Push your code to GitHub
2. Connect GitHub to Vercel
3. Auto-deploy on every push

## Step 3: Connect Namecheap Domain

### After Vercel deployment:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your Namecheap domain
5. Vercel will provide DNS records

### Namecheap DNS Setup:
1. Login to Namecheap account
2. Go to Domain List → Manage → Advanced DNS
3. Add these records provided by Vercel:
   - A Record: @ → 76.76.19.61
   - CNAME Record: www → cname.vercel-dns.com

## Step 4: Environment Variables (Optional)
If you add real payment APIs later:
```bash
# In Vercel dashboard → Settings → Environment Variables
PAYSTACK_PUBLIC_KEY=your_key_here
FLUTTERWAVE_PUBLIC_KEY=your_key_here
```

## Step 5: Test Your Live Site
- Visit your domain
- Test all functionality
- Check mobile responsiveness
- Verify Nigerian currency display

## Quick Start Commands:
```bash
# Build and deploy now
npm run build
npx vercel --prod
```

Your site will be live at: `https://your-domain.com`
