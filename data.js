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
   "outline": "Grocery-anchored neighbourhood centre in Yonkers, trading at 96.5% occupancy on a twelve-year anchor lease with a decade of options still to run.",
   "summary": "Fieldcrest Grocers renewed early in 2016 and holds ten option years, which underpins the whole rent roll. Footfall has been stable through the year and the only soft point is a small cafe unit with a modest balance outstanding. Two leases run off inside twelve months but both are sub-4,000 sqft.",
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.81,
    "text": "Improving because only 4,200 sqft sits vacant and both near-term expiries are small inline units with active interest. Band interpretation: occupancy is Full and the anchor is not in play."
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.78,
    "text": "Improving because the anchor's fixed uplift lands in 2027 and the pharmacy unit is under-rented against the centre average of $25.29. Band interpretation: growth is Growing rather than Strong, since no lease is being re-based upward this year."
   },
   "evidence": [
    {
     "quote": "Fieldcrest Grocers holds ten option years from 2031 and remains the strongest covenant in the portfolio.",
     "doc": "AMR",
     "page": 4
    },
    {
     "quote": "Sunroot Cafe carries $4,100 outstanding at quarter end and has requested a short deferral.",
     "doc": "RR",
     "page": 2
    },
    {
     "quote": "Northgate recorded 96.5% occupancy at 30 September with 4,200 sqft available in the B range.",
     "doc": "AMR",
     "page": 4
    },
    {
     "quote": "Marlow & Sons Hardware expires March 2027 with no option and has not yet indicated intent.",
     "doc": "RR",
     "page": 2
    }
   ],
   "measures": [
    "Open renewal discussions with Marlow & Sons Hardware twelve months ahead - Leasing, Q4.",
    "Agree a written deferral schedule with Sunroot Cafe or serve notice - Asset Mgmt, Q4.",
    "Re-quote the B-range vacancy at $29.00 psf against the centre average - Leasing, Q1.",
    "Confirm the 2027 anchor uplift has been billed correctly - Finance, Q4."
   ],
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
   "outline": "Power centre in New Rochelle where a sporting-goods box covering 42,000 sqft is in arrears and expires in November 2026.",
   "summary": "Rampart Sporting Goods stopped paying in full in the second quarter and now carries $128,000 outstanding against a lease that ends in November with no option. The home-improvement anchor also runs off in February 2027, so 67% of contracted rent is exposed inside eighteen months. WALT has fallen to 1.1 years, the shortest in the portfolio bar the outlets.",
   "occRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.86,
    "text": "Deteriorating because the November expiry is not expected to renew and would take occupancy to roughly 72% on its own. Band interpretation: occupancy is Stabilised today but only because the vacating tenant is still in possession."
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.84,
    "text": "Deteriorating because re-letting big-box space in this submarket is running 18 to 24 months and any replacement deal will re-base below $18.20. Band interpretation: growth is Declining and the projection assumes no replacement income within the year."
   },
   "evidence": [
    {
     "quote": "Rampart Sporting Goods carries $128,000 outstanding and has confirmed it will not exercise a renewal.",
     "doc": "LA-RAM",
     "page": 1
    },
    {
     "quote": "Halcyon Home Depot Co. expires February 2027 with no remaining option years.",
     "doc": "RR",
     "page": 3
    },
    {
     "quote": "Riverbend's weighted average lease term has fallen to 1.1 years at 30 September.",
     "doc": "AMR",
     "page": 5
    },
    {
     "quote": "Together the two boxes represent approximately 67% of Riverbend's contracted rent.",
     "doc": "AMR",
     "page": 5
    }
   ],
   "measures": [
    "Instruct agents on Unit 2 now rather than at lease end - Leasing, Q4.",
    "Open renewal negotiations with Halcyon Home Depot Co. immediately - Leasing, Q4.",
    "Model a subdivision of Unit 2 into three mid-box units - Development, Q1.",
    "Escalate the Rampart balance to recovery and draw on the deposit - Finance, Q4."
   ],
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
   "outline": "Ground-floor retail beneath a 2019 mixed-use building in Stamford, let to five operators on a 6.5-year weighted term.",
   "summary": "The strongest lease profile in the portfolio, with the food-market anchor running to 2034 and ten option years behind it. Rents average $64.84 psf and there are no arrears. The single vacancy is a corner unit that has been held back deliberately while a licensed operator is sourced.",
   "occRationale": {
    "direction": "improving",
    "strength": "strong",
    "confidence": 0.79,
    "text": "Improving because the held corner unit is under offer to a licensed operator and would take the asset above 93%. Band interpretation: occupancy is Stabilised and improving on a deliberate hold rather than a letting failure."
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.74,
    "text": "Improving because the residential lease-up above completed in 2025 and the retail rents were struck before that footfall arrived. Band interpretation: growth is Growing, with the corner unit the main variable."
   },
   "evidence": [
    {
     "quote": "Alder & Bright Market runs to October 2034 with ten option years remaining.",
     "doc": "RR",
     "page": 4
    },
    {
     "quote": "Harbor Point carries no arrears at 30 September.",
     "doc": "RR",
     "page": 4
    },
    {
     "quote": "The R-6 corner unit has been withheld from the market pending a licensed operator.",
     "doc": "AMR",
     "page": 6
    },
    {
     "quote": "Average passing rent at Harbor Point is $64.84 psf, the second highest in the portfolio.",
     "doc": "AMR",
     "page": 6
    }
   ],
   "measures": [
    "Conclude terms on the R-6 corner unit with the licensed operator - Leasing, Q4.",
    "Benchmark 2027 renewals against the post-lease-up footfall data - Asset Mgmt, Q1.",
    "Review the service-charge apportionment with the residential owner - Finance, Q1.",
    "Register the 2034 option mechanics in the lease diary - Asset Mgmt, Q4."
   ],
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
   "outline": "Unanchored 1987 strip centre in Paramus at 78.5% occupancy, with four leases expiring inside twelve months and no anchor covenant.",
   "summary": "The discount tenant is the largest occupier but has no anchor protections and carries $61,000 outstanding. Four of five leases either expired in 2026 or run off in early 2027, and three have no option years. The centre has had no capital spend since 2014.",
   "occRationale": {
    "direction": "deteriorating",
    "strength": "moderate",
    "confidence": 0.77,
    "text": "Deteriorating because four expiries inside twelve months sit against 11,500 sqft already vacant, and none of the four has confirmed renewal. Band interpretation: occupancy is Weak and the asset has no anchor to hold the rest of the rent roll."
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.82,
    "text": "Deteriorating because passing rents average $18.64 in a submarket where competing centres have refurbished, so renewals are being asked at a discount. Band interpretation: growth is Declining, driven by rent-free incentives rather than vacancy alone."
   },
   "evidence": [
    {
     "quote": "Ridgeway Discount Mart carries $61,000 outstanding and expires May 2027 with no option.",
     "doc": "RR",
     "page": 5
    },
    {
     "quote": "Four of the five Maple Row leases expire within twelve months of 30 September.",
     "doc": "AMR",
     "page": 7
    },
    {
     "quote": "No capital expenditure has been committed at Maple Row since acquisition in 2014.",
     "doc": "AMR",
     "page": 7
    },
    {
     "quote": "Maple Row occupancy stood at 78.5% with 11,500 sqft available.",
     "doc": "RR",
     "page": 5
    }
   ],
   "measures": [
    "Commission a repositioning appraisal against a hold-and-refurbish case - Development, Q1.",
    "Offer two-year extensions at passing rent to the three no-option tenants - Leasing, Q4.",
    "Put Ridgeway Discount Mart on a payment plan secured against the deposit - Finance, Q4.",
    "Obtain a disposal valuation as a comparison to refurbishment - Investment, Q1."
   ],
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
   "outline": "Four high-street retail condominium units in Manhattan let to independent operators at an average $299 psf.",
   "summary": "The highest rents in the portfolio and no expiries inside twelve months. All four units are let to independents on ten-year terms with options, and there are no arrears. Occupancy is effectively full at 93.9%, the balance being a 540 sqft basement store.",
   "occRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.88,
    "text": "Stable because there are no expiries within the year and the only unlet space is ancillary basement storage. Band interpretation: occupancy is Stabilised and structurally unlikely to move."
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "weak",
    "confidence": 0.71,
    "text": "Improving because the 2024 florist letting was struck 12% above the previous passing rent and sets the tone for the 2028 review. Band interpretation: growth is Flat to Growing; there is no contractual uplift inside the year."
   },
   "evidence": [
    {
     "quote": "No Lexington Street lease expires within twelve months of 30 September.",
     "doc": "RR",
     "page": 6
    },
    {
     "quote": "Petal & Stem Florists was let in January 2024 at $265 psf, 12% above the prior passing rent.",
     "doc": "AMR",
     "page": 8
    },
    {
     "quote": "The unlet 540 sqft at Lexington Street is basement storage, not trading area.",
     "doc": "AMR",
     "page": 8
    },
    {
     "quote": "Average passing rent across the four units is $299.04 psf.",
     "doc": "RR",
     "page": 6
    }
   ],
   "measures": [
    "Market the basement store to the ground-floor tenants as ancillary space - Leasing, Q1.",
    "Prepare the 2028 review evidence file using the 2024 letting - Asset Mgmt, Q2.",
    "Confirm condominium charge apportionments against the 2026 budget - Finance, Q4.",
    "Review insurance reinstatement values on the 1926 structure - Ops, Q1."
   ],
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
   "outline": "Enclosed 1979 community centre in Elizabeth at 69.2% occupancy, carrying $399,600 of arrears concentrated in a department-store anchor.",
   "summary": "Grandview Department Co. occupies 96,000 sqft at $9.40 psf, owes $340,000 and expires in January 2027 with no option. The centre is the weakest performer in the portfolio on every measure: lowest occupancy, lowest rents, shortest term and the largest arrears balance. 54,200 sqft is already vacant.",
   "occRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.9,
    "text": "Deteriorating because the anchor expiry in January 2027 is not expected to renew and would take occupancy below 50%. Band interpretation: occupancy is Weak and heading toward the Vacant band on the current trajectory."
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.87,
    "text": "Deteriorating because the anchor pays $9.40 psf against a $11.21 centre average and even that is not being collected in full. Band interpretation: growth is Declining sharply and the projection carries no re-letting assumption."
   },
   "evidence": [
    {
     "quote": "Grandview Department Co. carries $340,000 outstanding, the largest single balance in the portfolio.",
     "doc": "RR",
     "page": 7
    },
    {
     "quote": "Westfall Square occupancy was 69.2% at 30 September with 54,200 sqft vacant.",
     "doc": "AMR",
     "page": 9
    },
    {
     "quote": "The Grandview lease expires January 2027 with no remaining option years.",
     "doc": "RR",
     "page": 7
    },
    {
     "quote": "Westfall's average passing rent of $11.21 psf is the lowest in the portfolio.",
     "doc": "AMR",
     "page": 9
    }
   ],
   "measures": [
    "Take a formal position on Grandview: standstill agreement or forfeiture - Legal, Q4.",
    "Commission a change-of-use study covering medical and last-mile logistics - Development, Q1.",
    "Suspend all non-essential capital spend pending the use decision - Asset Mgmt, Q4.",
    "Brief the lender on the January 2027 covenant position - Finance, Q4."
   ],
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
   "outline": "Urban infill retail parade in Brooklyn, effectively fully let at 99.0% with a food-hall anchor to 2031.",
   "summary": "The best-occupied asset in the portfolio, with 240 sqft unlet and no arrears. Cedarhouse Provisions anchors the parade on a fifteen-year term with ten options. Two small leases expire inside the year and both tenants have asked to extend.",
   "occRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.92,
    "text": "Stable because only 240 sqft is unlet and both near-term expiries want to stay. Band interpretation: occupancy is Full and there is no realistic upside left."
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "strong",
    "confidence": 0.83,
    "text": "Improving because the parade is effectively full and the anchor pays turnover rent on rising sales. Band interpretation: growth is Strong, coming from trade rather than from letting vacant space."
   },
   "evidence": [
    {
     "quote": "Cedar & Vine was 99.0% occupied at 30 September with 240 sqft available.",
     "doc": "RR",
     "page": 8
    },
    {
     "quote": "Both Cedar & Vine tenants expiring within the year have requested extensions.",
     "doc": "AMR",
     "page": 10
    },
    {
     "quote": "Cedarhouse Provisions holds ten option years from 2031.",
     "doc": "RR",
     "page": 8
    },
    {
     "quote": "Vine Street Bakery and Harrow Barbers are the two highest-rented units in the parade.",
     "doc": "AMR",
     "page": 10
    }
   ],
   "measures": [
    "Hold both expiring units at passing rent rather than testing the market - Leasing, Q4.",
    "Test a turnover-rent structure with the bakery at renewal - Asset Mgmt, Q4.",
    "Let the residual 240 sqft as storage to an existing tenant - Leasing, Q1.",
    "Use the parade as the comparable evidence set for Beacon Yard - Asset Mgmt, Q1."
   ],
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
   "outline": "Grocery-anchored centre in White Plains at 85.6% occupancy, with flat reported NOI and a home-goods tenant in arrears.",
   "summary": "The same grocery covenant as Northgate anchors this centre to 2029 with ten options. Reported NOI growth was exactly flat for the year: the anchor has no uplift until 2029 and the arrears from Bellamy Home Goods offset the 2023 bagel letting. 13,200 sqft has been vacant since a 2025 departure.",
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.75,
    "text": "Improving because the vacant 13,200 sqft has been split into two units and one is under offer. Band interpretation: occupancy is Stabilised, with the split the main lever."
   },
   "noiRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.69,
    "text": "Stable because there is no contractual uplift inside the year and the arrears position cancels the reversion. Band interpretation: growth is Flat, which is the reported position rather than a forecast."
   },
   "evidence": [
    {
     "quote": "Orchard Gate reported flat net operating income year on year at 30 September.",
     "doc": "AMR",
     "page": 11
    },
    {
     "quote": "Bellamy Home Goods carries $34,000 outstanding against a December 2027 expiry.",
     "doc": "RR",
     "page": 9
    },
    {
     "quote": "The 13,200 sqft vacated in 2025 has been subdivided into two units of 7,400 and 5,800 sqft.",
     "doc": "AMR",
     "page": 11
    },
    {
     "quote": "Fieldcrest Grocers anchors Orchard Gate to September 2029 with ten option years.",
     "doc": "RR",
     "page": 9
    }
   ],
   "measures": [
    "Conclude the offer on the 7,400 sqft subdivided unit - Leasing, Q4.",
    "Recover the Bellamy balance against the rent deposit - Finance, Q4.",
    "Diary the 2029 anchor option and start evidence gathering - Asset Mgmt, Q2.",
    "Re-tender the common-area maintenance contract - Ops, Q1."
   ],
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
   "outline": "Lifestyle centre in Huntington at 73.1% occupancy, anchored by a cinema operator carrying $76,000 of arrears.",
   "summary": "The cinema anchor has been on a reduced-rent concession since 2024 and owes $76,000, but admissions recovered through the summer and it has resumed full payments. Three leases expire inside twelve months, and 17,900 sqft remains vacant from the 2023 restaurant closures. This is the one deteriorating asset where the trajectory has turned.",
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.72,
    "text": "Improving because two of the three vacant restaurant units are under offer to food operators. Band interpretation: occupancy is Weak but improving off a 2023 low."
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.7,
    "text": "Improving because the cinema concession steps back to full rent in March 2027 and the arrears are being recovered on a plan. Band interpretation: growth is Declining on reported figures but the projection turns positive on the concession step-up."
   },
   "evidence": [
    {
     "quote": "Saltbox Cinema Group has resumed full monthly payments and carries $76,000 outstanding on a recovery plan.",
     "doc": "AMR",
     "page": 12
    },
    {
     "quote": "Two of the three vacant Saltbox restaurant units are under offer.",
     "doc": "AMR",
     "page": 12
    },
    {
     "quote": "The cinema concession reverts to full contracted rent in March 2027.",
     "doc": "RR",
     "page": 10
    },
    {
     "quote": "Saltbox Village occupancy was 73.1% at 30 September with 17,900 sqft available.",
     "doc": "RR",
     "page": 10
    }
   ],
   "measures": [
    "Document the cinema recovery plan and the March 2027 step-up - Legal, Q4.",
    "Conclude both restaurant unit offers before the winter trading period - Leasing, Q4.",
    "Re-let the third restaurant unit as leisure rather than food - Leasing, Q1.",
    "Review the 2027 expiries against the improved footfall data - Asset Mgmt, Q1."
   ],
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
   "outline": "Power centre in Danbury at 92.5% occupancy, anchored by a warehouse club on a thirty-year term to 2032.",
   "summary": "A stable asset with the longest anchor term in the portfolio and no arrears. Rents average $16.37 psf and only one small lease expires inside the year. The 12,000 sqft vacancy is a former electronics unit that has been on the market since spring.",
   "occRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.8,
    "text": "Improving because the vacant 12,000 sqft has attracted two mid-box enquiries at close to quoting rent. Band interpretation: occupancy is Stabilised with a clear route above 95%."
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "moderate",
    "confidence": 0.76,
    "text": "Improving because the warehouse club's 2027 fixed uplift is contractual and the electronics unit would re-let above the centre average. Band interpretation: growth is Growing, underpinned by the anchor uplift rather than by letting risk."
   },
   "evidence": [
    {
     "quote": "Stonefield Warehouse Club runs to March 2032 with ten option years remaining.",
     "doc": "RR",
     "page": 11
    },
    {
     "quote": "Quarry Bend carries no arrears at 30 September.",
     "doc": "RR",
     "page": 11
    },
    {
     "quote": "Two mid-box enquiries have been received on the 12,000 sqft vacancy at close to quoting rent.",
     "doc": "AMR",
     "page": 13
    },
    {
     "quote": "The Stonefield lease carries a fixed uplift effective 2027.",
     "doc": "AMR",
     "page": 13
    }
   ],
   "measures": [
    "Convert the stronger of the two mid-box enquiries to terms - Leasing, Q4.",
    "Verify the 2027 anchor uplift calculation and billing date - Finance, Q4.",
    "Refresh the car-park surfacing ahead of the winter period - Ops, Q1.",
    "Benchmark Quarry Bend rents against Riverbend before re-quoting - Asset Mgmt, Q1."
   ],
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
   "outline": "Outlet centre in Central Valley at 64.5% occupancy with a 0.8-year weighted lease term, the shortest in the portfolio.",
   "summary": "Four of five leases expire inside twelve months, three of them with no option years, and $153,500 is outstanding across three tenants. Passing rents average $12.12 psf and 27,500 sqft is vacant. The outlet format has not recovered in this location and the centre is being run for cash rather than growth.",
   "occRationale": {
    "direction": "deteriorating",
    "strength": "strong",
    "confidence": 0.85,
    "text": "Deteriorating because four expiries inside the year sit against 27,500 sqft already vacant and no renewals have been agreed. Band interpretation: occupancy is Vacant to Weak and the trajectory is downward on current evidence."
   },
   "noiRationale": {
    "direction": "deteriorating",
    "strength": "moderate",
    "confidence": 0.79,
    "text": "Deteriorating because every renewal conversation is starting below passing rent and the arrears are unlikely to be recovered in full. Band interpretation: growth is Declining, with a 0.8-year term giving almost no protection."
   },
   "evidence": [
    {
     "quote": "Fairwater's weighted average lease term stood at 0.8 years at 30 September, the shortest in the portfolio.",
     "doc": "AMR",
     "page": 14
    },
    {
     "quote": "Wexler Outlet Apparel carries $88,000 outstanding against a May 2027 expiry.",
     "doc": "RR",
     "page": 12
    },
    {
     "quote": "Four of the five Fairwater leases expire within twelve months.",
     "doc": "RR",
     "page": 12
    },
    {
     "quote": "Fairwater occupancy was 64.5% with 27,500 sqft available at 30 September.",
     "doc": "AMR",
     "page": 14
    }
   ],
   "measures": [
    "Take a hold-or-exit decision before committing to any 2027 renewals - Investment, Q4.",
    "Offer short flexible terms rather than reversionary deals - Leasing, Q4.",
    "Recover the three arrears balances against deposits and guarantees - Finance, Q4.",
    "Obtain a disposal appraisal on a vacant-possession basis - Investment, Q1."
   ],
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
   "outline": "Retail at the base of a 2022 Jersey City development, 97.5% let on a 7.7-year weighted term with no expiries inside the year.",
   "summary": "The newest and best-let asset in the portfolio: a fifteen-year food-market anchor to 2037, no arrears, and no lease expiring within twelve months. Rents average $57.13 psf. Reported NOI growth of 6.8% is the strongest in the portfolio and reflects the final phase of residential lease-up completing above forecast.",
   "occRationale": {
    "direction": "stable",
    "strength": "weak",
    "confidence": 0.9,
    "text": "Stable because 860 sqft is unlet and nothing expires inside the year. Band interpretation: occupancy is Full with no material movement expected."
   },
   "noiRationale": {
    "direction": "improving",
    "strength": "strong",
    "confidence": 0.86,
    "text": "Improving because three of the five leases carry fixed annual uplifts and the residential lease-up above completed ahead of plan. Band interpretation: growth is Strong and contractual rather than dependent on letting activity."
   },
   "evidence": [
    {
     "quote": "Beacon Fresh Market runs to March 2037 with ten option years remaining.",
     "doc": "RR",
     "page": 13
    },
    {
     "quote": "No Beacon Yard lease expires within twelve months of 30 September.",
     "doc": "RR",
     "page": 13
    },
    {
     "quote": "Beacon Yard reported 6.8% net operating income growth, the strongest in the portfolio.",
     "doc": "AMR",
     "page": 15
    },
    {
     "quote": "The residential lease-up above Beacon Yard completed ahead of the acquisition forecast.",
     "doc": "AMR",
     "page": 15
    }
   ],
   "measures": [
    "Index the three uplift-bearing leases and confirm the 2027 billing - Finance, Q4.",
    "Let the residual 860 sqft as ancillary storage - Leasing, Q1.",
    "Use Beacon Yard as the comparable set for Harbor Point renewals - Asset Mgmt, Q1.",
    "Review the anchor's turnover reporting against the lease obligation - Asset Mgmt, Q2."
   ],
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
 ],
 "notes": [
  {
   "title": "Westfall Square is now a use decision, not a leasing problem",
   "body": "With the anchor at $9.40 psf, $340,000 outstanding and a January 2027 expiry, re-letting on the current format was rejected. The change-of-use study covering medical and last-mile logistics is the live workstream and no further leasing capital is committed until it reports."
  },
  {
   "title": "Riverbend and Fairwater share the same big-box re-letting assumption",
   "body": "Both projections assume no replacement income within twelve months, on 18 to 24 month letting evidence for big-box space in these submarkets. If either lets sooner the projected positions are conservative; the assumption is deliberately held flat rather than modelled optimistically."
  },
  {
   "title": "Arrears are concentrated, not systemic",
   "body": "Of $900,800 outstanding across the portfolio, $556,000 sits with three tenants at Westfall, Riverbend and Fairwater. Five of the twelve assets carry no arrears at all, so the position is being managed tenant by tenant rather than as a portfolio credit issue."
  }
 ]
};
