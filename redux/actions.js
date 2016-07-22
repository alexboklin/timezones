let actions = {
  // TODO: use arrow functions
  addTimezone: function(text) {
    return {
      type: 'ADD_CITY',
      text: text
    }
  },

  deleteTimezone: function(id) {
    return {
      type: 'DELETE_CITY',
      id: id
    }
  }

};

export default actions