<template>
  <div id="main" data-animate-in="fade">
    <div class="container">
      <div
        data-name="header"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <NuxtLink to="/"><logo /></NuxtLink>
        <nav class="space-x-8">
          <NuxtLink to="/">· home</NuxtLink>
          <NuxtLink to="/services">· services</NuxtLink>
          <NuxtLink to="/our-work">· our work</NuxtLink>
        </nav>
      </div>
      <div data-name="mid-section"></div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  components: {
    Logo,
  },

  loading: {
    color: "blue",
    height: "300px",
  },

  mounted() {
    setTimeout(() => {
      const main = document.getElementById("main");
      main.classList.add("in-view");
    }, 300);

    setTimeout(() => {
      const grad = document.getElementById("grad-text");
      grad.classList.add("in-view");
    }, 400);
  },
};
</script>

<style lang="scss">
@import "../assets/index.scss";

[data-animate-in] {
  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;
}
[data-animate-in="up"] {
  transform: translate3d(0, 12px, 0);
}
[data-animate-in="left"] {
  transform: translate3d(-25%, 0, 0);
}
[data-animate-in="right"] {
  transform: translate3d(25%, 0, 0);
}
[data-animate-in="down"] {
  transform: translate3d(0, -12px, 0);
}
[data-animate-in="fade"] {
  transform: translate3d(0, 0, 0);
}
[data-animate-in].in-view {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.bg-gradient {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(~assets/images/main-bg.svg) center/cover;
}

.center {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
}

.main-text {
  font-size: 100px;
  line-height: 108.1%;
  /* or 108px */

  letter-spacing: -0.07em;
}

.text-gradient-blue {
  background: linear-gradient(89.46deg, #2188ff 0.87%, #804eda 75.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-purple {
  background: linear-gradient(87.54deg, #9867f0 -6.8%, #ed4e50 84.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-red {
  background: linear-gradient(
    53.13deg,
    #ffd33d 0%,
    #fb8532 19.02%,
    #ea4a5a 37.19%,
    #8a63d2 56.92%,
    #2188ff 79.93%,
    #34d058 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-pink {
  background: linear-gradient(
    92.05deg,
    #bca1f7 12.09%,
    #e577b4 42.58%,
    #ff7170 84.96%
  );
  padding-right: 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-teal {
  background: linear-gradient(
    92.05deg,
    #bca1f7 12.09%,
    #dcd9ff 42.58%,
    #58ecd4 84.96%
  );
  padding-right: 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient {
  background: linear-gradient(
    270.97deg,
    #ffe580 -21.36%,
    #ff7571 -2.45%,
    #ea5dad 26.84%,
    #c2a0fd 64.15%,
    #3bf0e4 108.29%,
    #b2f4b6 159.03%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
