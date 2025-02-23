<template>
    <div class="date-picker-container">
        <label for="date">Select Date</label>
        <VueDatePicker
            v-model="selectedDate"
            :format="'yyyy-MM-dd'"
            @update:modelValue="emitDateChange"
            :autoApply="true"
            class="custom-datepicker"
        />

      
        <h3 v-if="flashing">{{ ip }}</h3>

    
        <img v-if="showImage" style="width: 40px; height: 40px;" src="@/assets/date.png" alt="Hidden IP" />
    </div>
</template>

<script>
import axios from "axios";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
    components: {
        VueDatePicker
    },
    data() {
        return {
            selectedDate: new Date(), 
            ip: "",
            flashing: false,
            showImage: false, 
            intervalId: null
        };
    },

    methods: {
        emitDateChange(value) {
            this.selectedDate = value;
            this.$emit("date-changed", this.selectedDate);
            this.fetchIP(); 
        },

        async fetchIP() {
            try {
                const res = await axios.get("https://api64.ipify.org?format=json");
                this.ip = res.data.ip;
                this.startFlashing();
            } catch (error) {
                console.error("Error fetching IP:", error);
            }
        },

        startFlashing() {
            let counter = 0;
            this.flashing = true;
            this.showImage = false; 

   
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }

            this.intervalId = setInterval(() => {
                this.flashing = !this.flashing;
                counter++;

                if (counter >= 10) {
                    clearInterval(this.intervalId);
                    this.flashing = false;
                    this.showImage = true;
                }
            }, 1000);
        }
    }
};
</script>

<style scoped>
.date-picker-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

label {
    font-weight: bold;
    color: #000000;
}

.custom-datepicker {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 8px;
    font-size: 14px;
    color: #000000;
    background-color: #ffffff;
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.1);
}
.dp__menu {
    background-color: white !important; 
    color: black !important; 
}

.dp__cell_inner {
    color: black !important;
}

.custom-datepicker:focus {
    outline: 2px solid #3498db;
    box-shadow: 0px 0px 5px rgba(52, 152, 219, 0.5);
}

h3{
    color: red;
}
</style>
