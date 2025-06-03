---
layout: contact
permalink: /contact/
title: Contact Me
description: If you're exploring a thoughtful collaboration, I invite you to send me an email at shakeel [at] outlook [dot] it — it’s the most direct way to starting a conversation.

social: true
nav: true
nav_order: 6
---

<form class="contact-form" action="https://formspree.io/f/xnnvagay" method="POST" id="contact-form">
  <label for="name">Your Name</label>
  <input id="name" name="name" required />
  
  <label for="email">Your Email:</label>
  <input type="email" name="email" id="email" required>

<label for="message">Your Message:</label>
<textarea name="message" id="message" rows="8" required autocomplete="off"></textarea>

<button type="submit">Send Message</button>

  <div id="success-message" class="hidden">
    ✅ Message sent successfully!
  </div>
</form>

<style>
  .contact-form {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fafafa;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    font-family: system-ui, sans-serif;
    position: relative;
  }

  .contact-form label {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: #333;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 0.8rem;
    font-family: inherit;
    box-sizing: border-box;
  }

  .contact-form textarea {
    resize: vertical;
    min-height: 200px;
  }

  .contact-form button {
    background-color: #8a0303;
    color: white;
    font-size: 0.8rem;
    font-weight: 400;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.25s ease, transform 0.15s ease;
  }

  .contact-form button:hover {
    background-color: #6c0202;
    transform: translateY(-2px);
  }

  .contact-form button:active {
    transform: scale(0.98);
  }

  #success-message {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: green;
    text-align: center;
    font-weight: 600;
    transition: opacity 0.3s ease;
  }

  .hidden {
    display: none;
  }
</style>

<script>
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        successMessage.classList.remove("hidden");

        setTimeout(() => {
          successMessage.classList.add("hidden");
        }, 5000); // Hide after 5 seconds
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    }).catch(error => {
      alert("Oops! Something went wrong.");
    });
  });
</script>

<div style="width: 150px; height: 150px; overflow: hidden;">
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=c276mX2g5Q1mzD6assqnHAA3Ou3EaBD2jgz_8qdHUUw"></script>
</div>