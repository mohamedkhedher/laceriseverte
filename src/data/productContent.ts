export type Language = "fr" | "en" | "ar";

export interface ProductVariant {
    volume: string;
    price: number;
    volumeLabel: { fr: string; en: string; ar: string };
}

export interface ProductData {
    slug: string;
    image: string;
    bannerImage: string;
    flowerImage: string;
    variants: ProductVariant[];
    content: {
        [key in Language]: {
            hero: {
                title: string;
                subtitle: string;
                intro: string;
                brandStatement: string;
            };
            benefits: {
                title: string;
                categories: {
                    title: string;
                    bullets: string[];
                }[];
            };
            process: {
                title: string;
                text: string;
            };
            specs: {
                title: string;
                labels: string[];
                values: string[];
            };
            cta: {
                heading: string;
                text: string;
                button: string;
            };
        };
    };
}

export const products: ProductData[] = [
    {
        slug: "fo",
        image: "/images/orange-blossom-product.png",
        bannerImage: "/images/banner-floral-waters.png",
        flowerImage: "/images/orange-blossom-flower.png",
        variants: [
            {
                volume: "250ml",
                price: 15.000,
                volumeLabel: { fr: "250 ml", en: "250 ml", ar: "250 مل" }
            },
            {
                volume: "1.5L",
                price: 48.000,
                volumeLabel: { fr: "1.5 L", en: "1.5 L", ar: "1.5 لتر" }
            }
        ],
        content: {
            fr: {
                hero: {
                    title: "Eau de fleur d'oranger",
                    subtitle: "Pureté botanique, tradition méditerranéenne, bien-être au naturel.",
                    intro: "L'eau de fleur d'oranger, aussi appelée hydrolat de néroli, est un véritable trésor méditerranéen. Utilisée depuis des siècles pour ses propriétés apaisantes, cosmétiques et culinaires, elle s'intègre naturellement dans les rituels de beauté, de bien-être et de gourmandise.",
                    brandStatement: "La Cerise Verte vous propose une eau florale d'exception, obtenue par entraînement à la vapeur d'eau, afin de préserver toute la pureté et la délicatesse aromatique des fleurs d'oranger."
                },
                benefits: {
                    title: "Ses bienfaits",
                    categories: [
                        {
                            title: "En cosmétique — Peau & cheveux",
                            bullets: [
                                "Redonne de l'éclat aux peaux ternes et fatiguées",
                                "Apaise les irritations et les rougeurs",
                                "Aide à équilibrer l'excès de sébum et à resserrer les pores",
                                "Apporte brillance et souplesse aux cheveux ternes ou cassants"
                            ]
                        },
                        {
                            title: "En aromathérapie — Bien-être & sommeil",
                            bullets: [
                                "Son parfum floral délicat aide à réduire le stress et les tensions",
                                "Favorise la détente et l'endormissement",
                                "Aide à harmoniser les émotions et à procurer une sensation de bien-être",
                                "Traditionnellement utilisée pour rafraîchir et apaiser en cas de chaleur ou après une exposition au soleil"
                            ]
                        },
                        {
                            title: "Dans l'alimentaire — Santé & cuisine",
                            bullets: [
                                "Reconnue pour ses vertus digestives",
                                "Aide à soulager les ballonnements et l'inconfort digestif",
                                "Parfume délicatement pâtisseries, boissons et préparations traditionnelles",
                                "Se consomme aussi en boisson apaisante dans de l'eau tiède"
                            ]
                        }
                    ]
                },
                process: {
                    title: "Un procédé exigeant",
                    text: "1 kg de fleurs d'oranger fraîches pour 1 litre d'eau florale, pour une qualité riche, authentique et hautement concentrée."
                },
                specs: {
                    title: "Spécifications produit",
                    labels: [
                        "Marque", "Nom du produit", "Qualité", "Formats", "Ingrédients",
                        "Utilisations", "Conservation", "Pays d'origine", "Date de production",
                        "À consommer de préférence avant", "Numéro de lot", "Procédé de distillation"
                    ],
                    values: [
                        "La Cerise Verte", "Eau de fleur d'oranger", "100% Naturelle", "250 ml, 1.5 L", "100% Eau de fleur d'oranger",
                        "Applications alimentaires, cosmétiques et aromathérapie", "Conserver dans un endroit frais et sec, à l'abri de la lumière directe. Bien refermer après usage.",
                        "Tunisie", "03/2026", "02/2028", "FO032026", "Distillée à la vapeur en utilisant 1 kg de fleurs d'oranger fraîches pour 1 litre d'eau florale."
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
                    intro: "يُعد ماء زهر البرتقال، المعروف أيضاً بهيدرولات النيرولي، من الكنوز المتوسطية الأصيلة، ويُقدَّر منذ قرون لفوائده المهدئة والتجميلية والغذائية. وهو ينسجم بسهولة مع طقوس الجمال والراحة والاستخدامات اليومية الراقية.",
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
        }
    },
    {
        slug: "eau_de_geranuim",
        image: "/images/geranium-product.png",
        bannerImage: "/images/banner-floral-waters.png",
        flowerImage: "/images/geranium-flower.png",
        variants: [
            {
                volume: "250ml",
                price: 10.000,
                volumeLabel: { fr: "250 ml", en: "250 ml", ar: "250 مل" }
            },
            {
                volume: "1.5L",
                price: 38.000,
                volumeLabel: { fr: "1.5 L", en: "1.5 L", ar: "1.5 لتر" }
            }
        ],
        content: {
            fr: {
                hero: {
                    title: "Eau de Géranium",
                    subtitle: "Fraîcheur florale, équilibre naturel, soin au quotidien.",
                    intro: "L'eau de géranium, obtenue par distillation à la vapeur des feuilles et fleurs de géranium rosat, est un hydrolat aux multiples vertus. Appréciée en cosmétique pour ses propriétés purifiantes et tonifiantes, elle s'utilise également en aromathérapie pour son parfum floral enveloppant.",
                    brandStatement: "La Cerise Verte vous propose un hydrolat de géranium d'exception, distillé avec soin pour capturer toute l'essence et les bienfaits de cette plante précieuse."
                },
                benefits: {
                    title: "Ses bienfaits",
                    categories: [
                        {
                            title: "En cosmétique — Peau & cheveux",
                            bullets: [
                                "Purifie et tonifie la peau en douceur",
                                "Aide à réguler la production de sébum",
                                "Apaise les peaux sensibles et irritées",
                                "Apporte éclat et vitalité au teint"
                            ]
                        },
                        {
                            title: "En aromathérapie — Bien-être & équilibre",
                            bullets: [
                                "Son parfum floral aide à réduire le stress",
                                "Favorise l'équilibre émotionnel et la sérénité",
                                "Procure une sensation de fraîcheur et de bien-être",
                                "Utilisé traditionnellement pour ses propriétés harmonisantes"
                            ]
                        },
                        {
                            title: "Dans l'alimentaire — Santé & cuisine",
                            bullets: [
                                "Aromatise subtilement les desserts et boissons",
                                "Apporte une note florale raffinée aux préparations",
                                "Peut être consommé dilué dans de l'eau comme boisson rafraîchissante",
                                "Reconnu pour ses vertus apaisantes sur la digestion"
                            ]
                        }
                    ]
                },
                process: {
                    title: "Un procédé exigeant",
                    text: "Des feuilles et fleurs de géranium rosat soigneusement sélectionnées, distillées à la vapeur pour un hydrolat pur et authentique."
                },
                specs: {
                    title: "Spécifications produit",
                    labels: [
                        "Marque", "Nom du produit", "Qualité", "Formats", "Ingrédients",
                        "Utilisations", "Conservation", "Pays d'origine", "Date de production",
                        "À consommer de préférence avant", "Numéro de lot", "Procédé de distillation"
                    ],
                    values: [
                        "La Cerise Verte", "Eau de Géranium", "100% Naturelle", "250 ml, 1.5 L", "100% Eau de Géranium",
                        "Applications alimentaires, cosmétiques et aromathérapie", "Conserver dans un endroit frais et sec, à l'abri de la lumière directe. Bien refermer après usage.",
                        "Tunisie", "03/2026", "02/2028", "GER032026", "Distillée à la vapeur à partir de feuilles et fleurs de géranium rosat."
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
                    title: "Geranium Water",
                    subtitle: "Floral freshness, natural balance, everyday care.",
                    intro: "Geranium water, obtained by steam distillation of rose geranium leaves and flowers, is a hydrosol with multiple virtues. Appreciated in cosmetics for its purifying and toning properties, it is also used in aromatherapy for its enveloping floral scent.",
                    brandStatement: "La Cerise Verte offers an exceptional geranium hydrosol, carefully distilled to capture the full essence and benefits of this precious plant."
                },
                benefits: {
                    title: "Benefits",
                    categories: [
                        {
                            title: "Cosmetic use — Skin & hair",
                            bullets: [
                                "Gently purifies and tones the skin",
                                "Helps regulate sebum production",
                                "Soothes sensitive and irritated skin",
                                "Brings radiance and vitality to the complexion"
                            ]
                        },
                        {
                            title: "Aromatherapy — Well-being & balance",
                            bullets: [
                                "Its floral scent helps reduce stress",
                                "Promotes emotional balance and serenity",
                                "Provides a feeling of freshness and well-being",
                                "Traditionally used for its harmonizing properties"
                            ]
                        },
                        {
                            title: "Culinary use — Health & gastronomy",
                            bullets: [
                                "Subtly flavors desserts and beverages",
                                "Adds a refined floral note to preparations",
                                "Can be consumed diluted in water as a refreshing drink",
                                "Recognized for its soothing digestive properties"
                            ]
                        }
                    ]
                },
                process: {
                    title: "A demanding process",
                    text: "Carefully selected rose geranium leaves and flowers, steam distilled for a pure and authentic hydrosol."
                },
                specs: {
                    title: "Product specifications",
                    labels: [
                        "Brand", "Product name", "Quality", "Formats", "Ingredients",
                        "Uses", "Storage", "Country of origin", "Production date",
                        "Best before", "Batch number", "Distillation process"
                    ],
                    values: [
                        "La Cerise Verte", "Geranium Water", "100% Natural", "250 ml, 1.5 L", "100% Geranium Water",
                        "Food, cosmetic, and aromatherapy applications", "Store in a cool, dry place away from direct sunlight. Keep tightly closed after use.",
                        "Tunisia", "03/2026", "02/2028", "GER032026", "Steam distilled from rose geranium leaves and flowers."
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
                    title: "ماء الجيرانيوم",
                    subtitle: "انتعاش زهري، توازن طبيعي، عناية يومية.",
                    intro: "يُستخلص ماء الجيرانيوم بالتقطير بالبخار من أوراق وأزهار الجيرانيوم العطري، وهو هيدرولات متعدد الفوائد. يُقدَّر في مجال التجميل لخصائصه المنقية والمنشطة، ويُستخدم أيضاً في العلاج العطري لرائحته الزهرية المميزة.",
                    brandStatement: "تقدم لكم La Cerise Verte هيدرولات جيرانيوم استثنائي، مقطر بعناية لالتقاط كامل جوهر وفوائد هذا النبات الثمين."
                },
                benefits: {
                    title: "الفوائد",
                    categories: [
                        {
                            title: "في التجميل — البشرة والشعر",
                            bullets: [
                                "ينقي البشرة وينشطها بلطف",
                                "يساعد على تنظيم إفراز الدهون",
                                "يهدئ البشرة الحساسة والمتهيجة",
                                "يمنح البشرة إشراقاً وحيوية"
                            ]
                        },
                        {
                            title: "في العلاج العطري — الراحة والتوازن",
                            bullets: [
                                "تساعد رائحته الزهرية على تخفيف التوتر",
                                "يعزز التوازن العاطفي والسكينة",
                                "يمنح شعوراً بالانتعاش والراحة",
                                "يُستخدم تقليدياً لخصائصه المتناغمة"
                            ]
                        },
                        {
                            title: "في الاستخدام الغذائي — الصحة والمطبخ",
                            bullets: [
                                "يضيف نكهة رقيقة للحلويات والمشروبات",
                                "يمنح الوصفات لمسة زهرية راقية",
                                "يمكن تناوله مخففاً في الماء كمشروب منعش",
                                "معروف بفوائده المهدئة للجهاز الهضمي"
                            ]
                        }
                    ]
                },
                process: {
                    title: "عملية دقيقة",
                    text: "أوراق وأزهار الجيرانيوم العطري المختارة بعناية، مقطرة بالبخار للحصول على هيدرولات نقي وأصيل."
                },
                specs: {
                    title: "مواصفات المنتج",
                    labels: [
                        "العلامة", "اسم المنتج", "الجودة", "الأحجام", "المكونات",
                        "الاستخدامات", "التخزين", "بلد المنشأ", "تاريخ الإنتاج",
                        "يفضل الاستهلاك قبل", "رقم الدفعة", "طريقة التقطير"
                    ],
                    values: [
                        "La Cerise Verte", "ماء الجيرانيوم", "طبيعي 100%", "250 مل، 1.5 لتر", "100% ماء الجيرانيوم",
                        "الاستخدامات الغذائية، التجميلية، والعلاج العطري", "يُحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة. يُغلق بإحكام بعد الاستخدام.",
                        "تونس", "03/2026", "02/2028", "GER032026", "مقطر بالبخار من أوراق وأزهار الجيرانيوم العطري."
                    ]
                },
                cta: {
                    heading: "هل ترغب في معرفة المزيد؟",
                    text: "تواصل معنا لاكتشاف La Cerise Verte ومنتجاتنا الطبيعية.",
                    button: "تواصل معنا"
                }
            }
        }
    },
    {
        slug: "eau-de-rose",
        image: "/images/rose-product.png",
        bannerImage: "/images/banner-floral-waters.png",
        flowerImage: "/images/rose-flower.png",
        variants: [
            {
                volume: "250ml",
                price: 20.000,
                volumeLabel: { fr: "250 ml", en: "250 ml", ar: "250 مل" }
            },
            {
                volume: "1.5L",
                price: 90.000,
                volumeLabel: { fr: "1.5 L", en: "1.5 L", ar: "1.5 لتر" }
            }
        ],
        content: {
            fr: {
                hero: {
                    title: "Eau de Rose",
                    subtitle: "Élégance florale, douceur ancestrale, éclat naturel.",
                    intro: "L'eau de rose, distillée à partir de pétales de roses fraîches, est l'un des hydrolats les plus précieux au monde. Symbole de beauté et de raffinement depuis l'Antiquité, elle est reconnue pour ses propriétés adoucissantes, tonifiantes et régénérantes.",
                    brandStatement: "La Cerise Verte vous propose une eau de rose d'exception, obtenue par distillation traditionnelle à la vapeur pour capturer toute la délicatesse et la puissance des pétales de rose."
                },
                benefits: {
                    title: "Ses bienfaits",
                    categories: [
                        {
                            title: "En cosmétique — Peau & cheveux",
                            bullets: [
                                "Hydrate et revitalise les peaux sèches et sensibles",
                                "Aide à réduire les rougeurs et les imperfections",
                                "Tonifie et raffermit la peau pour un teint éclatant",
                                "Apporte douceur et brillance aux cheveux"
                            ]
                        },
                        {
                            title: "En aromathérapie — Bien-être & sérénité",
                            bullets: [
                                "Son parfum délicat procure une sensation de calme immédiat",
                                "Aide à apaiser l'anxiété et les tensions émotionnelles",
                                "Favorise un sommeil paisible et réparateur",
                                "Utilisée traditionnellement pour ses vertus harmonisantes"
                            ]
                        },
                        {
                            title: "Dans l'alimentaire — Santé & cuisine",
                            bullets: [
                                "Parfume avec élégance les pâtisseries orientales et les desserts",
                                "S'ajoute aux boissons pour une touche florale raffinée",
                                "Favorise la digestion et apporte un effet apaisant",
                                "Ingrédient de choix dans les recettes traditionnelles méditerranéennes"
                            ]
                        }
                    ]
                },
                process: {
                    title: "Un procédé exigeant",
                    text: "Des pétales de roses fraîches soigneusement cueillis et distillés à la vapeur pour un hydrolat d'une pureté et d'une intensité aromatique exceptionnelles."
                },
                specs: {
                    title: "Spécifications produit",
                    labels: [
                        "Marque", "Nom du produit", "Qualité", "Formats", "Ingrédients",
                        "Utilisations", "Conservation", "Pays d'origine", "Date de production",
                        "À consommer de préférence avant", "Numéro de lot", "Procédé de distillation"
                    ],
                    values: [
                        "La Cerise Verte", "Eau de Rose", "100% Naturelle", "250 ml", "100% Eau de Rose",
                        "Applications alimentaires, cosmétiques et aromathérapie", "Conserver dans un endroit frais et sec, à l'abri de la lumière directe. Bien refermer après usage.",
                        "Tunisie", "03/2026", "02/2028", "ROS032026", "Distillée à la vapeur à partir de pétales de roses fraîches."
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
                    title: "Rose Water",
                    subtitle: "Floral elegance, ancestral softness, natural radiance.",
                    intro: "Rose water, distilled from fresh rose petals, is one of the most precious hydrosols in the world. A symbol of beauty and refinement since antiquity, it is recognized for its softening, toning, and regenerating properties.",
                    brandStatement: "La Cerise Verte offers an exceptional rose water, obtained through traditional steam distillation to capture the full delicacy and power of rose petals."
                },
                benefits: {
                    title: "Benefits",
                    categories: [
                        {
                            title: "Cosmetic use — Skin & hair",
                            bullets: [
                                "Hydrates and revitalizes dry and sensitive skin",
                                "Helps reduce redness and imperfections",
                                "Tones and firms the skin for a radiant complexion",
                                "Brings softness and shine to hair"
                            ]
                        },
                        {
                            title: "Aromatherapy — Well-being & serenity",
                            bullets: [
                                "Its delicate scent provides an immediate sense of calm",
                                "Helps soothe anxiety and emotional tension",
                                "Promotes peaceful and restorative sleep",
                                "Traditionally used for its harmonizing virtues"
                            ]
                        },
                        {
                            title: "Culinary use — Health & gastronomy",
                            bullets: [
                                "Elegantly flavors oriental pastries and desserts",
                                "Adds a refined floral touch to beverages",
                                "Promotes digestion and provides a soothing effect",
                                "A choice ingredient in traditional Mediterranean recipes"
                            ]
                        }
                    ]
                },
                process: {
                    title: "A demanding process",
                    text: "Carefully hand-picked fresh rose petals, steam distilled for a hydrosol of exceptional purity and aromatic intensity."
                },
                specs: {
                    title: "Product specifications",
                    labels: [
                        "Brand", "Product name", "Quality", "Formats", "Ingredients",
                        "Uses", "Storage", "Country of origin", "Production date",
                        "Best before", "Batch number", "Distillation process"
                    ],
                    values: [
                        "La Cerise Verte", "Rose Water", "100% Natural", "250 ml", "100% Rose Water",
                        "Food, cosmetic, and aromatherapy applications", "Store in a cool, dry place away from direct sunlight. Keep tightly closed after use.",
                        "Tunisia", "03/2026", "02/2028", "ROS032026", "Steam distilled from fresh rose petals."
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
                    title: "ماء الورد",
                    subtitle: "أناقة زهرية، نعومة تراثية، إشراق طبيعي.",
                    intro: "يُستخلص ماء الورد من بتلات الورد الطازجة، وهو من أثمن الهيدرولات في العالم. رمز للجمال والرقي منذ العصور القديمة، يُقدَّر لخصائصه المنعمة والمنشطة والمجددة للبشرة.",
                    brandStatement: "تقدم لكم La Cerise Verte ماء ورد استثنائي، مستخلص بالتقطير التقليدي بالبخار لالتقاط كامل رقة وقوة بتلات الورد."
                },
                benefits: {
                    title: "الفوائد",
                    categories: [
                        {
                            title: "في التجميل — البشرة والشعر",
                            bullets: [
                                "يرطب وينعش البشرة الجافة والحساسة",
                                "يساعد على تقليل الاحمرار والعيوب",
                                "ينشط البشرة ويشدها لمظهر مشرق",
                                "يمنح الشعر نعومة ولمعاناً"
                            ]
                        },
                        {
                            title: "في العلاج العطري — الراحة والسكينة",
                            bullets: [
                                "رائحته الرقيقة تمنح شعوراً فورياً بالهدوء",
                                "يساعد على تهدئة القلق والتوتر العاطفي",
                                "يعزز النوم الهادئ والمريح",
                                "يُستخدم تقليدياً لخصائصه المتناغمة"
                            ]
                        },
                        {
                            title: "في الاستخدام الغذائي — الصحة والمطبخ",
                            bullets: [
                                "يضيف نكهة أنيقة للحلويات الشرقية",
                                "يمنح المشروبات لمسة زهرية راقية",
                                "يساعد على الهضم ويمنح تأثيراً مهدئاً",
                                "مكون أساسي في الوصفات التقليدية المتوسطية"
                            ]
                        }
                    ]
                },
                process: {
                    title: "عملية دقيقة",
                    text: "بتلات ورد طازجة مختارة بعناية، مقطرة بالبخار للحصول على هيدرولات بنقاء وكثافة عطرية استثنائية."
                },
                specs: {
                    title: "مواصفات المنتج",
                    labels: [
                        "العلامة", "اسم المنتج", "الجودة", "الأحجام", "المكونات",
                        "الاستخدامات", "التخزين", "بلد المنشأ", "تاريخ الإنتاج",
                        "يفضل الاستهلاك قبل", "رقم الدفعة", "طريقة التقطير"
                    ],
                    values: [
                        "La Cerise Verte", "ماء الورد", "طبيعي 100%", "250 مل", "100% ماء الورد",
                        "الاستخدامات الغذائية، التجميلية، والعلاج العطري", "يُحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة. يُغلق بإحكام بعد الاستخدام.",
                        "تونس", "03/2026", "02/2028", "ROS032026", "مقطر بالبخار من بتلات الورد الطازجة."
                    ]
                },
                cta: {
                    heading: "هل ترغب في معرفة المزيد؟",
                    text: "تواصل معنا لاكتشاف La Cerise Verte ومنتجاتنا الطبيعية.",
                    button: "تواصل معنا"
                }
            }
        }
    },
    {
        slug: "eau_d'eglantier",
        image: "/images/wild-rose-product.png",
        bannerImage: "/images/banner-floral-waters.png",
        flowerImage: "/images/wild-rose-flower.png",
        variants: [
            {
                volume: "250ml",
                price: 30.000,
                volumeLabel: { fr: "250 ml", en: "250 ml", ar: "250 مل" }
            },
            {
                volume: "1.5L",
                price: 110.000,
                volumeLabel: { fr: "1.5 L", en: "1.5 L", ar: "1.5 لتر" }
            }
        ],
        content: {
            fr: {
                hero: {
                    title: "Eau d'Églantier",
                    subtitle: "Trésor sauvage, beauté rare, bienfaits précieux.",
                    intro: "L'eau d'églantier, distillée à partir des fleurs de rosier sauvage (Rosa canina), est un hydrolat rare et précieux. Connue pour ses propriétés régénérantes et antioxydantes, elle est prisée pour ses bienfaits exceptionnels sur la peau et le bien-être.",
                    brandStatement: "La Cerise Verte vous propose un hydrolat d'églantier d'exception, distillé avec soin à partir de fleurs sauvages pour préserver toute la richesse de ce trésor botanique."
                },
                benefits: {
                    title: "Ses bienfaits",
                    categories: [
                        {
                            title: "En cosmétique — Peau & cheveux",
                            bullets: [
                                "Riche en antioxydants pour protéger la peau du vieillissement",
                                "Aide à régénérer et réparer les peaux abîmées",
                                "Apporte éclat et vitalité aux peaux ternes",
                                "Nourrit et renforce les cheveux fragilisés"
                            ]
                        },
                        {
                            title: "En aromathérapie — Bien-être & vitalité",
                            bullets: [
                                "Son parfum délicat et sauvage apporte une sensation de fraîcheur",
                                "Aide à revitaliser l'esprit et à stimuler l'énergie",
                                "Favorise la concentration et la clarté mentale",
                                "Traditionnellement utilisé pour ses propriétés tonifiantes"
                            ]
                        },
                        {
                            title: "Dans l'alimentaire — Santé & bien-être",
                            bullets: [
                                "Source naturelle de vitamine C",
                                "Renforce les défenses immunitaires",
                                "Aide à la digestion et au confort intestinal",
                                "Se consomme en infusion ou dilué dans de l'eau"
                            ]
                        }
                    ]
                },
                process: {
                    title: "Un procédé exigeant",
                    text: "Des fleurs d'églantier sauvages soigneusement récoltées et distillées à la vapeur pour un hydrolat d'une pureté et d'une concentration exceptionnelles."
                },
                specs: {
                    title: "Spécifications produit",
                    labels: [
                        "Marque", "Nom du produit", "Qualité", "Formats", "Ingrédients",
                        "Utilisations", "Conservation", "Pays d'origine", "Date de production",
                        "À consommer de préférence avant", "Numéro de lot", "Procédé de distillation"
                    ],
                    values: [
                        "La Cerise Verte", "Eau d'Églantier", "100% Naturelle", "250 ml", "100% Eau d'Églantier",
                        "Applications cosmétiques, aromathérapie et bien-être", "Conserver dans un endroit frais et sec, à l'abri de la lumière directe. Bien refermer après usage.",
                        "Tunisie", "03/2026", "02/2028", "EGL032026", "Distillée à la vapeur à partir de fleurs d'églantier sauvages."
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
                    title: "Wild Rose Water",
                    subtitle: "Wild treasure, rare beauty, precious benefits.",
                    intro: "Wild rose water (rosehip water), distilled from the flowers of Rosa canina, is a rare and precious hydrosol. Known for its regenerating and antioxidant properties, it is valued for its exceptional skin and wellness benefits.",
                    brandStatement: "La Cerise Verte offers an exceptional rosehip hydrosol, carefully distilled from wild flowers to preserve the full richness of this botanical treasure."
                },
                benefits: {
                    title: "Benefits",
                    categories: [
                        {
                            title: "Cosmetic use — Skin & hair",
                            bullets: [
                                "Rich in antioxidants to protect skin from aging",
                                "Helps regenerate and repair damaged skin",
                                "Brings radiance and vitality to dull skin",
                                "Nourishes and strengthens weakened hair"
                            ]
                        },
                        {
                            title: "Aromatherapy — Well-being & vitality",
                            bullets: [
                                "Its delicate wild scent brings a sensation of freshness",
                                "Helps revitalize the mind and stimulate energy",
                                "Promotes concentration and mental clarity",
                                "Traditionally used for its toning properties"
                            ]
                        },
                        {
                            title: "Wellness — Health & well-being",
                            bullets: [
                                "Natural source of vitamin C",
                                "Strengthens immune defenses",
                                "Supports digestion and intestinal comfort",
                                "Can be consumed as an infusion or diluted in water"
                            ]
                        }
                    ]
                },
                process: {
                    title: "A demanding process",
                    text: "Carefully harvested wild rosehip flowers, steam distilled for a hydrosol of exceptional purity and concentration."
                },
                specs: {
                    title: "Product specifications",
                    labels: [
                        "Brand", "Product name", "Quality", "Formats", "Ingredients",
                        "Uses", "Storage", "Country of origin", "Production date",
                        "Best before", "Batch number", "Distillation process"
                    ],
                    values: [
                        "La Cerise Verte", "Wild Rose Water", "100% Natural", "250 ml", "100% Wild Rose Water",
                        "Cosmetic, aromatherapy, and wellness applications", "Store in a cool, dry place away from direct sunlight. Keep tightly closed after use.",
                        "Tunisia", "03/2026", "02/2028", "EGL032026", "Steam distilled from wild rosehip flowers."
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
                    title: "ماء نسرين",
                    subtitle: "كنز بري، جمال نادر، فوائد ثمينة.",
                    intro: "يُستخلص ماء النسرين من أزهار الورد البري (Rosa canina)، وهو هيدرولات نادر وثمين. يُعرف بخصائصه المجددة والمضادة للأكسدة، ويُقدَّر لفوائده الاستثنائية على البشرة والصحة العامة.",
                    brandStatement: "تقدم لكم La Cerise Verte هيدرولات نسرين استثنائي، مقطر بعناية من أزهار برية للحفاظ على كامل غنى هذا الكنز النباتي."
                },
                benefits: {
                    title: "الفوائد",
                    categories: [
                        {
                            title: "في التجميل — البشرة والشعر",
                            bullets: [
                                "غني بمضادات الأكسدة لحماية البشرة من الشيخوخة",
                                "يساعد على تجديد وإصلاح البشرة المتضررة",
                                "يمنح البشرة الباهتة إشراقاً وحيوية",
                                "يغذي ويقوي الشعر الضعيف"
                            ]
                        },
                        {
                            title: "في العلاج العطري — الراحة والحيوية",
                            bullets: [
                                "رائحته البرية الرقيقة تمنح شعوراً بالانتعاش",
                                "يساعد على تنشيط الذهن وتحفيز الطاقة",
                                "يعزز التركيز والصفاء الذهني",
                                "يُستخدم تقليدياً لخصائصه المنشطة"
                            ]
                        },
                        {
                            title: "في الصحة والعافية",
                            bullets: [
                                "مصدر طبيعي لفيتامين سي",
                                "يقوي الدفاعات المناعية",
                                "يساعد على الهضم والراحة المعوية",
                                "يمكن تناوله كمنقوع أو مخففاً في الماء"
                            ]
                        }
                    ]
                },
                process: {
                    title: "عملية دقيقة",
                    text: "أزهار نسرين برية مجنية بعناية، مقطرة بالبخار للحصول على هيدرولات بنقاء وتركيز استثنائيين."
                },
                specs: {
                    title: "مواصفات المنتج",
                    labels: [
                        "العلامة", "اسم المنتج", "الجودة", "الأحجام", "المكونات",
                        "الاستخدامات", "التخزين", "بلد المنشأ", "تاريخ الإنتاج",
                        "يفضل الاستهلاك قبل", "رقم الدفعة", "طريقة التقطير"
                    ],
                    values: [
                        "La Cerise Verte", "ماء نسرين", "طبيعي 100%", "250 مل", "100% ماء نسرين",
                        "الاستخدامات التجميلية، العلاج العطري، والعافية", "يُحفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة. يُغلق بإحكام بعد الاستخدام.",
                        "تونس", "03/2026", "02/2028", "EGL032026", "مقطر بالبخار من أزهار النسرين البرية."
                    ]
                },
                cta: {
                    heading: "هل ترغب في معرفة المزيد؟",
                    text: "تواصل معنا لاكتشاف La Cerise Verte ومنتجاتنا الطبيعية.",
                    button: "تواصل معنا"
                }
            }
        }
    }
];

export function getProductBySlug(slug: string): ProductData | undefined {
    return products.find(p => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
    return products.map(p => p.slug);
}

// Legacy export for backward compatibility
export const productContent = products[0].content;
