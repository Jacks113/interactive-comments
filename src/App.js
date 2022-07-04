// Import css
  import "./App.css";

// Main react components
  import { useEffect } from "react";

// Import components
  import Comment from './Components/Comment';
  import Input from "./Components/Input";
  import { hoverVoting } from "./Services/functions";

function App() {

  useEffect(() => {
    hoverVoting(); 
   
  },[]);

  const userName1 = "amyrobson";
  const timePosted = "1 month ago";
  const comment = "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.";

  return (
    <div className="App" id='commentParent'>
      <div className="comments">
        <Comment userName = {userName1} timePosted = {timePosted} comment = {comment} liked={1} personal = {false} replied={false}/>
        
        <Comment userName = {userName1} timePosted = {timePosted} comment = {comment} liked={5} personal = {true} replied={false}/>

        <Comment userName = {userName1} timePosted = {timePosted} comment = {comment} liked={10} personal = {true} replied={false}/>

        <Comment userName = {userName1} timePosted = {timePosted} comment = {comment} liked={2} personal = {true} replied={true}/>

        <Comment userName = {userName1} timePosted = {timePosted} comment = {comment} liked={2} personal = {true} replied={true}/>

        <Comment userName = {userName1} timePosted = {timePosted} comment = {comment} liked={2} personal = {true} replied={true}/>
      </div>
      
      <Input />
    </div>

    
  );
}

export default App;
