Error Handling: Added validation to check if the response is successful (res.ok). If not, an error is thrown.

Loading Indicator: Disabled the "Fetch User" button while the data is being fetched (button.disabled = true). This prevents users from triggering multiple requests.

Error Message: If fetching fails, an alert is displayed to the user with a generic error message.

Button Re-enable: After fetching completes (either successfully or with an error), the "Fetch User" button is re-enabled (button.disabled = false). This allows users to fetch again if needed.

Used optional chaining to In the displayRandomUser function to ensure that randomUser, 
randomUser.address, and randomUser.company exist before accessing their properties.

320–480px: Mobile devices
481–768px: iPads, tablets
769–1024px: Small screens, laptops
1025–1200px: Desktops, large screens
1201px and more: Extra large screens, TV

These changes improve the robustness and user experience of code.
