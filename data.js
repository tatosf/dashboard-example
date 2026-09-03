/* ========================================================================== 
   L&L Holding Company — retail portfolio dashboard data
   ALL FIGURES ARE ILLUSTRATIVE SAMPLE DATA. Not actual portfolio information.

   This file is the ONLY file to edit. Do not touch dashboard.html or
   index.html: they hold the chart, the layout and the interaction code, and a
   truncated edit there renders a blank page with no error.

   UNITS — both axes are in real units. There is no 0-10 encoding.
     occ     occupancy, percent.        60 = 60%,  97.5 = 97.5%   range 60..100
     growth  forward NOI growth, pct.   0 = flat,  -4.6 = -4.6%   range -8..+8
   "Flat NOI" is growth: 0, not growth: 5.

   POSITIONS — each asset carries three, and the chart draws an arrow between
   them in this order:
     reported   what the quarter's documents show          (always present)
     projected  the 12-month projection                    (always present)
     manager    the asset manager's own view, draggable    (null until set)
   Setting manager to null removes the purple diamond; that is valid.

   RULES
     - ids must be unique, and every leases[].assetId must match an asset id.
     - keep occ within 0..100 and growth within -20..20; the page shows a
       validation banner listing anything out of range.
     - leases[] drives the expiry panel; assets[].expiring12m and walt should
       be kept consistent with it when you change a lease.
     - review: true puts the asset on the review list and in the KPI count.
   ========================================================================== */

