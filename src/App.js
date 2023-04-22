import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed.jsx";
function App(){
  return (
    <>
      <ChatEngine
        height="120vh"
        projectID="
        8a2a2f20-6dc3-4e99-89ad-c4162f251bbb"
        userName="John"
        userSecret="12345"
        renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
        onNewMessage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play}/>
    </>
  );
}

export default App;
