const API_KEY="07a541532185b3c3ecdb7342f0640ae9"
//fonk şehir ve birim bilgilerini parametre olaral alır
// fonksiyon şehir ve birim bilgilerini parametre olarak alır
async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    // console.log(response.json());
    // eğer istek başarılı değilse hata fırlat
    if (!response.ok) {
      throw new Error("İstek başarılı değil");
    }
    // api'den gelen yanıtı JSON formatına dönüştür ve geri dönder
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
// fetchWeatherData fonksiyonunu diğer dosyalarda kullanılabilir hale getir.
export default fetchWeatherData;