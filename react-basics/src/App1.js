import React from 'react'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App1=()=>{
    return ( 
      <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h1>Hello</h1>
          Are you Sure ?
        </div>
  
      </ApprovalCard>
      <ApprovalCard>
              <CommentDetail 
              avatar={faker.image.avatar()} timeAgo="Today at 6:00PM" name={faker.name.findName()}>This is post</CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail avatar={faker.image.avatar()} timeAgo="Today at 6:00PM" name={faker.name.findName()}>This is post</CommentDetail>
      </ApprovalCard>
  
        <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} timeAgo="Today at 7:00PM" name={faker.name.findName()}>Nice post</CommentDetail>      
        </ApprovalCard>
  
        <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} timeAgo="Today at 8:00PM" name={faker.name.findName()}>{faker.random.words()}</CommentDetail>      
        </ApprovalCard>
  
        <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} timeAgo="Today at 9:00PM" name={faker.name.findName()}>{faker.random.words()}</CommentDetail>      
        </ApprovalCard>
  
      </div>
    );
  }
  
  export default App1;