import React from "react";
import { Prompt } from "react-router-dom";
import { useState } from "react";

function Contact() {
  let [isChecked, setIsChecked] = useState("");

  return (
    <div>
      <h3>Contact Page</h3>
      <button
        type="button"
        className="btn btn-success mr-3"
        onClick={() => setIsChecked((isChecked = true))}
      >
        Ok Go Now
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setIsChecked((isChecked = false))}
      >
        No Don't Go
      </button>
      <Prompt
        when={isChecked}
        message={(location) =>
          `Bạn chắc chắn muốn chuyển trang đến ${location.pathname}`
        }
      />
    </div>
  );
}

export default Contact;
