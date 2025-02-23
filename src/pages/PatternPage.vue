<template>
    <div class="container">  
    <div class="pattern-box">
        <h2>Generated Pattern</h2>
        <pre class="body">{{ pattern }}</pre>

    </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            pattern: "",
        };
    },

    created() {
        this.generatePattern();
    },

    methods:{
        generatePattern(){
            let output = "";
            let size = 20;

            for (let i = size; i > 0; i -= 2) {
                let symbols = i % 4 === 0 ? "#".repeat(i) : "*".repeat(i);
                output += symbols + "\n"
            }
            this.pattern = output;
        },
    },
}
</script>

<style scoped>
.container{
    background: url("@/assets/abstract-background.jpg");
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f4f4f4;
    font-size:x-large;
}

.pattern-box{
    padding: 20px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    border-radius: 8px;
    min-width: 300px;
}
pre{
    font-family: monospace;
    white-space: pre;
    text-align: start;
}
</style>