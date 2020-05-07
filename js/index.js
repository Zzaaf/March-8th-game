let note_1 = document.getElementById('note_1_1'),
    note_2 = document.getElementById('note_1_2'),
    note_3 = document.getElementById('note_1_3'),
    note_4 = document.getElementById('note_1_4'),
    note_5 = document.getElementById('note_1_5'),

    note_6 = document.getElementById('note_2_1'),
    note_7 = document.getElementById('note_2_2'),
    note_8 = document.getElementById('note_2_3'),
    note_9 = document.getElementById('note_2_4'),
    note_10 = document.getElementById('note_2_5'),

    note_11 = document.getElementById('note_3_1'),
    note_12 = document.getElementById('note_3_2'),
    note_13 = document.getElementById('note_3_3'),
    note_14 = document.getElementById('note_3_4'),
    note_15 = document.getElementById('note_3_5'),

    note_16 = document.getElementById('note_4_1'),
    note_17 = document.getElementById('note_4_2'),
    note_18 = document.getElementById('note_4_3'),
    note_19 = document.getElementById('note_4_4'),
    note_20 = document.getElementById('note_4_5');   

note_1.onclick = function() {
    document.getElementsByClassName('off')[0].style.display = 'none';
    document.getElementsByClassName('on')[0].style.display = 'flex';
};

note_2.onclick = function() {
    document.getElementsByClassName('off')[1].style.display = 'none';
    document.getElementsByClassName('on')[1].style.display = 'flex';
};

note_3.onclick = function() {
    document.getElementsByClassName('off')[2].style.display = 'none';
    document.getElementsByClassName('on')[2].style.display = 'flex';
};

note_4.onclick = function() {
    document.getElementsByClassName('off')[3].style.display = 'none';
    document.getElementsByClassName('on')[3].style.display = 'flex';
};

note_5.onclick = function() {
    document.getElementsByClassName('off')[4].style.display = 'none';
    document.getElementsByClassName('on')[4].style.display = 'flex';
};

note_6.onclick = function() {
    document.getElementsByClassName('off')[5].style.display = 'none';
    document.getElementsByClassName('on')[5].style.display = 'flex';
};

note_7.onclick = function() {
    document.getElementsByClassName('off')[6].style.display = 'none';
    document.getElementsByClassName('on')[6].style.display = 'flex';
};

note_8.onclick = function() {
    document.getElementsByClassName('off')[7].style.display = 'none';
    document.getElementsByClassName('on')[7].style.display = 'flex';
};

note_9.onclick = function() {
    document.getElementsByClassName('off')[8].style.display = 'none';
    document.getElementsByClassName('on')[8].style.display = 'flex';
};

note_10.onclick = function() {
    document.getElementsByClassName('off')[9].style.display = 'none';
    document.getElementsByClassName('on')[9].style.display = 'flex';
};

note_11.onclick = function() {
    document.getElementsByClassName('off')[10].style.display = 'none';
    document.getElementsByClassName('on')[10].style.display = 'flex';
};

note_12.onclick = function() {
    document.getElementsByClassName('off')[11].style.display = 'none';
    document.getElementsByClassName('on')[11].style.display = 'flex';
};

note_13.onclick = function() {
    document.getElementsByClassName('off')[12].style.display = 'none';
    document.getElementsByClassName('on')[12].style.display = 'flex';
};

note_14.onclick = function() {
    document.getElementsByClassName('off')[13].style.display = 'none';
    document.getElementsByClassName('on')[13].style.display = 'flex';
};

note_15.onclick = function() {
    document.getElementsByClassName('off')[14].style.display = 'none';
    document.getElementsByClassName('on')[14].style.display = 'flex';
};

note_16.onclick = function() {
    document.getElementsByClassName('off')[15].style.display = 'none';
    document.getElementsByClassName('on')[15].style.display = 'flex';
};

note_17.onclick = function() {
    document.getElementsByClassName('off')[16].style.display = 'none';
    document.getElementsByClassName('on')[16].style.display = 'flex';
};

note_18.onclick = function() {
    document.getElementsByClassName('off')[17].style.display = 'none';
    document.getElementsByClassName('on')[17].style.display = 'flex';
};

note_19.onclick = function() {
    document.getElementsByClassName('off')[18].style.display = 'none';
    document.getElementsByClassName('on')[18].style.display = 'flex';
};

note_20.onclick = function() {
    document.getElementsByClassName('off')[19].style.display = 'none';
    document.getElementsByClassName('on')[19].style.display = 'flex';
};

function offOn_1() {
    var music = document.getElementsByClassName('on')[0];
    var file = document.getElementsByClassName('audio')[0];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_2() {
    var music = document.getElementsByClassName('on')[1];
    var file = document.getElementsByClassName('audio')[1];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_3() {
    var music = document.getElementsByClassName('on')[2];
    var file = document.getElementsByClassName('audio')[2];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_4() {
    var music = document.getElementsByClassName('on')[3];
    var file = document.getElementsByClassName('audio')[3];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_5() {
    var music = document.getElementsByClassName('on')[4];
    var file = document.getElementsByClassName('audio')[4];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_6() {
    var music = document.getElementsByClassName('on')[5];
    var file = document.getElementsByClassName('audio')[5];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_7() {
    var music = document.getElementsByClassName('on')[6];
    var file = document.getElementsByClassName('audio')[6];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_8() {
    var music = document.getElementsByClassName('on')[7];
    var file = document.getElementsByClassName('audio')[7];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_9() {
    var music = document.getElementsByClassName('on')[8];
    var file = document.getElementsByClassName('audio')[8];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_10() {
    var music = document.getElementsByClassName('on')[9];
    var file = document.getElementsByClassName('audio')[9];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_11() {
    var music = document.getElementsByClassName('on')[10];
    var file = document.getElementsByClassName('audio')[10];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_12() {
    var music = document.getElementsByClassName('on')[11];
    var file = document.getElementsByClassName('audio')[11];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_13() {
    var music = document.getElementsByClassName('on')[12];
    var file = document.getElementsByClassName('audio')[12];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_14() {
    var music = document.getElementsByClassName('on')[13];
    var file = document.getElementsByClassName('audio')[13];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_15() {
    var music = document.getElementsByClassName('on')[14];
    var file = document.getElementsByClassName('audio')[14];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_16() {
    var music = document.getElementsByClassName('on')[15];
    var file = document.getElementsByClassName('audio')[15];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_17() {
    var music = document.getElementsByClassName('on')[16];
    var file = document.getElementsByClassName('audio')[16];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_18() {
    var music = document.getElementsByClassName('on')[17];
    var file = document.getElementsByClassName('audio')[17];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_19() {
    var music = document.getElementsByClassName('on')[18];
    var file = document.getElementsByClassName('audio')[18];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}

function offOn_20() {
    var music = document.getElementsByClassName('on')[19];
    var file = document.getElementsByClassName('audio')[19];

    if (music.childNodes[1].classList.contains('fa-play')) {
        this.onclick = function() {
            file.play();
        }
        music.childNodes[1].classList.remove('fa-play');
        music.childNodes[1].classList.add('fa-pause');
    } else {        
        this.onclick = function() {       
            file.pause();
            music.childNodes[1].classList.remove('fa-pause');
            music.childNodes[1].classList.add('fa-play');
        }
    }
}