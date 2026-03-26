export type Language = "fr" | "en" | "ar";

export const productContent = {
    fr: {
        hero: {
            title: "Eau de fleur d’oranger",
            subtitle: "Pureté botanique, tradition méditerranéenne, bien-être au naturel.",
            intro: "L’eau de fleur d’oranger, aussi appelée hydrolat de néroli, est un véritable trésor méditerranéen. Utilisée depuis des siècles pour ses propriétés apaisantes, cosmétiques et culinaires, elle s’intègre naturellement dans les rituels de beauté, de bien-être et de gourmandise.",
            brandStatement: "La Cerise Verte vous propose une eau florale d’exception, obtenue par entraînement à la vapeur d’eau, afin de préserver toute la pureté et la délicatesse aromatique des fleurs d’oranger."
        },
        benefits: {
            title: "Ses bienfaits",
            categories: [
                {
                    title: "En cosmétique — Peau & cheveux",
                    bullets: [
                        "Redonne de l’éclat aux peaux ternes et fatiguées",
                        "Apaise les irritations et les rougeurs",
                        "Aide à équilibrer l’excès de sébum et à resserrer les pores",
                        "Apporte brillance et souplesse aux cheveux ternes ou cassants"
                    ]
                },
                {
                    title: "En aromathérapie — Bien-être & sommeil",
                    bullets: [
                        "Son parfum floral délicat aide à réduire le stress et les tensions",
                        "Favorise la détente et l’endormissement",
                        "Aide à harmoniser les émotions et à procurer une sensation de bien-être",
                        "Traditionnellement utilisée pour rafraîchir et apaiser en cas de chaleur ou après une exposition au soleil"
                    ]
                },
                {
                    title: "Dans l’alimentaire — Santé & cuisine",
                    bullets: [
                        "Reconnue pour ses vertus digestives",
                        "Aide à soulager les ballonnements et l’inconfort digestif",
                        "Parfume délicatement pâtisseries, boissons et préparations traditionnelles",
                        "Se consomme aussi en boisson apaisante dans de l’eau tiède"
                    ]
                }
            ]
        },
        process: {
            title: "Un procédé exigeant",
            text: "1 kg de fleurs d’oranger fraîches pour 1 litre d’eau florale, pour une qualité riche, authentique et hautement concentrée."
        },
        specs: {
            title: "Spécifications produit",
            labels: [
                "Marque", "Nom du produit", "Qualité", "Formats", "Ingrédients",
                "Utilisations", "Conservation", "Pays d’origine", "Date de production",
                "À consommer de préférence avant", "Numéro de lot", "Procédé de distillation"
            ],
            values: [
                "La Cerise Verte", "Eau de fleur d’oranger", "100% Naturelle", "250 ml, 1.5 L", "100% Eau de fleur d’oranger",
                "Applications alimentaires, cosmétiques et aromathérapie", "Conserver dans un endroit frais et sec, à l'abri de la lumière directe. Bien refermer après usage.",
                "Tunisie", "03/2026", "02/2028", "FO032026", "Distillée à la vapeur en utilisant 1 kg de fleurs d’oranger fraîches pour 1 litre d’eau florale."
            ]
        },
        cta: {
            heading: "Vous souhaitez en savoir plus ?",
            text: "Prenez contact avec nous pour découvrir La Cerise Verte et nos produits naturels.",
            button: "Nous contacter"
        }
    },
    en: {
        hero: {
            title: "Orange Blossom Water",
            subtitle: "Botanical purity, Mediterranean tradition, natural well-being.",
            intro: "Orange Blossom Water, also known as Neroli Hydrosol, is a timeless Mediterranean treasure appreciated for its soothing, cosmetic, and culinary benefits. It naturally fits into beauty rituals, wellness moments, and refined food experiences.",
            brandStatement: "La Cerise Verte offers an exceptional floral water obtained through steam distillation in order to preserve the full purity and delicate aroma of orange blossoms."
        },
        benefits: {
            title: "Benefits",
            categories: [
                {
                    title: "Cosmetic use — Skin & hair",
                    bullets: [
                        "Restores glow to dull and tired skin",
                        "Helps soothe irritation and redness",
                        "Helps balance excess oil and tighten pores",
                        "Adds shine and softness to dull or brittle hair"
                    ]
                },
                {
                    title: "Aromatherapy — Well-being & sleep",
                    bullets: [
                        "Its delicate floral scent helps reduce stress and nervous tension",
                        "Encourages relaxation and restful sleep",
                        "Supports emotional balance and a feeling of calm",
                        "Traditionally used to refresh and soothe during hot weather or after sun exposure"
                    ]
                },
                {
                    title: "Culinary use — Health & gastronomy",
                    bullets: [
                        "Known for its digestive benefits",
                        "Helps relieve bloating and digestive discomfort",
                        "Delicately flavors pastries, drinks, and traditional preparations",
                        "Can also be enjoyed in warm water as a soothing traditional drink"
                    ]
                }
            ]
        },
        process: {
            title: "A demanding process",
            text: "1 kg of fresh orange blossoms for 1 liter of floral water, ensuring rich, authentic, and highly concentrated quality."
        },
        specs: {
            title: "Product specifications",
            labels: [
                "Brand", "Product name", "Quality", "Formats", "Ingredients",
                "Uses", "Storage", "Country of origin", "Production date",
                "Best before", "Batch number", "Distillation process"
            ],
            values: [
                "La Cerise Verte", "Orange Blossom Water", "100% Natural", "250 ml, 1.5 L", "100% Orange Blossom Water",
                "Food, cosmetic, and aromatherapy applications", "Store in a cool, dry place away from direct sunlight. Keep tightly closed after use.",
                "Tunisia", "03/2026", "02/2028", "FO032026", "Steam distilled using 1 kg of fresh orange blossoms per 1 liter of floral water."
            ]
        },
        cta: {
            heading: "Want to learn more?",
            text: "Get in touch to discover La Cerise Verte and our natural products.",
            button: "Contact us"
        }
    },
    ar: {
        hero: {
            title: "ماء زهر البرتقال",
            subtitle: "نقاء نباتي، تقاليد متوسطية، ورفاه طبيعي.",
            intro: "يُعد ماء زهر البرتقال، المعروف أيضاً بهيدرولات النيرولي، من الكنوز المتوسطية الأصيلة، ويُقدَّر منذ قرون لفوائده المهدئة والتجميلية والغذائية. وهو ينسجم بسهولة مع طقوس الجمال والراحة والاستخدامات اليومية الراقية.",
            brandStatement: "تقدم لكم La Cerise Verte ماءً زهرياً استثنائياً مستخلصاً بالتقطير بالبخار للحفاظ على كامل النقاء والرائحة الرقيقة لأزهار البرتقال."
        },
        benefits: {
            title: "الفوائد",
            categories: [
                {
                    title: "في التجميل — البشرة والشعر",
                    bullets: [
                        "يساعد على استعادة إشراقة البشرة المتعبة والباهتة",
                        "يهدئ التهيج والاحمرار",
                        "يساعد على موازنة إفراز الدهون وشد المسام",
                        "يمنح الشعر الباهت أو الضعيف لمعاناً ونعومة"
                    ]
                },
                {
                    title: "في العلاج العطري — الراحة والنوم",
                    bullets: [
                        "تساعد رائحته الزهرية اللطيفة على تخفيف التوتر والضغط العصبي",
                        "يعزز الاسترخاء ويساعد على النوم",
                        "يساهم في التوازن العاطفي والشعور بالسكينة",
                        "يُستخدم تقليدياً للانتعاش والتهدئة أثناء الحر أو بعد التعرض للشمس"
                    ]
                },
                {
                    title: "في الاستخدام الغذائي — الصحة والمطبخ",
                    bullets: [
                        "معروف بفوائده الهضمية",
                        "يساعد على تخفيف الانتفاخ والانزعاج الهضمي",
                        "يضيف نكهة رقيقة إلى الحلويات والمشروبات والوصفات التقليدية",
                        "يمكن تناوله مع الماء الدافئ كمشروب تقليدي مهدئ"
                    ]
                }
            ]
        },
        process: {
            title: "عملية دقيقة",
            text: "1 كغ من أزهار البرتقال الطازجة لكل 1 لتر من ماء الزهر، لضمان جودة غنية وأصيلة وعالية التركيز."
        },
        specs: {
            title: "مواصفات المنتج",
            labels: [
                "العلامة", "اسم المنتج", "الجودة", "الأحجام", "المكونات",
                "الاستخدامات", "التخزين", "بلد المنشأ", "تاريخ الإنتاج",
                "يفضل الاستهلاك قبل", "رقم الدفعة", "طريقة التقطير"
            ],
            values: [
                "La Cerise Verte", "ماء زهر البرتقال", "طبيعي 100%", "250 مل، 1.5 لتر", "100% ماء زهر البرتقال",
                "الاستخدامات الغذائية، التجميلية، والعلاج العطري", "يُحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة. يُغلق بإحكام بعد الاستخدام.",
                "تونس", "03/2026", "02/2028", "FO032026", "مقطر بالبخار باستخدام 1 كغ من أزهار البرتقال الطازجة لكل 1 لتر من ماء الزهر."
            ]
        },
        cta: {
            heading: "هل ترغب في معرفة المزيد؟",
            text: "تواصل معنا لاكتشاف La Cerise Verte ومنتجاتنا الطبيعية.",
            button: "تواصل معنا"
        }
    }
};
