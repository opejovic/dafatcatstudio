<template>
  <div id="main" data-animate-in="fade" class="bg-gradient center">
    <img
      id="comming-soon"
      data-animate-in="fade"
      src="../assets/images/comming-soon.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      const main = document.getElementById("main");
      main.classList.add("in-view");
    }, 300);

    setTimeout(() => {
      const main = document.getElementById("comming-soon");
      main.classList.add("in-view");
    }, 500);
  },
};
</script>

<style>
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
  background: url("../assets/images/bg-gradient-2.svg") center/cover;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
