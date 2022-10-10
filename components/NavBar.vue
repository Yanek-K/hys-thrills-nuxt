<template>
  <div class="navbar">
    <Nav>
      <NuxtLink to="/">Upcoming Events</NuxtLink> |
      <NuxtLink to="/">Past Events</NuxtLink>
    </Nav>
    <div class="logo-container">
      <img
        class="high-thrills-logo"
        src="@/assets/images/logo-resized.png"
        alt="High Thrills logo"
      />
    </div>
    <Nav>
      <NuxtLink to="/">Login</NuxtLink> |
      <NuxtLink to="/create">Create an Account</NuxtLink>
    </Nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
.navbar {
  width: 100%;
  height: auto;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.logo-container {
  height: 90px;
}

.high-thrills-logo {
  height: auto;
  width: 130px;
}

a {
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  font-family: baskerville;
  padding: 0 20px 0 20px;
}
</style>
