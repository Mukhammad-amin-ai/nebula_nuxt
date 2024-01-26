<template>
  <div class="container">
    <div class="main-section" style="display: flex; flex-direction: column">
      <div class="wrapper">
        <div class="customer">
          <div class="customer-header">
            <div class="customer-logo">
              <img src="../assets/images/customer-section.png" alt="customer" />
              <h2>Customer</h2>
            </div>
            <div class="customer-search">
              <img src="../assets/svg/search-normal.svg" alt="search" />
              <input type="text" placeholder="Search something" />
            </div>
          </div>
          <div class="customer-filter">
            <p>Filter by</p>
            <div class="filters">
              <div class="filter-item">
                <select>
                  <option selected disabled value="Customer Type">
                    Customer Type
                  </option>
                  <option value="broker">Broker</option>
                  <option value="carrier">Carrier</option>
                </select>
              </div>
              <div class="filter-item">
                <select>
                  <option selected disabled>Parent Name</option>
                  <option>1</option>
                </select>
              </div>
              <div class="filter-item">
                <select>
                  <option selected disabled>Customer Status</option>
                  <option>1</option>
                </select>
              </div>
              <div class="filter-item">
                <img src="../assets/icons/calendar.svg" alt="calendar" />
                <select>
                  <option selected disabled>Start Date</option>
                  <option>1</option>
                </select>
              </div>
            </div>
          </div>
          <div class="customer-table">
            <table>
              <thead>
                <tr>
                  <th>
                    <div class="table-head-item">Customer ID</div>
                  </th>
                  <th>
                    <div class="table-head-item">Parent ID</div>
                  </th>
                  <th>
                    <div class="table-head-item">Customer Type</div>
                  </th>
                  <th>
                    <div class="table-head-item">Customer Name</div>
                  </th>
                  <th>
                    <div class="table-head-item">Parrent Name</div>
                  </th>
                  <th>
                    <div class="table-head-item">Phone</div>
                  </th>
                  <th>
                    <div class="table-head-item">E-mail</div>
                  </th>
                  <th>
                    <div class="table-head-item">Start Date</div>
                  </th>
                  <th>
                    <div class="table-head-item">Plan Type</div>
                  </th>
                  <th>
                    <div class="table-head-item">Veriable Rate</div>
                  </th>
                  <th>
                    <div class="table-head-item">Fixed Rate</div>
                  </th>
                  <th>
                    <div class="table-head-item">Customer Status</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <card v-for="(item, index) in data" :key="index" :customerData="item" />
              </tbody>
            </table>
            <div class="pagination" v-if="pagination.total_pages">
              <div class="pagination_item" @click="prevPage">
                <img src="@/assets/icons/prev.svg" alt="" />
              </div>
              <div class="pagination_item" v-for="item in pagination.total_pages" :key="item"
                :class="{ active_pagination: pagination.page_number === item }" @click="sendPage(item)">
                {{ item }}
              </div>
              <div class="pagination_item" @click="nextPage">
                <img src="@/assets/icons/next.svg" alt="" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Card from "@/components/customer-management/card.vue";
import { ref } from "vue";
import axios from "axios";

interface PaginationData<T> {
  page_size: number;
  page_number: number;
  total_pages: number;
  data: T[];
}

interface CustomerData {
  logo: string;
  customer_id: number;
  parent_id: number | null;
  customer_type: string;
  customer_name: string;
  parent_name: string | null;
  phone: string;
  email: string;
  start_date: string;
  plan_type: string;
  variable_rate: number;
  fixed_rate: number;
  customer_status: boolean;
}

const data = ref<CustomerData[]>([
  {
    logo: "",
    customer_id: 1,
    parent_id: null,
    customer_type: "",
    customer_name: "",
    parent_name: "",
    phone: "",
    email: "",
    start_date: "",
    plan_type: "",
    variable_rate: 0,
    fixed_rate: 0,
    customer_status: true,
  },
]);
const pagination = ref<PaginationData<CustomerData>>({
  page_size: 0,
  page_number: 0,
  total_pages: 0,
  data: [],
});
const page_number = ref(1);
const runtimeConfig = useRuntimeConfig();

