import './App.css'
import avatarImgae from './assets/avatar.png'
import ProfilePage from './components/ProfilePage'

function App(){
  const user={
    name: "Zarifa Rahmani",
    username: "Zari1404",
    avatorImgae: avatarImgae,
    xp: 80,
    lastActive: "Dec 28 2025",
    streakDays: 2,
    longestStreak : 2,
    recentBadgesText: "No badges earned yet.",

    PersonalInfo:{
      Email: 'zarifarahmani99@gmmail.com',
      Gender: 'Female',
      Country: 'Afghanistan',
      "Province or State": 'Herat',
      "Teaching Expreiance": "21",
      "Date of Birth": "2/4/1382",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "Open the Link",
      Languages: "Farsi, english",
      Bio: "Software Engineer"


    },
    accountDetails: {
      Role: "Mentor",
      Status: "Active",
      Verification: "Verified",


    }


  }
  return(
    <div className='page'>
      <ProfilePage user={user}></ProfilePage>

    </div>
  )
}

export default App

