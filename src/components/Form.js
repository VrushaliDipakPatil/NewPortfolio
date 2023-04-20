// @ts-nocheck
import "./FormStyle.css";
import toast, { Toaster } from 'react-hot-toast'
import React, { useState } from 'react'


function Form() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  //   async written here because fetch returns promise
  // so we have to be ready for response and reject also

  // and url written inside fetch is a firebase database url
  //portfolioproject is a database name , we can give any name to it
  //.json at end is mandatory because firebase needs only json data
  const postData = async (e) => {

    e.preventDefault();

    //Here we done object destructuring so that we can directly pass data in body
    //we can also write user.name or user.email directly in the body without object destructuring
    const { name, email, subject, message } = user;

    if (name && email && subject && message ) {
      const res = await fetch('https://portfoliproject-a2ea4-default-rtdb.firebaseio.com/portfolioproject.json',
        {
          method: 'POST', //to tell that this is a post method
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        toast.success("Data stored successfully")
      }
    } else {
      toast.error("Please fill all the data")
    }
  }


  return (
    // to tell react that this is a post method
    <div >
      <form >
        <Toaster position='top-center' reverseOrder={false} />
        <label>Your Name</label>
        <input type="text"
          name="name"
          value={user.name}
          onChange={getUserData}
          required
        />
        <label>Email</label>
        <input type="email"
          name="email"
          value={user.email}
          onChange={getUserData}
          required
        />
        
        <label>Subject</label>
        <input type="text"
          name="subject"
          value={user.subject}
          onChange={getUserData}         
          required
        ></input>
        <label>Message</label>
        <textarea rows="6"
          name="message"
          value={user.message}
          onChange={getUserData}
          placeholder="Type Your Message Here"></textarea>
        <button className="btn" onClick={postData} required>Submit</button>
      </form>
    </div>
  )
}

export default Form