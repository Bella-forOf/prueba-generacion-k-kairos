'use strict';

const mensaje = `\nSLkmmhGW;8tyHMlATtltpF7pls#FD:F/M:tig/nxAKtW111TQUw9Ngv2lateDnJiz:fL6J\nTeXSATtqzVbhS!/Hw5tXgmBkoraUYREC8akl6cRiOvqY!VuwaN5W610obnxrSkJBzkbGiM\nIp:yT.nJMEjkuS8O4GSXyapB93aapm620HlwDZCihrjauOmxwGbTloSpWYP;lwpiasDhVM\nbdS:#sS2GlLF2.:CrcYo8:;mTJg04//LVN88#lezTe1ZChwsP0b4DO5Q4/.tKe4xfACFcp\ndU.eqBt1oQLhUO5LsQ.yMUpLHs1G6:veMRr3jUr0fHZZRQ2GvGMN:uzHcpatW037kFhGfH\n08zr;JrOVoYKBxo;VbtVShXlzcoYw#8.ON7kHqYe0BIYwmtBuXxaWkSoj!jS.593b3w/X.\nuhg5oIAz1pztomoFQEKlKkF_CYCQ!dfZAHXCwCBHdBmeiB3L!6zmc8Sn8F6Qfn8.vLyBvh\njhto4u9i7rLvQaFbGkuu3jLY!Oh;KqqeRnnwXlo!Ne5uS;XrVk4a:wDGKFi6;JMeiO8aX:\n;Los6_oTKLJs9IeO;od1yk/soU!lwuFmYU:VlB/FIcG49CBK2#Vz9iANUoJTqu#f6nUfXE\nmcDSSKGr7;ho:#hHerdBYrY#grv1kePc4ASyVLh7EzL#RlttWOf/Bai_gC9ihD!YVbIG2!\ngMGrIB:YrVFgFaZUkb2vPL8o7o#TF0UZvZOxNS6_1bZ_fHrnCJIvaRzkriSuH/QSExbgEn\nUtFRkOl!a!U!4#HNXpVKJxGIDJLTV!mC7g50olHazl!PPuub8AjUKcKU;1#DH4Jz/yhTq#\n28Flb1pfWCCS8sfG2p46ojRfUUdDZ;ts9tRsxMYMrZtny;Hb.aCBA;V2o;1iiDziy:SEYH\n:qYBKvBp#s.Oow6fvKtT#BzodcI;.12zwlXkjHIgYCD60qiBQM:OzQGg250LSzTRl3wGts\ni.ib3OVc#TxepZgS9KDLMhpE0Z#9SXi;wvib4US!UurC1TmW7vyc/bkm:BCeW#5G3yJ4wN\nARj.69.74ZSKIn/eHTYuvTDCBS.SV5/V7RFDz1WGa:!0I/kEanPjyr0rxw2H/YOup7QC58\nRGnrvsC4wnrS7Q1Vooi9bbkLPK!#;9n8XaJkbe;oMOx.Mt.CAJK6!wa749qESQ8LvkXo;#\nR3qZTtEYlxxSM#:xYivOCqrE9Fh1chizSogq!iRWcv!78;Jce4sOB#509RbVk5TKsigss!\nfplklKk:eOHpI3y6aDF8zvpTkpDLX/TuEYWIeDB9g126jlNV6gI4nCiEtAUIe!#:lTeRli\n.3/vqc:tvDbCw#sLbw6Lz3S:DjVFyZk#RYzsZ;pSpgpUwmFDu#zXJoCG#SHu!0W0D0btlW\nnrILB0qwQRtLfXjBHmzaQ9fw5vleTb4aQ3R8OMJyY4x!1HRclblp#8rCc4veo/IgVLW5nY\n3WuA3:/lhLG08LORE;8uGH5VWN3;0mr;q/HPF0IIHHSs9T;uZlSVY;0XystqltS#JtEMed\nV;pXDbxLsjZS#5OVEW.EGGV7pgK:R5iE9ozvX;zInKm8LuIN5eFDW3bLuQe4.IJSvLPpsT\nBVQGoAmKyN;zXGY6TxPTPVu;quDhpz#mbpx4RC7U!pcP4/JaNB.Gyet#lR;fbZAEqj21W#\n:a8NXlTH:vAkIE!mssNWMM6MAgkE:uUpM7ifURNbGZS!k;;jv8TbEmhCv2//CAiwyAAPKw\nFQOta#L83YHorms1lo1W5S/mvn!s.ydLRbb0BNeZVEGZZKT7Ij!c8k;mriXk84mjN.LYMM\n9OY7QhzbG8MJ1ZXCN:wC/dRtBmk7;q5miwDyzhua.PIv!Cr:mYSNkLJFfwVnJZ5tcMVggE\nUI:kfSrNyrj1njPO9z23YPiE!ZlH6tgNqzmciMT9a0PvbWiTQS0Wsu1G6gLb3.COXEGfoW\nbBOjJRbJ/AQRwB#I99gj8CB;necqsOAnSajjWRGCGJC41/Wmnt;sBLdt35KPLxz2guS;sC\nMoR5I2ZMoCu#JYZpoPcMxO7lIhnw8;HIjY52#;Hn2mgMgbpbBYI.s2L25KS!S!E0whBDJu\n36r0#QyU;bNyRyR2delAND9VBbHBhYy54MIl3dPDaqT8:;N./i2UtIT!pb.yDvExQVkRVi\n2tdGlJ:IkTZ2I3jBs:NRS!0EcY4xyM6TDvq.8tDZz37wORv7UjJ2qruF0.t0b#KC/tpJQh\nrnh4paBdx;3o#/MADij6bZZVWvHIaJY9ho8j0hwXaf9!NaOc0GWOZHhK4mM!S;:QfuIqLa\nSDcD8mspH9DT8NE7ZxJE.I#9H6S0SROzMr:UuXMU4Ns9Hi7SR7Wh4fXr1Ti5taaiOjraLK\nu;0dqla#KCIYjPkSGuFnW9WZ/O#6gTIGVX5tjzdQgXLu!AqZhfqlljE/LBWfkN59HGntDR\nHSBMijuQVhpE9kS:PTzEQ5NmFR3ZG7SH8V8p4T7:9uKsuMMNO3LCoU!2k0d!!5M68A37as\nE3:R;efoDKU4d/UkhuU;BsPikzaSjvo#cQhYs2JsByILx5qw1I2VwUZjoi0FY7Je:Hxb!b\n6JK0dPH#G7mgAgue#OQWxH#ND#rEjjNyZAN3PX#8F54VmY/9leR!BOtIexgTNIY!7!fIFX\n0K#KJX/AgAH2GJ3HNvhN5OfnIgCX5UcmJeOlkYIxgxWps3Vf3aIeqT#7XcIj;CgkX9qABQ\n6SoHk;3ElyPnx.IOA:B9vD0xPsVhfj7!w5MyXkeDyXTb.yEDBtnx6c3IhFq7ncX.LO9j47`;

