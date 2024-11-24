module.exports = {
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Untuk file CSS
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js', // Untuk file gambar
  },
  testEnvironment: 'jsdom', // Penting untuk pengujian React
};
