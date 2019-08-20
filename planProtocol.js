module.exports = (planNumber) => {
  const command = [
    0x02,
    0xFA,
    0xFF,
    0xFF,
    0xF9,
    planNumber,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
  ];

  return new Uint8Array(
    command.concat([command.reduce((a, c) => a + c, 0), 0xF7, 0x03]),
  );
};
