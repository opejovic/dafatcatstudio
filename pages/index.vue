<template>
  <div id="main" data-animate-in="fade" class="relative overflow-y-hidden">
    <img
      class="absolute w-full"
      style="top: 20%"
      id="comming-soon"
      src="../assets/images/landing-line-top.svg"
      alt=""
    />
    <img
      class="absolute w-full"
      style="bottom: 20%"
      id="comming-soon"
      src="../assets/images/landing-line-bottom.svg"
      alt=""
    />
    <div class="container center relative">
      <navigation-component></navigation-component>
      <div data-name="mid-section" class="width: 100%;">
        <main style="margin-top: -5%">
          <h1
            class="main-text"
            style="font-size: 100px; color: white; font-weight: 600"
          >
            <p class="">
              We craft
              <span
                id="grad-text"
                data-animate-in="fade"
                class="text-gradient-teal"
                >digital products.</span
              >
            </p>
            <p class="">No bullshit.</p>
          </h1>
          <p
            style="
              font-size: 20px;
              line-height: 108.1%;
              /* or 28px */

              letter-spacing: -0.07em;
            "
          >
            You get complete digital experience, driven by data and research for
            added value.
          </p>
        </main>
      </div>

      <div>hello@dafatcat.studio</div>
      <svg
        id="box1"
        data-animate-in="left"
        class="absolute bottom-0 right-0"
        style="margin-right: 100px; margin-bottom: 50px"
        width="175"
        height="22"
        viewBox="0 0 175 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 21.0976V0H43.0976V21.0976H22Z" fill="#A2998A" />
      </svg>
      <svg
        id="box2"
        data-animate-in="up"
        class="absolute bottom-0 right-0"
        style="margin-right: 100px; margin-bottom: 50px"
        width="175"
        height="22"
        viewBox="0 0 175 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 21.0976V0H21.0976V21.0976H0Z" fill="#007CA8" />
      </svg>
      <svg
        id="box3"
        data-animate-in="down"
        class="absolute bottom-0 right-0"
        style="margin-right: 100px; margin-bottom: 50px"
        width="175"
        height="22"
        viewBox="0 0 175 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M73 21.0976V0H94.0976V21.0976H73Z" fill="#FF3A5E" />
      </svg>
      <svg
        id="box4"
        data-animate-in="left"
        class="absolute bottom-0 right-0"
        style="margin-right: 100px; margin-bottom: 50px"
        width="175"
        height="22"
        viewBox="0 0 175 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M110 21.0976V0H131.098V21.0976H110Z" fill="#9E9888" />
      </svg>
      <svg
        id="box5"
        data-animate-in="up"
        class="absolute bottom-0 right-0"
        style="margin-right: 100px; margin-bottom: 50px"
        width="175"
        height="22"
        viewBox="0 0 175 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M153 21.0976V0H174.098V21.0976H153Z" fill="#FFEA7B" />
      </svg>

      <!-- <img
        class="absolute bottom-0 right-0"
        style="margin-right: 100px; margin-bottom: 50px"
        id="comming-soon"
        src="../assets/images/muller-boxes.svg"
        alt=""
      /> -->
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import NavigationComponent from "../components/NavigationComponent.vue";

export default {
  components: {
    Logo,
    NavigationComponent,
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

    setTimeout(() => {
      const box1 = document.getElementById("box1");
      box1.classList.add("in-view");
    }, 700);

    setTimeout(() => {
      const box2 = document.getElementById("box2");
      box2.classList.add("in-view");
    }, 600);

    setTimeout(() => {
      const box3 = document.getElementById("box3");
      box3.classList.add("in-view");
      const box4 = document.getElementById("box4");
      box4.classList.add("in-view");
    }, 1200);

    setTimeout(() => {
      const box5 = document.getElementById("box5");
      box5.classList.add("in-view");
    }, 1000);
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
