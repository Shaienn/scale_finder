
module.exports = {
    chord_regexp: /^([A-H]{1}[b\#]?)([augjnidsm+\-1-9]+[\/]+[augjnidsm+\-1-9]+|[augjnidsm+\-1-9]*)(?:\/?)([A-H]?[b\#]?)/,
    tones: {
	'Cb': 11,
	'C': 0,
	'C#': 1,
	'C##': 2,
	'Db': 1,
	'D': 2,
	'D#': 3,
	'D##': 4,
	'Ebb': 2,
	'Eb': 3,
	'E': 4,
	'E#': 5,
	'Fb': 4,
	'F': 5,
	'F#': 6,
	'F##': 7,
	'Gb': 6,
	'G': 7,
	'G#': 8,
	'G##': 9,
	'Ab': 8,
	'A': 9,
	'A#': 10,
	'Bb': 10,
	'B': 11,
	'B#': 0,
	'Hb': 10,
	'H': 11,
	'H#': 0,
    },
    alphabet: {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 1},
    scales: [
	{name: 'Major', semitones: [0, 2, 4, 5, 7, 9, 11]},
	{name: 'Natural minor', semitones: [0, 2, 3, 5, 7, 8, 10]},
	{name: 'Harmonic minor', semitones: [0, 2, 3, 5, 7, 8, 11]},
	{name: 'Melodic minor', semitones: [0, 2, 3, 5, 7, 9, 11]},
	{name: 'Dorian', semitones: [0, 2, 3, 5, 7, 9, 10]},
	{name: 'Phrygian', semitones: [0, 1, 3, 5, 7, 8, 10]},
	{name: 'Lidian', semitones: [0, 2, 4, 6, 7, 9, 11]},
	{name: 'Mixolidian', semitones: [0, 2, 4, 5, 7, 9, 10]},
	{name: 'Locrian', semitones: [0, 1, 3, 5, 6, 8, 10]},
	{name: 'Natural minor', semitones: [0, 2, 3, 5, 7, 8, 10]},
    ],
    chords: [
	{suffix: '', semitones: [0, 4, 7], steps: [1, 3, 5]}, /* C [C E G]*/
	{suffix: 'maj', semitones: [0, 4, 7], steps: [1, 3, 5]}, /* Cmaj */
	{suffix: 'm', semitones: [0, 3, 7], steps: [1, 3, 5]}, /* Cm */
	{suffix: '7', semitones: [0, 4, 7, 10], steps: [1, 3, 5, 7]}, /* C7 */
	{suffix: 'm7', semitones: [0, 3, 7, 10], steps: [1, 3, 5, 7]}, /* Cm7 */
	{suffix: 'min7', semitones: [0, 3, 7, 10], steps: [1, 3, 5, 7]}, /* Cmin7 [C Eb G Bb] */
	{suffix: 'maj7', semitones: [0, 4, 7, 11], steps: [1, 3, 5, 7]}, /* Cmaj7 [C E G B] */
	{suffix: 'sus4', semitones: [0, 5, 7], steps: [1, 4, 5]}, /* Csus4 */
	{suffix: '7sus4', semitones: [0, 5, 7, 10], steps: [1, 4, 5, 7]}, /* C7sus4 [C F G Bb]*/
	{suffix: '6', semitones: [0, 4, 7, 9], steps: [1, 3, 5, 6]}, /* C6 [C E G A] */
	{suffix: 'm6', semitones: [0, 3, 7, 9], steps: [1, 3, 5, 6]}, /* Cm6 [C Eb G A]*/
	{suffix: 'min6', semitones: [0, 3, 7, 9], steps: [1, 3, 5, 6]}, /* Cmin6 :[C Eb G A]*/
	{suffix: 'dim', semitones: [0, 3, 6], steps: [1, 3, 5]}, /* Cdim [C Eb Gb] */
	{suffix: 'aug', semitones: [0, 4, 8], steps: [1, 3, 5]}, /* Caug [C E G#] */
	{suffix: '7-5', semitones: [0, 4, 6, 10], steps: [1, 3, 5, 7]}, /* C7-5 [C E Gb Bb] */
	{suffix: '7+5', semitones: [0, 4, 8, 10], steps: [1, 3, 5, 7]}, /* C7+5 [C E G# Bb]*/
	{suffix: 'm7-5', semitones: [0, 3, 6, 10], steps: [1, 3, 5, 7]}, /* Cm7-5 [C Eb Gb Bb] */
	{suffix: 'm/maj7', semitones: [0, 3, 7, 11], steps: [1, 3, 5, 7]}, /* Cm/maj7 [C Eb G B] */
	{suffix: 'maj7+5', semitones: [0, 4, 8, 11], steps: [1, 3, 5, 7]}, /* Cmaj7+5 [C E G# B] */
	{suffix: 'maj7-5', semitones: [0, 4, 6, 11], steps: [1, 3, 5, 7]}, /* Cmaj7-5 [C E Gb B] */
	{suffix: '9', semitones: [0, 4, 7, 10, 14], steps: [1, 3, 5, 7, 2]}, /* C9 [C E G Bb D] */
	{suffix: 'm9', semitones: [0, 3, 7, 10, 14], steps: [1, 3, 5, 7, 2]}, /* Cm9 [C Eb G Bb D] */
	{suffix: 'maj9', semitones: [0, 4, 7, 11, 14], steps: [1, 3, 5, 7, 2]}, /* Cm9 [C E G B D] */
	{suffix: '7+9', semitones: [0, 4, 7, 10, 15], steps: [1, 3, 5, 7, 2]}, /* C7+9 [C E G Bb D#] */
	{suffix: '7-9', semitones: [0, 4, 7, 10, 13], steps: [1, 3, 5, 7, 2]}, /* C7-9 [C E G Bb Db] */
	{suffix: '7+9-5', semitones: [0, 4, 6, 10, 15], steps: [1, 3, 5, 7, 2]}, /* C7+9-5 [C E Gb Bb D#] */
	{suffix: '6/9', semitones: [0, 4, 7, 9, 14], steps: [1, 3, 5, 6, 2]}, /* C6/9 [C E G A D] */
	{suffix: '9+5', semitones: [0, 4, 8, 10, 14], steps: [1, 3, 5, 7, 2]}, /* C9+5 [C E G# Bb D] */
	{suffix: '9-5', semitones: [0, 4, 6, 10, 14], steps: [1, 3, 5, 7, 2]}, /* C9-5 [C E Gb Bb D] */
	{suffix: 'm9-5', semitones: [0, 3, 6, 10, 14], steps: [1, 3, 5, 7, 2]}, /* Cm9-5 [C Eb G# Bb D] */
	{suffix: '11', semitones: [0, 4, 7, 10, 14, 17], steps: [1, 3, 5, 7, 2, 4]}, /* C11 [C E G Bb D F] */
	{suffix: 'm11', semitones: [0, 3, 7, 10, 14, 17], steps: [1, 3, 5, 7, 2, 4]}, /* Cm11 [C Eb G Bb D F] */
	{suffix: '11-9', semitones: [0, 4, 7, 10, 13, 17], steps: [1, 3, 5, 7, 2, 4]}, /* C11-9 [C E G Bb Db F] */
	{suffix: '13', semitones: [0, 4, 7, 10, 14, 17, 21], steps: [1, 3, 5, 7, 2, 4, 6]}, /* C13 [C E G Bb D F A] */
	{suffix: 'm13', semitones: [0, 3, 7, 10, 14, 17, 21], steps: [1, 3, 5, 7, 2, 4, 6]}, /* Cm13 [C Eb G Bb D F A] */
	{suffix: 'maj13', semitones: [0, 4, 7, 11, 14, 17, 21], steps: [1, 3, 5, 7, 2, 4, 6]}, /* Cmaj13 [C E G B D F A] */
	{suffix: 'add9', semitones: [0, 4, 7, 14], steps: [1, 3, 5, 2]}, /* Cadd9 [C E G D] */
	{suffix: 'madd9', semitones: [0, 3, 7, 14], steps: [1, 3, 5, 2]}, /* Cmadd9 [C Eb G D] */
	{suffix: 'sus2', semitones: [0, 2, 7], steps: [1, 2, 5]}, /* Csus2 */
	{suffix: 'sus', semitones: [0, 2, 7], steps: [1, 2, 5]}, /* Csus */
	{suffix: '5', semitones: [0, 7], steps: [1, 5]}, /* C5 */
    ],
    clone: function (obj) {
	if (null == obj || "object" != typeof obj)
	    return obj;
	var copy = obj.constructor();
	for (var attr in obj) {
	    if (obj.hasOwnProperty(attr))
		copy[attr] = obj[attr];
	}
	return copy;
    },
    get_tone_by_value: function (value) {
	var result = [];
	for (var prop in this.tones) {
	    if (this.tones.hasOwnProperty(prop)) {
		if (this.tones[ prop ] === value)
		    result.push(prop);
	    }
	}
	return result;
    },
    check_tone_set: function (tone_set, scale_set) {

	var max_score = tone_set.length;
	var current_score = 0;
	var unfinded_tones = [];
	var finded = false;

	for (var i = 0; i < tone_set.length; i++) {
	    finded = false;
	    for (var j = 0; j < scale_set.length; j++) {
		if (tone_set[i] == scale_set[j]) {
		    current_score++;
		    finded = true;
		    break;
		}
	    }
	    if (finded == false)
		unfinded_tones.push(tone_set[i]);
	}

	return {
	    score: max_score - current_score,
	    extra_tones: unfinded_tones
	};
    },
    arrayRotate: function (arr, reverse) {
	if (reverse)
	    arr.unshift(arr.pop());
	else
	    arr.push(arr.shift());
	return arr;
    },
    create_scale_map: function (root_key, scale) {

	if (typeof root_key != "string")
	    return null;

	var map = [];
	var root_tone = this.tones[root_key];
	var alphabet_offset = this.alphabet[root_key.charAt(0)];
	var alphabet_letters = Object.keys(this.alphabet);

	for (var i = 0; i < scale.semitones.length; i++) {

	    var tone = (root_tone + scale.semitones[i]) % 12;
	    var letter = alphabet_letters[(i + alphabet_offset) % 7];

//	    console.log("Tone: %s, Letter: %s", tone, letter);

	    for (var key in this.tones) {
		if (tone == this.tones[key] && letter == key.charAt(0)) {
		    map.push(key);
		}
	    }
	}

	for (var i = 0; i < scale.extra_tones.length; i++) {

	    var tone = (root_tone + scale.extra_tones[i]) % 12;
	    var index = (scale.extra_steps[i] + alphabet_offset) % 7;
	    var letter = alphabet_letters[index];

//	    console.log("Extra Tone: %s, Index: %d, Letter: %s", tone, index, letter);

	    for (var key in this.tones) {
		if (tone == this.tones[key] && letter == key.charAt(0)) {
		    map.push(key);
		}
	    }
	}

	console.log(map);

	return map;
    },
    /* Chord is a text as: "Am" */
    parse_chord: function (chord) {
	var self = this;

	if (typeof chord != "string")
	    throw new Error("Chord parameter should be a string");

	/* Get root, suffix and bass tone */

	var m = chord.match(this.chord_regexp);
	if (!m || m.length < 1) {
	    console.log("Not matched");
	    return null;
	}

	if (m[2] == '/')
	    m[2] = '';

	var chord_tones = null;
	var chord_steps = null;

//	console.log("suffix: ", m[2]);

	this.chords.every(function (chord) {
	    if (chord.suffix == m[2]) {
		chord_tones = self.clone(chord.semitones);
		chord_steps = self.clone(chord.steps);
		return false;
	    }
	    return true;
	});

	if (chord_tones === null) {
	    console.log("Not recognized");
	    return null;
	}

	/* Add bass note to current chord this.tones list according root tone */
	if (m[3].length > 0) {
	    var bass_tone = (12 - this.tones[m[1]] + this.tones[m[3]]) % 12;
	    var exists = false;
	    chord_tones.every(function (chord_tone) {
		if (chord_tone == bass_tone) {
		    exists = true;
		    return false
		}
		return true;
	    });

	    if (exists == false) {
		chord_tones.push(bass_tone);
	    }
	}

	var root_tone = this.tones[m[1]];
	var chord_keys = [];
	var alphabet_offset = this.alphabet[m[1].charAt(0)];
	var alphabet_letters = Object.keys(this.alphabet);

	chord_steps.forEach(function (step, i) {
	    var letter = alphabet_letters[(step + alphabet_offset - 1) % 7];
	    var key_variants = self.get_tone_by_value((chord_tones[i] + root_tone) % 12);
	    key_variants.every(function (variant) {
		if (letter == variant.charAt(0)) {
		    chord_keys.push(variant);
		    return false;
		}
		return true;
	    });
	});

	return {
	    root_tone: root_tone,
	    bass_tone: m[3] ? this.tones[m[3]] : null,
	    root_key: m[1],
	    bass_key: m[3] ? m[3] : null,
	    tones: chord_tones,
	    keys: chord_keys,
	    suffix: m[2],
	};
    },
    shift_chord: function (chord, steps, scale_map) {

	if (typeof chord != "string")
	    throw new Error("Chord parameter should be a string");
	if (isNaN(steps))
	    throw new Error("Steps should be a number");
	var parsed_chord = this.parse_chord(chord);
	if (parsed_chord == null) {
	    return null;
	}

	var root_tone = (parsed_chord.root_tone + steps) % 12;
	if (root_tone < 0) {
	    root_tone += 12;
	}

	var bass_tone = null;
	if (parsed_chord.bass_tone) {
	    bass_tone = (parsed_chord.bass_tone + steps) % 12;
	    if (bass_tone < 0) {
		bass_tone += 12;
	    }
	}

	for (var key in this.tones) {
	    if (root_tone == this.tones[key] && scale_map.indexOf(key) > -1) {
		parsed_chord.root_key = key;
		parsed_chord.root_tone = root_tone;
	    }
	}

	if (bass_tone) {
	    for (var key in this.tones) {
		if (bass_tone == this.tones[key] && scale_map.indexOf(key) > -1) {
		    parsed_chord.bass_key = key;
		    parsed_chord.bass_tone = bass_tone;

		}
	    }
	}

	/* Reconstruct */

	var new_chord = parsed_chord.root_key + parsed_chord.suffix;
	if (bass_tone) {
	    new_chord += '/' + parsed_chord.bass_key;
	}

	return new_chord;
    },
    /* Incoming sequence is array: ["Am", "F", "C", "G"] */

    find_scale: function (chord_set) {

	console.log(chord_set);

	var chord_set_semitones = [];
	var chord_set_semitones_map = {};
	var chord_set_keys = [];
	var first_root = null;
	var offset = 0;
	var chord_roots = [];
	var matched_scales = [];

	if (typeof chord_set != "object")
	    throw new Error("Chord_set parameter should be an object");
	if (chord_set.length === 0)
	    return null;

	/* Parse chords */

	for (var i = 0; i < chord_set.length; i++) {
	    var chord = this.parse_chord(chord_set[i]);
	    if (chord == null)
		continue;

	    if (first_root === null) {
		first_root = chord.root_tone;
		offset = 12 - first_root;
	    }

	    console.log(chord);

	    chord_roots.push(chord.root_key);
	    for (var j = 0; j < chord.tones.length; j++) {
		var absolute = (chord.tones[j] + chord.root_tone + offset) % 12;
//		console.log("absolute: , keys: ", absolute, chord.keys[j]);
		if (chord_set_semitones_map[absolute] !== chord.keys[j]) {
		    chord_set_semitones_map[absolute] = chord.keys[j];
		    chord_set_semitones.push(absolute);
		}
	    }
	}
//	console.log("chord_set_semitones: ", chord_set_semitones);
	chord_set_semitones = Object.keys(chord_set_semitones_map);
//	console.log("chord_set_semitones_map: ", chord_set_semitones_map);
	for (var i = 0; i < chord_set_semitones.length; i++) {
	    var val = chord_set_semitones_map[chord_set_semitones[i]];
	    chord_set_keys.push(val);
	}

	/* Begining from each tone do scales matching */

	var minimal_score = 12;


	for (var i = 0; i < chord_set_semitones.length; i++) {

	    chord_set_semitones = this.arrayRotate(chord_set_semitones, false);
	    chord_set_keys = this.arrayRotate(chord_set_keys, false);

	    var new_semitones = chord_set_semitones.slice(0);
	    offset = new_semitones[0];
	    var current_root = (first_root + offset) % 12;
	    for (var j = 0; j < new_semitones.length; j++) {
		new_semitones[j] -= offset;
		if (new_semitones[j] < 0) {
		    new_semitones[j] += 12;
		}
	    }

	    for (var j = 0; j < this.scales.length; j++) {

		var tone_set_check = this.check_tone_set(new_semitones, this.scales[j].semitones);

		if (minimal_score >= tone_set_check.score) {
		    minimal_score = tone_set_check.score;

		    var general_keys = [];
		    var extra_keys = [];
		    var extra_steps = [];

		    for (var k = 0; k < this.scales[j].semitones.length; k++) {
			var general_tone_pos = new_semitones.indexOf(this.scales[j].semitones[k]);
			var general_key = chord_set_keys[general_tone_pos];
			general_keys.push(general_key);
		    }

		    var root_key_offset = this.alphabet[general_keys[0].charAt(0)];

//		    console.log("chord_set_keys: ", chord_set_keys);
		    for (var k = 0; k < tone_set_check.extra_tones.length; k++) {
			var extra_tone_pos = new_semitones.indexOf(tone_set_check.extra_tones[k]);
//			console.log("extra_tone_pos: ", extra_tone_pos);
			var extra_key = chord_set_keys[extra_tone_pos];
//			console.log("extra_key: ", extra_key);
			extra_keys.push(extra_key);

			var extra_key_offset = this.alphabet[extra_key.charAt(0)];

			var relative_root = extra_key_offset - root_key_offset;
			if (relative_root < 0)
			    relative_root += 7;
			var extra_step = (extra_key_offset - root_key_offset) % 7;
			if (extra_step < 0)
			    extra_step += 7;
			extra_steps.push(extra_step);
		    }

		    matched_scales.push({
			root_tone: current_root,
			root_key: general_keys[0],
			scale_index: j,
			compare: tone_set_check.score,
			semitones: this.scales[j].semitones,
			keys: general_keys,
			extra_tones: tone_set_check.extra_tones,
			extra_keys: extra_keys,
			extra_steps: extra_steps,
		    });
		}
	    }
	}

	for (var i = 0; i < chord_roots.length; i++) {
	    for (var j = 0; j < matched_scales.length; j++) {

		if (matched_scales[j].compare > minimal_score) {
		    continue;
		}

		if (chord_roots[i] === matched_scales[j].root_key) {
		    return {
			root_key: matched_scales[j].root_key,
			scale: matched_scales[j].scale_index,
			semitones: matched_scales[j].semitones,
			keys: matched_scales[j].keys,
			extra_tones: matched_scales[j].extra_tones,
			extra_keys: matched_scales[j].extra_keys,
			extra_steps: matched_scales[j].extra_steps,
		    };
		}
	    }
	}

	console.log("Nothing founded");
	return null;
    },
    transpose: function (chord_set, new_root_key) {
	var steps = 0;
	if (typeof chord_set != "object")
	    throw new Error("Chord_set parameter should be an object");
	if (typeof new_root_key != "string")
	    throw new Error("New_root_tone parameter should be a string");

	var transpose_map = {};
	var scale = this.find_scale(chord_set);

//	console.log(scale);

	if (scale) {

	    /* We found scale an root tone */

	    steps = this.tones[new_root_key] - this.tones[scale.root_key];

	} else {

	    /* Scale and root tone did not determined, use first chord as root 
	     * and just simple major or minor*/

	    var parsed_chord = this.parse_chord(chord_set[0]);
	    if (parsed_chord.chord_tones.indexOf(3) > -1) {

		/* minor */

		scale = this.scales[1];
	    } else {

		/* major */

		scale = this.scales[0];
	    }
	    steps = this.tones[new_root_key] - parsed_chord.root_tone;
	}

	var scale_map = this.create_scale_map(new_root_key, scale);

	for (var i = 0; i < chord_set.length; i++) {
	    var new_chord = this.shift_chord(chord_set[i], steps, scale_map);
	    transpose_map[chord_set[i]] = new_chord;
	}

	return transpose_map;
    }

};