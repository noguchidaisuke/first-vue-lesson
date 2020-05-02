<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="increment"></LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
      <EventTitle
        :value="eventData.title"
        @input="eventData.title=$event"
      ></EventTitle>

      <label for="maxNumber">数</label>
        <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
        <p>{{typeof eventData.maxNumber}}</p>

      <label for="host">主催者</label>
        <input type="text" id="host" v-model.trim="eventData.host">
        <pre>{{eventData.host}}</pre>

      <label for="detail">イベントの内容</label>
        <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
        <pre>{{eventData.detail}}</pre>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>

      <p>参加条件</p>
      <label for="10">10代</label>
        <input type="checkbox" id="10" value="10代" v-model="eventData.target">

      <label for="20">20代</label>
        <input type="checkbox" id="20" value="20代" v-model="eventData.target">

      <label for="30">30代</label>
        <input type="checkbox" id="30" value="30代" v-model="eventData.target">
        <p>{{eventData.target}}</p>

      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader';
import Home from './components/Home';
import About from './components/About';
import EventTitle from './components/EventTitle';

export default {
  data() {
    return {
      number: 10,
      currentComponent: 'Home',
      locations: ["東京","大阪", "名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host:"",
        detail:"",
        isPrivate: false,
        target: [],
        location: "東京"
      }
    }
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods: {
    increment() {
      this.number++;
    }
  }
}
</script>