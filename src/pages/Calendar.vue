<template>
  <div class="m-auto">
    <h1 class="header text-center my-5 text-2xl">
      Vue Calendar
    </h1>
    <section class="mx-4 flex justify-between">
      <h2 class="calender-title">{{ currentMonthName }}</h2>
      <h2 class="calender-title">{{ currentYear }}</h2>
    </section>
    <section class="flex ">
      <p
        class="text-center  my-2"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="border rounded px-2" @click="prev">
        Prev
      </button>
      <button class="border rounded px-2" @click="next">
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    }
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay()
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      }
      this.currentMonth++
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      }
      this.currentMonth--
    },
    currentDateClass(num) {
      const calenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString()
      const currentFullDate = new Date().toDateString()
      return calenderFullDate === currentFullDate
        ? 'bg-blue-800 text-white'
        : ''
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        'default',
        {
          month: 'long',
        }
      )
    },
  },
}
</script>

<style>
.header {
  font-family: sans-serif;
  font-weight: 800;
  font-size: 30px;
}

.calender-title {
  font-family: sans-serif;
  font-weight: 800;
  font-size: 20px;
}
</style>
