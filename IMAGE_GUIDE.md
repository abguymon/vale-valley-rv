# Image Optimization Guide for Vale Valley RV Park

This guide explains how to add photos to your website while maintaining excellent performance and mobile/desktop compatibility.

## 🚀 Performance Best Practices

### 1. Image Formats

- **WebP**: Primary format for all images (best compression, wide support)
- **AVIF**: For modern browsers (even better compression)
- **JPEG**: Fallback for older browsers
- **PNG**: Only for images with transparency

### 2. Image Sizes

- **Hero images**: 1920x1080px (16:9 aspect ratio)
- **Gallery images**: 800x600px (4:3 aspect ratio)
- **Thumbnails**: 400x300px (4:3 aspect ratio)
- **Mobile optimized**: 768x576px (4:3 aspect ratio)

### 3. File Organization

```text
public/
├── images/
│   ├── hero/           # Hero section images
│   ├── gallery/        # Photo gallery images
│   ├── facilities/     # Facility photos
│   ├── activities/     # Activity photos
│   └── thumbnails/     # Thumbnail versions
```

## 📱 Mobile & Desktop Optimization

### Responsive Images

- Use `sizes` attribute for proper responsive loading
- Implement lazy loading for below-the-fold images
- Provide multiple image sizes for different screen densities

### Mobile Considerations

- Touch-friendly gallery interactions
- Swipe gestures for image navigation
- Optimized loading for slower mobile connections
- Proper viewport handling

## 🛠️ Implementation

### Adding Images to Components

#### 1. Using OptimizedImage Component

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<OptimizedImage
  src="/images/gallery/rv-site-1.webp"
  alt="Spacious RV site with full hookups"
  width={800}
  height={600}
  caption="Site #15 with 50-amp service"
  priority={false}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

#### 2. Using ImageGallery Component

```astro
---
import ImageGallery from '../components/ImageGallery.astro';

const galleryImages = [
  {
    src: '/images/gallery/site-1.webp',
    alt: 'RV site with mountain views',
    caption: 'Premium sites with scenic views'
  },
  // ... more images
];
---

<ImageGallery 
  images={galleryImages} 
  columns={3} 
  aspectRatio="landscape" 
/>
```

## 🎨 Image Optimization Workflow

### 1. Prepare Your Images

1. Take high-quality photos (minimum 2000px wide)
2. Crop to appropriate aspect ratios
3. Ensure good lighting and composition

### 2. Optimize for Web

1. Run the optimization script:

   ```bash
   node scripts/optimize-images.js public/images/raw public/images/optimized
   ```

2. Convert to WebP format
3. Generate multiple sizes
4. Compress with appropriate quality settings

### 3. Add to Website

1. Place optimized images in `/public/images/`
2. Update component props with new image paths
3. Add descriptive alt text and captions
4. Test on mobile and desktop

## 📊 Performance Monitoring

### Key Metrics to Track

- **Largest Contentful Paint (LCP)**: Should be < 2.5s
- **Cumulative Layout Shift (CLS)**: Should be < 0.1
- **First Input Delay (FID)**: Should be < 100ms

### Tools for Testing

- Google PageSpeed Insights
- WebPageTest.org
- Chrome DevTools Lighthouse
- GTmetrix

## 🎯 SEO Best Practices

### Alt Text Guidelines

- Be descriptive and specific
- Include relevant keywords naturally
- Describe what's happening in the image
- Keep under 125 characters

### Example Alt Text

- ❌ "RV park"
- ✅ "Spacious RV site #15 with 50-amp electrical hookup and mountain views at Vale Valley RV Park"

### Image Captions

- Add context and additional information
- Include location or site numbers when relevant
- Highlight special features or amenities

## 🔧 Advanced Features

### Lazy Loading

All images automatically include lazy loading for better performance.

### Intersection Observer

Images load only when they're about to enter the viewport.

### Smooth Loading Animation

Images fade in smoothly when loaded to improve perceived performance.

### Hover Effects

Gallery images include subtle hover effects for better user interaction.

## 📝 Checklist for New Images

- [ ] Image is in WebP format
- [ ] Appropriate size for intended use
- [ ] Descriptive alt text added
- [ ] Caption written (if applicable)
- [ ] Tested on mobile device
- [ ] Tested on desktop
- [ ] Performance impact assessed
- [ ] SEO optimized

## 🚨 Common Mistakes to Avoid

1. **Using original camera files** - Always optimize first
2. **Missing alt text** - Essential for accessibility
3. **Wrong aspect ratios** - Causes layout issues
4. **No lazy loading** - Slows initial page load
5. **Inconsistent sizing** - Breaks responsive design
6. **Poor quality images** - Hurts user experience
7. **Missing mobile optimization** - Poor mobile experience

## 📞 Need Help

If you need assistance with image optimization or have questions about implementing these features, refer to the component documentation or contact the development team.
