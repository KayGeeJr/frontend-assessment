<template>
    <div class="login-container">
      <div class="login-box">
        <img src="@/assets/date.png" alt="image" class="logo" />
        <p>Please Login with your email and password</p>
  
        <form @submit.prevent="loginUser">
          <input type="text" v-model="email" placeholder="Email" required />
          <input type="password" v-model="password" placeholder="Password" required />
          <div class="button-container">
            <button type="button" @click="forgotPassword" class="secondary-btn">Forgot Password</button>
            <button type="submit" class="primary-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "admin",
        password: "password",
      };
    },
    methods: {
      loginUser() {
        if (this.email && this.password) {
          this.$router.push("/dashboard");
        } else {
          alert("Incorrect email or password");
        }
      },
      forgotPassword() {
        alert("Forgot Password feature coming soon!");
      },
    },
  };
  </script>
  
  <style scoped>
 
  .login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(138, 193, 209, 0.1);
  }
  
 
  .login-box {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
  }
  
 
  .logo {
    width: 200px;
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  
  .primary-btn, .secondary-btn {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .primary-btn {
    background-color: #007bff;
    color: white;
  }
  
  .primary-btn:hover {
    background-color: #0056b3;
  }
  
  .secondary-btn {
    background-color: #f8f9fa;
    color: #333;
  }
  
  .secondary-btn:hover {
    background-color: #e2e6ea;
  }
  </style>
  