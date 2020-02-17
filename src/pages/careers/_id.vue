<template>
  <div>
    <h2>キャリア</h2>
    <div v-for="item in items" :key="item.id">
      <nuxt-link :to="'posts/' + item.id">
        <h2>
          {{ item.title }}
        </h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://yasutomog.microcms.io/api/v1/posts?filters=career[equals]${params.id}`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )

    return {
      items: data.contents
    }
  },
  data () {
    return {
      items: []
    }
  }
}
</script>
