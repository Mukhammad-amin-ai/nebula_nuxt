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
              <img
                src="@/assets/icons/document-download.svg"
                alt="document-download"
              />
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
          <router-link
            to="/"
            class="item"
            :class="{ active: $route.path === '/' }"
            >General</router-link
          >
          <router-link
            to="/customer"
            class="item"
            :class="{ active: $route.path === '/customer' }"
            >Customer Management</router-link
          >
          <router-link
            to="/invoicing"
            class="item"
            :class="{ active: $route.path === '/invoicing' }"
            >Invoicing</router-link
          >
        </div>
      </div>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup></script>

<style></style>
