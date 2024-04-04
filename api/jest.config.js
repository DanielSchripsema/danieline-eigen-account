module.exports = {
    // Indicates which environment Jest should run in
    testEnvironment: 'node',
  
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  
    // Transform files with babel-jest
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  };
  