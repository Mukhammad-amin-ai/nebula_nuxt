<template>
  <div class="wrap">
    <div class="card">
      <div class="card-top">
        <div class="left">
          <div class="icon">
            <img :src="img" alt="Customer" />
          </div>
          <h4>{{ topText }}</h4>
        </div>
        <div class="right">
          <div class="stat" v-if="checker">
            <img src="@/assets/icons/grow.svg" alt="grow" />
            <span>{{ percent }} %</span>+{{ grow }} month
          </div>
          <div class="stat" v-else>
            <img src="@/assets/icons/decrease.svg" alt="grow" />
            <span style="color: #60bf98">{{ percent }} %</span>{{ grow }} month
          </div>
        </div>
      </div>
      <div class="card-bottom">
        <div class="box">
          <h4>{{ box1 }}</h4>
          <p>{{ box1text }}</p>
        </div>
        <div class="box">
          <h4>{{ box2 }}</h4>
          <p>{{ box2text }}</p>
        </div>
        <div class="box">
          <h4>{{ box3 }}</h4>
          <p>{{ box3text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.public.API_BASE_URL);

defineProps({
  topText: String,
  box1text: String,
  box2text: String,
  box3text: String,
  box1: Number,
  box2: Number,
  box3: Number,
  percent: Number,
  grow: Number,
  img: String,
  checker: Boolean,
});
</script>
<style scoped>
.wrap {
  width: 321px;
  height: 196px;
  border-radius: 8px;
  background: #fff;
}

.card {
  width: 100%;
  height: 100%;
  padding: 16px;
}

.card-top {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e1e5;
}

.left {
  width: 40%;
  height: 100%;
}

.left h4 {
  font-size: 16px;
  color: #1c1f27;
  font-weight: 500;
  font-family: Euclid-Medium;
}

.right {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.stat {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  color: #92969f;
  font-size: 14px;
  gap: 5px;
  font-family: Euclid-Regular;
}

.stat span {
  color: #4478ff;
  font-weight: 600;
}

.card-bottom {
  width: 100%;
  height: 50%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.box {
  width: 88px;
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.box h4 {
  font-size: 24px;
  font-weight: 500;
  font-family: Euclid-Regular;
}

.box:nth-child(1) h4 {
  font-weight: 600;
}

.box p {
  color: #92969f;
  font-size: 14px;
  font-weight: 500;
  font-family: Euclid-Regular;
}

@media screen and (max-width: 705px) {
  .stat {
    justify-content: flex-end;
  }
}

@media screen and (max-width: 320px) {
  .stat {
    font-size: 12px;
  }

  .box h4 {
    font-size: 20px;
  }

  .box p {
    font-size: 12px;
  }
}
</style>
