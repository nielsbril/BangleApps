var part = 0;
var parts = ['Hello', 'Studio', 'Hyperdrive'];

setInterval(() => {
  E.showMessage(parts[part]);

  part++;

  if (part === parts.length) {
    part = 0;
  }
}, 1000);
