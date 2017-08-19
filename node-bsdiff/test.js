fs = require('fs');
assert = require('assert');

bs = require('./index');

bs.diff('./dist.zip', './dist1.zip', './old-to-new.patch', function(err) {
    bs.patch('./dist.zip', './dist2.zip', './old-to-new.patch', function(err) {
        originalFile = fs.readFileSync('./dist1.zip', { encoding: 'utf8' });
        generateFile = fs.readFileSync('./dist2.zip', { encoding: 'utf8' });

        assert(originalFile == generateFile, "Files should have been equal");
    });
});