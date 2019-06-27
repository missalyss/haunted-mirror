Module.register("hauntedmirror", {
  // Default module config.
  defaults: {
    text: "HAUNTED MEEERRRORRRR!"
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;
    return wrapper;
  }
});