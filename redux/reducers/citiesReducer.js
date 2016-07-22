function getId(cities) {return cities.reduce((maxId, city) => {
    return Math.max(city.id, maxId)
  }, -1) + 1
}

let timezoneReducer = function(cities = [], action) {
  switch (action.type) {
    case 'ADD_CITY':
      return [{
          text: action.text,
          completed: false,
          id: getId(cities)
        }, ...cities];
    case 'DELETE_CITY':
      return cities.filter((city) => {
        return city.id !== action.id
      });
    default: 
      return cities;
  }
};

export default timezoneReducer