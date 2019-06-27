/* eslint-disable quotes */
/* eslint-disable indent */
Module.register("haunted-mirror", {

  defaults: {
    text: "HAUNTED MEEERRRORRRR!",

  },

  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.id = 'wrapper';

    // setTimeout(function () {
    //   console.log('timeout');
    // }, 300000);

    this.alyssa(wrapper)

    return wrapper;
  },

  alyssa: function (wrapper) {
    console.log('alyssa!');
    var deathWrapper = document.createElement("div");
    deathWrapper.id = 'death-wrapper';
    var deathPic = document.createElement("img");
    deathPic.src = "/haunted-mirror/red-death.png";
    deathPic.id = 'death-pic';
    deathPic.class =
      // deathPic.style.maxHeight = "500px"
      deathWrapper.appendChild(deathPic);
    wrapper.appendChild(deathWrapper)
  },

  getStyles: function () {
    return [this.file("haunted-mirror.css")]
  },
});