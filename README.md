# FEATHR | The Art of Game

A home for badminton players: athlete profiles, discover players, a gear gallery and clubs.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS + Framer Motion
- Supabase (auth)

## Run locally
```bash
npm install
cp .env.local.example .env.local   # then add your Supabase URL and anon key
npm run dev
```
Open http://localhost:3000.

## Supabase setup
1. Create a project at supabase.com.
2. Copy the Project URL and anon (publishable) key into `.env.local`.
3. In Authentication > URL Configuration, add `http://localhost:3000/auth/callback` to Redirect URLs.
4. For quick testing, you can turn off "Confirm email" in Authentication > Providers > Email.

## Database setup (one time)
1. In Supabase, open **SQL Editor > New query**.
2. Paste the contents of `supabase/schema.sql` and click **Run**.
3. This creates the tables and the security rules (Row Level Security) for profiles, clubs, connections and gear.

## Pages
| Route | What it is |
|---|---|
| `/` | Landing page |
| `/signup`, `/login` | Authentication |
| `/profile`, `/profile/create`, `/profile/edit` | Athlete profile, guided setup and editing |
| `/discover` | Find and connect with players |
| `/gear` | Gear gallery |
| `/clubs`, `/clubs/create` | Browse, join and create clubs |

All data is real and stored in Supabase. There is no sample data.

## Roadmap (v1)
- [x] Landing page
- [x] Login / signup
- [x] Page shells for athletes, discover, gear, clubs
- [ ] Real profiles stored in the database
- [ ] Gear posts and photo uploads
- [ ] Connection requests
- [ ] Create and join clubs for real
