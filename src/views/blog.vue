<template>
  <div>
    <div class="Tab-inner-unfold">
      <h2>02</h2>
      <h1>My Blog</h1>
    </div>
    <div class="clickBox">
      <router-link to="/" class="cross">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <div class="preAndNext">
        <router-link to="/project" class="pre">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
        <router-link to="/ability" class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <main class="inner-container">
      <blogs/>
    </main>
  </div>
</template>
<script>
import blogs from "../components/TabContent/blogs"
export default {
	components: {
		blogs
	}
}
</script>

