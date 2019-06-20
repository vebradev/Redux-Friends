import { FETCH_FRIENDS } from "./actionTypes";

export const fetchFriends = () => {
  return {
    type: FETCH_FRIENDS,
    payload: [
      {
        id: 1,
        name: "Ben",
        age: 30,
        email: "ben@lambdaschool.com"
      },
      {
        id: 2,
        name: "Austen",
        age: 45,
        email: "austen@lambdaschool.com"
      },
      {
        id: 3,
        name: "Ryan",
        age: 15,
        email: "ryan@lambdaschool.com"
      },
      {
        id: 4,
        name: "Dustin",
        age: 25,
        email: "D-munny@lambdaschool.com"
      },
      {
        id: 5,
        name: "Sean",
        age: 35,
        email: "sean@lambdaschool.com"
      }
    ]
  };
};
