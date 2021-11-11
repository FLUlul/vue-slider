/* 
Descrizione:
Rifare l’esercizio dello slider come fatto assieme in classe.
Quindi farlo funzionare con Vue, nel modo del framework.

Bonus (idee possibili e sempre in caso in sub folder “bonus”):
click diretto sulla thumb per vedere relativa slide (e il resto continua a funzionare chiaramente :occhiolino: )
Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. (in questo caso potrebbe richiedere un pò di ricerca nella doc e/o fuori);
quello che ritenete interessante;
*/

var app = new Vue (
    {
        el: "#container",
        data: {
            activeSlide: 0,
            slides: [
                {
                    image: "img/01.jpg",
                    title: "Svizzera",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias commodi autem labore maxime vitae nihil fugit vero neque vel blanditiis distinctio, veritatis amet quos non"
                },
                {
                    image: "img/02.jpg",
                    title: "Svezia",
                    text: "Lorem ipsum dolor"
                },
                {
                    image: "img/03.jpg",
                    title: "Gran Bretagna",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias commodi autem labore "
                },
                {
                    image: "img/04.jpg",
                    title: "Germania",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  maxime vitae nihil fugit vero neque vel blanditiis distinctio, veritatis amet quos non"
                },
                {
                    image: "img/05.jpg",
                    title: "Hawaii",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                }
            ]
            
        },
        methods: {
            autoSlide: function(){
                setInterval(() => {
                    this.activeSlide++
                    if (this.activeSlide >= this.slides.length) {
                        this.activeSlide = 0;
                    }
                }, 3000);
            }
        },
        beforeMount(){
            this.autoSlide()
         },
    }
);