# 📱 iOS Home Screen Setup Guide

Make your Hiragana Phantom Thieves game appear as an app icon on your iPhone/iPad home screen!

---

## 🎨 Step 1: Create App Icons

You need to create 3 icon images with the Phantom Thieves theme:

### Required Icons:

1. **apple-touch-icon.png** (180x180 pixels)
   - This is what appears on iOS home screen

2. **icon-192.png** (192x192 pixels)
   - For Android and general PWA support

3. **icon-512.png** (512x512 pixels)
   - High-res icon for larger displays

### Design Recommendations:

**Option A - Simple Text Icon:**
- Black background (#000000)
- Red Japanese character (あ) in center
- Red border (#ff0000)
- "Phantom Thieves" theme colors

**Option B - Mask Icon:**
- Black background
- Red Phantom Thief mask icon 🎭
- Minimal design for clarity at small sizes

**Option C - Joker Theme:**
- Red and black gradient
- Single hiragana character (like あ)
- Persona 5-style UI elements

### 🛠️ How to Create Icons:

#### Using Free Online Tools:
1. Go to [favicon.io](https://favicon.io/favicon-generator/)
2. Create a 512x512 image with your design
3. Use [iloveimg.com](https://iloveimg.com/resize-image) to create different sizes

#### Using Canva (Free):
1. Go to [canva.com](https://canva.com)
2. Create custom size: 512x512px
3. Design your icon (black bg, red elements)
4. Download as PNG
5. Resize for other sizes

#### Using Figma/Photoshop:
1. Create 512x512px artboard
2. Black background
3. Add red (hex: #ff0000) elements
4. Export at 180x180, 192x192, 512x512

### 📦 Quick Icon Template (Text-based):

Create a simple HTML file to generate an icon:

```html
<!DOCTYPE html>
<html>
<head><style>
body { margin: 0; background: #000; display: flex; align-items: center; justify-content: center; height: 100vh; }
.icon { width: 512px; height: 512px; background: #000; border: 20px solid #ff0000; display: flex; align-items: center; justify-content: center; }
.text { font-size: 300px; color: #ff0000; font-weight: bold; }
</style></head>
<body>
<div class="icon"><div class="text">あ</div></div>
</body>
</html>
```

Open this in browser, screenshot it, and crop to create your icon!

---

## 📁 Step 2: Add Icons to Your Project

Place these 3 files in your `hg` folder (same folder as index.html):
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

---

## 📲 Step 3: How Users Add to Home Screen

### On iPhone/iPad:

1. **Open the game in Safari** (must use Safari, not Chrome!)
2. Tap the **Share** button (square with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Edit the name if desired (default: "Hiragana PT")
5. Tap **"Add"**
6. Icon appears on home screen! 🎉

### On Android:

1. Open the game in Chrome
2. Tap the menu (⋮)
3. Tap **"Add to Home screen"**
4. Confirm and tap **"Add"**
5. Icon appears on home screen!

---

## ✨ What Users Get:

Once added to home screen:

### ✅ App-Like Experience:
- Launches in full-screen (no browser UI)
- Has its own icon like a native app
- Appears in app switcher
- Black status bar (Persona theme)
- No URL bar or Safari controls

### ✅ Offline Support (Optional):
To make it work offline, you can add a Service Worker later.

### ✅ Fast Access:
- One tap to launch
- Stays on home screen like any app
- Works across devices if using iCloud sync

---

## 🎯 Quick Icon Placeholder

**If you want to test immediately**, create a simple placeholder icon:

### Using Emoji Icon (Fastest):

1. Go to [favicon.io/emoji-favicons/joker/](https://favicon.io/emoji-favicons/joker/)
2. Download the package
3. Use the PNG files as placeholders
4. Replace with custom design later

### Or Use This Simple Red Square:

Create a 512x512 red square in any image editor:
- Background: #ff0000
- Add white text "あ" in center
- Save as PNG at different sizes

---

## 🔧 Advanced: Testing Locally

### Test on iPhone (same WiFi):

1. Make sure your computer and iPhone are on same WiFi
2. Find your computer's local IP (ipconfig on Windows)
3. On iPhone Safari, go to: `http://YOUR_IP:PORT/index.html`
4. Test "Add to Home Screen"

### Using ngrok (Public URL for Testing):

1. Install [ngrok](https://ngrok.com/)
2. Run: `ngrok http 8080` (or your port)
3. Use the HTTPS URL on your phone
4. Test "Add to Home Screen"

---

## 📊 PWA Features Already Added:

✅ Manifest file (`manifest.json`)
✅ Apple touch icons configured
✅ Standalone display mode
✅ Theme colors (red/black)
✅ App name and short name
✅ Mobile-optimized viewport
✅ No zoom, no scrolling
✅ Black translucent status bar

---

## 🚀 After Icon Creation:

1. Create the 3 icon files
2. Place them in the `hg` folder
3. Push to GitHub Pages
4. Visit site on iPhone
5. Add to Home Screen
6. Enjoy! 🎭

---

## 💡 Icon Design Tips:

### Do:
- ✅ Use high contrast (red on black)
- ✅ Keep it simple (works at 60x60px)
- ✅ Use Persona 5 color scheme
- ✅ Make it recognizable
- ✅ Test at small size

### Don't:
- ❌ Too much detail (gets lost when small)
- ❌ Tiny text (unreadable)
- ❌ Multiple colors (stick to theme)
- ❌ Transparent backgrounds (use black)
- ❌ Photos (use icons/symbols)

---

## 🎨 Recommended Icon Ideas:

1. **Single Hiragana**: Large "あ" on black, red border
2. **Phantom Mask**: 🎭 emoji styled red on black
3. **Stylized PT**: "PT" letters Persona 5 style
4. **Joker Card**: Playing card design
5. **All-Out Attack**: Lightning bolt with hiragana

---

## 🆘 Troubleshooting:

### "Add to Home Screen" not showing:
- Must use Safari on iOS (not Chrome/Firefox)
- Must be HTTPS or localhost
- Check manifest.json is accessible

### Icon not showing up:
- Clear Safari cache
- Delete and re-add to home screen
- Check file paths are correct
- Ensure PNGs are properly formatted

### App opens in Safari instead of standalone:
- Delete from home screen and re-add
- Check `display: standalone` in manifest
- Verify apple-mobile-web-app-capable meta tag

---

## 🎉 You're Done!

Once you've created and added the icons, your Hiragana Phantom Thieves game will:
- Appear on home screen with custom icon
- Launch like a native app
- Work in full-screen mode
- Feel like a professional mobile game!

**Users will love having it right on their home screen!** 🎭📱
