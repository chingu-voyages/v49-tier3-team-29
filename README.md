# voyage-tasks

Your project's `readme` is as important to success as your code. For 
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point - 
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

## Getting Started
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
## 🚀 Technologies used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/mongoose-blue?style=for-the-badge)
- [x] Responsive Design
- [x] Local Storage
 
## Our Team
- Arieonna Hearn: [GitHub](https://github.com/chuelgi)
- Bia: [GitHub](https://github.com/bank1e)
- Alex Hunt: [GitHub](https://github.com/alexh205) / [LinkedIn](https://www.linkedin.com/in/alexhse/)
- Jared Sinai Hernandez [GitHub](https://github.com/jaredsina) / [LinkedIn](https://www.linkedin.com/in/jaredsina/)
- Jeison Infante: [GitHub](https://github.com/JeisonRd) 
