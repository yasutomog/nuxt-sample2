<template>
  <div>
    <form name="contact" method="POST" netlify>
      <input type="hidden" name="form-name" value="contact">
      <p>
        <label>Your Name: <input type="text" name="name" placeholder="name"></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" placeholder="email"></label>
      </p>
      <p>
        <label>Message: <textarea name="message" placeholder="msg"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>
