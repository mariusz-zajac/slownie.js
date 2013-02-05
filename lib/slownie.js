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

  //dwuwymiarowa tablica przechowujaca nazwy wielkosci
  //pierwszy indeks odpowiada rzedowi wielkosci
  //drugi indeks odpowiada formie zdaniowej
  this.wielkosci =
    [
      ["", "jeden", "", ""], //w przypadku jedynek wypisywana jest tylko forma zdaniowa (np. "tysiac", nie "jeden tysiac"), jedynie dla rzedu 0 (nie posiada formy zdaniowej) ma byc wypisana jedynka, w tym celu uzyta zostanie pierwsza forma zdaniowa rzedu 0 ustawiona na "jeden"
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

//wypisuje slownie liczbe setek dziesiatek i this.jednosci
//oraz zwraca ktora forme zdaniowa uzyc
Slownie.prototype.sdj = function (s, d, j)
{
  if(!d && !s)
  {
    if(j == 0) return 0; //w przypadku zera nie wypisujemy nic, zerowa forma zdaniowa (brak nazwy this.wielkosci)
    if(j == 1) return 1; //w przypadku jedynki wypisujemy jedynie forme zdaniowa this.wielkosci (pierwszą)
  }

  if(this.setki[s]) this.str = this.str + this.setki[s]; //cyfrze setek odpowiada tablica 'this.setki'
  if(d == 1 && this.nastki[j]) //jeśli cyfra dziesątek to 1, wtedy wypisujemy nastke
    this.str = this.str + this.nastki[j]; //cyfra this.jednosci decyduje o tym ktora to nastka w tablicy 'this.nastki'
  else
  {
    if(this.dziesiatki[d]) this.str = this.str + this.dziesiatki[d]; //cyfrze dziesiatek odpowiada tablica 'this.dziesiatki'
    if(this.jednosci[j]) this.str = this.str + this.jednosci[j]; //cyfrze this.jednosci odpowiada tablica 'this.jednosci'
  }
  if((d != 1) && (j >= 2) && (j <= 4)) return 2; //liczby konczace sie na 2, 3, 4 (oprocz nastek) mają drugą forme zdaniową
  return 3; //pozostałe liczby mogą mieć już tylko trzecią formę zdaniową
}

//zamienia liczbe w postaci lancucha cyfr (parametr liczba) na liczbe w zapisie slownym (zapisuje w lancuchu this.str)
Slownie.prototype.get = function (liczba)
{
  if(!liczba)
    liczba = this.liczba;

  this.str = "";
  var ilosc = 0; //ilosc cyfr liczby 'liczba'
  var cyfry = []; //'liczba' w postaci tablicy kolejnych cyfr dziesietnych, narazie wypelniona zerami
  var forma; //forma zdaniowa this.wielkosci
  var i; //licznik petli
  var tmp; //zmienna tymczasowa uzyta przy zamianie cyfr miejscami

  //w tej petli cyfry dziesietne w postaci znakow zostają zamieniona na cyfry w postaci liczb oraz liczona jest ich ilosc
  //znaki są zamieniane przez odjęcie znaku '0' ('0' - '0' = 0, '1' - '0' = 1, '2' - '0' = 2 itd.)
  liczba = liczba.toString()
  ilosc = liczba.length;
  for(i = 0; i < ilosc; i++)
  {
    tmp = liczba[i] - '0'; //zamiana znaku na liczbe
    if(tmp > 9) break; //jesli zamieniony znak nie jest cyfra to przerywamy petle
    cyfry[ilosc - i - 1] = tmp;//dla ulatwienia konwersji cyfry zapisane sa w odwrotnej kolejnosci
  }

  if(ilosc == 0)
    this.str = this.str + "zero "; //brak cyfr czyli zero
  else
  {
    //w tej petli licznik 'i' reprezentuje rzad this.wielkosci ( 1 - tysiace, 2 - miliony itp.)
    //konwersje zaczynamy od rzedu najwiekszego
    //cyfra this.jednosci dla rzedu 'i' ma pozycje 3*i, dziesiatek 3*i+1, setek 3*i+2
    for(i = parseInt((ilosc - 1) / 3); i >= 0; i--)
    {
      forma = this.sdj(cyfry[3 * i + 2], cyfry[3 * i + 1], cyfry[3 * i]);
      //wpisze this.setki, this.dziesiatki i this.jednosci oraz sprawdzi forme zdaniowa
      this.str = this.str + this.wielkosci[i][forma];//wpisze nazwe this.wielkosci w odpowiedniej formie zdaniowej
    }
  }
  return this.trim(this.str);
}

exports.Slownie = Slownie;
