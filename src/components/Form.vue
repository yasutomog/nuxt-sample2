<template>
  <div>
    <form name="contact" method="POST" netlify>
      <input type="hidden" name="form-name" value="contact">
      <p>
        <label>Your Name: <input type="text" name="name" placeholder="name"></label>
      </p>
      <p>
        <label>Message: <textarea name="message" placeholder="msg"></textarea></label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>
