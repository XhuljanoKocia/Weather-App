const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets: cityDets,
        weather: weather
    };
};

cityForm.addEventListener('submit', e => {
    // Prevent default action so it doesn't refresh the page
    e.preventDefault();

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update the UI with the new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
});