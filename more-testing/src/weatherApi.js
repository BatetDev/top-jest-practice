// Simulates / mocks an external API

module.experts = {
  getTemperature: (city) => {
    // In reality, this would be a real fetch call
    console.log('Real API called for ${city}'); // Won't run in tests
    return 25; // Hard-coded for simplicity
  },
};
