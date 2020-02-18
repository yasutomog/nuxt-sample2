<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <nuxt-link :to="'careers/' + item.id">
        <h2>
          {{ item.name }}
        </h2>
      </nuxt-link>
    </div>
    <nuxt-link to="/form">
      Form page
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios.get(
      'https://yasutomog.microcms.io/api/v1/careers',
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
