var sf = require('scale_finder');
var assert = require('assert');
var should = require('should');

function clone(obj) {
    if (null == obj || "object" != typeof obj)
	return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
	if (obj.hasOwnProperty(attr))
	    copy[attr] = obj[attr];
    }
    return copy;
}

describe('sf', function () {
    it('should be have #find_scale', function () {
	sf.should.have.property('find_scale');
    });

    it('each chord should have equal number of steps and semitones', function () {
	sf.chords.forEach(function (chord) {
	    chord.semitones.length.should.be.equal(chord.steps.length);
	});
    });

    it('simple chords parsing', function () {
	var root_keys = [];
	var alphabet_letters = Object.keys(sf.alphabet);
	for (var root_key in sf.tones) {
	    if (sf.tones.hasOwnProperty(root_key)) {
		root_keys.push(root_key.toString());
	    }
	}

	root_keys.every(function (root_key) {
	    if (root_key.length < 3) {
		sf.chords.forEach(function (chord) {

		    var chord_name = root_key.concat(chord.suffix);
		    var alphabet_offset = sf.alphabet[root_key.charAt(0)];
		    var keys = [];
		    var root_tone = sf.tones[root_key];

		    chord.steps.forEach(function (step, i) {
			var letter = alphabet_letters[(step + alphabet_offset - 1) % 7];
			var key_variants = sf.get_tone_by_value((chord.semitones[i] + root_tone) % 12);
			key_variants.forEach(function (variant) {
			    if (letter == variant.charAt(0)) {
				keys.push(variant);
			    }
			});
		    });

		    sf.parse_chord(chord_name).should.eql({
			root_tone: sf.tones[root_key],
			bass_tone: null,
			root_key: root_key,
			bass_key: null,
			tones: chord.semitones,
			keys: keys,
			suffix: chord.suffix,
		    });

		});
	    }
	    return true;
	});
    });
    
    it('chords with bass parsing', function () {
	this.timeout(3000);
	var root_keys = [];
	var alphabet_letters = Object.keys(sf.alphabet);
	for (var root_key in sf.tones) {
	    if (sf.tones.hasOwnProperty(root_key)) {
		root_keys.push(root_key.toString());
	    }
	}

	root_keys.every(function (root_key) {
	    if (root_key.length < 3) {
		root_keys.every(function (bass_key) {
		    if (bass_key.length < 3) {
			sf.chords.forEach(function (chord) {
			    var exists = false;
			    var chord_name = root_key
				    .concat(chord.suffix)
				    .concat('/')
				    .concat(bass_key);
			    var alphabet_offset = sf.alphabet[root_key.charAt(0)];
			    var keys = [];
			    var root_tone = sf.tones[root_key];
			    var bass_tone = sf.tones[bass_key];
			    var chord_tones = clone(chord.semitones);

			    chord.steps.forEach(function (step, i) {
				var letter = alphabet_letters[(step + alphabet_offset - 1) % 7];
				var key_variants = sf.get_tone_by_value((chord_tones[i] + root_tone) % 12);
				key_variants.forEach(function (variant) {
				    if (letter == variant.charAt(0)) {
					keys.push(variant);
				    }
				});
			    });
			    var bass_tone_in_chord = (12 - root_tone + bass_tone) % 12;
			    chord_tones.every(function (chord_tone) {
				if (chord_tone == bass_tone_in_chord) {
				    exists = true;
				    return false
				}
				return true;
			    });

			    if (exists == false) {
				chord_tones.push(bass_tone_in_chord);
			    }
			    
			    sf.parse_chord(chord_name).should.eql({
				root_tone: root_tone,
				bass_tone: bass_tone,
				root_key: root_key,
				bass_key: bass_key,
				tones: chord_tones,
				keys: keys,
				suffix: chord.suffix,
			    });
			});
		    }
		    return true;
		});
	    }
	    return true;
	});
    });

//    it('scale parsing', function () {
//	var chord_set = ['B',
//	    'F#/B',
//	    'B',
//	    'F#/B',
//	    'B',
//	    'E/B',
//	    'F#/B',
//	    'B',
//	    'E/B',
//	    'F#/B',
//	    'B',
//	    'E/B',
//	    'F#/B',
//	    'B',
//	    'E',
//	    'F#sus2',
//	    'F#',
//	    'B',
//	    'E',
//	    'B',
//	    'G#m',
//	    'F#sus2',
//	    'F#',
//	    'E',
//	    'B',
//	    'E',
//	    'F#',
//	    'B',
//	    'E',
//	    'B',
//	    'F#',
//	    'C#m',
//	    'E',
//	    'B',
//	    'E',
//	    'C#m',
//	    'E',
//	    'B',
//	    'F#',
//	    'C#m'];
//
//	sf.find_scale(chord_set);
//    });


});