<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Augmented Stove</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Additional styles for slider pane */
    .slider-pane {
      display: none;
      position: fixed;
      top: 30%;
      left: 30%;
      width: 40%;
      height: 20%;
      background-color: rgba(255, 255, 255, 0.9);
      border: 2px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      padding: 20px;
      text-align: center;
    }

    .slider {
      width: 80%;
      margin: 20px auto;
    }

    .close-btn {
      margin-top: 10px;
      padding: 5px 15px;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .close-btn:hover {
      background-color: #d32f2f;
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <img src="icon.jpg" alt="Stove Icon" class="icon" />
      <h1 class="title">Augmented Stove</h1>
      <div class="notification">
        <button class="notifbutton"><img src="notificon.png" alt="Notification Bell" class="notificon"/></button>
      </div>
    </header>
    
    <div class="content">
      <div class="row">
        <div class="stove-picture"><img src="stove-pic.png" alt="Stove" class="stovepic" /></div>
        <div class="status">
          <h3>STATUS</h3>
          <p>--</p>
        </div>
      </div>

      <div class="buttons">
        <button class="button" id="summonCopilotBtn">SUMMON COPILOT</button>
        <button class="button" id="percentBtn">PERCENT</button>
        <button class="button stop" id="stopBtn">STOP</button>
      </div>
    </div>
  </div>

  <!-- Slider Pane -->
  <div class="slider-pane" id="sliderPane">
    <h3>Set Percentage</h3>
    <input type="range" class="slider" id="percentageSlider" min="0" max="100" value="50">
    <p id="sliderValue">Value: 50%</p>
    <button class="close-btn" id="closeSliderBtn">Close</button>
  </div>

  <script>
    // JavaScript functionality
    const percentBtn = document.getElementById('percentBtn');
    const sliderPane = document.getElementById('sliderPane');
    const closeSliderBtn = document.getElementById('closeSliderBtn');
    const percentageSlider = document.getElementById('percentageSlider');
    const sliderValue = document.getElementById('sliderValue');

    // Show slider pane when 'PERCENT' button is clicked
    percentBtn.addEventListener('click', () => {
      sliderPane.style.display = 'block';
    });

    // Update slider value dynamically
    percentageSlider.addEventListener('input', () => {
      sliderValue.textContent = `Value: ${percentageSlider.value}%`;
    });

    // Close slider pane when 'Close' button is clicked
    closeSliderBtn.addEventListener('click', () => {
      sliderPane.style.display = 'none';
    });
  </script>
</body>
</html>
