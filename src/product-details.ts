export type ProductBenefitGroup = {
  title: string
  benefits: string[]
}

export type ProductDetails = {
  id: string
  benefitLabel?: string
  benefits?: string[]
  groups?: ProductBenefitGroup[]
  disclaimer?: string
}

const wellnessDisclaimer = 'Product benefits are based on manufacturer-provided information. Individual results may vary. Wellness products are not substitutes for professional medical advice or prescribed treatment.'

export const productDetails: Record<string, ProductDetails> = {
  'product-01': {
    id: 'product-01',
    benefits: [
      'Supports immune system health.',
      'Supports heart health.',
      'Promotes healthy and glowing skin.',
      'Supports healthy digestion.',
      'Supports eye health.',
      'Supports mental wellness.',
      'Helps maintain energy and vitality.',
      'Provides vitamins and antioxidants.',
    ],
    disclaimer: wellnessDisclaimer,
  },
  'product-02': {
    id: 'product-02',
    benefitLabel: 'Product Features',
    benefits: [
      'Includes a men’s magnetic bracelet.',
      'Includes an anti-radiation chip.',
      'Includes a bio-energy card.',
      'Designed for everyday personal wellness.',
      'Stylish wearable accessory.',
      'Convenient for daily use.',
    ],
    disclaimer: `Magnetic therapy, bio-energy and radiation protection claims are not scientifically established. ${wellnessDisclaimer}`,
  },
  'product-03': {
    id: 'product-03',
    benefitLabel: 'Product Features',
    benefits: [
      'Includes a women’s magnetic bracelet.',
      'Includes an anti-radiation chip.',
      'Includes a bio-energy card.',
      'Designed for everyday personal wellness.',
      'Elegant and stylish wearable accessory.',
      'Convenient for daily use.',
    ],
    disclaimer: `Magnetic therapy, bio-energy and radiation protection claims are not scientifically established. ${wellnessDisclaimer}`,
  },
  'product-04': {
    id: 'product-04',
    benefits: [
      'Supports immune system health.',
      'Provides essential vitamins and antioxidants.',
      'Helps fight free radicals.',
      'Supports healthy digestion.',
      'Supports energy levels.',
      'Helps reduce fatigue.',
      'Promotes healthy-looking skin.',
      'Supports cardiovascular wellness and circulation.',
    ],
    disclaimer: wellnessDisclaimer,
  },
  'product-05': {
    id: 'product-05',
    benefits: [
      'Advanced absorption with InstaDRY technology.',
      'Provides long-lasting dryness and comfort.',
      'Helps prevent leakage and stains.',
      'Contains an anion chip designed for odour control.',
      'Features active oxygen and negative ion padding.',
      'Provides comfort and freshness.',
      'Supports menstrual hygiene.',
    ],
  },
  'product-06': {
    id: 'product-06',
    benefits: [
      'Supports skin elasticity and firmness.',
      'Helps maintain skin hydration.',
      'Promotes healthy-looking hair.',
      'Supports strong nails.',
      'Helps reduce the appearance of fine lines and wrinkles.',
      'Promotes youthful-looking skin.',
    ],
    disclaimer: wellnessDisclaimer,
  },
  'product-07': {
    id: 'product-07',
    benefitLabel: 'Advertised Benefits',
    benefits: [
      'Promotes muscle relaxation.',
      'Helps relieve tiredness and fatigue.',
      'Promotes restful sleep.',
      'Helps maintain foot freshness.',
      'Helps reduce unpleasant foot odour.',
    ],
    disclaimer: wellnessDisclaimer,
  },
  'product-08': {
    id: 'product-08',
    groups: [
      {
        title: 'Spirulina Benefits',
        benefits: [
          'Provides essential nutrients.',
          'Supports immune system health.',
          'Supports energy and stamina.',
          'Provides antioxidant support.',
          'Supports overall health and wellness.',
        ],
      },
      {
        title: 'Shatavari Advertised Benefits',
        benefits: [
          'Traditionally used to support women’s wellness.',
          'Advertised to support hormonal balance.',
          'Advertised to support reproductive wellness.',
          'Traditionally used to support lactation.',
          'Promotes general vitality and wellness.',
        ],
      },
    ],
    disclaimer: wellnessDisclaimer,
  },
  'product-09': {
    id: 'product-09',
    benefitLabel: 'Advertised Benefits',
    benefits: [
      'Supports immune system health.',
      'Supports energy and stamina.',
      'Promotes general wellness.',
      'Combines natural coffee with Ganoderma mushroom extract.',
      'Advertised to support better sleep quality.',
      'Advertised to support detoxification.',
    ],
    disclaimer: wellnessDisclaimer,
  },
  'product-10': {
    id: 'product-10',
    groups: [
      {
        title: 'Sunscreen Lotion',
        benefits: [
          'Helps protect against harmful UV rays.',
          'Helps prevent sunburn.',
          'Helps prevent premature skin ageing.',
        ],
      },
      {
        title: 'Body Lotion',
        benefits: ['Moisturises and nourishes the skin.', 'Keeps skin soft and smooth.'],
      },
      {
        title: 'Face Wash',
        benefits: ['Removes dirt and excess oil.', 'Keeps skin fresh and clean.'],
      },
      {
        title: 'Aloe Vera Face Cream',
        benefits: ['Soothes and hydrates the skin.', 'Helps reduce redness and irritation.'],
      },
      {
        title: 'Skin Brightening Cream',
        benefits: [
          'Helps even out skin tone.',
          'Promotes brighter-looking skin.',
          'Helps reduce the appearance of dark spots.',
        ],
      },
    ],
  },
  'product-11': {
    id: 'product-11',
    benefits: [
      'Promotes everyday personal hygiene.',
      'Helps maintain healthy hair and skin.',
      'Supports everyday cleanliness.',
      'Provides fresh breath.',
      'Promotes everyday freshness.',
      'Contains natural ingredients, according to the company brochure.',
      'Helps improve personal confidence.',
    ],
  },
  'product-12': {
    id: 'product-12',
    benefitLabel: 'Advertised Benefits',
    benefits: [
      'Advertised to support healthy blood sugar levels.',
      'Advertised to support healthy blood pressure.',
      'Advertised to support healthy cholesterol levels.',
      'Supports general metabolic wellness.',
      'Supports digestive wellness.',
      'Promotes general nutritional wellness.',
      'Advertised to support weight management.',
    ],
    disclaimer: 'This product is not a proven treatment or cure for diabetes and must not replace prescribed medication or professional medical advice.',
  },
  'product-13': {
    id: 'product-13',
    groups: [
      {
        title: 'Miracle Noni Juice',
        benefits: [
          'Provides vitamins and minerals.',
          'Provides antioxidant support.',
          'Supports immune system health.',
          'Supports general wellness.',
          'Promotes healthy-looking skin.',
          'Supports digestive wellness.',
          'Advertised to support liver and kidney wellness.',
        ],
      },
      {
        title: 'Healthy Heart Juice',
        benefits: [
          'Advertised to support cardiovascular wellness.',
          'Advertised to support healthy blood pressure.',
          'Advertised to support healthy heart function.',
          'Supports general wellness.',
          'Advertised to support relaxation.',
        ],
      },
      {
        title: 'Digestive Juice',
        benefits: [
          'Supports healthy everyday digestion.',
          'Supports regular bowel movements.',
          'Advertised to help relieve gas and bloating.',
          'Advertised to help relieve acidity and indigestion.',
          'Supports digestive system wellness.',
        ],
      },
    ],
    disclaimer: wellnessDisclaimer,
  },
  'product-14': {
    id: 'product-14',
    benefits: [
      'Designed to help prevent gas leakage.',
      'Designed to automatically stop gas flow during major leakage.',
      'Indicates low and excessive gas pressure.',
      'Provides a cylinder gas-level indication.',
      'Helps detect minor gas leaks.',
      'Helps reduce gas wastage.',
      'Helps improve cylinder usage efficiency.',
      'Enhances kitchen and household safety when properly installed and used.',
    ],
    disclaimer: 'This device does not guarantee complete protection against gas leaks or accidents.',
  },
}
