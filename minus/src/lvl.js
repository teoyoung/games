var drawSetting = {
    'p': { type: 'player', bg: 'blue', txt_bg:'#2b2b2b' },
    ' ': { type: 'place', bg: '#97cef6' },
    '_': { type: 'place', bg: '#458dc2' },    
    'x': { type: 'fin', bg: '#70bc77' },
    'num': { type: 'num', bg: '#eaf2f2', txt_bg:'#2b2b2b' },
}

var levels = [];

var lvl = [
    [' ', ' ', '9', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '_', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '8', ' ', '8', ' ', ' '],
    [' ', ' ', '3', '4', '1', '3', '5', ' ', ' ', ' '],
    [' ', ' ', '8', '5', '3', '8', '5', ' ', ' ', ' '],
    [' ', '3', '2', '9', 'x', '5', '4', ' ', '8', ' '],
    [' ', ' ', '3', '3', '5', '8', '3', ' ', ' ', ' '],
    [' ', ' ', '5', '5', '9', '7', '9', ' ', ' ', ' '],
    [' ', ' ', '8', '4', '4', '8', '9', ' ', ' ', ' '],
    ['8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

levels.push(lvl);

var lvl = [
    [' ', ' ', '9', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '_', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '8', ' ', '8', ' ', ' '],
    [' ', ' ', '3', ' ', ' ', '3', '5', ' ', ' ', ' '],
    [' ', ' ', '8', ' ', ' ', '8', '5', ' ', ' ', ' '],
    [' ', '3', '2', ' ', 'x', ' ', '4', ' ', '8', ' '],
    [' ', ' ', '3', '3', '5', '8', '3', ' ', ' ', ' '],
    [' ', ' ', '5', '5', '9', '7', '9', ' ', ' ', ' '],
    [' ', ' ', '8', '4', '4', '8', '9', ' ', ' ', ' '],
    ['8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

levels.push(lvl);

export { drawSetting, levels };