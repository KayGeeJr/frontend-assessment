<template>
    <nav class="navbar">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        <router-link to="/pattern" class="nav-link">Pattern Page</router-link>
        <button @click="logout" class="logout-btn">Logout</button>
    </nav>
</template>

<script>
"use strict"

export default {
    methods:{
        logout(){
            this.$router.push("/")
        },
    },
}
</script>

<style>
.navbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    padding: 15px;
}

.nav-link{
    color:white;
    text-decoration: none;
    font-size: 16px;
}

.nav-link:hover {
    text-decoration: underline;
}

.logout-btn{
    background-color: red;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
}

.logout-btn:hover {
    background-color: darkred;

}
</style>