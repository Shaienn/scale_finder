# scale_finder

This is the module to recognize chords and scales and perform correct transpose to another scale. 

# Chord parsing
To recognize a chord just send it to function "parse_chord".
    
    var chord = "Am/G"
    var chord_object = parse_chord(chord);
    console.log(chord_object):
    { 
        root_tone: 9,
        bass_tone: 7,
        root_key: 'A',
        bass_key: 'G',
        tones: [ 0, 3, 7, 10 ],
        keys: [ 'A', 'C', 'E' ],
        suffix: 'm' 
    }
## Chord object contains:

    root_tone - absolute root tone value according to tones table.
    bass_tone - if bass tone exists contains absolute bass tone according tones table or null if not exists
    root_key - letter of root tone, because it is possible to have same tone but different letters (ex: A# and Gb)
    bass_key - letter of bass tone
    tones - chord_tones - array of tones in chord relative to root tone which is 0
    keys - chord_keys - array of letters for chord tones 
    suffix - chord modifier 

