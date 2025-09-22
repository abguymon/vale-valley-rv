# Performance Testing Guide

## Before Optimization (Current State)

### Test Your Current Performance:

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Open Chrome DevTools:**
   - Press `F12` or right-click → Inspect
   - Go to "Lighthouse" tab
   - Select "Performance" and "Mobile"
   - Click "Generate report"

3. **Record these metrics:**
   - Performance Score: ___/100
   - LCP (Largest Contentful Paint): ___s
   - FID (First Input Delay): ___ms
   - CLS (Cumulative Layout Shift): ___
   - Total Blocking Time: ___ms

4. **Take screenshots** of the results

### Alternative: Google PageSpeed Insights
- Go to https://pagespeed.web.dev/
- Enter: `http://localhost:4321`
- Click "Analyze"
- Record the scores

## After Optimization (With Astro Image)

### Test After Image Optimization:

1. **Restart your dev server** (to ensure new Image component is active)
2. **Run the same tests** as above
3. **Compare the results**

## Expected Improvements:

- **Performance Score**: Should increase by 10-20 points
- **LCP**: Should improve (faster image loading)
- **Image Optimization**: Should show fewer warnings
- **File Sizes**: Should be smaller (WebP format)

## Key Things to Look For:

### Before (Regular img tags):
- Images served as original JPG/PNG
- No responsive image sizing
- Larger file sizes
- Slower loading times

### After (Astro Image component):
- Images converted to WebP
- Multiple sizes generated
- Smaller file sizes
- Faster loading times
- Better mobile performance

## Troubleshooting:

If you don't see improvements:
1. **Clear browser cache** (Ctrl+Shift+R)
2. **Check Network tab** in DevTools to see actual file sizes
3. **Verify** Astro Image component is working (look for WebP files in Network tab)
4. **Restart** the dev server

## Recording Results:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Performance Score | ___/100 | ___/100 | +___ |
| LCP | ___s | ___s | -___s |
| FID | ___ms | ___ms | -___ms |
| CLS | ___ | ___ | -___ |
| Total Blocking Time | ___ms | ___ms | -___ms |

## Notes:
- Test on both mobile and desktop
- Use incognito mode to avoid cache issues
- Test multiple times for consistent results
