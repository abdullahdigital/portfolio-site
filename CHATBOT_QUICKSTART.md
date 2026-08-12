# AI Chatbot Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Get Gemini API Key (1 min)

1. Go to: https://aistudio.google.com/app/apikey
2. Click **"Create API Key"**
3. Select or create a Google Cloud project
4. Copy the API key

### Step 2: Setup Local Development (2 min)

```bash
# Create .env.local file with your API key
cp .env.example .env.local

# Edit .env.local and paste your Gemini API key:
# GEMINI_API_KEY=your_actual_api_key_here
```

### Step 3: Start Dev Server (1 min)

```bash
npm run dev
# Opens at http://localhost:3000
```

### Step 4: Test the Chatbot (1 min)

1. Look for the **emerald green chat button** in bottom-right corner
2. Click it to open chat window
3. Try these test messages:
   - "Who is Abdullah?"
   - "What projects has he built?"
   - "How can I hire Abdullah?"
   - "What cybersecurity services do you offer?"

4. When you ask about hiring/contact, a **"Contact Abdullah"** button appears
5. Click it to scroll to the Contact section

---

## 🌐 Deploy to Vercel

### One-Time Setup

1. **Add Gemini API Key to Vercel**:
   ```
   - Go to: Vercel Dashboard → Your Project → Settings
   - Click: Environment Variables
   - Add new variable:
     Name: GEMINI_API_KEY
     Value: (paste your API key)
     Environments: Production, Preview, Development
   - Save
   ```

2. **Redeploy**:
   ```bash
   git push
   # Vercel auto-deploys with your API key
   ```

3. **Verify**: Visit https://abdullahdigital.vercel.app
   - Chatbot should work immediately

---

## 📋 What Was Added

### New Files:
- `src/components/AIChatbot.tsx` - Floating chat widget
- `src/app/api/chat/route.ts` - Chatbot AI backend  
- `.env.example` - Configuration template

### Modified Files:
- `src/app/layout.tsx` - Added chatbot to all pages
- `package.json` - Added Gemini SDK

### No Breaking Changes:
- All existing pages work as before
- No design changes to existing elements
- Portfolio functionality 100% intact

---

## 🤖 How the Chatbot Works

1. **You ask a question** → Posted to `/api/chat`
2. **Server fetches your portfolio** → Extracts clean text content
3. **Server caches content** → 6 hours, reduces API calls
4. **Gemini processes request** → Uses portfolio knowledge
5. **Response appears in chat** → With optional Contact button

**No manual knowledge input needed** - it reads your live portfolio automatically!

---

## ⚙️ Customization

### Change Welcome Message

Edit `src/components/AIChatbot.tsx`, find:
```typescript
"Hi! 👋 I'm Abdullah's AI assistant..."
```

### Change Chat Button Color

In `AIChatbot.tsx`, replace `emerald-500` with other Tailwind colors:
```typescript
className={`... ${isOpen ? "bg-red-500" : "bg-blue-500"} ...`}
```

### Change Model

In `src/app/api/chat/route.ts`, replace:
```typescript
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
```

With other models like:
- `gemini-1.5-pro` (more advanced)
- `gemini-2.0-flash` (faster)

### Adjust Rate Limit

In `route.ts`, change this line:
```typescript
if (limit.count >= 5) return false;  // Change 5 to your limit
```

### Modify Cache Duration

In `route.ts`, adjust:
```typescript
const CACHE_TTL = 6 * 60 * 60 * 1000;  // 6 hours - change as needed
```

---

## 🆘 Troubleshooting

### "Server Configuration Error"
→ **Solution**: Add `GEMINI_API_KEY` to Vercel Environment Variables

### Chatbot Not Appearing
→ **Solution**: 
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check: `npm run build` for errors

### Messages Not Sending
→ **Solution**:
- Wait 60 seconds (rate limit resets)
- Check: API key is in `.env.local` for local testing

### "Failed to Process Message"
→ **Solution**:
- Verify Gemini API key is valid
- Check: https://aistudio.google.com/app/apikey for quota

---

## 📊 Monitoring

### Check API Usage
1. Visit: https://aistudio.google.com/app/apikey
2. Click your API key
3. View "API credentials" and usage stats
4. Monitor rate limiting and costs

### View Errors (Vercel)
1. Vercel Dashboard → Logs
2. Filter for `/api/chat`
3. Check for errors or rate limit hits

---

## 🎯 What's Next?

### Currently:
✅ Floating chatbot on every page  
✅ Reads live portfolio automatically  
✅ Recognizes contact/hiring requests  
✅ Server-side secure (API key protected)  
✅ Rate-limited (prevents abuse)  

### Future Upgrades (Optional):
- Persistent chat history (database)
- User authentication
- Vector embeddings + RAG
- Email/WhatsApp integration
- Calendar scheduling
- Lead capture

---

## 📞 Support Resources

- **Gemini API Docs**: https://ai.google.dev/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/

---

## 🔐 Security Reminders

✅ **Never commit `.env.local`** - Already in `.gitignore`  
✅ **Keep API key private** - Only use in `.env.local` and Vercel  
✅ **Use environment variables** - Never hardcode secrets  
✅ **Rate limiting active** - 5 requests per minute per IP  

---

**Your AI chatbot is ready!** 🎉

Deploy to Vercel, add your Gemini API key, and start converting visitors into clients.
