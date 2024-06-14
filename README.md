# "What others read and say?" - ShelfShare
## 📚️ This is the 🌝 social cataloging website for readers 🧐 and book 📖 recommendations inspired by [goodreads](https://www.goodreads.com/). 

### User Stories:
- [x] As a user, I want to search for books by title, author, or genre, so I can discover new reading material.
- [x] As a logged-in user, I can view individual books to see a summary of the book as well as other user reviews + ratings.
- [x] As a logged-in user, I can leave reviews + ratings for books.
- [x] As a logged-in user, I can leave reviews + ratings for books.
- [x] As a logged-in user, I can add books to my list to view them later.
- [x] As a logged-out user, I can want to see books that I could discover + information about the website so that I can learn more about what the site offers.
- [x] As a logged-in user, I can view a dropdown menu to see my profile and access books I’ve read + their respective reviews, as well as a logged-out.

### Getting Started
### Installation
#### 1. Clone repository
```
git clone https://github.com/chingu-voyages/v49-tier3-team-29.git
```
#### 2. Install npm packages both in "client" and "backend" directory.
```
npm install
```
#### 3. Create .env file both in "client" and "backend" directory.
#### client > .env
```
# Demo User Credentials
VITE_DEMO_USERNAME=demo_user
VITE_DEMO_PASSWORD=demo4929
VITE_BACKENDURL=http://localhost:5001 👈️ The backend URL varies based on your local environment.
```
#### backend > .env

```
PORT=5001
DB_URI='mongodb://localhost:27017/your-database-name'
BREVO_USERID='your-brevo-user-id' 👈️ This variable is required *only* for password reset function. Our team created and used one Breavo account under free-of-charge pricing tier. 
BREVO_PASS='your-brevo-password' 👈️ You can create your account and go to https://app.brevo.com/settings/keys/smtp to get your credentials. 
JWT_SECRET='your-jwt' 
DEMOUSER_PASSWORD=demo4929 👈️ Demo user password should be identical with .env in client.
```
#### 4. Run app on client terminal and on backend terminal.
```
npm run dev
```

## Our Team

Everyone on your team should add their name along with a link to their GitHub
& optionally their LinkedIn profiles below. Do this in Sprint #1 to validate
your repo access and to practice PR'ing with your team *before* you start
coding!

- Arieonna Hearn: [GitHub](https://github.com/chuelgi)
- Bia: [GitHub](https://github.com/bank1e)
- Alex Hunt: [GitHub](https://github.com/alexh205) / [LinkedIn](https://www.linkedin.com/in/alexhse/)
- Jared Sinai Hernandez [GitHub](https://github.com/jaredsina) / [LinkedIn](https://www.linkedin.com/in/jaredsina/)
   ...
- Jeison Infante: [GitHub](https://github.com/JeisonRd) 
