import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "./store/usersSlice/usersSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUser = () => {
    return dispatch(deleteUsers());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{
          backgroundColor: "#f44336",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "uppercase",
          outline: "none",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
        onClick={() => deleteUser()}
      >
        Delete All
      </button>{" "}
    </div>
  );
};
