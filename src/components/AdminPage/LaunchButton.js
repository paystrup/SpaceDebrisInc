import React from 'react';
import { postLaunchURL } from '../getAPI';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LaunchButton({ rocketIDs, rocketName, title }) {
  const navigate = useNavigate();

  // Headers for post
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Array of rockets to post
  const rockets =  {
    "rockets": rocketIDs
  };

  // Error/state messages
  const launchSuccessMsg = " launched 🚀";
  const errorMsg = "Something went wrong, please contact support.";

  // Post starts here
  async function createPost(newPost) {
      const url = postLaunchURL;
      const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: myHeaders,
          redirect: 'follow'
      });
      if (response.ok) {
          const data = await response.json();
          console.log("New post launch created: ", data);
          data?.map((element, index) => (
            toast(element + launchSuccessMsg, { type: "success" })
          ));

          navigate('/admin/dashboard/launchinfo', {
            state: {
              rocketName
            }
          });
      } else {
          console.log(response);
          toast(errorMsg, { type: "error" });
      }
  }

  return (
    <button className='h-56 w-56 bg-galaxyPurple rounded-full hover:bg-observableBlack hover:border-2 transition-all hover:text-primaryGray-300 active:scale-90' onClick={() => createPost(rockets)}>
      {title ? title : "Launch"}
    </button>
  )
}
