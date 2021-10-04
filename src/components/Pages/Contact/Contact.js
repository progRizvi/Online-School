import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-outer-section">
      <h2 className="text-center text-light">Contact Us</h2>
      <div className="contact-section">
        <div className="contact-container">
          <form>
            <div class="mb-3">
              <label for="InputName" class="form-label text-light">
                Your Name
              </label>
              <input type="text" class="form-control" id="InputName" />
            </div>
            <div class="mb-3">
              <label for="InputEmail1" class="form-label text-light">
                Email
              </label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="InputEmail1" class="form-label text-light">
                Message
              </label>
              <textarea
                name="message"
                cols="10"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
