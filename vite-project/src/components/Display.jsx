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
    backgroundColor: "#f4f4f4",
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
              style={{ cursor: "pointer", color: "red" }}
            />
          </li>
        );
      })}
    </div>
  );
};

export default Display;
