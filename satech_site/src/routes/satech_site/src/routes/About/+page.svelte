<script>
  // You can use Svelte's `<script>` block for logic if needed
</script>

<style>
  /* General Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }

  .container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  /* Image and Text Layout */
  .image-text-container {
    display: flex;
    align-items: center; /* Vertically align items */
    gap: 20px; /* Space between image and text */
    padding: 20px;
  }

  .left-image {
    width: 200px; /* Fixed width for the image */
    height: auto;
    border-radius: 10px; /* Rounded corners for the image */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow */
  }

  .text-content {
    flex: 1; /* Allows text to take remaining space */
  }

  .heading {
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;
  }

  .content {
    font-size: 16px;
    color: #555;
    line-height: 1.6; /* Increases readability */
  }

  @media (max-width: 768px) {
    .image-text-container {
      flex-direction: column; /* Stack image and text */
      align-items: center; /* Center align items */
      text-align: center; /* Center text content */
    }

    .left-image {
      width: 100%; /* Make image responsive */
      max-width: 300px; /* Optional: Limit max width */
    }
  }
</style>

<div class="container">
  <div class="image-text-container">
    <!-- Left Side: Image -->
    <img
      src="https://satechstudios.vercel.app/women-working.png"
      alt="Example"
      class="left-image"
    />
    <!-- Right Side: Heading and Content -->
    <div class="text-content">
      <h1 class="heading">ABOUT US</h1>
      <p class="content">
        We specialize in offering courses covering AR/VR, Photoshop, After
        Effects, UI/UX, 3D modeling, gaming, and more. Additionally, our
        experienced and creative freelance team delivers stunning outputs
        meeting modern .
      </p>
    </div>
  </div>
</div>
