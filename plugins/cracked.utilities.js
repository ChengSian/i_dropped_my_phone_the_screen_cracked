  /**
   * Frequency setter convenience method
   * @plugin
   * @param {Number} userParam frequency to set
   */
  cracked.frequency = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "frequency": userParam
      });
    }
    return cracked;
  };

  /**
   * Detune setter convenience method
   * @plugin
   * @param {Number} userParam detune frequency to set
   */
  cracked.detune = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "detune": userParam
      });
    }
    return cracked;
  };

  /**
   * Gain setter convenience method
   * @plugin
   * @param {Number} userParam gain to set
   */
  cracked.volume = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "gain": userParam
      });
    }
    return cracked;
  };

  /**
   * Delay time setter convenience method
   * @plugin
   * @param {Number} userParam delay time to set
   */
  cracked.time = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "delay": userParam
      });
    }
    return cracked;
  };

  /**
   * Feedback setter convenience method
   * @plugin
   * @param {Number} userParam feedback amount to set
   */
  cracked.feedback = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "feedback": userParam
      });
    }
    return cracked;
  };

  /**
   * Speed setter convenience method
   * @plugin
   * @param {Number} userParam sampler speed to set
   */
  cracked.speed = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "speed": userParam
      });
    }
    return cracked;
  };

  /**
   * Drive setter convenience method
   * @plugin
   * @param {Number} userParam drive distortion/waveshaper/etc to set
   */
  cracked.drive = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "drive": userParam
      });
    }
    return cracked;
  };

  /**
   * Distortion setter convenience method
   * @plugin
   * @param {Number} userParam distortion to set
   */
  cracked.distortion = function(userParam) {
    if (__.isNum(userParam)) {
      cracked.attr({
        "distortion": userParam
      });
    }
    return cracked;
  };

  /**
   * Convenient way to say start everything
   * @plugin
   */
  cracked.play = function() {
    cracked("*").start();
    return cracked;
  };

  /**
   * Returns a musical scale/mode based on type
   * @plugin
   * @param {String} type scale type
   */
  cracked.scale = function(type) {
    return {
      "major": [0, 2, 4, 5, 7, 9, 11],
      "minor": [0, 2, 3, 5, 7, 8, 10]
    }[type];
  };

  //from https://github.com/hoch/WAAX/blob/master/src/core/Helper.js
  /**
   * Converts a pitch value to frequency
   * @plugin
   * @param {Number} pitch
   */
  cracked.pitch2freq = function(pitch) {
    return 440.0 * Math.pow(2, ((Math.floor(pitch) - 69) / 12));
  };

  /**
   * Returns a random number between min & max
   * @plugin
   * @param {Number} min
   * @param {Number} max
   */
  cracked.random = function(min, max) {
    return Math.round(min + Math.random() * (max - min));
  };