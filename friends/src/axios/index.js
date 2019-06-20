import axios from "axios";

const tempToken = "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

export default function() {
  // const token = localStorage.getItem("token");

  const instance = axios.create({
    headers: {
    //   "Content-Type": "application/json",
      Authorization: `${tempToken}`
    }
  });

  return instance;
}