window.PORTFOLIO = {
 "meta": {
  "client": "L&L Holding Company",
  "portfolio": "Retail Portfolio",
  "asOf": "2026-09-30",
  "sampleData": true,
  "totals": {
   "assets": 12,
   "gla": 1082240,
   "occupancy": 84.6,
   "contractedRent": 23102770,
   "noi": 16335864,
   "walt": 3.4,
   "arrears": 900800,
   "expiring12m": 24
  }
 },
 "axes": {
  "occ": {
   "key": "occ",
   "label": "Occupancy",
   "unit": "%",
   "min": 60,
   "max": 100,
   "ticks": [
    60,
    70,
    80,
    90,
    100
   ],
   "bandCuts": [
    70,
    85,
    95
   ],
   "bandLabels": [
    "Vacant",
    "Weak",
    "Stabilised",
    "Full"
   ],
   "decimals": 1,
   "signed": false
  },
  "growth": {
   "key": "growth",
   "label": "NOI growth",
   "unit": "%",
   "min": -8,
   "max": 8,
   "ticks": [
    -8,
    -4,
    0,
    4,
    8
   ],
   "bandCuts": [
    -2,
    1,
    4
   ],
   "bandLabels": [
    "Declining",
    "Flat",
    "Growing",
    "Strong"
   ],
   "decimals": 1,
   "signed": true
  }
 },
 "assets": [
  {
   "id": "NGT",
   "name": "Northgate Commons",
   "city": "Yonkers, NY",
   "format": "Grocery-anchored neighbourhood centre",
   "yearBuilt": 1998,
   "acquired": "2016-05",
   "gla": 120100,
   "leased": 115900,
   "vacant": 4200,
   "contractedRent": 2930620,
   "noi": 2110046,
   "avgPsf": 25.29,
   "walt": 2.9,
   "arrears": 4100,
   "anchor": "Fieldcrest Grocers",
   "expiring12m": 2,
   "reported": {
    "occ": 96.5,
    "growth": 2.1
   },
   "projected": {
    "occ": 97.5,
    "growth": 3.4
   },
   "manager": null,
   "review": false,
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.81
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.78
   },
   "history": []
  },
  {
   "id": "RVB",
   "name": "Riverbend Crossing",
   "city": "New Rochelle, NY",
   "format": "Power centre",
   "yearBuilt": 2004,
   "acquired": "2018-11",
   "gla": 225300,
   "leased": 205700,
   "vacant": 19600,
   "contractedRent": 3587670,
   "noi": 2475492,
   "avgPsf": 17.44,
   "walt": 1.1,
   "arrears": 150400,
   "anchor": "Halcyon Home Depot Co.",
   "expiring12m": 3,
   "reported": {
    "occ": 91.3,
    "growth": -1.4
   },
   "projected": {
    "occ": 86.0,
    "growth": -4.6
   },
   "manager": {
    "occ": 89.0,
    "growth": -2.8
   },
   "review": true,
   "occRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.86
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.84
   },
   "history": []
  },
  {
   "id": "HAR",
   "name": "Harbor Point Retail",
   "city": "Stamford, CT",
   "format": "Mixed-use ground-floor retail",
   "yearBuilt": 2019,
   "acquired": "2019-03",
   "gla": 44250,
   "leased": 38950,
   "vacant": 5300,
   "contractedRent": 2525650,
   "noi": 1868981,
   "avgPsf": 64.84,
   "walt": 6.5,
   "arrears": 0,
   "anchor": "Alder & Bright Market",
   "expiring12m": 1,
   "reported": {
    "occ": 88.0,
    "growth": 3.8
   },
   "projected": {
    "occ": 93.0,
    "growth": 5.2
   },
   "manager": null,
   "review": false,
   "occRationale": {
    "direction": "improving",
    "strength": "strong",
    "confidence": 0.79
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.74
   },
   "history": []
  },
  {
   "id": "MPL",
   "name": "Maple Row Plaza",
   "city": "Paramus, NJ",
   "format": "Unanchored strip centre",
   "yearBuilt": 1987,
   "acquired": "2014-08",
   "gla": 53600,
   "leased": 42100,
   "vacant": 11500,
   "contractedRent": 784720,
   "noi": 517915,
   "avgPsf": 18.64,
   "walt": 1.3,
   "arrears": 72000,
   "anchor": "Ridgeway Discount Mart",
   "expiring12m": 4,
   "reported": {
    "occ": 78.5,
    "growth": -4.2
   },
   "projected": {
    "occ": 74.0,
    "growth": -5.8
   },
   "manager": {
    "occ": 80.0,
    "growth": -3.0
   },
   "review": true,
   "occRationale": {
    "direction": "deteriorating",
    "strength": "moderate",
    "confidence": 0.77
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.82
   },
   "history": []
  },
  {
   "id": "LEX",
   "name": "Lexington Street Units",
   "city": "Manhattan, NY",
   "format": "High-street retail condominium",
   "yearBuilt": 1926,
   "acquired": "2021-06",
   "gla": 8890,
   "leased": 8350,
   "vacant": 540,
   "contractedRent": 2497000,
   "noi": 1822810,
   "avgPsf": 299.04,
   "walt": 4.3,
   "arrears": 0,
   "anchor": "Marchetti Leathers",
   "expiring12m": 0,
   "reported": {
    "occ": 93.9,
    "growth": 1.0
   },
   "projected": {
    "occ": 94.0,
    "growth": 1.6
   },
   "manager": null,
   "review": false,
   "occRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.88
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "weak",
    "confidence": 0.71
   },
   "history": []
  },
  {
   "id": "WSF",
   "name": "Westfall Square",
   "city": "Elizabeth, NJ",
   "format": "Enclosed community centre",
   "yearBuilt": 1979,
   "acquired": "2012-02",
   "gla": 176100,
   "leased": 121900,
   "vacant": 54200,
   "contractedRent": 1366860,
   "noi": 2400000,
   "avgPsf": 11.21,
   "walt": 1.1,
   "arrears": 399600,
   "anchor": "Grandview Department Co.",
   "expiring12m": 3,
   "reported": {
    "occ": 69.2,
    "growth": -6.0
   },
   "projected": {
    "occ": 64.0,
    "growth": -7.2
   },
   "manager": {
    "occ": 72.0,
    "growth": -4.5
   },
   "review": true,
   "occRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.9
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.87
   },
   "history": []
  },
  {
   "id": "CDR",
   "name": "Cedar & Vine",
   "city": "Brooklyn, NY",
   "format": "Urban infill retail",
   "yearBuilt": 2015,
   "acquired": "2020-09",
   "gla": 23040,
   "leased": 22800,
   "vacant": 240,
   "contractedRent": 1571300,
   "noi": 1147049,
   "avgPsf": 68.92,
   "walt": 3.5,
   "arrears": 0,
   "anchor": "Cedarhouse Provisions",
   "expiring12m": 2,
   "reported": {
    "occ": 99.0,
    "growth": 5.5
   },
   "projected": {
    "occ": 100.0,
    "growth": 6.9
   },
   "manager": null,
   "review": false,
   "occRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.92
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "strong",
    "confidence": 0.83
   },
   "history": []
  },
  {
   "id": "ORC",
   "name": "Orchard Gate Center",
   "city": "White Plains, NY",
   "format": "Grocery-anchored neighbourhood centre",
   "yearBuilt": 1994,
   "acquired": "2017-07",
   "gla": 91800,
   "leased": 78600,
   "vacant": 13200,
   "contractedRent": 1742480,
   "noi": 1237161,
   "avgPsf": 22.17,
   "walt": 2.4,
   "arrears": 34000,
   "anchor": "Fieldcrest Grocers",
   "expiring12m": 1,
   "reported": {
    "occ": 85.6,
    "growth": 0.0
   },
   "projected": {
    "occ": 88.0,
    "growth": 1.8
   },
   "manager": null,
   "review": true,
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.75
   },
   "noiRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.69
   },
   "history": []
  },
  {
   "id": "SLB",
   "name": "Saltbox Village",
   "city": "Huntington, NY",
   "format": "Lifestyle centre",
   "yearBuilt": 2007,
   "acquired": "2015-11",
   "gla": 66600,
   "leased": 48700,
   "vacant": 17900,
   "contractedRent": 1118010,
   "noi": 749067,
   "avgPsf": 22.96,
   "walt": 1.3,
   "arrears": 87200,
   "anchor": "Saltbox Cinema Group",
   "expiring12m": 3,
   "reported": {
    "occ": 73.1,
    "growth": -2.6
   },
   "projected": {
    "occ": 76.5,
    "growth": -1.2
   },
   "manager": {
    "occ": 75.0,
    "growth": -2.0
   },
   "review": true,
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.72
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.7
   },
   "history": []
  },
  {
   "id": "QRY",
   "name": "Quarry Bend Retail Park",
   "city": "Danbury, CT",
   "format": "Power centre",
   "yearBuilt": 2001,
   "acquired": "2019-08",
   "gla": 160100,
   "leased": 148100,
   "vacant": 12000,
   "contractedRent": 2424320,
   "noi": 1697024,
   "avgPsf": 16.37,
   "walt": 4.2,
   "arrears": 0,
   "anchor": "Stonefield Warehouse Club",
   "expiring12m": 1,
   "reported": {
    "occ": 92.5,
    "growth": 4.4
   },
   "projected": {
    "occ": 95.0,
    "growth": 5.1
   },
   "manager": null,
   "review": false,
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.8
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.76
   },
   "history": []
  },
  {
   "id": "FRW",
   "name": "Fairwater Outlets",
   "city": "Central Valley, NY",
   "format": "Outlet centre",
   "yearBuilt": 1996,
   "acquired": "2013-04",
   "gla": 77500,
   "leased": 50000,
   "vacant": 27500,
   "contractedRent": 605940,
   "noi": 393861,
   "avgPsf": 12.12,
   "walt": 0.8,
   "arrears": 153500,
   "anchor": "Wexler Outlet Apparel",
   "expiring12m": 4,
   "reported": {
    "occ": 64.5,
    "growth": -5.1
   },
   "projected": {
    "occ": 61.0,
    "growth": -6.4
   },
   "manager": null,
   "review": true,
   "occRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.85
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "moderate",
    "confidence": 0.79
   },
   "history": []
  },
  {
   "id": "BCN",
   "name": "Beacon Yard Market",
   "city": "Jersey City, NJ",
   "format": "Urban infill retail",
   "yearBuilt": 2022,
   "acquired": "2022-01",
   "gla": 34960,
   "leased": 34100,
   "vacant": 860,
   "contractedRent": 1948200,
   "noi": 1441668,
   "avgPsf": 57.13,
   "walt": 7.7,
   "arrears": 0,
   "anchor": "Beacon Fresh Market",
   "expiring12m": 0,
   "reported": {
    "occ": 97.5,
    "growth": 6.8
   },
   "projected": {
    "occ": 98.5,
    "growth": 7.4
   },
   "manager": null,
   "review": false,
   "occRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.9
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "strong",
    "confidence": 0.86
   },
   "history": []
  }
 ],
 "leases": [
  {
   "assetId": "MPL",
   "tenant": "Sable Nail Studio",
   "unit": "104",
   "sqft": 1600,
   "psf": 38.0,
   "start": "2018-10",
   "expiry": "2026-10",
   "opt": 0,
   "arrears": 7800,
   "anchor": false
  },
  {
   "assetId": "MPL",
   "tenant": "Ashcroft Tax Services",
   "unit": "112",
   "sqft": 1900,
   "psf": 31.0,
   "start": "2021-11",
   "expiry": "2026-11",
   "opt": 0,
   "arrears": 3200,
   "anchor": false
  },
  {
   "assetId": "RVB",
   "tenant": "Rampart Sporting Goods",
   "unit": "2",
   "sqft": 42000,
   "psf": 18.2,
   "start": "2006-09",
   "expiry": "2026-11",
   "opt": 0,
   "arrears": 128000,
   "anchor": false
  },
  {
   "assetId": "SLB",
   "tenant": "Thimble Toy Co.",
   "unit": "P-9",
   "sqft": 3300,
   "psf": 37.2,
   "start": "2021-05",
   "expiry": "2026-11",
   "opt": 0,
   "arrears": 11200,
   "anchor": false
  },
  {
   "assetId": "FRW",
   "tenant": "Calder Footwear Outlet",
   "unit": "F-14",
   "sqft": 9600,
   "psf": 13.5,
   "start": "2014-09",
   "expiry": "2026-12",
   "opt": 0,
   "arrears": 46000,
   "anchor": false
  },
  {
   "assetId": "NGT",
   "tenant": "Sunroot Cafe",
   "unit": "B-210",
   "sqft": 3200,
   "psf": 46.0,
   "start": "2021-09",
   "expiry": "2026-12",
   "opt": 0,
   "arrears": 4100,
   "anchor": false
  },
  {
   "assetId": "ORC",
   "tenant": "Orchard Wine & Spirits",
   "unit": "C-6",
   "sqft": 6800,
   "psf": 28.5,
   "start": "2016-06",
   "expiry": "2026-12",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "WSF",
   "tenant": "Kestrel Shoes",
   "unit": "M-14",
   "sqft": 4800,
   "psf": 19.5,
   "start": "2013-08",
   "expiry": "2026-12",
   "opt": 0,
   "arrears": 18600,
   "anchor": false
  },
  {
   "assetId": "FRW",
   "tenant": "Torrance Housewares",
   "unit": "F-26",
   "sqft": 7800,
   "psf": 10.9,
   "start": "2015-02",
   "expiry": "2027-01",
   "opt": 0,
   "arrears": 19500,
   "anchor": false
  },
  {
   "assetId": "QRY",
   "tenant": "Redfern Grill",
   "unit": "E",
   "sqft": 5400,
   "psf": 34.0,
   "start": "2022-02",
   "expiry": "2027-01",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "RVB",
   "tenant": "Copperfield Books",
   "unit": "5",
   "sqft": 9800,
   "psf": 24.6,
   "start": "2016-02",
   "expiry": "2027-01",
   "opt": 0,
   "arrears": 22400,
   "anchor": false
  },
  {
   "assetId": "WSF",
   "tenant": "Grandview Department Co.",
   "unit": "M-1",
   "sqft": 96000,
   "psf": 9.4,
   "start": "1998-02",
   "expiry": "2027-01",
   "opt": 0,
   "arrears": 340000,
   "anchor": true
  },
  {
   "assetId": "CDR",
   "tenant": "Vine Street Bakery",
   "unit": "1B",
   "sqft": 2600,
   "psf": 84.0,
   "start": "2017-03",
   "expiry": "2027-02",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "MPL",
   "tenant": "Fenwick Tailoring",
   "unit": "106",
   "sqft": 2200,
   "psf": 34.5,
   "start": "2015-03",
   "expiry": "2027-02",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "RVB",
   "tenant": "Halcyon Home Depot Co.",
   "unit": "1",
   "sqft": 104000,
   "psf": 15.8,
   "start": "2005-03",
   "expiry": "2027-02",
   "opt": 0,
   "arrears": 0,
   "anchor": true
  },
  {
   "assetId": "FRW",
   "tenant": "Brightpath Luggage",
   "unit": "F-18",
   "sqft": 6400,
   "psf": 12.8,
   "start": "2017-04",
   "expiry": "2027-03",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "NGT",
   "tenant": "Marlow & Sons Hardware",
   "unit": "B-200",
   "sqft": 16800,
   "psf": 27.4,
   "start": "2017-04",
   "expiry": "2027-03",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "WSF",
   "tenant": "Aurelia Apparel",
   "unit": "M-22",
   "sqft": 6200,
   "psf": 17.8,
   "start": "2016-04",
   "expiry": "2027-03",
   "opt": 0,
   "arrears": 41000,
   "anchor": false
  },
  {
   "assetId": "FRW",
   "tenant": "Wexler Outlet Apparel",
   "unit": "F-10",
   "sqft": 22000,
   "psf": 11.2,
   "start": "2013-06",
   "expiry": "2027-05",
   "opt": 0,
   "arrears": 88000,
   "anchor": true
  },
  {
   "assetId": "HAR",
   "tenant": "Ferrymead Optical",
   "unit": "R-4",
   "sqft": 1850,
   "psf": 88.0,
   "start": "2022-06",
   "expiry": "2027-05",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "MPL",
   "tenant": "Ridgeway Discount Mart",
   "unit": "101",
   "sqft": 28000,
   "psf": 14.2,
   "start": "2009-06",
   "expiry": "2027-05",
   "opt": 0,
   "arrears": 61000,
   "anchor": true
  },
  {
   "assetId": "CDR",
   "tenant": "Harrow Barbers",
   "unit": "2C",
   "sqft": 1100,
   "psf": 86.0,
   "start": "2022-08",
   "expiry": "2027-07",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "SLB",
   "tenant": "Lowry & Fen Bistro",
   "unit": "P-4",
   "sqft": 5200,
   "psf": 42.0,
   "start": "2015-09",
   "expiry": "2027-08",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "SLB",
   "tenant": "Cobbleway Gifts",
   "unit": "P-11",
   "sqft": 2100,
   "psf": 39.0,
   "start": "2022-09",
   "expiry": "2027-08",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "ORC",
   "tenant": "Bellamy Home Goods",
   "unit": "C-9",
   "sqft": 14200,
   "psf": 21.4,
   "start": "2018-01",
   "expiry": "2027-12",
   "opt": 5,
   "arrears": 34000,
   "anchor": false
  },
  {
   "assetId": "NGT",
   "tenant": "Coastal Pharmacy Co.",
   "unit": "A-110",
   "sqft": 13500,
   "psf": 32.0,
   "start": "2018-02",
   "expiry": "2028-01",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "NGT",
   "tenant": "Verdant Cleaners",
   "unit": "B-215",
   "sqft": 2400,
   "psf": 41.5,
   "start": "2020-03",
   "expiry": "2028-02",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "QRY",
   "tenant": "Halloway Petcare",
   "unit": "C",
   "sqft": 12400,
   "psf": 21.0,
   "start": "2018-03",
   "expiry": "2028-02",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "ORC",
   "tenant": "Halewood Bagels",
   "unit": "C-14",
   "sqft": 1700,
   "psf": 44.0,
   "start": "2023-04",
   "expiry": "2028-03",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "LEX",
   "tenant": "Belmont Eyewear",
   "unit": "G-3",
   "sqft": 1450,
   "psf": 310.0,
   "start": "2023-05",
   "expiry": "2028-04",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "SLB",
   "tenant": "Saltbox Cinema Group",
   "unit": "P-1",
   "sqft": 34000,
   "psf": 16.4,
   "start": "2008-05",
   "expiry": "2028-04",
   "opt": 5,
   "arrears": 76000,
   "anchor": true
  },
  {
   "assetId": "BCN",
   "tenant": "Saffron & Salt Deli",
   "unit": "U-6",
   "sqft": 2400,
   "psf": 72.0,
   "start": "2023-06",
   "expiry": "2028-05",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "BCN",
   "tenant": "Pier Lane Pilates",
   "unit": "U-8",
   "sqft": 3100,
   "psf": 55.0,
   "start": "2024-02",
   "expiry": "2029-01",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "SLB",
   "tenant": "Windrose Yoga",
   "unit": "P-7",
   "sqft": 4100,
   "psf": 33.5,
   "start": "2019-02",
   "expiry": "2029-01",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "RVB",
   "tenant": "Pinewood Furnishings",
   "unit": "3",
   "sqft": 31500,
   "psf": 16.9,
   "start": "2014-05",
   "expiry": "2029-04",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "NGT",
   "tenant": "Brightline Fitness",
   "unit": "A-120",
   "sqft": 22000,
   "psf": 24.75,
   "start": "2019-06",
   "expiry": "2029-05",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "CDR",
   "tenant": "Northlight Studio",
   "unit": "2A",
   "sqft": 4400,
   "psf": 71.5,
   "start": "2019-07",
   "expiry": "2029-06",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "WSF",
   "tenant": "Foundry Arcade",
   "unit": "M-30",
   "sqft": 11500,
   "psf": 12.6,
   "start": "2019-09",
   "expiry": "2029-08",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "ORC",
   "tenant": "Fieldcrest Grocers",
   "unit": "C-1",
   "sqft": 52000,
   "psf": 19.8,
   "start": "2014-10",
   "expiry": "2029-09",
   "opt": 10,
   "arrears": 0,
   "anchor": true
  },
  {
   "assetId": "FRW",
   "tenant": "Marisol Swimwear",
   "unit": "F-22",
   "sqft": 4200,
   "psf": 15.0,
   "start": "2019-11",
   "expiry": "2029-10",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "LEX",
   "tenant": "Petal & Stem Florists",
   "unit": "G-4",
   "sqft": 900,
   "psf": 265.0,
   "start": "2024-01",
   "expiry": "2029-12",
   "opt": 0,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "HAR",
   "tenant": "Selwyn Coffee House",
   "unit": "R-2",
   "sqft": 2900,
   "psf": 92.0,
   "start": "2020-04",
   "expiry": "2030-03",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "MPL",
   "tenant": "Juniper Pet Supply",
   "unit": "108",
   "sqft": 8400,
   "psf": 22.8,
   "start": "2020-07",
   "expiry": "2030-06",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "QRY",
   "tenant": "Bracken Electronics",
   "unit": "B",
   "sqft": 26500,
   "psf": 17.6,
   "start": "2015-07",
   "expiry": "2030-06",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "RVB",
   "tenant": "Trailhead Outfitters",
   "unit": "4",
   "sqft": 18400,
   "psf": 22.1,
   "start": "2019-08",
   "expiry": "2030-07",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "QRY",
   "tenant": "Everly Craft Supply",
   "unit": "D",
   "sqft": 15800,
   "psf": 18.4,
   "start": "2020-10",
   "expiry": "2030-09",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "ORC",
   "tenant": "Cove Dental Group",
   "unit": "C-12",
   "sqft": 3900,
   "psf": 36.0,
   "start": "2020-11",
   "expiry": "2030-10",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "CDR",
   "tenant": "Cedarhouse Provisions",
   "unit": "1A",
   "sqft": 12800,
   "psf": 62.0,
   "start": "2016-05",
   "expiry": "2031-04",
   "opt": 10,
   "arrears": 0,
   "anchor": true
  },
  {
   "assetId": "NGT",
   "tenant": "Fieldcrest Grocers",
   "unit": "A-100",
   "sqft": 58000,
   "psf": 21.5,
   "start": "2016-08",
   "expiry": "2031-07",
   "opt": 10,
   "arrears": 0,
   "anchor": true
  },
  {
   "assetId": "LEX",
   "tenant": "Marchetti Leathers",
   "unit": "G-1",
   "sqft": 4200,
   "psf": 285.0,
   "start": "2021-09",
   "expiry": "2031-08",
   "opt": 5,
   "arrears": 0,
   "anchor": true
  },
  {
   "assetId": "CDR",
   "tenant": "Quillon Stationers",
   "unit": "2B",
   "sqft": 1900,
   "psf": 79.0,
   "start": "2021-10",
   "expiry": "2031-09",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "HAR",
   "tenant": "Tidewater Wine Merchants",
   "unit": "R-3",
   "sqft": 4100,
   "psf": 74.5,
   "start": "2021-01",
   "expiry": "2031-12",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "LEX",
   "tenant": "Ostrava Jewellers",
   "unit": "G-2",
   "sqft": 1800,
   "psf": 340.0,
   "start": "2022-03",
   "expiry": "2032-02",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "QRY",
   "tenant": "Stonefield Warehouse Club",
   "unit": "A",
   "sqft": 88000,
   "psf": 13.9,
   "start": "2002-04",
   "expiry": "2032-03",
   "opt": 10,
   "arrears": 0,
   "anchor": true
  },
  {
   "assetId": "WSF",
   "tenant": "Pillar Bank (branch)",
   "unit": "M-02",
   "sqft": 3400,
   "psf": 34.0,
   "start": "2012-06",
   "expiry": "2032-05",
   "opt": 10,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "BCN",
   "tenant": "Halyard Brewing Taproom",
   "unit": "U-3",
   "sqft": 6200,
   "psf": 61.0,
   "start": "2022-07",
   "expiry": "2032-06",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "HAR",
   "tenant": "Lantern Kitchenware",
   "unit": "R-5",
   "sqft": 5600,
   "psf": 66.0,
   "start": "2023-02",
   "expiry": "2033-01",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "BCN",
   "tenant": "Ironwood Cycles",
   "unit": "U-5",
   "sqft": 3800,
   "psf": 58.5,
   "start": "2023-01",
   "expiry": "2033-12",
   "opt": 5,
   "arrears": 0,
   "anchor": false
  },
  {
   "assetId": "HAR",
   "tenant": "Alder & Bright Market",
   "unit": "R-1",
   "sqft": 24500,
   "psf": 58.0,
   "start": "2019-11",
   "expiry": "2034-10",
   "opt": 10,
   "arrears": 0,
   "anchor": true
  },
  {
   "assetId": "BCN",
   "tenant": "Beacon Fresh Market",
   "unit": "U-1",
   "sqft": 18600,
   "psf": 54.0,
   "start": "2022-04",
   "expiry": "2037-03",
   "opt": 10,
   "arrears": 0,
   "anchor": true
  }
 ]
};
