# scale_finder

This is the module to recognize chords and scales and perform correct transpose to another scale. 

    npm install scale_finder --save

# Chord parsing
To recognize a chord just send it to function "parse_chord".
## Example 1:

    var sf = require('scale_finder');
    var chord = "Am/G"
    var chord_object = sf.parse_chord(chord);
    console.log(chord_object):
    { 
        root_tone: 9,
        bass_tone: 7,
        root_key: 'A',
        bass_key: 'G',
        tones: [ 0, 3, 7, 10 ],
        keys: [ 'A', 'C', 'E', 'G' ],
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
    
# Find scale
To find scale put array of chords to the "find_scale" function:
##Example 2 - Straight D major: 

    var sf = require('scale_finder');
    var chords = [ 'D', 'A', 'Bm', 'G' ];
    var scale_object = sf.find_scale(chords);
    console.log(scale_object);
    { 
        root_key: 'D',
        scale: 0,
        tones: [ 0, 2, 4, 5, 7, 9, 11 ],
        keys: [ 'D', 'E', 'F#', 'G', 'A', 'B', 'C#' ],
        extra_tones: [],
        extra_keys: [],
        extra_steps: [] 
    }
##Example 3 - G major with out of scale Eb and F chords.

    var sf = require('scale_finder');
    var chords = [ 'G', 'C', 'Em', 'D', 'C', 'G', 'Am', 'Hm', 'Eb', 'F' ];
    var scale_object = sf.find_scale(chords);
    console.log(scale_object);
    { 
        root_key: 'G',
        scale: 0,
        tones: [ 0, 2, 4, 5, 7, 9, 11 ],
        keys: [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#' ],
        extra_tones: [ 3, 8, 10 ],
        extra_keys: [ 'Bb', 'Eb', 'F' ],
        extra_steps: [ 3, 6, 0 ] 
    }

#Transpose
To transpose chords sequence to another key, put chords array and new root key to "transpose" function.
Transpose function returns transpose map:
##Example 4 - Straight A minor to B minor:

    var sf = require('scale_finder');
    var chords = [ 'Am', 'F', 'C', 'G' ];
    var scale_object = sf.transpose(chords, "B");
    console.log(scale_object);
    { 
        Am: 'Bm', 
        F: 'G', 
        C: 'D', 
        G: 'A' 
    }
    
##Example 5 - G major with out of scale Eb and F chords to C, C# and Db scales:

    var sf = require('scale_finder');
    var chords = [ 'G', 'C', 'Em', 'D', 'C', 'G', 'Am', 'Hm', 'Eb', 'F' ];
    sf.transpose(chords, "Db");
    { G: 'Db',
      C: 'Gb',
      Em: 'Bbm',
      D: 'Ab',
      Am: 'Ebm',
      Hm: 'Fm',
      Eb: 'Bbb',
      F: 'Cb' }

    sf.transpose(chords, "C#");
    { G: 'C#',
      C: 'F#',
      Em: 'A#m',
      D: 'G#',
      Am: 'D#m',
      Hm: 'E#m',
      Eb: 'A',
      F: 'B' }
      
    sf.transpose(chords, "C");
    { G: 'C',
      C: 'F',
      Em: 'Am',
      D: 'G',
      Am: 'Dm',
      Hm: 'Em',
      Eb: 'Ab',
      F: 'Bb' }
