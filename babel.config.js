module.exports = {
  presets: [
    [
      '@babel/preset-env'
    ],
  ],
  comments: false,
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-modules-commonjs',
  ],
};

