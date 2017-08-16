<template>
  <div>
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
    <router-link to="/">&larr; go back</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      user: {}
    }
  },

  head: {
    title() {
      return {
        inner: `${this.user.name}`,
      }
    },
    meta() {
      return [
        { name: 'description', content: `${this.user.name} description goes here.` }
      ]
    }
  },

  async mounted() {
    const { id } = this.$route.params
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    const { data } = await axios.get(url)
    this.user = data
    this.$emit('updateHead')
  }
}
</script>
