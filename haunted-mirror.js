/* eslint-disable quotes */
/* eslint-disable indent */
Module.register("haunted-mirror", {

  defaults: {
    // other default values go here and are accessible by this.config
    text: "Haunted Mirror"
  },

  start: function () { //Setting up interval for refresh
    // var self = this;
    // setInterval(function () {
    //   self.updateDom();
    //   console.log('NEW CYCLE LOU');
    // This seems to do well at restarting and waiting for an interval to restart again/recycle. Not necessary for animations yet, we're not getting data.
    // }, 20000);
  },

  getDom: function () {
    var self = this;
    var wrapper = document.createElement("div");
    wrapper.id = 'wrapper';
    wrapper.style.display = "flex"

    self.renderContent(wrapper)
    return wrapper;
  },

  renderContent: function (wrapper) {
    var fadeWrapper = document.createElement("div");
    fadeWrapper.id = 'fade-wrapper';

    var wiggleWrapper = document.createElement("div");
    wiggleWrapper.id = 'wiggle-wrapper';

    fadeWrapper.appendChild(wiggleWrapper);

    var jumpWrapper = document.createElement("div");
    jumpWrapper.id = 'jump-wrapper';
    wiggleWrapper.appendChild(jumpWrapper)
    var deathPic = document.createElement("img");
    deathPic.src = "/haunted-mirror/red-death.png";
    deathPic.id = 'death-pic';
    jumpWrapper.appendChild(deathPic);

    return wrapper.appendChild(fadeWrapper)
  },

  getStyles: function () {
    return [this.file("haunted-mirror.css")]
  },
});