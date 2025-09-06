# 🚀 CodeQuest Jr. Backend Setup Guide

This guide will help you set up the Supabase backend for CodeQuest Jr., including user authentication, progress tracking, and teacher analytics.

## 📋 Prerequisites

- A Supabase account (free tier available)
- Node.js and npm installed
- Basic understanding of databases

## 🔧 Step 1: Create Supabase Project

1. **Go to [supabase.com](https://supabase.com)** and sign up/login
2. **Click "New Project"**
3. **Choose your organization** (or create one)
4. **Enter project details:**
   - Name: `codequest-jr`
   - Database Password: Choose a strong password
   - Region: Choose closest to your users
5. **Click "Create new project"**
6. **Wait for setup** (2-3 minutes)

## 🗄️ Step 2: Set Up Database Schema

1. **Go to your Supabase dashboard**
2. **Click "SQL Editor"** in the left sidebar
3. **Click "New Query"**
4. **Copy and paste** the contents of `database-schema.sql`
5. **Click "Run"** to execute the schema

This creates:
- ✅ User profiles table
- ✅ Game progress tracking
- ✅ Code attempt analytics
- ✅ Classroom management
- ✅ Row Level Security policies
- ✅ Automatic user registration triggers

## 🔑 Step 3: Get API Keys

1. **Go to "Settings" → "API"** in your Supabase dashboard
2. **Copy the following values:**
   - Project URL
   - `anon` `public` key

## ⚙️ Step 4: Configure Environment Variables

1. **Create a `.env` file** in your project root:
   ```bash
   cp env.example .env
   ```

2. **Edit `.env`** with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. **Replace the values** with your actual Supabase project URL and anon key

## 🚀 Step 5: Test the Backend

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** to `http://localhost:5173`

3. **Test the features:**
   - ✅ Sign up for a new account
   - ✅ Sign in with existing account
   - ✅ Complete a level and see progress sync
   - ✅ Check teacher dashboard (if you signed up as teacher)

## 🎓 Step 6: Teacher Dashboard Features

### For Teachers:
1. **Sign up with role "Teacher"**
2. **Access Teacher Dashboard** from welcome screen
3. **Create classrooms** with unique codes
4. **Monitor student progress** in real-time
5. **View analytics** on common errors and learning patterns

### For Students:
1. **Sign up with role "Student"**
2. **Join classrooms** using teacher-provided codes
3. **Progress syncs** automatically to cloud
4. **Works offline** with local storage fallback

## 📊 Database Tables Overview

### `profiles`
- User information and roles
- Links to Supabase auth users

### `game_progress`
- Level completion status
- Stars earned, hints used, time spent
- Attempts and completion timestamps

### `code_attempts`
- Every code execution logged
- Success/failure status
- Error messages and execution time
- Used for analytics and learning insights

### `classrooms`
- Teacher-created learning groups
- Unique join codes for students

### `classroom_students`
- Links students to classrooms
- Tracks join dates

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Users can only access their own data**
- **Teachers can view their students' progress**
- **Secure API endpoints** with JWT authentication
- **No sensitive data** stored in frontend

## 📈 Analytics & Insights

The backend automatically tracks:
- ✅ **Code execution attempts** and success rates
- ✅ **Common error patterns** across students
- ✅ **Time spent** on each level
- ✅ **Hint usage** patterns
- ✅ **Learning progression** through levels

Teachers can use this data to:
- Identify struggling students
- Improve level difficulty
- Create targeted interventions
- Measure learning outcomes

## 🚨 Troubleshooting

### Common Issues:

**"Invalid API key" error:**
- Check your `.env` file has correct values
- Ensure no extra spaces in environment variables
- Restart the development server

**Database connection errors:**
- Verify Supabase project is running
- Check if database schema was applied correctly
- Ensure RLS policies are enabled

**Authentication not working:**
- Check if triggers were created in database
- Verify user registration function exists
- Test with a fresh browser session

**Teacher dashboard not loading:**
- Ensure user has `teacher` role in profiles table
- Check RLS policies for classroom access
- Verify classroom data exists

### Getting Help:

1. **Check Supabase logs** in your dashboard
2. **Use browser developer tools** to see network errors
3. **Verify database schema** matches the provided SQL
4. **Test with different user roles** (student/teacher)

## 🌟 Next Steps

Once your backend is set up, you can:

1. **Deploy to production** (Vercel, Netlify, etc.)
2. **Add more levels** using the level creation system
3. **Customize analytics** for your specific needs
4. **Integrate with learning management systems**
5. **Add advanced features** like badges, leaderboards, etc.

## 📞 Support

If you need help setting up the backend:
1. Check the troubleshooting section above
2. Review Supabase documentation
3. Test with the provided example data
4. Ensure all environment variables are set correctly

---

**🎉 Congratulations! Your CodeQuest Jr. backend is now ready to support student learning and teacher insights!**
