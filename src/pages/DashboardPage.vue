

<template>
    <div class="container">
        <DateDropdown @date-changed ="updateSelectedDate" />
        <BodyComponent :selectedDate="selectedDate"/>
    </div>
</template>

<script >
"use strict"

import BodyComponent from '@/components/BodyComponent.vue';
import DateDropdown from '@/components/DateDropdown.vue';

export default{
    components : { DateDropdown, BodyComponent },
    data(){
        return{
            selectedDate: "",
        };
    },
    methods:{
        updateSelectedDate(date) {
            this.selectedDate = date;
        },
    },
};
</script>

<style scoped>
.container{
    background: url("@/assets/abstract-background.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    align-items: center;
    height: auto;
    text-align: center;
    background-color: #f4f4f4;
    font-size:large;
    gap:10px;
}
</style>