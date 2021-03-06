var sf = require('../scale_finder.js');
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

    console.log(sf);

    it('each chord should have equal number of steps and semitones', function () {
	sf.chords.forEach(function (chord) {
	    chord.tones.length.should.be.equal(chord.steps.length);
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
			var key_variants = sf.get_tone_by_value((chord.tones[i] + root_tone) % 12);
			key_variants.forEach(function (variant) {
			    if (letter == variant.charAt(0)) {
				keys.push(variant);
			    }
			});
		    });

		    sf.parse_chord(chord_name).should.eql({
			string: chord_name,
			root_tone: sf.tones[root_key],
			bass_tone: null,
			root_key: root_key,
			bass_key: null,
			tones: chord.tones,
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
			    var chord_tones = clone(chord.tones);

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

			    if (keys.indexOf(bass_key) == -1) {
				keys.push(bass_key);
			    }

			    sf.parse_chord(chord_name).should.eql({
				string: chord_name,
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

    it('scale parsing', function () {

	var chord_set_1 = ['Am', 'F', 'C', 'G'];
	sf.find_scale(chord_set_1).should.eql(
		{
		    root_key: 'A',
		    scale: 1,
		    tones: [0, 2, 3, 5, 7, 8, 10],
		    keys: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
		    extra_tones: [],
		    extra_keys: [],
		    extra_steps: []
		});

	var chord_set_2 = ['G',
	    'C',
	    'Em',
	    'D',
	    'G',
	    'C',
	    'Em',
	    'D',
	    'G',
	    'C',
	    'Em',
	    'D',
	    'C',
	    'G/H',
	    'Am',
	    'Hm',
	    'C',
	    'G',
	    'F/A',
	    'D',
	    'G',
	    'C',
	    'Em',
	    'D',
	    'G',
	    'C',
	    'Em',
	    'D',
	    'Eb',
	    'F',
	    'Eb',
	    'F'];
	sf.find_scale(chord_set_2).should.eql(
		{
		    extra_keys: ['Bb', 'Eb', 'F'],
		    extra_steps: [3, 6, 0],
		    extra_tones: [3, 8, 10],
		    keys: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
		    root_key: 'G',
		    scale: 0,
		    tones: [0, 2, 4, 5, 7, 9, 11]
		});


	var chord_set_3 = ['Hm',
	    'G',
	    'D',
	    'A',
	    'Hm',
	    'G',
	    'D',
	    'G',
	    'D/F#',
	    'G',
	    'Hm',
	    'A/C#',
	    'G',
	    'D/F#',
	    'Hm',
	    'A/C#',
	    'Hm',
	    'G',
	    'D',
	    'A'];
	sf.find_scale(chord_set_3).should.eql(
		{
		    extra_keys: [],
		    extra_steps: [],
		    extra_tones: [],
		    keys: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
		    root_key: 'B',
		    scale: 1,
		    tones: [0, 2, 3, 5, 7, 8, 10]
		});

	var chord_set_4 = ['Gb',
	    'Bbm',
	    'Ab6',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Ebm',
	    'Db/F',
	    'Ab',
	    'Ab/C',
	    'Db',
	    'Ebm',
	    'Db/F',
	    'Ab',
	    'Gb/Bb',
	    'Ab/C',
	    'Bbm',
	    'Ab/C',
	    'Db',
	    'Ebm',
	    'Bbm',
	    'Ab',
	    'Bbm',
	    'Ab/C',
	    'Db',
	    'Ebm',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm7',
	    'Ab',
	    'Ebm',
	    'Bbm7',
	    'Ab',
	    'Gb',
	    'Bbm7',
	    'Ab',
	    'Ebm',
	    'Bbm7',
	    'Ab',
	    'Gbmaj',
	    'Ab6',
	    'Gbmaj',
	    'Gb6',
	    'Gbmaj/Bb',
	    'Ab/C',
	    'Gbmaj/Bb',
	    'Ab/C',
	    'Gb',
	    'Ab',
	    'Gb',
	    'Ab'];

	sf.find_scale(chord_set_4).should.eql(
		{
		    extra_keys: [],
		    extra_steps: [],
		    extra_tones: [],
		    keys: ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
		    root_key: 'Bb',
		    scale: 1,
		    tones: [0, 2, 3, 5, 7, 8, 10]
		});

    });

    it('transpose', function () {

	var chord_set_1 = ['Am', 'F', 'C', 'G'];
	sf.transpose(chord_set_1, "B").should.eql({
	    Am: 'Bm',
	    F: 'G',
	    C: 'D',
	    G: 'A'
	});

	var chord_set_2 = ['G', 'C', 'Em', 'D', 'G', 'C', 'Em', 'D', 'G', 'C', 'Em', 'D', 'C', 'G/H', 'Am', 'Hm', 'C', 'G', 'F/A', 'D', 'G', 'C', 'Em', 'D', 'G', 'C', 'Em', 'D', 'Eb', 'F', 'Eb', 'F'];

	sf.transpose(chord_set_2, "C")
		.should.eql(
			{
			    G: 'C',
			    C: 'F',
			    Em: 'Am',
			    D: 'G',
			    'G/H': 'C/E',
			    Am: 'Dm',
			    Hm: 'Em',
			    'F/A': 'Bb/D',
			    Eb: 'Ab',
			    F: 'Bb'
			}
		);

	sf.transpose(chord_set_2, "C#")
		.should.eql(
			{
			    G: 'C#',
			    C: 'F#',
			    Em: 'A#m',
			    D: 'G#',
			    'G/H': 'C#/E#',
			    Am: 'D#m',
			    Hm: 'E#m',
			    'F/A': 'B/D#',
			    Eb: 'A',
			    F: 'B'
			}
		);

	sf.transpose(chord_set_2, "Db")
		.should.eql(
			{
			    G: 'Db',
			    C: 'Gb',
			    Em: 'Bbm',
			    D: 'Ab',
			    'G/H': 'Db/F',
			    Am: 'Ebm',
			    Hm: 'Fm',
			    'F/A': 'Cb/Eb',
			    Eb: 'Bbb',
			    F: 'Cb'
			}
		);

	var chord_set_3 = ['Gb',
	    'Bbm',
	    'Ab6',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm',
	    'Ab',
	    'Ebm',
	    'Db/F',
	    'Ab',
	    'Ab/C',
	    'Db',
	    'Ebm',
	    'Db/F',
	    'Ab',
	    'Gb/Bb',
	    'Ab/C',
	    'Bbm',
	    'Ab/C',
	    'Db',
	    'Ebm',
	    'Bbm',
	    'Ab',
	    'Bbm',
	    'Ab/C',
	    'Db',
	    'Ebm',
	    'Bbm',
	    'Ab',
	    'Gb',
	    'Bbm7',
	    'Ab',
	    'Ebm',
	    'Bbm7',
	    'Ab',
	    'Gb',
	    'Bbm7',
	    'Ab',
	    'Ebm',
	    'Bbm7',
	    'Ab',
	    'Gbmaj',
	    'Ab6',
	    'Gbmaj',
	    'Gb6',
	    'Gbmaj/Bb',
	    'Ab/C',
	    'Gbmaj/Bb',
	    'Ab/C',
	    'Gb',
	    'Ab',
	    'Gb',
	    'Ab'];

	sf.transpose(chord_set_3, "C")
		.should.eql(
			{
			    Ab: 'Bb',
			    'Ab/C': 'Bb/D',
			    Ab6: 'Bb6',
			    Bbm: 'Cm',
			    Bbm7: 'Cm7',
			    Db: 'Eb',
			    'Db/F': 'Eb/G',
			    Ebm: 'Fm',
			    Gb: 'Ab',
			    'Gb/Bb': 'Ab/C',
			    Gb6: 'Ab6',
			    Gbmaj: 'Abmaj',
			    'Gbmaj/Bb': 'Abmaj/C'

			}
		);

    });
});