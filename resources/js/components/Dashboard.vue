<template>
  <div>
    <h1>Dashboard</h1>
    <br />
    <p>Name : {{ user.name }}</p>
    <br />
    <p>Email : {{ user.email }}</p>
    <br />
    <button @click.prevent="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    logout() {
      axios.post("/api/logout").then(() => {
        this.$router.push({ path: "/" });
      });
    },
  },
  mounted() {
    axios.get("/api/user").then((res) => {
      this.user = res.data;
    });
  },
};
</script>