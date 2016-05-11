var Cylon = require('cylon');

Cylon.robot({
  connections: {
    crazyflie: { adaptor: 'crazyflie', port: 'radio://1/10/250KPS' }
  },

  devices: {
    drone: { driver: 'crazyflie' }
  },

  work: function(my) {
    my.drone.takeoff();
    after((10).seconds(), function() {
      my.drone.land();
    });
    after((15).seconds(), function() {
      my.drone.stop();
    });
  }
}).start();