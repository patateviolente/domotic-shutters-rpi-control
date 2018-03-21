module.exports = {
  server: {
    port: 8086,
    simulate: false,
    gpioBCM: true, // true to user GPIO num, or false to user PI pins number
    idle: 30 // Seconds before reset on channel 1, false to disable
  },
  // Set input
  gpio: {
    prev: 19,
    next: 26,
    open: 16,
    stop: 20,
    close: 21
  },
  controller: {
    channels: 8,
    allowPrev: true,
    allowNext: true
  },
  // Press button duration
  timing: {
    durationSelectButton: 100,
    durationRadioButton: 500,
    sleepDuration: 50,
    // Average open / close duration of your shutters
    realtime: {
      open: 27000,
      close: 27000,
      stop: 500
    }
  }
};
