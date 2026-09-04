/* ==========================================================================
   Retail portfolio — narrative text, keyed by asset id.
   ILLUSTRATIVE SAMPLE DATA.

   Split out of data.js on purpose: this is the bulk of the bytes and it
   changes rarely, while the numbers in data.js change constantly. Editing a
   figure means rewriting only the small file, which is faster and much less
   likely to truncate.

   Edit this file only when asked to change wording. Every key here must match
   an asset id in data.js.
   ========================================================================== */

window.PORTFOLIO_TEXT = {
 "assets": {
  "NGT": {
   "outline": "Grocery-anchored neighbourhood centre in Yonkers, trading at 96.5% occupancy on a twelve-year anchor lease with a decade of options still to run.",
   "summary": "Fieldcrest Grocers renewed early in 2016 and holds ten option years, which underpins the whole rent roll. Footfall has been stable through the year and the only soft point is a small cafe unit with a modest balance outstanding. Two leases run off inside twelve months but both are sub-4,000 sqft.",
   "occText": "Improving because only 4,200 sqft sits vacant and both near-term expiries are small inline units with active interest. Band interpretation: occupancy is Full and the anchor is not in play.",
   "noiText": "Improving because the anchor's fixed uplift lands in 2027 and the pharmacy unit is under-rented against the centre average of $25.29. Band interpretation: growth is Growing rather than Strong, since no lease is being re-based upward this year.",
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
   ]
  },
  "RVB": {
   "outline": "Power centre in New Rochelle where a sporting-goods box covering 42,000 sqft is in arrears and expires in November 2026.",
   "summary": "Rampart Sporting Goods stopped paying in full in the second quarter and now carries $128,000 outstanding against a lease that ends in November with no option. The home-improvement anchor also runs off in February 2027, so 67% of contracted rent is exposed inside eighteen months. WALT has fallen to 1.1 years, the shortest in the portfolio bar the outlets.",
   "occText": "Deteriorating because the November expiry is not expected to renew and would take occupancy to roughly 72% on its own. Band interpretation: occupancy is Stabilised today but only because the vacating tenant is still in possession.",
   "noiText": "Deteriorating because re-letting big-box space in this submarket is running 18 to 24 months and any replacement deal will re-base below $18.20. Band interpretation: growth is Declining and the projection assumes no replacement income within the year.",
   "evidence": [
    {
     "quote": "Rampart Sporting Goods carries $128,000 outstanding and has confirmed it will not exercise a renewal.",
     "doc": "LA-RAM",
     "page": 2
    },
    {
     "quote": "Halcyon Home Depot Co. expires February 2027 with no remaining option years.",
     "doc": "RR",
     "page": 3
    },
    {
     "quote": "Riverbend's weighted average lease term has fallen to 1.1 years at 30 September.",
     "doc": "AMR",
     "page": 6
    },
    {
     "quote": "Together the two boxes represent approximately 67% of Riverbend's contracted rent.",
     "doc": "AMR",
     "page": 6
    }
   ],
   "measures": [
    "Instruct agents on Unit 2 now rather than at lease end - Leasing, Q4.",
    "Open renewal negotiations with Halcyon Home Depot Co. immediately - Leasing, Q4.",
    "Model a subdivision of Unit 2 into three mid-box units - Development, Q1.",
    "Escalate the Rampart balance to recovery and draw on the deposit - Finance, Q4."
   ]
  },
  "HAR": {
   "outline": "Ground-floor retail beneath a 2019 mixed-use building in Stamford, let to five operators on a 6.5-year weighted term.",
   "summary": "The strongest lease profile in the portfolio, with the food-market anchor running to 2034 and ten option years behind it. Rents average $64.84 psf and there are no arrears. The single vacancy is a corner unit that has been held back deliberately while a licensed operator is sourced.",
   "occText": "Improving because the held corner unit is under offer to a licensed operator and would take the asset above 93%. Band interpretation: occupancy is Stabilised and improving on a deliberate hold rather than a letting failure.",
   "noiText": "Improving because the residential lease-up above completed in 2025 and the retail rents were struck before that footfall arrived. Band interpretation: growth is Growing, with the corner unit the main variable.",
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
     "page": 8
    },
    {
     "quote": "Average passing rent at Harbor Point is $64.84 psf, the second highest in the portfolio.",
     "doc": "AMR",
     "page": 8
    }
   ],
   "measures": [
    "Conclude terms on the R-6 corner unit with the licensed operator - Leasing, Q4.",
    "Benchmark 2027 renewals against the post-lease-up footfall data - Asset Mgmt, Q1.",
    "Review the service-charge apportionment with the residential owner - Finance, Q1.",
    "Register the 2034 option mechanics in the lease diary - Asset Mgmt, Q4."
   ]
  },
  "MPL": {
   "outline": "Unanchored 1987 strip centre in Paramus at 78.5% occupancy, with four leases expiring inside twelve months and no anchor covenant.",
   "summary": "The discount tenant is the largest occupier but has no anchor protections and carries $61,000 outstanding. Four of five leases either expired in 2026 or run off in early 2027, and three have no option years. The centre has had no capital spend since 2014.",
   "occText": "Deteriorating because four expiries inside twelve months sit against 11,500 sqft already vacant, and none of the four has confirmed renewal. Band interpretation: occupancy is Weak and the asset has no anchor to hold the rest of the rent roll.",
   "noiText": "Deteriorating because passing rents average $18.64 in a submarket where competing centres have refurbished, so renewals are being asked at a discount. Band interpretation: growth is Declining, driven by rent-free incentives rather than vacancy alone.",
   "evidence": [
    {
     "quote": "Ridgeway Discount Mart carries $61,000 outstanding and expires May 2027 with no option.",
     "doc": "RR",
     "page": 5
    },
    {
     "quote": "Four of the five Maple Row leases expire within twelve months of 30 September.",
     "doc": "AMR",
     "page": 10
    },
    {
     "quote": "No capital expenditure has been committed at Maple Row since acquisition in 2014.",
     "doc": "AMR",
     "page": 10
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
   ]
  },
  "LEX": {
   "outline": "Four high-street retail condominium units in Manhattan let to independent operators at an average $299 psf.",
   "summary": "The highest rents in the portfolio and no expiries inside twelve months. All four units are let to independents on ten-year terms with options, and there are no arrears. Occupancy is effectively full at 93.9%, the balance being a 540 sqft basement store.",
   "occText": "Stable because there are no expiries within the year and the only unlet space is ancillary basement storage. Band interpretation: occupancy is Stabilised and structurally unlikely to move.",
   "noiText": "Improving because the 2024 florist letting was struck 12% above the previous passing rent and sets the tone for the 2028 review. Band interpretation: growth is Flat to Growing; there is no contractual uplift inside the year.",
   "evidence": [
    {
     "quote": "No Lexington Street lease expires within twelve months of 30 September.",
     "doc": "RR",
     "page": 6
    },
    {
     "quote": "Petal & Stem Florists was let in January 2024 at $265 psf, 12% above the prior passing rent.",
     "doc": "AMR",
     "page": 12
    },
    {
     "quote": "The unlet 540 sqft at Lexington Street is basement storage, not trading area.",
     "doc": "AMR",
     "page": 12
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
   ]
  },
  "WSF": {
   "outline": "Enclosed 1979 community centre in Elizabeth at 69.2% occupancy, carrying $399,600 of arrears concentrated in a department-store anchor.",
   "summary": "Grandview Department Co. occupies 96,000 sqft at $9.40 psf, owes $340,000 and expires in January 2027 with no option. The centre is the weakest performer in the portfolio on every measure: lowest occupancy, lowest rents, shortest term and the largest arrears balance. 54,200 sqft is already vacant.",
   "occText": "Deteriorating because the anchor expiry in January 2027 is not expected to renew and would take occupancy below 50%. Band interpretation: occupancy is Weak and heading toward the Vacant band on the current trajectory.",
   "noiText": "Deteriorating because the anchor pays $9.40 psf against a $11.21 centre average and even that is not being collected in full. Band interpretation: growth is Declining sharply and the projection carries no re-letting assumption.",
   "evidence": [
    {
     "quote": "Grandview Department Co. carries $340,000 outstanding, the largest single balance in the portfolio.",
     "doc": "RR",
     "page": 7
    },
    {
     "quote": "Westfall Square occupancy was 69.2% at 30 September with 54,200 sqft vacant.",
     "doc": "AMR",
     "page": 14
    },
    {
     "quote": "The Grandview lease expires January 2027 with no remaining option years.",
     "doc": "RR",
     "page": 7
    },
    {
     "quote": "Westfall's average passing rent of $11.21 psf is the lowest in the portfolio.",
     "doc": "AMR",
     "page": 14
    }
   ],
   "measures": [
    "Take a formal position on Grandview: standstill agreement or forfeiture - Legal, Q4.",
    "Commission a change-of-use study covering medical and last-mile logistics - Development, Q1.",
    "Suspend all non-essential capital spend pending the use decision - Asset Mgmt, Q4.",
    "Brief the lender on the January 2027 covenant position - Finance, Q4."
   ]
  },
  "CDR": {
   "outline": "Urban infill retail parade in Brooklyn, effectively fully let at 99.0% with a food-hall anchor to 2031.",
   "summary": "The best-occupied asset in the portfolio, with 240 sqft unlet and no arrears. Cedarhouse Provisions anchors the parade on a fifteen-year term with ten options. Two small leases expire inside the year and both tenants have asked to extend.",
   "occText": "Stable because only 240 sqft is unlet and both near-term expiries want to stay. Band interpretation: occupancy is Full and there is no realistic upside left.",
   "noiText": "Improving because the parade is effectively full and the anchor pays turnover rent on rising sales. Band interpretation: growth is Strong, coming from trade rather than from letting vacant space.",
   "evidence": [
    {
     "quote": "Cedar & Vine was 99.0% occupied at 30 September with 240 sqft available.",
     "doc": "RR",
     "page": 8
    },
    {
     "quote": "Both Cedar & Vine tenants expiring within the year have requested extensions.",
     "doc": "AMR",
     "page": 16
    },
    {
     "quote": "Cedarhouse Provisions holds ten option years from 2031.",
     "doc": "RR",
     "page": 8
    },
    {
     "quote": "Vine Street Bakery and Harrow Barbers are the two highest-rented units in the parade.",
     "doc": "AMR",
     "page": 16
    }
   ],
   "measures": [
    "Hold both expiring units at passing rent rather than testing the market - Leasing, Q4.",
    "Test a turnover-rent structure with the bakery at renewal - Asset Mgmt, Q4.",
    "Let the residual 240 sqft as storage to an existing tenant - Leasing, Q1.",
    "Use the parade as the comparable evidence set for Beacon Yard - Asset Mgmt, Q1."
   ]
  },
  "ORC": {
   "outline": "Grocery-anchored centre in White Plains at 85.6% occupancy, with flat reported NOI and a home-goods tenant in arrears.",
   "summary": "The same grocery covenant as Northgate anchors this centre to 2029 with ten options. Reported NOI growth was exactly flat for the year: the anchor has no uplift until 2029 and the arrears from Bellamy Home Goods offset the 2023 bagel letting. 13,200 sqft has been vacant since a 2025 departure.",
   "occText": "Improving because the vacant 13,200 sqft has been split into two units and one is under offer. Band interpretation: occupancy is Stabilised, with the split the main lever.",
   "noiText": "Stable because there is no contractual uplift inside the year and the arrears position cancels the reversion. Band interpretation: growth is Flat, which is the reported position rather than a forecast.",
   "evidence": [
    {
     "quote": "Orchard Gate reported flat net operating income year on year at 30 September.",
     "doc": "AMR",
     "page": 18
    },
    {
     "quote": "Bellamy Home Goods carries $34,000 outstanding against a December 2027 expiry.",
     "doc": "RR",
     "page": 9
    },
    {
     "quote": "The 13,200 sqft vacated in 2025 has been subdivided into two units of 7,400 and 5,800 sqft.",
     "doc": "AMR",
     "page": 18
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
   ]
  },
  "SLB": {
   "outline": "Lifestyle centre in Huntington at 73.1% occupancy, anchored by a cinema operator carrying $76,000 of arrears.",
   "summary": "The cinema anchor has been on a reduced-rent concession since 2024 and owes $76,000, but admissions recovered through the summer and it has resumed full payments. Three leases expire inside twelve months, and 17,900 sqft remains vacant from the 2023 restaurant closures. This is the one deteriorating asset where the trajectory has turned.",
   "occText": "Improving because two of the three vacant restaurant units are under offer to food operators. Band interpretation: occupancy is Weak but improving off a 2023 low.",
   "noiText": "Improving because the cinema concession steps back to full rent in March 2027 and the arrears are being recovered on a plan. Band interpretation: growth is Declining on reported figures but the projection turns positive on the concession step-up.",
   "evidence": [
    {
     "quote": "Saltbox Cinema Group has resumed full monthly payments and carries $76,000 outstanding on a recovery plan.",
     "doc": "AMR",
     "page": 20
    },
    {
     "quote": "Two of the three vacant Saltbox restaurant units are under offer.",
     "doc": "AMR",
     "page": 20
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
   ]
  },
  "QRY": {
   "outline": "Power centre in Danbury at 92.5% occupancy, anchored by a warehouse club on a thirty-year term to 2032.",
   "summary": "A stable asset with the longest anchor term in the portfolio and no arrears. Rents average $16.37 psf and only one small lease expires inside the year. The 12,000 sqft vacancy is a former electronics unit that has been on the market since spring.",
   "occText": "Improving because the vacant 12,000 sqft has attracted two mid-box enquiries at close to quoting rent. Band interpretation: occupancy is Stabilised with a clear route above 95%.",
   "noiText": "Improving because the warehouse club's 2027 fixed uplift is contractual and the electronics unit would re-let above the centre average. Band interpretation: growth is Growing, underpinned by the anchor uplift rather than by letting risk.",
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
     "page": 22
    },
    {
     "quote": "The Stonefield lease carries a fixed uplift effective 2027.",
     "doc": "AMR",
     "page": 22
    }
   ],
   "measures": [
    "Convert the stronger of the two mid-box enquiries to terms - Leasing, Q4.",
    "Verify the 2027 anchor uplift calculation and billing date - Finance, Q4.",
    "Refresh the car-park surfacing ahead of the winter period - Ops, Q1.",
    "Benchmark Quarry Bend rents against Riverbend before re-quoting - Asset Mgmt, Q1."
   ]
  },
  "FRW": {
   "outline": "Outlet centre in Central Valley at 64.5% occupancy with a 0.8-year weighted lease term, the shortest in the portfolio.",
   "summary": "Four of five leases expire inside twelve months, three of them with no option years, and $153,500 is outstanding across three tenants. Passing rents average $12.12 psf and 27,500 sqft is vacant. The outlet format has not recovered in this location and the centre is being run for cash rather than growth.",
   "occText": "Deteriorating because four expiries inside the year sit against 27,500 sqft already vacant and no renewals have been agreed. Band interpretation: occupancy is Vacant to Weak and the trajectory is downward on current evidence.",
   "noiText": "Deteriorating because every renewal conversation is starting below passing rent and the arrears are unlikely to be recovered in full. Band interpretation: growth is Declining, with a 0.8-year term giving almost no protection.",
   "evidence": [
    {
     "quote": "Fairwater's weighted average lease term stood at 0.8 years at 30 September, the shortest in the portfolio.",
     "doc": "AMR",
     "page": 24
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
     "page": 24
    }
   ],
   "measures": [
    "Take a hold-or-exit decision before committing to any 2027 renewals - Investment, Q4.",
    "Offer short flexible terms rather than reversionary deals - Leasing, Q4.",
    "Recover the three arrears balances against deposits and guarantees - Finance, Q4.",
    "Obtain a disposal appraisal on a vacant-possession basis - Investment, Q1."
   ]
  },
  "BCN": {
   "outline": "Retail at the base of a 2022 Jersey City development, 97.5% let on a 7.7-year weighted term with no expiries inside the year.",
   "summary": "The newest and best-let asset in the portfolio: a fifteen-year food-market anchor to 2037, no arrears, and no lease expiring within twelve months. Rents average $57.13 psf. Reported NOI growth of 6.8% is the strongest in the portfolio and reflects the final phase of residential lease-up completing above forecast.",
   "occText": "Stable because 860 sqft is unlet and nothing expires inside the year. Band interpretation: occupancy is Full with no material movement expected.",
   "noiText": "Improving because three of the five leases carry fixed annual uplifts and the residential lease-up above completed ahead of plan. Band interpretation: growth is Strong and contractual rather than dependent on letting activity.",
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
     "page": 26
    },
    {
     "quote": "The residential lease-up above Beacon Yard completed ahead of the acquisition forecast.",
     "doc": "AMR",
     "page": 26
    }
   ],
   "measures": [
    "Index the three uplift-bearing leases and confirm the 2027 billing - Finance, Q4.",
    "Let the residual 860 sqft as ancillary storage - Leasing, Q1.",
    "Use Beacon Yard as the comparable set for Harbor Point renewals - Asset Mgmt, Q1.",
    "Review the anchor's turnover reporting against the lease obligation - Asset Mgmt, Q2."
   ]
  }
 },
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
