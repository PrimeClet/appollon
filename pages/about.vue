<template>
  <div>
<!--    <div class="parallax">-->
<!--    </div>-->
    <div class="row mt-3">
      <div class="col-12 mt-3">
        <div class="container-lo">
          <b-container fluid>
            <b-row class="mb-3 d-none d-lg-block d-md-block d-xl-block d-flex justify-content-end">
              <b-col cols="4" md="4">
              </b-col>
              <b-col cols="7" class="ml-4 pl-5 d-flex justify-content-end" md="7">
                <select class="form-select form-select-lg mb-3" style="width: auto;" aria-label=".form-select-lg example">
                  <option selected>Privacy Policy</option>
                  <option value="1">User Agreement</option>
                  <option value="2">Content Policy</option>
                  <option value="3">Three</option>
                </select>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="4" class="pr-3 text-left text-md-right" sticky-container>
                <div class="position-fixed" v-sticky :sticky-offset="offset" sticky-side="top">
                  <b-list-group v-b-scrollspy:listgroup-ex>
                    <b-list-group-item href="#list-item-1" @click.stop="scrollInView($event)" class="border-0 text-18">Ludwig van Beethoven </b-list-group-item>
                    <b-list-group-item href="#list-item-2" @click.stop="scrollInView($event)" class="border-0 text-18">Biography</b-list-group-item>
                    <b-list-group-item href="#list-item-3" @click.stop="scrollInView($event)" class="border-0 text-18">Personal and family difficulties</b-list-group-item>
                    <b-list-group-item href="#list-item-4" @click.stop="scrollInView($event)" class="border-0 text-18">Item 4</b-list-group-item>
                    <b-list-group-item href="#list-item-5" @click.stop="scrollInView($event)" class="border-0 text-18">Item 5</b-list-group-item>
                  </b-list-group>
                  <br>
                  <select class="form-select mx-auto form-select-lg mb-3 float-md-right" style="width: auto;" aria-label=".form-select-lg example">
                    <option selected>Revisions</option>
                  </select>
                </div>
              </b-col>
              <b-row class="mb-3 mt-3 d-block d-md-none d-lg-none">
                <b-col cols="12" md="4">
                </b-col>
                <b-col cols="12" class="pl-5" md="7">
                  <select class="form-select mx-auto form-select-lg mb-3" style="width: auto;" aria-label=".form-select-lg example">
                    <option selected>Privacy Policy</option>
                    <option value="1">User Agreement</option>
                    <option value="2">Content Policy</option>
                    <option value="3">Three</option>
                  </select>
                </b-col>
              </b-row>
              <b-col cols="12" md="7" class="pl-5">
                <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:800px">
                  <h4 id="list-item-1">Ludwig van Beethoven </h4>
                  <p>
                    (Listeni/ˈlʊdvɪɡ væn ˈbeɪˌtoʊvən/, /ˈbeɪtˌhoʊvən/; German: [ˈluːtvɪç fan ˈbeːtˌhoˑfn̩] ( listen); baptised 17 December 1770[1] – 26 March 1827) was a German composer and pianist. A crucial figure in the transition between the Classical and Romantic eras
                    in Western art music, he remains one of the most famous and influential of all composers. His best-known compositions include 9 symphonies, 5 piano concertos, 1 violin concerto, 32 piano sonatas, 16 string quartets, his great Mass the Missa
                    solemnis, and one opera, Fidelio. Born in Bonn, then the capital of the Electorate of Cologne and part of the Holy Roman Empire, Beethoven displayed his musical talents at an early age and was taught by his father Johann van Beethoven and by
                    composer and conductor Christian Gottlob Neefe. At the age of 21 he moved to Vienna, where he began studying composition with Joseph Haydn, and gained a reputation as a virtuoso pianist. He lived in Vienna until his death. By his late 20s his
                    hearing began to deteriorate, and by the last decade of his life he was almost totally deaf. In 1811 he gave up conducting and performing in public but continued to compose; many of his most admired works come from these last 15 years of his
                    life.
                  </p>
                  <h4 id="list-item-2">Biography</h4>
                  <p>Beethoven was the grandson of Ludwig van Beethoven (1712–73), a musician from the town of Mechelen in the Duchy of Brabant in the Flemish region of what is now Belgium, who at the age of twenty moved to Bonn.[2][3] Ludwig (he adopted the German
                    cognate of the Dutch Lodewijk) was employed as a bass singer at the court of the Elector of Cologne, eventually rising to become, in 1761, Kapellmeister (music director) and thereafter the pre-eminent musician in Bonn. The portrait he commissioned
                    of himself towards the end of his life remained proudly displayed in his grandson's rooms as a talisman of his musical heritage.[4] Ludwig had one son, Johann (1740–1792), who worked as a tenor in the same musical establishment and gave keyboard
                    and violin lessons to supplement his income.[2] Johann married Maria Magdalena Keverich (de) in 1767; she was the daughter of Johann Heinrich Keverich (1701–1751), who had been the head chef at the court of the Archbishopric of Trier.[5]</p>
                  <p>Beethoven was born of this marriage in Bonn. There is no authentic record of the date of his birth; however, the registry of his baptism, in a Catholic service at the Parish of St. Regius on 17 December 1770, survives.[6] As children of that era
                    were traditionally baptised the day after birth in the Catholic Rhine country, and it is known that Beethoven's family and his teacher Johann Albrechtsberger celebrated his birthday on 16 December, most scholars accept 16 December 1770 as Beethoven's
                    date of birth.[7][8] Of the seven children born to Johann van Beethoven, only Ludwig, the second-born, and two younger brothers survived infancy. Caspar Anton Carl was born on 8 April 1774, and Nikolaus Johann, the youngest, was born on 2 October
                    1776.[9] Beethoven's first music teacher was his father. He later had other local teachers: the court organist Gilles van den Eeden (d. 1782), Tobias Friedrich Pfeiffer (a family friend, who provided keyboard tuition), and Franz Rovantini (a
                    relative, who instructed him in playing the violin and viola).[2] From the outset his tuition regime, which began in his fifth year, was harsh and intensive, often reducing him to tears; with the involvement of the insomniac Pfeiffer there were
                    irregular late-night sessions with the young Beethoven being dragged from his bed to the keyboard.[10] Beethoven's musical talent was obvious at a young age. Johann, aware of Leopold Mozart's successes in this area (with his son Wolfgang and
                    daughter Nannerl), attempted to promote his son as a child prodigy, claiming that Beethoven was six (he was seven) on the posters for Beethoven's first public performance in March 1778.[11] Some time after 1779, Beethoven began his studies with
                    his most important teacher in Bonn, Christian Gottlob Neefe, who was appointed the Court's Organist in that year.[12] Neefe taught Beethoven composition, and by March 1783 had helped him write his first published composition: a set of keyboard
                    variations (WoO 63).[9] Beethoven soon began working with Neefe as assistant organist, at first unpaid (1781), and then as a paid employee (1784) of the court chapel conducted by the Kapellmeister Andrea Luchesi. His first three piano sonatas,
                    named "Kurfürst" ("Elector") for their dedication to the Elector Maximilian Friedrich (1708–1784), were published in 1783. Maximilian Frederick noticed Beethoven's talent early, and subsidised and encouraged the young man's musical studies.[13]
                  </p>
                  <h4 id="list-item-3">Personal and family difficulties</h4>
                  <p>Beethoven's love life was hampered by class issues. In late 1801 he met a young countess, Julie ("Giulietta") Guicciardi through the Brunsvik family, at a time when he was giving regular piano lessons to Josephine Brunsvik. Beethoven mentions
                    his love for Julie in a November 1801 letter to his boyhood friend, Franz Wegeler, but he could not consider marrying her, due to the class difference. Beethoven later dedicated to her his Sonata No. 14, now commonly known as the Moonlight sonata
                    or Mondscheinsonate (in German).[69] Für Elise MENU0:00 Problems playing this file? See media help. His relationship with Josephine Brunsvik deepened after the death in 1804 of her aristocratic first husband, the Count Joseph Deym. Beethoven
                    wrote Josephine 15 passionate love letters from late 1804 to around 1809/10. Although his feelings were obviously reciprocated, Josephine was forced by her family to withdraw from him in 1807. She cited her "duty" and the fact that she would
                    have lost the custodianship of her aristocratic children had she married a commoner.[70] After Josephine married Baron von Stackelberg in 1810, Beethoven may have proposed unsuccessfully to Therese Malfatti, the supposed dedicatee of "Für Elise";[71][72]
                    his status as a commoner may again have interfered with those plans. Life mask made in 1812 In the spring of 1811 Beethoven became seriously ill, suffering headaches and high fever. On the advice of his doctor, he spent six weeks in the Bohemian
                    spa town of Teplitz. The following winter, which was dominated by work on the Seventh symphony, he was again ill, and his doctor ordered him to spend the summer of 1812 at the spa Teplitz. It is certain that he was at Teplitz when he wrote a
                    love letter to his "Immortal Beloved".[73] The identity of the intended recipient has long been a subject of debate; candidates include Julie Guicciardi, Therese Malfatti, Josephine Brunsvik, and Antonie Brentano. Beethoven visited his brother
                    Johann at the end of October 1812. He wished to end Johann's cohabitation with Therese Obermayer, a woman who already had an illegitimate child. He was unable to convince Johann to end the relationship and appealed to the local civic and religious
                    authorities. Johann and Therese married on 9 November.[74] Beethoven in 1814. Portrait by Louis-René Létronne. In early 1813 Beethoven apparently went through a difficult emotional period, and his compositional output dropped. His personal appearance
                    degraded—it had generally been neat—as did his manners in public, especially when dining. Beethoven took care of his brother (who was suffering from tuberculosis) and his family, an expense that he claimed left him penniless. Beethoven was finally
                    motivated to begin significant composition again in June 1813, when news arrived of the defeat of one of Napoleon's armies at Vitoria, Spain, by a coalition of forces under the Duke of Wellington. This news stimulated him to write the battle
                    symphony known as Wellington's Victory. It was first performed on 8 December, along with his Seventh Symphony, at a charity concert for victims of the war. The work was a popular hit, probably because of its programmatic style, which was entertaining
                    and easy to understand. It received repeat performances at concerts Beethoven staged in January and February 1814. Beethoven's renewed popularity led to demands for a revival of Fidelio, which, in its third revised version, was also well received
                    at its July opening. That summer he composed a piano sonata for the first time in five years (No. 27, Opus 90). This work was in a markedly more Romantic style than his earlier sonatas. He was also one of many composers who produced music in
                    a patriotic vein to entertain the many heads of state and diplomats who came to the Congress of Vienna that began in November 1814. His output of songs included his only song cycle, "An die ferne Geliebte," and the extraordinarily expressive
                    second setting of the poem "An die Hoffnung" (Op. 94) in 1815. Compared to its first setting in 1805 (a gift for Josephine Brunsvik), it was "far more dramatic ... The entire spirit is that of an operatic scena."[75]</p>
                  <h4 id="list-item-4">Item 4</h4>
                  <p>Beethoven was the grandson of Ludwig van Beethoven (1712–73), a musician from the town of Mechelen in the Duchy of Brabant in the Flemish region of what is now Belgium, who at the age of twenty moved to Bonn.[2][3] Ludwig (he adopted the German
                    cognate of the Dutch Lodewijk) was employed as a bass singer at the court of the Elector of Cologne, eventually rising to become, in 1761, Kapellmeister (music director) and thereafter the pre-eminent musician in Bonn. The portrait he commissioned
                    of himself towards the end of his life remained proudly displayed in his grandson's rooms as a talisman of his musical heritage.[4] Ludwig had one son, Johann (1740–1792), who worked as a tenor in the same musical establishment and gave keyboard
                    and violin lessons to supplement his income.[2] Johann married Maria Magdalena Keverich (de) in 1767; she was the daughter of Johann Heinrich Keverich (1701–1751), who had been the head chef at the court of the Archbishopric of Trier.[5]</p>
                  <h4 id="list-item-5">Item 5</h4>
                  <p>Beethoven was the grandson of Ludwig van Beethoven (1712–73), a musician from the town of Mechelen in the Duchy of Brabant in the Flemish region of what is now Belgium, who at the age of twenty moved to Bonn.[2][3] Ludwig (he adopted the German
                    cognate of the Dutch Lodewijk) was employed as a bass singer at the court of the Elector of Cologne, eventually rising to become, in 1761, Kapellmeister (music director) and thereafter the pre-eminent musician in Bonn. The portrait he commissioned
                    of himself towards the end of his life remained proudly displayed in his grandson's rooms as a talisman of his musical heritage.[4] Ludwig had one son, Johann (1740–1792), who worked as a tenor in the same musical establishment and gave keyboard
                    and violin lessons to supplement his income.[2] Johann married Maria Magdalena Keverich (de) in 1767; she was the daughter of Johann Heinrich Keverich (1701–1751), who had been the head chef at the court of the Archbishopric of Trier.[5]</p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      offset: {top: 10, bottom: 20}
    }
  },
  methods: {
    onActivate(target) {
      console.log('Receved Event: scrollspy::activate for target ', target);
    },
    scrollInView($event) {
      let href = $event.target.getAttribute('href')
      if (href) {
        let el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  },
  created() {
    this.$root.$on('scrollspy::activate', this.onActivate);
  }
}
</script>

<style scoped>

.parallax {
  /* The image used */
  background-color: #ffc107;
  background-image: url('https://www.redditinc.com/assets/images/site/planet-06.svg'), url("https://www.redditinc.com/assets/images/site/wave-05.png");
  transform: translate3d(0px, 0px, 0px);
  /* Full height */
  height: 136px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: right bottom, center;
  background-repeat: no-repeat;
  background-size: contain;
}
.container-lo {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1060px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

#two-columns {
  padding-bottom: 86px;
}
#two-columns {
  padding-bottom: 64px;
  padding-top: 18px;
}

.list-group-item.list-group-item-action.active::after {
  font-family: "Font Awesome 5 Free";
  content: "\f0d9";
  display: inline-block;
  padding-bottom: 2px;
  padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  padding-left: 10px;
}
.list-group-item.list-group-item-action.active {
  font-weight: bolder !important;
}

list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: none;
  font-size: large !important;
}


b, strong {
  font-weight: bolder;
  color: black !important;
}
</style>
