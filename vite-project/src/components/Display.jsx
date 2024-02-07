import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "./store/usersSlice/usersSlice";

const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user;
  });

  const DeleteUser = (id) => {
    dispatch(removeUser(id));
  };

  const listItemStyle = {
    marginBottom: "10px",
    padding: "10px",
    background: "linear-gradient(45deg, blue, transparent)",
    color: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    WebkitBackdropFilter: "blur(3.2px)",
    backdropFilter: "blur(3.2px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div>
      {data.map((item, index) => {
        return (
          <li key={index} style={listItemStyle}>
            {item}{" "}
            <MdDeleteForever
              onClick={() => {
                DeleteUser(index);
              }}
              style={{ cursor: "pointer", color: "red", width: "50px " }}
            />
          </li>
        );
      })}
    </div>
  );
};

export default Display;
