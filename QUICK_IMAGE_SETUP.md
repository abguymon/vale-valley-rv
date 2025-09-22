# Quick Image Setup Guide

## Do I need to use Squoosh first

**Short answer: No, but it can help!**

## 🚀 Easiest Approach: Just add your photos directly

1. **Place your photos** in `/public/images/gallery/`
2. **Update the image paths** in `index.astro`
3. **Let Astro handle the optimization** automatically

### Example

```astro
const galleryImages = [
  {
    src: '/images/gallery/your-photo-1.jpg',  // Just use your original photo
    alt: 'Beautiful RV site with mountain views',
    caption: 'Site #15 with 50-amp service'
  },
  // ... more photos
];
```

Astro will automatically:

- Convert to WebP format
- Generate multiple sizes
- Compress for web
- Add lazy loading

## 🎯 When to use Squoosh first

- Your photos are very large (>5MB each)
- You want to see compression quality before uploading
- You need to crop/resize before adding to the site
- You want to batch process many photos

## 📱 Recommended workflow

### Option A: Direct upload (easiest)

1. Add photos to `/public/images/gallery/`
2. Update `index.astro` with your photo paths
3. Done! Astro handles everything

### Option B: Pre-optimize with Squoosh

1. Go to [squoosh.app](https://squoosh.app)
2. Upload your photos
3. Choose WebP format
4. Set quality to 85-90%
5. Download optimized versions
6. Add to `/public/images/gallery/`
7. Update `index.astro`

## 🖼️ Image size recommendations

- **Hero images**: 1920x1080px
- **Gallery images**: 800x600px or 1200x900px
- **File size**: Keep under 2MB per image
- **Format**: JPG is fine, Astro will convert to WebP

## ⚡ Performance tips

- Start with images under 2MB each
- Use landscape orientation for gallery photos
- Take photos in good lighting
- Crop to remove unnecessary background

## 🔧 Quick test

1. Add one photo to `/public/images/gallery/test-photo.jpg`
2. Update the first image in `galleryImages` array
3. Run `npm run dev` to see it in action
4. Check the network tab to see Astro's optimization

The system is designed to work with your original photos - no pre-processing required!