// 1. string en array
let newMens1 = mensaje.split('');
// 2. eliminar saltos de linea \n
const newMens2 = newMens1.filter((element) => element !== '\n');
//3. remplazar todos los caracteres en la posición par por el caracter "|"
const newMens3 = newMens2.map((element, index) => {
  if (index  % 2 === 0) {
    return '|';
  } else {
    return element;
  }
});
// 4. Reemplaza todos los caracteres cuya posición sea múltiplo de 3 por el caracter '|'
const newMens4 = newMens3.map((element, index) => {
  if (index % 3 === 0) {
    return '|';
  } else {
    return element;
  }
});
// 5. Reemplaza todos los caracteres cuya posición sea múltiplo de 7 por el caracter '|'
const newMens5 = newMens4.map((element, index) => {
  if (index % 7 === 0) {
    return '|';
  } else {
    return element;
  }
});
// 6. Reemplaza todos los caracteres cuya posición sea múltiplo de 11 por el caracter '|'
const newMens6 = newMens5.map((element, index) => {
  if (index % 11 === 0) {
    return '|';
  } else {
    return element;
  }
});
// 7. Reemplaza todos los caracteres cuya posición sea múltiplo de 13 por el caracter '|'
const newMens7 = newMens6.map((element, index) => {
  if (index % 13 === 0) {
    return '|';
  } else {
    return element;
  }
});
//8.Reemplaza todas las letras mayúsculas de la A a la Z por el caracter '|'
const newMens8 = newMens7.map((element) => {
  if (/[A-Z]/.test(element)) {
    return '|';
  } else {
    return element;
  }
});
//9. Reemplaza todos los caracteres #, ; y ! por el caracter '|'
const newMens9 = newMens8.map((element) => {
  if (/[#;!]/.test(element)) {
    return '|';
  } else {
    return element;
  }
});
// 10. Elimina los caracteres '|' del array
const newMens10 = newMens9.filter((element) => element !== '|');
// 11. convierte el array en un string
const newMens11 = newMens10.join('');
//12. trunca el array a los primeros 54 caracteres
const newMens12 = newMens11.substring(0, 54);
console.log(newMens12);
