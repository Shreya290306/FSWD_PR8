import ProfileCard from "./ProfileCard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <ProfileCard
        name="SHREYA BHAVANI"
        photo="https://randomuser.me/api/portraits/women/44.jpg"
        bio="A passionate web developer who loves React!"
      />
    </div>
  );
};

export default App;
