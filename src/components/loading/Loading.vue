<template>
  <Teleport to="body">
    <div class="loading-container">
      <svg
        id="load"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
      >
        <circle
          id="loading-inner"
          cx="75"
          cy="75"
          r="60"
        />
      </svg>
    </div>
  </Teleport>
</template>
<script lang='ts' setup>

</script>

<style scoped lang='scss'>
.loading-container{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
}

#load {
  width: 75px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #1F5FFF;
    fill: transparent;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
</style>
