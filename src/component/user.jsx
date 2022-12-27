import React from "react";

const User = ({
  id,
  email,
  imgSrc,
  firstName,
  lastName,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="col-4 text-center p-5">
      <img
        src={imgSrc}
        alt=""
        style={{ borderRadius: "50%", width: "100px" }}
      />
      <h4>
        {firstName} {lastName}
      </h4>
      <h5>{email}</h5>
      <div className="row">
        <div className="col-6">
          <button
            onClick={() => onUpdate(id)}
            className="btn btn-sm btn-warning"
          >
            update
          </button>
        </div>
        <div className="col-6">
          <button
            onClick={() => onDelete(id)}
            className="btn btn-sm btn-danger"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
