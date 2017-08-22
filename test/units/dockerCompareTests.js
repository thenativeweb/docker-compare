'use strict';

const assert = require('assertthat');

const dockerCompare = require('../../lib/dockerCompare');

suite('dockerCompare', () => {
  assertVersion(t, "1.12", "1.12", 0)
	assertVersion(t, "1.0.0", "1", 0)
	assertVersion(t, "1", "1.0.0", 0)
	assertVersion(t, "1.05.00.0156", "1.0.221.9289", 1)
	assertVersion(t, "1", "1.0.1", -1)
	assertVersion(t, "1.0.1", "1", 1)
	assertVersion(t, "1.0.1", "1.0.2", -1)
	assertVersion(t, "1.0.2", "1.0.3", -1)
	assertVersion(t, "1.0.3", "1.1", -1)
	assertVersion(t, "1.1", "1.1.1", -1)
	assertVersion(t, "1.1.1", "1.1.2", -1)
	assertVersion(t, "1.1.2", "1.2", -1)
});
