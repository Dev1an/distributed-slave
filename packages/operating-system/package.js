Package.describe({
  name: 'operating-system',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use('ecmascript');
  api.addFiles('operating-system.js', 'server');

  api.export('operatingSystem')
  api.export('runApplescript')
  api.export('getDriveInfo')
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('operating-system');
  api.addFiles('operating-system-tests.js');
});

Npm.depends({
  'node-osascript': '1.0.2',
  'visual-prompt': '0.0.5',
  'diskspace': '1.0.2'
})
