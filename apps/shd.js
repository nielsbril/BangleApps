var part = 0;
var parts = ['Hello', 'Studio', 'Hyperdrive', ''];

var img = {
  width: 192,
  height: 192,
  bpp: 4,
  transparent: 4,
  buffer: require('heatshrink').decompress(atob('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')),
};

setInterval(() => {
  if (part === parts.length - 1) {
      E.showMessage('');
      g.drawImage(img, Math.floor((g.getWidth() - 192) / 2), Math.floor((g.getHeight() - 192) / 2));
  } else {
      E.showMessage(parts[part]);
  }

  part++;

  if (part === parts.length) {
    part = 0;
  }
}, 1000);
