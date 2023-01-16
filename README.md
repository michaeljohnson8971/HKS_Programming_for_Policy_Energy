# HKS_Programming_for_Policy_Energy


A myriad of data sources were used for compiling this report. 
EPA Clean Bus School Awardees 	https://www.epa.gov/cleanschoolbus/awarded-clean-school-bus-program-rebates#map 
Data set also in HKS Project repository – give allocation based on school district and city . The connection to these allocation and job opportunities conceptually would be link through new bus production like in New Flyer case. 
EPA IIJA Funding Breakdown 	Mostly visualization of funding for IJJA funding he EPA is administering - https://www.epa.gov/infrastructure/explore-epas-bipartisan-infrastructure-law-funding-allocations 

Economic Census 	https://www.census.gov/topics/business-economy.html 

US EIA Data Portal 	https://www.eia.gov/totalenergy/reports.php#/T120  - help to see cost and alternative/renewable energy usage across he country 
EIA Texas Insights	https://www.eia.gov/state/data.php?sid=TX (State by state analysis)


The project folder holds a copy of relevant files that come in handy. The two most useful data set were the Energy Production and Energy Consumption table that offering state by state insights on energy usage across various fuels and consumer typologies. These data sets are titled prod-dataset and pr-all data set. IJJA funding data was originally compiled by the American Association of Highway Transportation Officials.(A crude data table was created from their reports) This data was cross reverence with Texas Comptrollers office and other IIJA funding documentation. 

Analysis and Tranformations:
•	Only basic data cleaning and descriptive statistic were used on data sets, No regression were run or projections. 
•	The Consumption and Production ratio was the only true calculation, aiming to understand the relationship of production and consumption over time across all energy sectors. The calculation was simple division.
•	The Final data set I located in Data_IC.csv is the one utilized by the Impact visualization(in d3) 
