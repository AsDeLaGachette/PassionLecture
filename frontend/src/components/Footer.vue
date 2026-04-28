<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>Contact us:</p>
      <ul class="contact-links">
        <li>
          <a href="mailto:david.sottas@eduvaud.ch" class="contact-link">
            David Sottas
          </a>
        </li>
        <li>
          <a href="https://www.latif.codes/" target="_blank" rel="noopener noreferrer" class="contact-link">
            Latif Krasniqi
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
/* Optional styling to make the footer look clean and organized */
.footer {
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-top: 1px solid #e5e5e5;
  text-align: center;
}

.footer-content p {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.contact-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Adds space between the two names */
}

.contact-link {
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #0056b3;
  text-decoration: underline;
}
</style>