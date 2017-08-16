<template>
  <div>
    <h3>Home</h3>
    <h5>Users list</h5>
    <ul>
      <li
        v-for="user in users"
        :key="user.id">
        <router-link :to="{ path: `/users/${user.id}` }">{{ user.name }}</router-link>
      </li>
    </ul>
    <router-link to="/about">About page &rarr;</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },

  async mounted() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { data } = await axios.get(url)
    this.users = data
  }
}
</script>
