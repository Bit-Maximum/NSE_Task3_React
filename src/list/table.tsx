
const cities = [
        {
            "id": 1,
            "name": "Dayton",
            "zipcode": "80563"
        },
        {
            "id": 2,
            "name": "Buffalo",
            "zipcode": "17420"
        },
        {
            "id": 3,
            "name": "Chicago",
            "zipcode": "44751"
        },
        {
            "id": 4,
            "name": "Fremont",
            "zipcode": "20641"
        },
        {
            "id": 5,
            "name": "Virginia Beach",
            "zipcode": "62389"
        },
        {
            "id": 6,
            "name": "Austin",
            "zipcode": "781"
        },
        {
            "id": 7,
            "name": "Riverside",
            "zipcode": "1439"
        },
        {
            "id": 8,
            "name": "Arlington",
            "zipcode": "12654"
        },
        {
            "id": 9,
            "name": "Atlanta",
            "zipcode": "66212"
        },
        {
            "id": 10,
            "name": "Toledo",
            "zipcode": "52048"
        },
        {
            "id": 11,
            "name": "Spokane",
            "zipcode": "38103"
        },
        {
            "id": 12,
            "name": "Tacoma",
            "zipcode": "43085"
        },
        {
            "id": 13,
            "name": "Akron",
            "zipcode": "83448"
        },
        {
            "id": 14,
            "name": "Indianapolis",
            "zipcode": "81678"
        },
        {
            "id": 15,
            "name": "Colorado",
            "zipcode": "88609"
        },
        {
            "id": 16,
            "name": "Norfolk",
            "zipcode": "88825"
        },
        {
            "id": 17,
            "name": "St. Louis",
            "zipcode": "19382"
        },
        {
            "id": 18,
            "name": "Little Rock",
            "zipcode": "81251"
        },
        {
            "id": 19,
            "name": "Omaha",
            "zipcode": "24733"
        },
        {
            "id": 20,
            "name": "El Paso",
            "zipcode": "95963"
        },
        {
            "id": 21,
            "name": "Milwaukee",
            "zipcode": "78846"
        },
        {
            "id": 22,
            "name": "Baton Rouge",
            "zipcode": "21874"
        },
        {
            "id": 23,
            "name": "Anaheim",
            "zipcode": "21500"
        },
        {
            "id": 24,
            "name": "Lincoln",
            "zipcode": "95386"
        },
        {
            "id": 25,
            "name": "Boston",
            "zipcode": "59548"
        },
        {
            "id": 26,
            "name": "Des Moines",
            "zipcode": "40742"
        },
        {
            "id": 27,
            "name": "Mesa",
            "zipcode": "60852"
        },
        {
            "id": 28,
            "name": "Tucson",
            "zipcode": "34760"
        },
        {
            "id": 29,
            "name": "Washington",
            "zipcode": "63454"
        },
        {
            "id": 30,
            "name": "Philadelphia",
            "zipcode": "17498"
        },
        {
            "id": 31,
            "name": "Wichita",
            "zipcode": "93028"
        },
        {
            "id": 32,
            "name": "Jackson",
            "zipcode": "40971"
        },
        {
            "id": 33,
            "name": "Minneapolis",
            "zipcode": "95451"
        },
        {
            "id": 34,
            "name": "Fort Wayne",
            "zipcode": "48982"
        },
        {
            "id": 35,
            "name": "Greensboro",
            "zipcode": "35659"
        },
        {
            "id": 36,
            "name": "Detroit",
            "zipcode": "72819"
        },
        {
            "id": 37,
            "name": "Fresno",
            "zipcode": "90795"
        },
        {
            "id": 38,
            "name": "Richmond",
            "zipcode": "72757"
        },
        {
            "id": 39,
            "name": "Lubbock",
            "zipcode": "58464"
        },
        {
            "id": 40,
            "name": "Cleveland",
            "zipcode": "51352"
        },
        {
            "id": 41,
            "name": "Bakersfield",
            "zipcode": "13915"
        },
        {
            "id": 42,
            "name": "Denver",
            "zipcode": "18752"
        },
        {
            "id": 43,
            "name": "Glendale",
            "zipcode": "198"
        },
        {
            "id": 44,
            "name": "Memphis",
            "zipcode": "73999"
        },
        {
            "id": 45,
            "name": "Dallas",
            "zipcode": "20151"
        },
        {
            "id": 46,
            "name": "New York",
            "zipcode": "17104"
        },
        {
            "id": 47,
            "name": "San Francisco",
            "zipcode": "157"
        },
        {
            "id": 48,
            "name": "Long Beach",
            "zipcode": "97859"
        },
        {
            "id": 49,
            "name": "Montgomery",
            "zipcode": "8944"
        },
        {
            "id": 50,
            "name": "Cincinnati",
            "zipcode": "83634"
        },
        {
            "id": 51,
            "name": "Portland",
            "zipcode": "79636"
        },
        {
            "id": 52,
            "name": "Madison",
            "zipcode": "14626"
        },
        {
            "id": 53,
            "name": "Las Vegas",
            "zipcode": "90989"
        },
        {
            "id": 54,
            "name": "Albuquerque",
            "zipcode": "55358"
        },
        {
            "id": 55,
            "name": "Houston",
            "zipcode": "95800"
        },
        {
            "id": 56,
            "name": "Stockton",
            "zipcode": "46777"
        },
        {
            "id": 57,
            "name": "Nashville",
            "zipcode": "60874"
        },
        {
            "id": 58,
            "name": "Columbus",
            "zipcode": "87987"
        },
        {
            "id": 59,
            "name": "Kansas",
            "zipcode": "56647"
        },
        {
            "id": 60,
            "name": "Fort Worth",
            "zipcode": "41769"
        },
        {
            "id": 61,
            "name": "Miami",
            "zipcode": "6794"
        },
        {
            "id": 62,
            "name": "Mobile",
            "zipcode": "78861"
        },
        {
            "id": 63,
            "name": "Tulsa",
            "zipcode": "69923"
        },
        {
            "id": 64,
            "name": "Raleigh",
            "zipcode": "20327"
        },
        {
            "id": 65,
            "name": "Baltimore",
            "zipcode": "89197"
        },
        {
            "id": 66,
            "name": "Shreveport",
            "zipcode": "82101"
        },
        {
            "id": 67,
            "name": "Corpus Christi",
            "zipcode": "78414"
        },
        {
            "id": 68,
            "name": "Anchorage",
            "zipcode": "29493"
        },
        {
            "id": 69,
            "name": "Oakland",
            "zipcode": "29029"
        },
        {
            "id": 70,
            "name": "Rochester",
            "zipcode": "415"
        },
        {
            "id": 71,
            "name": "Phoenix",
            "zipcode": "84193"
        },
        {
            "id": 72,
            "name": "Honolulu",
            "zipcode": "93782"
        },
        {
            "id": 73,
            "name": "Santa Ana",
            "zipcode": "23419"
        },
        {
            "id": 74,
            "name": "Tampa",
            "zipcode": "81280"
        },
        {
            "id": 75,
            "name": "San Antonio",
            "zipcode": "3863"
        },
        {
            "id": 76,
            "name": "Birmingham",
            "zipcode": "14935"
        },
        {
            "id": 77,
            "name": "Louisville",
            "zipcode": "4409"
        },
        {
            "id": 78,
            "name": "San Diego",
            "zipcode": "83701"
        },
        {
            "id": 79,
            "name": "Oklahoma",
            "zipcode": "40472"
        },
        {
            "id": 80,
            "name": "New Orleans",
            "zipcode": "35640"
        },
        {
            "id": 81,
            "name": "Sacramento",
            "zipcode": "81966"
        },
        {
            "id": 82,
            "name": "Charlotte",
            "zipcode": "39774"
        },
        {
            "id": 83,
            "name": "Aurora",
            "zipcode": "40050"
        },
        {
            "id": 84,
            "name": "Newark",
            "zipcode": "31536"
        },
        {
            "id": 85,
            "name": "St. Petersburg",
            "zipcode": "88713"
        },
        {
            "id": 86,
            "name": "San Jose",
            "zipcode": "45666"
        },
        {
            "id": 87,
            "name": "Los Angeles",
            "zipcode": "63756"
        },
        {
            "id": 88,
            "name": "Seattle",
            "zipcode": "20135"
        },
        {
            "id": 89,
            "name": "St. Paul",
            "zipcode": "77998"
        },
        {
            "id": 90,
            "name": "Grand Rapids",
            "zipcode": "70862"
        },
        {
            "id": 91,
            "name": "Jacksonville",
            "zipcode": "68274"
        },
        {
            "id": 92,
            "name": "Hialeah",
            "zipcode": "34375"
        },
        {
            "id": 93,
            "name": "Jersey",
            "zipcode": "55355"
        },
        {
            "id": 94,
            "name": "Yonkers",
            "zipcode": "7430"
        },
        {
            "id": 95,
            "name": "Garland",
            "zipcode": "73265"
        },
        {
            "id": 96,
            "name": "Pittsburgh",
            "zipcode": "14257"
        }
];
 

 
export default  cities;
