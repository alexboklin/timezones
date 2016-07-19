let actions = {
  addTimezone: function(text) {
    return {
      type: 'ADD_TIMEZONE',
      text: text
    }
  },

  deleteTimezone: function(id) {
    return {
      type: 'DELETE_TIMEZONE',
      id: id
    }
  },

}

export default actions