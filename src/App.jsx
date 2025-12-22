import './App.css'
import avatarImage from './assets/avatar.png'
import ProfilePage from './components/ProfilePage'
function App() {
  const user = {
    name: "Ehsan Ehrari",
    username: "@ehsanehrari",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 22 2025",
    streakDays: 2,
    longestStreak : 2,
    recentBadgesText: "No badges earned yet.",
    personalInfo: {
      Email: 'ehsan.ehrari@codetoinspire.org',
      Gender: 'Male',
      Country: 'Afghanistan',
      "Province or State": 'Herat',
      "Teaching Expreiance": "21",
      "Date of Birth": "2/16/86",
      "Online Portfolio Link": "N/A",
      "Linkedin Link": "Open the Link",
      Languages: "Farsi, English",
      Bio: "Mentor @codetoinspire"
    },

    accountDetails: {
      Role: "Mentor",
      Status: "Active",
      Verification: "Verified"
    }
  }

  return (
    <div className='page'>
        <ProfilePage user={user}></ProfilePage>
    </div>
  )
}

export default App
