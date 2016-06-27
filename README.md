# scale_finder

This is the module to recognize chords and scales and perform correct transpose to another scale. 

# Chord parsing
To recognize a chord just send it to function "parse_chord".
var chord = "Am"
var chord_object = parse_chord(chord);
## Chord object is:
{
	    root_tone - root tone value according to tones table.
	    bass_tone - if bass tone exists contains bass tone according tones table or null if not exists
	    root_key - letter of root tone, because it is possible to have same tone but different letters (ex: A# and Gb)
	    bass_key - letter of bass tone
	    tones - chord_tones - array of tones in chord. They are related to root tone.
	    keys - chord_keys - array of letters for chord tones 
	    suffix - chord modifier 
}
