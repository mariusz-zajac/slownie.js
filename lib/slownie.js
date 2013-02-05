var Slownie = function(number) {
  this.number = number;

  this.setki = ["", "sto ", "dwieście ", "trzysta ", "czterysta ",
                "pięćset ", "sześćset ", "siedemset ", "osiemset ", "dziewięcset "];

  this.nastki = ["dziesięc ", "jedenaście ", "dwanaście ", "trzynaście ", "czternaście ",
                 "piętnaście ", "szesnaście ", "siedemnaście ", "osiemnaście ", "dziewiętnaście "];

  this.dziesiatki = [ "", "dziesięć ", "dwadzieścia ", "trzydzieści ", "czterdzieści ",
                      "pięćdziesiąt ", "sześćdziesiąt ", "siedemdziesiąt ", "osiemdziesiąt ", "dziewiecdziesiąt "];

  this.jednosci = ["", "jeden ", "dwa ", "trzy ", "cztery ",
                   "pięć ", "sześć ", "siedem ", "osiem ", "dziewięć "];

  this.wielkosci =
    [
      ["", "jeden", "", ""],
      ["", "tysiąc ", "tysiące ", "tysięcy "],
      ["", "milion ", "miliony ", "milionów "],
      ["", "miliard ", "miliardy ", "miliardów "],
      ["", "bilion ", "biliony ", "bilionów "],
      ["", "biliard ", "biliardy ", "biliardów "],
      ["", "trylion ", "tryliony ", "trylionów "],
      ["", "tryliard ", "tryliardy ", "tryliardów "],
      ["", "kwadrylion ", "kwadryliony ", "kwadrylionów "]
    ];

  this.str = "";
};

Slownie.prototype.trim = function (str) {
  return str.replace(/^\s+|\s+$/g,"");
};

Slownie.prototype.sdj = function (s, d, j)
{
  if(!d && !s)
  {
    if(j == 0) return 0;
    if(j == 1) return 1;
  }

  if(this.setki[s]) this.str = this.str + this.setki[s];
  if(d == 1 && this.nastki[j])
    this.str = this.str + this.nastki[j];
  else
  {
    if(this.dziesiatki[d]) this.str = this.str + this.dziesiatki[d];
    if(this.jednosci[j]) this.str = this.str + this.jednosci[j];
  }
  if((d != 1) && (j >= 2) && (j <= 4)) return 2;
  return 3;
}

Slownie.prototype.get = function (liczba)
{
  if(!liczba)
    liczba = this.liczba;

  this.str = "";
  var ilosc = 0;
  var cyfry = [];
  var forma;
  var i;
  var tmp;

  liczba = liczba.toString()
  ilosc = liczba.length;
  for(i = 0; i < ilosc; i++)
  {
    tmp = liczba[i] - '0';
    if(tmp > 9) break;
    cyfry[ilosc - i - 1] = tmp;
  }

  if(ilosc == 0)
    this.str = this.str + "zero ";
  else
  {
    for(i = parseInt((ilosc - 1) / 3); i >= 0; i--)
    {
      forma = this.sdj(cyfry[3 * i + 2], cyfry[3 * i + 1], cyfry[3 * i]);
      this.str = this.str + this.wielkosci[i][forma];
    }
  }
  return this.trim(this.str);
}

exports.Slownie = Slownie;
