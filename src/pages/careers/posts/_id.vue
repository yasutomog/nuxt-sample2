<template>
  <div>
    <h2>{{ item.title }}</h2>
    <div v-html="$md.render(item.body)" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://yasutomog.microcms.io/api/v1/posts/${params.id}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return {
      item: data
    }
  }
}
</script>
