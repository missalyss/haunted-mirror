/* eslint-disable quotes */
/* eslint-disable indent */
Module.register("haunted-mirror", {

  defaults: {
    // other default values go here and are accessible by this.config
    text: "Haunted Mirror",
    view: 'blood-drip'
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
    wrapper.style.display = "flex";
    wrapper.style.width = '100vw';
    wrapper.style.height = '100vh';
    console.log(this.config);

    if (this.config.view === 'red-death') {
      self.renderRedDeath(wrapper)
    } else if (this.config.view === 'blood-drip') {
      self.renderBlood(wrapper)
    }

    return wrapper;
  },

  renderBlood: function (wrapper) {
    var bloodWrapper = document.createElement("div");
    bloodWrapper.id = 'blood-wrapper';


    var stretchWrapper = document.createElement("div");
    stretchWrapper.id = 'stretch-wrapper';
    bloodWrapper.appendChild(stretchWrapper);
    var bloodPic = document.createElement("img");
    bloodPic.src = "/haunted-mirror/blood-drip.png";
    bloodPic.id = 'blood-pic';
    var redBlock = document.createElement("img");
    redBlock.src = "/haunted-mirror/red-block.png";
    redBlock.id = 'red-block';

    // var helpMe = document.createElement('p')
    // helpMe.id = 'help-me';
    // helpMe.innerHTML = 'help me...';
    // stretchWrapper.appendChild(helpMe)
    stretchWrapper.appendChild(redBlock)
    stretchWrapper.appendChild(bloodPic);
    console.log('WRAPPER: ', stretchWrapper);

    return wrapper.appendChild(bloodWrapper)
  },

  renderRedDeath: function (wrapper) {
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
    return [
      this.file('red-death.css'),
      this.file('blood-drip.css')
    ]
  },
});