<template>
  <div>
    <!-- Your app content -->
    <input type="checkbox" @click="toggleDarkMode" />{{
      isDarkMode ? "light mode off" : "light mode on"
    }}
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";

// Detects if the user has a saved preference or uses system preference as a fallback
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const isDarkMode = ref(savedTheme ? savedTheme === "dark" : prefersDark);

watchEffect(() => {
  //   const divs = document.querySelectorAll("div");
  //   divs.forEach((div) => {
  //     div.setAttribute("data-theme", isDarkMode.value ? "dark" : "light");
  //   });

  //   const PlusList = document.querySelector(".plus");
  document.body.setAttribute("data-theme", isDarkMode.value ? "dark" : "light");

  //   PlusList.setAttribute("data-theme", isDarkMode.value ? "dark" : "light");
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>
