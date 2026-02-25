// Get DOM elements
        const form = document.getElementById('dataForm');
        const submitBtn = document.getElementById('submitBtn');
        const loadingDiv = document.getElementById('loading');
        const resultDiv = document.getElementById('result');

        // Handle form submission
        form.addEventListener('submit', async function(event) {
            // Prevent the form from actually submitting (page reload)
            event.preventDefault();
            
            // Show loading, hide previous result
            loadingDiv.style.display = 'block';
            resultDiv.style.display = 'none';
            submitBtn.disabled = true;
            
            try {
                // Collect form data
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const age = document.getElementById('age').value;
                const city = document.getElementById('city').value;
                const interestsInput = document.getElementById('interests').value;
                const notes = document.getElementById('notes').value;
                
                // Convert interests string to array if not empty
                const interestsArray = interestsInput 
                    ? interestsInput.split(',').map(item => item.trim()).filter(item => item !== '')
                    : [];
                
                // Build the data object to send
                const dataToSend = {
                    name: name,
                    email: email,
                    age: age ? parseInt(age) : null,  // Convert to number if provided
                    city: city || null,
                    interests: interestsArray,
                    notes: notes || null,
                    source: 'HTML Form',
                    timestamp: new Date().toISOString()
                };
                
                console.log('📦 Sending data:', dataToSend);
                
                // Send POST request to your backend
                const response = await fetch('http://localhost:3000/api/items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSend)
                });
                
                // Parse the response
                const result = await response.json();
                console.log('✅ Response:', result);
                
                // Show success message
                if (result.success) {
                    // Format the response nicely for display
                    const formattedData = JSON.stringify(result.data, null, 2);
                    
                    resultDiv.innerHTML = `
                        <h3>✅ Success! Data saved to MongoDB</h3>
                        <p><strong>Document ID:</strong> ${result.data._id}</p>
                        <p><strong>Created at:</strong> ${new Date(result.data.createdAt).toLocaleString()}</p>
                        <div class="response-data">
                            <strong>Complete document saved:</strong>
                            <pre>${formattedData}</pre>
                        </div>
                        <button onclick="location.reload()" style="margin-top:15px; background-color:#007bff;">➕ Add Another</button>
                    `;
                    resultDiv.className = 'result success';
                    
                    // Clear the form
                    form.reset();
                } else {
                    throw new Error(result.error || 'Unknown error occurred');
                }
                
            } catch (error) {
                console.error('❌ Error:', error);
                
                // Show error message
                resultDiv.innerHTML = `
                    <h3>❌ Error sending data to MongoDB</h3>
                    <p><strong>Error:</strong> ${error.message}</p>
                    <p>Make sure your server.js is running and MongoDB is connected.</p>
                    <div style="margin-top:15px; background-color:#f8d7da; padding:10px; border-radius:5px;">
                        <strong>Troubleshooting:</strong>
                        <ul style="margin-top:5px; margin-left:20px;">
                            <li>Is server.js running? (node server.js)</li>
                            <li>Is MongoDB connected? (check server console)</li>
                            <li>Is port 3000 correct?</li>
                            <li>Check browser console for more details (F12)</li>
                        </ul>
                    </div>
                `;
                resultDiv.className = 'result error';
            } finally {
                // Hide loading, enable button
                loadingDiv.style.display = 'none';
                submitBtn.disabled = false;
            }
        });