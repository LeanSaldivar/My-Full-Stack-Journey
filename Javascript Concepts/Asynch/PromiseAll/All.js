// ========== PROMISE.ALL DEMO ==========
// Promise.all() takes an array of promises and returns a new promise
// It resolves when ALL input promises have resolved, or rejects if ANY promise rejects


// --- Example Promises with different resolution types and timing ---

// 1. Already resolved promise (resolves immediately)
const promise1 = Promise.resolve('Hello World!');
console.log('📌 Created promise1: Already resolved promise');

// 2. Non-promise value (automatically wrapped in a resolved promise)
const promise2 = 42;
console.log('📌 Created promise2: Non-promise value (will be auto-wrapped)');

// 3. Promise with a delay (resolves after 2 seconds)
const promise3 = new Promise((resolve, reject) => {
    console.log('⏳ promise3: Starting 2-second timer...');
    setTimeout(() => {
        console.log('⌛ promise3: Timer complete, resolving now');
        resolve('Goodbye');
    }, 2000);
});
console.log('📌 Created promise3: Promise with 2-second delay');

// 4. Fetch API promise (network request) with chained transformation
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log('🌐 promise4: Rec eived API response, converting to JSON');
        return response.json();
    });
console.log('📌 Created promise4: Fetch API promise (network request)');

// --- Using Promise.all to handle multiple promises together ---
console.log('⏳ Initiating Promise.all with all four promises...');
console.log('⏳ Promise.all will wait for ALL promises to resolve');

Promise.all([promise1, promise2, promise3, promise4])
    .then(values => {
        // This executes only when ALL promises have resolved
        console.log('✅ ALL PROMISES RESOLVED SUCCESSFULLY!');
        console.log('📊 Results array (in same order as input promises):');

        // Log each promise result individually for clarity
        values.forEach((value, index) => {
            console.log(`  Promise ${index + 1} result:`, value);
        });

        // Log entire results array
        console.log('📊 Complete results array:', values);
    })
    .catch(error => {
        // This executes if ANY promise rejects
        console.error('❌ AT LEAST ONE PROMISE REJECTED!');
        console.error('❌ Error details:', error);
        console.error('❌ Note: Promise.all fails fast - it rejects immediately when any promise rejects');
    })
    .finally(() => {
        console.log('🏁 Promise.all operation completed (either resolved or rejected)');
    });

console.log('⚠️ Code execution continues immediately without waiting for Promise.all');
console.log('⚠️ The .then/.catch handlers will execute asynchronously when promises settle');