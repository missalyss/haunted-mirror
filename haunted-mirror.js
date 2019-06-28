/* eslint-disable quotes */
/* eslint-disable indent */

// Feel free to clean up my code, it's messy in here for development reasons.
Module.register('haunted-mirror', {

  defaults: {
    // other default values go here and are accessible by this.config
    text: 'Haunted Mirror',
    view: 'blood-drip'
  },

  start: function () { //Setting up interval for refresh
    var self = this;
    let timing = 10000;

    if (this.config.view === 'blood-drip') {
      // timing = 8000
      timing = 75000;
    } else if (this.config.view === 'red-death') {
      timing = 27000
    }
    setInterval(function () {
      self.updateDom();
      console.log('NEW CYCLE LOU');
      // This seems to do well at restarting and waiting for an interval to restart again/recycle. Not necessary for animations yet, we're not getting data.
    }, timing);
  },

  getDom: function () {
    var self = this;
    var wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    if (this.config.view === 'red-death') {
      self.renderRedDeath(wrapper)
    } else if (this.config.view === 'blood-drip') {
      self.renderBlood(wrapper)
    } else {
      self.renderBlood(wrapper)
    }

    return wrapper;
  },

  renderBlood: function (wrapper) {
    var self = this;
    var bloodWrapper = document.createElement('div');
    bloodWrapper.id = 'blood-wrapper';
    bloodWrapper.classList.add('animate');

    var bloodPic = document.createElement('img');
    bloodPic.src = '/haunted-mirror/blood-drip.png';
    bloodPic.id = 'blood-pic';

    var redBlock = document.createElement('img');
    redBlock.src = '/haunted-mirror/red-block.png';
    redBlock.id = 'red-block';

    // To have writing on the top of the blood by uncommenting the below code
    // var helpMe = document.createElement('p')
    // helpMe.id = 'help-me';
    // helpMe.innerHTML = 'help me...';
    // bloodWrapper.appendChild(helpMe)

    // bloodWrapper.appendChild(stretchWrapper);
    bloodWrapper.appendChild(redBlock)
    bloodWrapper.appendChild(bloodPic);
    wrapper.appendChild(bloodWrapper);
    self.start()
  },

  renderRedDeath: function (wrapper) {
    var deathWrapper = document.createElement('div');
    deathWrapper.id = 'death-wrapper';

    var wiggleWrapper = document.createElement('div');
    wiggleWrapper.id = 'wiggle-wrapper';

    var jumpWrapper = document.createElement('div');
    jumpWrapper.id = 'jump-wrapper';

    var deathPic = document.createElement('img');
    deathPic.src = '/haunted-mirror/red-death.png';
    deathPic.id = 'death-pic';

    deathWrapper.appendChild(wiggleWrapper);
    wiggleWrapper.appendChild(jumpWrapper);
    jumpWrapper.appendChild(deathPic);
    return wrapper.appendChild(deathWrapper)
  },

  getStyles: function () {
    return [
      this.file('red-death.css'),
      this.file('blood-drip.css')
    ]
  },
});