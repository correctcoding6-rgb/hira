# 📱 Cross-Device Sync Guide

This guide explains how to sync your Hiragana Phantom Thieves progress across devices when hosted on GitHub Pages.

---

## ✅ Built-in Share Code System (Works Immediately!)

The game includes a **Share Code** system that works without any backend setup.

### How to Use:

#### **On Device 1 (Where you have progress):**
1. Click the **🎭** icon (top right)
2. Find your character in the roster
3. Click the **📋** button next to your character
4. Share code is automatically copied to clipboard!
5. Send this code to yourself (email, notes, messaging app, etc.)

#### **On Device 2 (Where you want to sync):**
1. Open the game
2. Click the **🎭** icon
3. Click **📋 LOAD FROM SHARE CODE**
4. Paste the code you copied earlier
5. Your progress is now synced! ✨

### Features:
- ✅ No backend needed
- ✅ Works on any device with a browser
- ✅ Share codes are compact and safe
- ✅ Works offline (copy/paste only)

---

## 🔗 Alternative: URL-Based Sync

You can also share progress via a special URL.

### How it works:
1. The game can encode your save data into a URL
2. Open that URL on another device
3. Progress auto-loads!

### Implementation (if needed):
Add this button to the user menu in `game.js`:
```javascript
<button class="btn-small btn-export" onclick="getShareableURL('${userId}')" title="Get Shareable URL">🔗</button>
```

**Note:** URLs will be very long. Share codes (📋) are recommended for most use cases.

---

## 🔥 Advanced: Firebase Cloud Sync (Optional)

For automatic cloud sync without manual codes, you can integrate Firebase.

### Benefits:
- ✅ Automatic sync across all devices
- ✅ Real-time updates
- ✅ User authentication
- ✅ Free tier is generous

### Setup Steps:

#### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Firestore Database** (in test mode for development)
4. Enable **Authentication** → Email/Password or Anonymous

#### 2. Get Firebase Config
1. In Firebase Console → Project Settings
2. Scroll to "Your apps" → Web app
3. Copy the configuration object

#### 3. Add Firebase to Your Game

**In `index.html` (before closing `</body>`):**
```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>

<script>
  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```

#### 4. Add Cloud Sync Functions

**In `game.js`, add these functions:**

```javascript
// Firebase Cloud Sync
const db = firebase.firestore();
const auth = firebase.auth();

async function cloudSaveProgress() {
    if (!auth.currentUser) {
        await auth.signInAnonymously();
    }

    const userId = auth.currentUser.uid;
    const userData = allUsers[currentUser];

    await db.collection('users').doc(userId).set({
        ...userData,
        lastSynced: firebase.firestore.FieldValue.serverTimestamp()
    });

    console.log('✅ Progress saved to cloud!');
}

async function cloudLoadProgress() {
    if (!auth.currentUser) {
        await auth.signInAnonymously();
    }

    const userId = auth.currentUser.uid;
    const doc = await db.collection('users').doc(userId).get();

    if (doc.exists) {
        const userData = doc.data();
        const newUserId = 'user_' + Date.now();
        allUsers[newUserId] = userData;
        localStorage.setItem('hiraganaPhantomThieves', JSON.stringify(allUsers));
        switchUser(newUserId);
        console.log('✅ Progress loaded from cloud!');
    }
}

// Auto-save every 30 seconds
setInterval(() => {
    if (auth.currentUser) {
        cloudSaveProgress();
    }
}, 30000);

// Load on game start
auth.onAuthStateChanged((user) => {
    if (user) {
        cloudLoadProgress();
    }
});
```

#### 5. Add UI Buttons

Add cloud sync buttons to the user menu:
```javascript
<button class="persona-btn btn-skill" onclick="cloudSaveProgress()">
    ☁️ SAVE TO CLOUD
</button>
<button class="persona-btn btn-skill" onclick="cloudLoadProgress()">
    ☁️ LOAD FROM CLOUD
</button>
```

---

## 📊 Comparison

| Feature | Share Codes | Firebase Cloud |
|---------|------------|----------------|
| Setup Required | ❌ None | ✅ Firebase account |
| Automatic Sync | ❌ Manual | ✅ Automatic |
| Works Offline | ✅ Yes | ❌ Needs internet |
| Multiple Devices | ✅ Yes | ✅ Yes |
| Free | ✅ Yes | ✅ Yes (with limits) |
| Best For | Quick sharing | Multiple devices |

---

## 🎯 Recommendation

**For most users:** Use the built-in **Share Code** system (📋). It works immediately without any setup!

**For advanced users with multiple devices:** Set up **Firebase** for automatic cloud sync.

---

## 🆘 Troubleshooting

### "Invalid share code" error
- Make sure you copied the entire code
- Check for extra spaces at the beginning/end
- Try generating a new code

### Firebase not syncing
- Check Firebase console for errors
- Verify Firestore rules allow read/write
- Check browser console for error messages

### Progress not loading
- Clear browser cache
- Make sure localStorage is enabled
- Check if you're in incognito/private mode (localStorage may not persist)

---

## 💡 Tips

1. **Create backups:** Use 💾 (Download File) to create local backups regularly
2. **Test first:** Try share codes between two browsers on the same device first
3. **Keep codes safe:** Share codes contain your entire save data - don't share publicly
4. **Multiple saves:** You can have multiple characters and sync each separately

---

Made with ❤️ for the Phantom Thieves! 🎭
