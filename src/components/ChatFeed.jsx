import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {

  const {chats,activeChat,userName,messages}=props;

  const chat = chats&& chats[activeChat];

  const renderMessages = ()=>{
    const keys = Object.keys(messages);
    return keys.map((key,index)=>{
      const message = messages[key];
      const lastMessageKey = index===0 ?null:keys[index-1];
      const isMessage = userName === message.sender.userName;
    })
  }

  return (
    <div>ChatFeed
      
    </div>
    
  )
}

export default ChatFeed