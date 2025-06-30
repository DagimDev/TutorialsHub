// 3. Get Current Date in YYYY-MM-DD Format

const getToday = () => new Date().toISOString().split('T')[0];
console.log(getToday());