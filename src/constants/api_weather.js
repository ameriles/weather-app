const api_key = '4e8471cf1925105f577ae112c003bd99';
const location = 'San Salvador de Jujuy,ar';
const base_url = 'http://api.openweathermap.org/data/2.5/weather';
export const api_url = `${base_url}?q=${location}&appid=${api_key}&units=metric`;