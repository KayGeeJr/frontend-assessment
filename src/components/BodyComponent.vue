<template>
    <div>
        <h2>Selected Date: {{ computedSelectedDate }}</h2>
        
        
        <h3 style="margin-top: 30px;">Facts about Cats</h3>
        <table v-if="cats.length">
            <thead>
                <tr>
                    <th>Breed</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>Facts</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cat in cats" :key="cat.breed">
                    <td>{{ cat.breed }}</td>
                    <td>{{ cat.size.weight }}</td>
                    <td>{{ cat.size.height }}</td>
                    <td>{{ cat.fact }}</td>
                </tr>
            </tbody>
          
        </table>

        <div v-if="randomFact">
            <h2>Random Fact</h2>
            <p><strong>Breed:</strong>{{ randomFact.breed }}</p>
            <p><strong>Fact:</strong>{{ randomFact.fact }}</p>

        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    props: ["selectedDate"],
    data() {
        return{
            ip: "",
            flashing: true,
            cats: [],
            randomFact: null,
          
        };
    },

    computed: {
        computedSelectedDate() {
            return this.selectedDate || new Date();
        }
    },
    
    created() {
        this.fetchIP();
        this.fetchCatFacts();
        setTimeout(() => {
            this.flashing = false;
        }, 10000)
    },

    methods: {
        async fetchIP(){
            const res = await axios.get("https://api64.ipify.org?formatjson");
            this.ip = res.data.ip;
        },
        
        async fetchCatFacts() {
            try{
                const res = await axios.get("https://cat-api-pcr3.onrender.com/cats");
                this.cats = res.data;
            }catch (error) {
        console.error("Error fetching cat facts:", error);
      }
        },
        async fetchRandomFacts() {
            try{
                const res = await axios.get("https://cat-api-pcr3.onrender.com/cats/random");
                console.log("respomse", res)
                this.randomFact = res.data;
            }catch (error) {
        console.error("Error fetching cat facts:", error);
      }
        },
    },

};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    color: #000000;
}

th{
    background-color: #f4f4f4;
    color: black;

}

button{
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 15px;
}

button:hover{
    background-color: #0056b3;
}


</style>