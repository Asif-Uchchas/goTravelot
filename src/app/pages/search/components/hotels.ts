interface Hotel {
    id: number;
    description: string;
    name: string;
    reviewCount: number;
    rating: number;
    image: string;
    tag: string[];
}
  
const hotelData: Hotel[] = [
    {
      id: 1,
      name: "Hotel Linkway",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/162282985.jpg?k=8442c7cc0bfdd20c0d7f92e11aa6dbf52e8b3836565582fb6514f212aa2778a8&o=",
      description:
        "Hotel Linkway.\n2 out of 5 stars.\n8.4 Very Good 304 reviews.\n‎Khar‬ • ‎4.6 km from center‬\n‎1.4 km from beach‬.\n Hotel room : Beds: 1 double or 2 twins.\n142 AED.\n+17 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
      reviewCount: 304,
      rating: 8.4,
      tag: ["All", "Yelinberg", "2"],
    },
    {
      id: 2,
      name: "Niranta Transit Hotel",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/336693267.jpg?k=58e5dfa4e3d86ae8efe46eda7f9d6c78868f2c7d7b861f21239b1f7bd7287120&o=",
      description:
        "Niranta Transit Hotel Terminal 2 Arrivals/Landside.\n4 out of 5 stars.\n7.3 Good 3887 reviews.\n‎Andheri‬ • ‎2.5 km from center‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Hotel room : 1 bed.\nOriginal price 1017 AED. Current price 458 AED..\n+82 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 3887,
      rating: 7.3,
      tag: ["All", "Mumbai", "2"],
    },
    {
      id: 8778629,
      name: "Hotel Ariana Residency",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/392019082.jpg?k=d825a25be93ddb1a2bc16e0fdb573ec8bcb9ed69e286890b207ca558748dca32&o=",
      description:
        "Hotel Ariana Residency.\n4 out of 5 stars.\n7.0 Good 461 reviews.\n‎Western Suburbs‬ • ‎7 km from center‬\n‎1.5 km from beach‬\n‎Travel Sustainable‬\n‎This property has cribs available‬.\n Hotel room : 2 beds.\nOriginal price 359 AED. Current price 256 AED..\n+31 AED taxes and charges.",
      reviewCount: 461,
      rating: 7,
      tag: ["All", "Mumbai", "1"],
    },
    {
      id: 1362336,
      name: "Hotel Linkway",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/162282985.jpg?k=8442c7cc0bfdd20c0d7f92e11aa6dbf52e8b3836565582fb6514f212aa2778a8&o=",
      description:
        "Hotel Linkway.\n2 out of 5 stars.\n8.4 Very Good 304 reviews.\n‎Khar‬ • ‎4.6 km from center‬\n‎1.4 km from beach‬.\n Hotel room : Beds: 1 double or 2 twins.\n142 AED.\n+17 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
      reviewCount: 304,
      rating: 8.4,
      tag: ["All", "Mumbai", "1"],
    },
    {
      id: 10723872,
      name: "HOTEL NEW VERTIGO SUITES",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/497264132.jpg?k=5e923c56e1c734b5ca2cdb305531b8e9291847b6fc870abba3911989b6c73678&o=",
      description:
        "HOTEL NEW VERTIGO SUITES.\n2 out of 5 stars.\n7.9 Good 345 reviews.\n‎Central Suburbs‬ • ‎500 m from center‬.\n1 bed.\n100 AED.\n+12 AED taxes and charges.",
      reviewCount: 345,
      rating: 7.9,
      tag: ["All", "Mumbai", "1"],
    },
    {
      id: 1300736,
      name: "JW Marriott Mumbai Sahar Airport",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/465549681.jpg?k=8c903ab7bf0fd906a3fe7b456463805c4026db2dab6706341a83d385160f0f9b&o=",
      description:
        "JW Marriott Mumbai Sahar Airport.\n5 out of 5 stars.\n8.6 Excellent 2749 reviews.\n‎Western Suburbs‬ • ‎3 km from center‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Hotel room : 2 beds.\n576 AED.\n+104 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 2749,
      rating: 8.6,
      tag: ["All", "Mumbai", "1"],
    },
    {
      id: 249951,
      name: "The Leela Mumbai",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/31159733.jpg?k=d951c8b28ff9a7e3df8ff1cae2d40b22c5ce5434e9218a9ce30e4cdb9353851d&o=",
      description:
        "The Leela Mumbai.\n5 out of 5 stars.\n8.6 Excellent 3453 reviews.\n‎Western Suburbs‬ • ‎3.7 km from center‬\n‎Travel Sustainable‬.\n1 bed.\n558 AED.\n+100 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 3453,
      rating: 8.6,
      tag: ["All", "Mumbai", "1"],
    },
    {
      id: 11308398,
      name: "Hotel Beverly Palace Santacruz",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/524195587.jpg?k=2d226361de0829779850a07ef8ad74c2cc58e3a9b7215dbeb20e85bcf20afed1&o=",
      description:
        "Hotel Beverly Palace Santacruz.\n3 out of 5 stars.\n7.6 Good 37 reviews.\n‎Santacruz‬ • ‎1.6 km from center‬.\n Hotel room : 2 beds.\nOriginal price 199 AED. Current price 179 AED..\n+22 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 37,
      rating: 7.6,
      tag: ["All", "Mumbai", "1"],
    },
    {
      id: 8154912,
      name: "Hotel BENTLY",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/531521145.jpg?k=a58b34130edcebd80c5a3821022dfe56a862a2f1856831cd8f70b577de97ebdc&o=",
      description:
        "Hotel BENTLY.\n3 out of 5 stars.\n7.4 Good 302 reviews.\n‎Western Suburbs‬ • ‎3 km from center‬.\n Hotel room : 2 beds.\n74 AED.\n+9 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
      reviewCount: 302,
      rating: 7.4,
      tag: ["All", "Mumbai", "1"],
    },
    {
      id: 1548237,
      name: "Taj Santacruz",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/125011716.jpg?k=a11b2cf7938b3214652ec26dbe0a51850850e41270bf9a43e986e3d3de848748&o=",
      description:
        "Taj Santacruz.\n5 out of 5 stars.\n8.8 Excellent 3469 reviews.\n‎3.1 km from center‬\n‎2.8 km from beach‬\n‎Travel Sustainable‬\n1 bed.\nOriginal price 576 AED. Current price 575 AED..\n+104 AED taxes and charges.",
      reviewCount: 3469,
      rating: 8.8,
      tag: ["All", "Mumbai", "5"],
    },
    {
      id: 9360612,
      name: "Novotel Mumbai International Airport",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/520102818.jpg?k=bdbc0aacaf999cc4cda474366fa4ba04504acdaa4b8f7c31560674abd0bcf029&o=",
      description:
        "Novotel Mumbai International Airport.\n5 out of 5 stars.\n8.5 Very Good 728 reviews.\n‎Western Suburbs‬ • ‎3.8 km from center‬\n‎Travel Sustainable‬\n Hotel room : 1 bed.\nOriginal price 465 AED. Current price 465 AED..\n+84 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 728,
      rating: 8.5,
      tag: ["All", "Mumbai", "5"],
    },
    {
      id: 1781955,
      name: "Niranta Transit Hotel Mumbai Airport - At Arrivals",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/336693532.jpg?k=86ff2c5bb735ba1061a35f977c362a4b9c6dd65ec067c4398de0c0377e0c3ebd&o=",
      description:
        "Niranta Transit Hotel Mumbai Airport - At Arrivals.\n4 out of 5 stars.\n7.2 Good 1257 reviews.\n‎Andheri‬ • ‎2.6 km from center‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Hotel room : 1 bed.\nOriginal price 1017 AED. Current price 458 AED..\n+82 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
      reviewCount: 1257,
      rating: 7.2,
      tag: ["All", "Mumbai", "4"],
    },
    {
      id: 1453101,
      name: "Niranta Transit Hotel Terminal 2 Arrivals/Landside",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/336693267.jpg?k=58e5dfa4e3d86ae8efe46eda7f9d6c78868f2c7d7b861f21239b1f7bd7287120&o=",
      description:
        "Niranta Transit Hotel Terminal 2 Arrivals/Landside.\n4 out of 5 stars.\n7.3 Good 3887 reviews.\n‎Andheri‬ • ‎2.5 km from center‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Hotel room : 1 bed.\nOriginal price 1017 AED. Current price 458 AED..\n+82 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 3887,
      rating: 7.3,
      tag: ["All", "Mumbai", "4"],
    },
    {
      id: 3777484,
      name: "Radisson Mumbai Andheri MIDC",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/244881053.jpg?k=a593947570d0eaef20e446f4e6d899f7f2651a2d9ab7f2f14d6100131ce5869d&o=",
      description:
        "Radisson Mumbai Andheri MIDC.\n4 out of 5 stars.\n8.2 Very Good 1473 reviews.\n‎Western Suburbs‬ • ‎4.8 km from center‬\n‎Travel Sustainable‬\n Hotel room : 1 bed.\nOriginal price 488 AED. Current price 439 AED..\n+101 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 1473,
      rating: 8.2,
      tag: ["All", "Mumbai", "4"],
    },
    {
      id: 401149,
      name: "Hotel Oriental Aster- Mumbai International Airport",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square60/342883399.jpg?k=e2713955a2bcb82f59cb344396d359f1385a6454213a3bdd62be5f80c25ac283&o=",
      description:
        "Hotel Oriental Aster- Mumbai International Airport.\n4 out of 5 stars.\n7.6 Good 996 reviews.\n‎Western Suburbs‬ • ‎3.9 km from center‬\n‎Travel Sustainable‬\n Hotel room : 1 bed.\n287 AED.\n+34 AED taxes and charges.",
      reviewCount: 996,
      rating: 7.6,
      tag: ["All", "Mumbai", "4"],
    },
    {
      id: 191605,
      name: "Novotel Mumbai Juhu Beach",
      image: "https://cf.bstatic.com/xdata/images/hotel/square60/252005217.jpg?k=9d4ae263d055f30dd78158dbf2f6c34900e5c9078b1a545caa28a3c8466b6a69&o=",
      description: "Novotel Mumbai Juhu Beach.\n5 out of 5 stars.\n6.7 Pleasant 2328 reviews.\n‎Juhu‬ • ‎7 km from center‬\n‎Beachfront‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Hotel room : 2 beds.\n430 AED.\n+77 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 2328,
      rating: 6.7,
      tag: ["All", "Mumbai", "5"],
  },
  {
      id: 283624,
      name: "Hilton Mumbai International Airport Hotel",
      image: "https://cf.bstatic.com/xdata/images/hotel/square60/483825117.jpg?k=3e9ad1b06f2d88d6794eb7662223650800963fe496eafdcb0f84ee8f6b516182&o=",
      description: "Hilton Mumbai International Airport Hotel.\n5 out of 5 stars.\n7.8 Good 1682 reviews.\n‎Western Suburbs‬ • ‎3.2 km from center‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Hotel room : 1 bed.\n509 AED.\n+92 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 1682,
      rating: 7.8,
      tag: ["All", "Mumbai", "5"],
  },
  {
      id: 10869399,
      name: "Home2 Renaissance Club",
      image: "https://cf.bstatic.com/xdata/images/hotel/square60/497678662.jpg?k=e5f2c4da109176ab3b790f7a604c5b4d8780e1a8e3e8491afa715055d25c780c&o=",
      description: "Home2 Renaissance Club.\n4 out of 5 stars.\n7.1 Good 78 reviews.\n‎Western Suburbs‬ • ‎8 km from center‬\n‎350 m from beach‬.\n Private suite : 1 bed.\nOriginal price 187 AED. Current price 169 AED..\n+20 AED taxes and charges.\nFree cancellation.\nNo prepayment needed.",
      reviewCount: 78,
      rating: 7.1,
      tag: ["All", "Mumbai", "4"],
  },
  {
      id: 238999,
      name: "Courtyard by Marriott Mumbai International Airport",
      image: "https://cf.bstatic.com/xdata/images/hotel/square60/461660051.jpg?k=b8149f7ac7756b80accb066e0feb56c0dd13e0534048da3cfd782d5e366cdabb&o=",
      description: "Courtyard by Marriott Mumbai International Airport.\n5 out of 5 stars.\n8.1 Very Good 1425 reviews.\n‎Western Suburbs‬ • ‎4.4 km from center‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Hotel room : 3 beds.\n465 AED.\n+84 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 1425,
      rating: 8.1,
      tag: ["All", "Mumbai", "5"],
  },
  {
      id: 11439321,
      name: "Hotel Blue Wellington - Near Mumbai Airport",
      image: "https://cf.bstatic.com/xdata/images/hotel/square60/525317739.jpg?k=9d5777279f83674b9df81da003102b08f54e5413733b8926da5e32ed4d24fcc5&o=",
      description: "Hotel Blue Wellington - Near Mumbai Airport.\n3 out of 5 stars.\n6.1 Pleasant 11 reviews.\n‎Powai‬ • ‎3.7 km from center‬\n‎Travel Sustainable‬.\n Hotel room : 1 bed.\nOriginal price 115 AED. Current price 86 AED..\n+10 AED taxes and charges.\nNo prepayment needed.",
      reviewCount: 11,
      rating: 6.1,
      tag: ["All", "Mumbai", "3"],
  },
  {
      id: 74722,
      name: "Taj Lands End",
      image: "https://cf.bstatic.com/xdata/images/hotel/square60/13800549.jpg?k=2239f273986987fa71ef3c94ab6f127feb2b859ab63f057980c074689c62c04c&o=",
      description: "Taj Lands End.\n5 out of 5 stars.\n8.6 Excellent 3600 reviews.\n‎Bandra‬ • ‎7 km from center‬\n‎1.9 km from beach‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n1 bed.\n670 AED.\n+121 AED taxes and charges.",
      reviewCount: 3600,
      rating: 8.6,
      tag: ["All", "Mumbai", "5"],
  },
  {
      id: 274997,
      name: "Grand Residency Hotel & Serviced Apartments",
      image: "https://cf.bstatic.com/xdata/images/hotel/square60/81595285.jpg?k=96c0c716695a9b26ef9383955532f8cdc4408ad2c318485524ef9100a9610e2b&o=",
      description: "Grand Residency Hotel & Serviced Apartments.\n4 out of 5 stars.\n7.5 Good 354 reviews.\n‎Bandra‬ • ‎5 km from center‬\n‎1.8 km from beach‬\n‎Travel Sustainable‬\n‎This property has free cribs available‬.\n Private room : 2 beds.\nOriginal price 487 AED. Current price 365 AED..\n+66 AED taxes and charges.",
      reviewCount: 354,
      rating: 7.5,
      tag: ["All", "Mumbai", "4"],
  }
  
  ];