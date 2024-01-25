<template>
  <NuxtLayout>
    <div class="header-section">
      <div class="navigation">
        <button class="arrow-left">
          <img src="@/assets/icons/arrow-left.svg" alt="arrow-left" />
        </button>
        <div class="nav-bar">
          <div class="logo">
            <img src="@/assets/svg/logo.svg" alt="logo" />
          </div>
          <div class="config">
            <div class="show">
              Showing:
              <select>
                <option value="Week">Weekly</option>
                <option value="Month">Monthly</option>
                <option value="Year">Yearly</option>
              </select>
            </div>
            <div class="docs">
              Export Data
              <img src="@/assets/icons/document-download.svg" alt="document-download" />
            </div>
            <div class="search">
              <img src="@/assets/icons/search-normal.svg" alt="search-normal" />
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="breadcrumb">Homepage / <span>Admin Panel</span></div>
        <div class="hero-text">
          <h1>Hello, Farooq 👋🏻</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus in scelerisque ut
            felis sit et a proin nulla.
          </p>
        </div>

        <div class="tab-bar">
          <router-link to="/" class="item" :class="{ active: $route.path === '/' }">General</router-link>
          <router-link to="/customer" class="item" :class="{ active: $route.path === '/customer' }">Customer
            Management</router-link>
          <router-link to="/invoicing" class="item"
            :class="{ active: $route.path === '/invoicing' }">Invoicing</router-link>
        </div>
      </div>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup></script>

<style scoped>
.container {
  width: 100vw;
  width: 100%;
  height: auto;
}

.header-section {
  width: 100%;
  height: 544px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(25, 32, 56, 1);
}

.navigation {
  width: 100%;
  height: 81px;
  display: flex;
  align-items: center;
  margin-top: 23.09px;
  gap: 8px;
}

.arrow-left {
  background-color: transparent;
  border: none;
  margin-left: 16px;
  cursor: pointer;
}

.nav-bar {
  width: 93%;
  height: auto;
  padding: 20.457px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #344159;
}

.logo {
  width: auto;
  height: auto;
}

.config {
  width: 375px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.show {
  display: inline-flex;
  height: 40px;
  padding: 14px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(105, 110, 130, 1);
  color: #92969f;
  font-size: 12px;
  font-family: Euclid-Medium;
}

.show select {
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 12px;
  font-family: Euclid-Medium;
}

.show select:focus {
  outline: none;
}

.show select option {
  color: #000;
}

.docs {
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  padding: 14px;
  align-items: center;
  gap: 8px;
  border-radius: 8.183px;
  border: 1.023px solid rgba(105, 110, 130, 1);
  color: #fff;
  font-size: 12px;
  font-family: Euclid-Medium;
  line-height: 16px;
}

.search {
  cursor: pointer;
  display: flex;
  padding: 10.228px;
  align-items: flex-start;
  gap: 8.183px;
  border-radius: 8.183px;
  border: 1.023px solid rgba(105, 110, 130, 1);
}

.wrapper {
  width: 94%;
  height: auto;
}

.breadcrumb {
  margin-top: 47px;
  color: #696e82;
  font-size: 14px;
  font-family: Euclid-Medium;
}

.breadcrumb span {
  color: #fff;
}

.hero-text {
  margin-top: 24px;
}

.hero-text h1 {
  font-size: 48px;
  font-family: Euclid-Medium;
  font-weight: 500;
  color: #fff;
}

.hero-text p {
  width: 427px;
  color: #abb0c7;
  font-size: 14px;
  font-family: Euclid-Regular;
  font-style: normal;
  font-weight: 400;
}

.tab-bar {
  margin-top: 33px;
  display: inline-flex;
  padding: 6px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #696e82;
  background: #161a2a;
}

.item {
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  font-family: Euclid-Medium;
  cursor: pointer;
  text-decoration: none;
}

.active {
  background: #4478ff;
}


@media screen and (max-width:650px) {
    .filters {
        flex-wrap: wrap;
    }

    .arrow-left {
        margin-left: 5px;
        margin-bottom: 30px;
    }

    .nav-bar {
        width: 90%;
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-text p {
        width: 90%;
    }

}

@media screen and (max-width:550px) {
    .customer-header {
        gap: 10px;
        flex-wrap: wrap;
    }
}

@media screen and (max-width:425px) {
    .hero-text h1 {
        font-size: 38px;
    }

    .item {
        font-size: 10px;
    }

    .config {
        width: auto;
        gap: 10px;
    }
}

@media screen and (max-width: 375px) {
    .header-section .wrapper {
        width: 90%;
    }

    .nav-bar {
        width: 80%;
    }

    .show {
        padding: 10px;
        font-size: 10px;
    }

    .show select {
        font-size: 10px;
    }

    .docs {
        padding: 10px;
        font-size: 10px;
    }

    .item {
        font-size: 9px;
    }

    .filter-item {
        width: 100%;
    }
}

@media screen and (max-width: 320px) {
    .hero-text h1 {
        font-size: 35px;
    }
}

</style>