const sendPage = (page_count: number) => {
  page_number.value = page_count;
  fetchData();

};

const fetchData = () => {
  axios
    .get(
      runtimeConfig.public.API_BASE_URL +
      `overall/customers-managment?page_number=${page_number.value}&page_size=5`
    )
    .then((res) => {
      data.value = res.data.data;
      pagination.value = res.data;
    });
};

const prevPage = () => {
  if (pagination.value.page_number > 1) {
    page_number.value = pagination.value.page_number - 1;
    fetchData();
  }
};

const nextPage = () => {
  if (pagination.value.page_number < pagination.value.total_pages) {
    page_number.value = pagination.value.page_number + 1;
    fetchData();
  }
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped>
/*  */
.pagination {
  position: absolute;
  bottom: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  left: 0;
  right: 0;
  gap: 8px;
  z-index: 100;
}

.pagination_item {
  display: flex;
  width: 32px;
  height: 32px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #E0E1E5;
  cursor: pointer;
}

.active_pagination {
  background: #2F323A;
  color: white;
  border: 0;
}



.loader-parent {
  position: absolute;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}


.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #dedede;
  margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}

.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}

.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}

.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}

.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}

.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}

.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}

@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


/*  */
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
  padding: 0 48px;
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
  display: flex;
  justify-content: flex-start;
  width: 94%;
  height: auto;
  /* position: relative; */
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

.main-section {
  width: 100%;
  height: 840px;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  position: relative;
}

.main-section .wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.customer {
  width: 94%;
  height: auto;
  border-radius: 16px;
  background-color: #fff;
  position: absolute;
  top: -97px;
}

.customer-header {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  margin: 0 !important;
}

.customer-logo {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}

.customer-logo h2 {
  color: #2b2e3a;
  font-size: 24px;
  font-family: Euclid-SemiBold;
  font-weight: 600;
}

.customer-search {
  display: flex;
  width: 280px;
  height: 48px;
  padding: 14px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #e0e1e5;
  background: #fff;
}

.customer-search input[type="text"] {
  padding: 5px 20px 5px 5px;
  background-color: transparent;
  border: transparent;
  color: #92969f;
  font-size: 14px;
  font-family: Euclid-Regular;
}

.customer-search input[type="text"]:focus {
  outline: none;
}

.customer-filter {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px 26px;
  border-top: 1px solid #eaedf0;
  border-bottom: 1px solid #eaedf0;
}

.customer-filter p {
  color: #979cb7;
  font-size: 12px;
  font-family: Euclid-Regular;
}

.filters {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.filter-item {
  display: flex;
  width: 144px;
  height: 40px;
  padding: 12px 12px 12px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #e0e1e5;
}

.filter-item select {
  display: flex;
  align-items: center;
  flex: 1 0 0;
  background-color: transparent;
  border: none;
  color: #92969f;
  font-size: 10px;
  font-family: Euclid-Regular;
  font-weight: 500;
}

.filter-item select:focus {
  outline: none;
}

.customer-table {
  display: flex;
  align-items: flex-start;
  overflow: auto;
}

table {
  border-collapse: collapse;
}

thead tr,
tbody tr {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #eaedf0;
}

th {
  color: #92969f;
  font-size: 12px;
  font-family: Euclid-Regular;
}

.table-head-item {
  display: flex;
  height: 48px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 117px;
  align-self: stretch;
  background: rgba(224, 225, 229, 0.07);
  white-space: nowrap;
}

th:nth-child(1) .table-head-item {
  padding-left: 25px;
}

@media screen and (min-width: 1600px) {
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
  }

  .main-section {
    height: 100vh;
  }

  .customer {
    max-width: 1440px;
    height: 840px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 650px) {
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

@media screen and (max-width: 550px) {
  .customer-header {
    gap: 10px;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 425px) {
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
