// script.js

// Function to display a number with a delay and call a callback
function displayWithDelay(number, delay, callback) {
    setTimeout(function() {
      document.getElementById('output').textContent = number;
      callback();
    }, delay);
  }
  
  // Start the countdown
  displayWithDelay(10, 1000, function() {

    displayWithDelay(9, 1000, function( ) {

      displayWithDelay(8, 1000, function() {

        displayWithDelay(7, 1000, function() {

          displayWithDelay(6, 1000, function() {

            displayWithDelay(5, 1000, function() {

              displayWithDelay(4, 1000, function() {

                displayWithDelay(3, 1000, function() {

                  displayWithDelay(2, 1000, function() {

                    displayWithDelay(1, 1000, function() {

                      document.getElementById('output').textContent = "Happy Independence Day";
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  