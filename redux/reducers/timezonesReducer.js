function getId(timezones) {return timezones.reduce((maxId, timezone) => {
    return Math.max(timezone.id, maxId)
  }, -1) + 1
}

let timezoneReducer = function(timezones = [], action) {
  switch (action.type) {
    case 'ADD_TIMEZONE':
      return [{
          text: action.text,
          completed: false,
          id: getId(timezones)
        }, ...timezones]
    case 'DELETE_TIMEZONE':
      return timezones.filter((timezone) => {
        return timezone.id !== action.id
      })
    default: 
      return timezones;
  }
}

export default timezoneReducer