module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // 아래 폴더들은 Jest가 탐색하지 않도록 무시합니다.
  testPathIgnorePatterns: ['/node_modules/', '/.vscode/', '/.cursor/', '/.antigravity/'],
  modulePathIgnorePatterns: ['/.vscode/', '/.cursor/', '/.antigravity/']
};