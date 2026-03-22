const products = [
  // CLEANSERS
  {
    id: "low-ph-cleanser",
    name: "Low PH Good Morning Cleanser",
    price: "₦18,000",
    image: "images/11.webp",
    category: "cleanser",
    description: "A cult-favorite gel cleanser formulated with botanical ingredients and mild acids to gently cleanse your skin to a supple and clear texture without that stripped feeling. Perfect for all skin types, especially sensitive skin."
  },
  {
    id: "salicylic-cleanser",
    name: "Salicylic Acid Daily Gentle Cleanser",
    price: "₦21,000",
    image: "images/14.webp",
    category: "cleanser",
    description: "A foam cleanser infused with 0.5% Salicylic Acid to dissolve excess sebum and gently buff away dead skin cells. It fights breakouts while you wash, leaving your skin soft and smooth without the tightness."
  },
  {
    id: "squalane-cleanser",
    name: "Squalane Cleanser",
    price: "₦16,000",
    image: "images/16.webp",
    category: "cleanser",
    description: "A gentle cleansing product formulated to target makeup removal while leaving the skin feeling smooth and moisturized. The formula incorporates Squalane, alongside other lipophilic esters that are gentle and effective."
  },

  // TONERS
  {
    id: "glycolic-toner",
    name: "Glycolic Acid 7% Toning Solution",
    price: "₦25,500",
    image: "images/4.webp",
    category: "toner",
    description: "An alpha hydroxy acid that exfoliates the skin. This 7% toning solution offers mild exfoliation for improved skin radiance and visible clarity. Regular use improves the appearance of skin texture."
  },
  {
    id: "niacinamide-toner",
    name: "Niacinamide Brightening Toner",
    price: "₦13,000",
    image: "images/7.webp",
    category: "toner",
    description: "Formulated with a soothing blend of brightening ingredients that work to reduce the appearance of dullness, uneven skin tone, and enlarged pores. Alcohol-free and perfect for achieving a balanced, glowing complexion."
  },

  // SERUMS
  {
    id: "lactic-acid",
    name: "Lactic Acid 10% + HA",
    price: "₦16,000",
    image: "images/1.webp",
    category: "serum",
    description: "A high-strength lactic acid superficial peeling formulation that offers gentler exfoliation than glycolic acid. Supported with purified Tasmanian pepperberry to reduce signs of inflammation and sensitivity."
  },
  {
    id: "niacinamide-serum",
    name: "Niacinamide 10% + Zinc 1%",
    price: "₦12,000",
    image: "images/2.webp",
    category: "serum",
    description: "The ultimate serum for oily skin. Niacinamide (Vitamin B3) reduces the appearance of skin blemishes and congestion, while Zinc PCA balances visible aspects of sebum activity for a matte, clear finish."
  },
  {
    id: "aha-bha",
    name: "AHA 30% + BHA 2% Peeling Solution",
    price: "₦17,000",
    image: "images/3.webp",
    category: "serum",
    description: "A 10-minute exfoliating 'blood' facial. This professional-grade peel deeply exfoliates the skin surface and unclogs pores to battle visible blemishes and improve skin radiance. Use max twice a week."
  },
  {
    id: "discoloration-serum",
    name: "Discolouration Correcting Serum",
    price: "₦23,500",
    image: "images/5.webp",
    category: "serum",
    description: "Formulated with tranexamic acid and niacinamide, this serum targets dark spots, acne scars, and sun damage. It prevents new spots from forming while visibly fading existing hyperpigmentation."
  },
  {
    id: "vitamin-c-egf",
    name: "15% Vitamin C and EGF Serum",
    price: "₦26,000",
    image: "images/6.webp",
    category: "serum",
    description: "A potent duo of 15% Vitamin C for brightening and EGF (Epidermal Growth Factor) to signal skin cells to regenerate. This serum delivers a double hit of anti-aging and glow-inducing power."
  },
  {
    id: "hyaluronic-acid",
    name: "Hyaluronic Acid",
    price: "₦13,500",
    image: "images/8.webp",
    category: "serum",
    description: "A moisture-binding serum that can hold up to 1000x its weight in water. It works across multiple layers of the skin to hydrate, plump, and reduce the appearance of fine lines."
  },
  {
    id: "vitamin-c-suspension",
    name: "Vitamin C Suspension 30% in Silicone",
    price: "₦14,000",
    image: "images/15.webp",
    category: "serum",
    description: "A water-free, stable suspension of 30% pure L-Ascorbic Acid. The addition of light silicones means it feels incredibly smooth on the skin while providing intense antioxidant protection and brightening."
  },
  {
    id: "alpha-arbutin",
    name: "Alpha Arbutin 2% HA",
    price: "₦19,800",
    image: "images/17.webp",
    category: "serum",
    description: "A concentrated serum with purified Alpha Arbutin and Hyaluronic Acid. It significantly reduces the look of spots and hyper-pigmentation while being much gentler than traditional brightening agents."
  },
  {
    id: "azelaic-acid",
    name: "Azelaic Acid Suspension 10%",
    price: "₦18,500",
    image: "images/18.webp",
    category: "serum",
    description: "Found in grains, Azelaic Acid brightens the skin tone while visibly improving the evenness of skin texture and reducing the look of blemishes. It is a multi-functional support ingredient for all skin types."
  },

  // MOISTURIZER
  {
    id: "snail-mucin",
    name: "Advanced Snail 96 Mucin Power",
    price: "₦22,000",
    image: "images/13.webp",
    category: "moisturizer",
    description: "Formulated with 96.3% Snail Secretion Filtrate, this essence protects the skin from moisture loss while improving skin elasticity. It soothes red, sensitive skin after breakouts by replenishing moisture."
  },

  // SUNSCREEN
  {
    id: "waterproof-sunmilk",
    name: "Water Proof Sun Milk SPF 50+ PA+++",
    price: "₦26,000",
    image: "images/9.webp",
    category: "sunscreen",
    description: "A powerful waterproof sunscreen that stands up to sweat and water. Perfect for outdoor activities, it provides high-level broad-spectrum protection with a silky, non-sticky finish."
  },
  {
    id: "essence-sunmilk",
    name: "Essence Sun Milk SPF 50+ PA+++",
    price: "₦25,000",
    image: "images/10.webp",
    category: "sunscreen",
    description: "The perfect everyday sunscreen. This 'essence' type formula feels like a light moisturizer and absorbs instantly into the skin without leaving a white cast. Refreshing and hydrating."
  },
  {
    id: "aloe-suncream",
    name: "Aloe Soothing Sun Cream SPF 50+ PA+++",
    price: "₦20,000",
    image: "images/12.webp",
    category: "sunscreen",
    description: "Formulated with Aloe Arborescens Leaf Extract, this daily soothing sunblock is so lightweight that is feels like a moisturizer, and it does not leave any white cast. It's hydrating and soothing at the same time."
  }
];