<template>
  <div>
    <client-only>
      <form name="contact" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact">
        <p>
          <label>Your Name: <input type="text" name="name" placeholder="後藤"></label>
        </p>
        <p>
          <label>Message: <textarea name="message" placeholder="テストメッセージ" /></label>
        </p>
        <p>
          <button type="submit">
            Send
          </button>
        </p>
      </form>
    </client-only>
  </div>
</template>
<script>
export default {
}
</script>
