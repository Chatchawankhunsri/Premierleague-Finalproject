const matchData = [
{
    date: "Tuesday 10 December 2024", 
    matches: [ 
        { 
            homeTeam: {
                name: "West Ham", 
                logo: "/WestHam.png" 
            }, 
            awayTeam: { 
                name: "Wolves", 
                logo: "/Wolverhampton.png" 
            }, 
            score: { 
                home: 0, 
                away: 0 
            }, 
            stadium: "London Stadium, London", 
            details: { 
                kickoff: "03:00", 
                referee: "Darren England", 
                halfTimeScore: "0-0", 
                goals: { 
                    home: [ 
                        { time: "18'", scorer: "Rasmus Højlund" },
                        { time: "61'", scorer: "Bruno Fernandes", assist: "Amad Diallo" }, 
                    ], 
                    away: [
                        { time: "02'", scorer: "Nikola Milenkovic", assist: "Elliot Anderson" },
                        { time: "47'", scorer: "Morgan Gibbs-White", assist: "Callum Hudson-Odoi" },
                        { time: "54'", scorer: "Chris Wood", assist: "Morgan Gibbs-White" }, 
                    ] 
                } 
            } 
        },
    ]
},
{
    date: "Sunday 8 December 2024", 
    matches: [ 
        { 
            homeTeam: {
                name: "Man Utd", 
                logo: "/ManchesterUnited.png" 
            }, 
            awayTeam: { 
                name: "Nott'm Forest", 
                logo: "/NottinghamForest.png" 
            }, 
            score: { 
                home: 2, 
                away: 3 
            }, 
            stadium: "Old Trafford, Manchester", 
            details: { 
                kickoff: "00:30", 
                referee: "Darren England", 
                halfTimeScore: "1-1", 
                goals: { 
                    home: [ 
                        { time: "18'", scorer: "Rasmus Højlund" },
                        { time: "61'", scorer: "Bruno Fernandes", assist: "Amad Diallo" }, 
                    ], 
                    away: [
                        { time: "02'", scorer: "Nikola Milenkovic", assist: "Elliot Anderson" },
                        { time: "47'", scorer: "Morgan Gibbs-White", assist: "Callum Hudson-Odoi" },
                        { time: "54'", scorer: "Chris Wood", assist: "Morgan Gibbs-White" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: {
                name: "Fulham", 
                logo: "/Fulham.png" 
            }, 
            awayTeam: { 
                name: "Arsenal", 
                logo: "/Arsenal.png" 
            }, 
            score: { 
                home: 1, 
                away: 1 
            }, 
            stadium: "Craven Cottage, London", 
            details: { 
                kickoff: "21:00", 
                referee: "Chris Kavanagh", 
                halfTimeScore: "1-0", 
                goals: { 
                    home: [ 
                        { time: "11'", scorer: "Raúl Jiménez", assist: "Kenny Tete" },   
                    ], 
                    away: [
                        { time: "52'", scorer: "William Saliba", assist: "Kai Havertz" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: {
                name: "Ipswich", 
                logo: "/IpswichTown.png" 
            }, 
            awayTeam: { 
                name: "Bournemouth", 
                logo: "/Bournemouth.png" 
            }, 
            score: { 
                home: 1, 
                away: 2 
            }, 
            stadium: "Portman Road, Ipswich", 
            details: { 
                kickoff: "21:00", 
                referee: "Michael Salisbury", 
                halfTimeScore: "1-0", 
                goals: { 
                    home: [ 
                        { time: "21'", scorer: "Conor Chaplin", assist: "Cameron Burgess" },
                    ], 
                    away: [
                        { time: "87'", scorer: "Enes Ünal", assist: "Dango Ouattara" }, 
                        { time: "90+5'", scorer: "Dango Ouattara" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: {
                name: "Leicester", 
                logo: "/LeicesterCity.png" 
            }, 
            awayTeam: { 
                name: "Brighton", 
                logo: "/Brighton.png" 
            }, 
            score: { 
                home: 2, 
                away: 2 
            }, 
            stadium: "King Power Stadium, Leicester", 
            details: { 
                kickoff: "21:00", 
                referee: "Stuart Attwell", 
                halfTimeScore: "0-1", 
                goals: { 
                    home: [ 
                        { time: "86'", scorer: "Jamie Vardy" },
                        { time: "90+1'", scorer: "Bobby De Cordova-Reid", assist: "Jamie Vardy" },
                    ], 
                    away: [
                        { time: "37'", scorer: "Tariq Lamptey", assist: "Pervis Estupiñán " }, 
                        { time: "79'", scorer: "Yankuba Minteh" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: {
                name: "Spurs", 
                logo: "/TottenhamHotspur.png" 
            }, 
            awayTeam: { 
                name: "Chelsea", 
                logo: "/Chelsea.png" 
            }, 
            score: { 
                home: 3, 
                away: 4 
            }, 
            stadium: "Tottenham Hotspur Stadium, London", 
            details: { 
                kickoff: "23:30", 
                referee: "Anthony Taylor", 
                halfTimeScore: "2-1", 
                goals: { 
                    home: [ 
                        { time: "05'", scorer: "Dominic Solanke", assist: "Brennan Johnson" },
                        { time: "11'", scorer: "Dejan Kulusevski", assist: "Pedro Porro" },
                        { time: "90+6'", scorer: "Son Heung-Min", assist: "James Maddison" },
                    ], 
                    away: [
                        { time: "17'", scorer: "Jadon Sancho", assist: "Marc Cucurella" },
                        { time: "61' (pen), 84' (pen)", scorer: "Cole Palmer" },
                        { time: "73'", scorer: "Enzo Fernández" },
                    ] 
                } 
            } 
        },
    ]
},
{
    date: "Saturday 7 December 2024", 
    matches: [ 
        { 
            homeTeam: {
                name: "Aston Villa", 
                logo: "/AstonVilla.png" 
            }, 
            awayTeam: { 
                name: "Southampton", 
                logo: "/Southampton.png" 
            }, 
            score: { 
                home: 1, 
                away: 0 
            }, 
            stadium: "Villa Park, Birmingham", 
            details: { 
                kickoff: "22:00", 
                referee: "Darren Bond", 
                halfTimeScore: "1-0", 
                goals: { 
                    home: [ 
                        { time: "24'", scorer: "Jhon Durán" }, 
                    ], 
                    away: [] 
                } 
            } 
        },
        { 
            homeTeam: {
                name: "Brentford", 
                logo: "/Brentford.png" 
            }, 
            awayTeam: { 
                name: "Newcastle", 
                logo: "/NewcastleUnited.png" 
            }, 
            score: { 
                home: 4, 
                away: 2 
            }, 
            stadium: "Gtech Community Stadium, Brentford", 
            details: { 
                kickoff: "22:00", 
                referee: "Simon Hooper", 
                halfTimeScore: "2-2", 
                goals: { 
                    home: [ 
                        { time: "08'", scorer: "Bryan Mbeumo", assist: "Christian Nørgaard" },
                        { time: "28'", scorer: "Yoane Wissa" },
                        { time: "56'", scorer: "Nathan Collins", assist: "Mark Flekken" },
                        { time: "90'", scorer: "Kevin Schade", assist: "Bryan Mbeumo" },      
                    ], 
                    away: [
                        { time: "11'", scorer: "Alexander Isak", assist: "Jacob Murphy" }, 
                        { time: "32'", scorer: "Harvey Barnes", assist: "Jacob Murphy" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: {
                name: "Crystal Palace", 
                logo: "/CrystalPalace.png" 
            }, 
            awayTeam: { 
                name: "Man City", 
                logo: "/ManchesterCity.png" 
            }, 
            score: { 
                home: 2, 
                away: 2 
            }, 
            stadium: "Selhurst Park, London", 
            details: { 
                kickoff: "22:00", 
                referee: "Robert Jones", 
                halfTimeScore: "1-1", 
                goals: { 
                    home: [ 
                        { time: "04'", scorer: "Daniel Muñoz", assist: "Will Hughes" },
                        { time: "56'", scorer: "Maxence Lacroix", assist: "Will Hughes" },
                    ], 
                    away: [
                        { time: "30'", scorer: "Erling Haaland", assist: "Matheus Nunes" }, 
                        { time: "68'", scorer: "Rico Lewis", assist: "Bernardo Silva" }, 
                    ] 
                } 
            } 
        },
    ]
},
{
    date: "Friday 6 December 2024", 
    matches: [ 
        { 
            homeTeam: {
                name: "Fulham", 
                logo: "/Fulham.png" 
            }, 
            awayTeam: { 
                name: "Brighton", 
                logo: "/Brighton.png" 
            }, 
            score: { 
                home: 3, 
                away: 1 
            }, 
            stadium: "Craven Cottage, London", 
            details: { 
                kickoff: "02:30", 
                referee: "Peter Bankes", 
                halfTimeScore: "1-0", 
                goals: { 
                    home: [ 
                        { time: "04', 87'", scorer: "Alex Iwobi", assist: "Antonee Robinson"}, 
                        { time: "79'", scorer: "Matt O'Riley" },
                    ], 
                    away: [
                        { time: "56'", scorer: "Carlos Baleba", assist: "João Pedro" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: {
                name: "Bournemouth", 
                logo: "/Bournemouth.png" 
            }, 
            awayTeam: { 
                name: "Spurs", 
                logo: "/TottenhamHotspur.png" 
            }, 
            score: { 
                home: 1, 
                away: 0 
            }, 
            stadium: "Vitality Stadium, Bournemouth", 
            details: { 
                kickoff: "03:15", 
                referee: "Simon Hooper", 
                halfTimeScore: "1-0", 
                goals: { 
                    home: [ 
                        { time: "17'", scorer: "Dean Huijsen", assist: "Marcus Tavernier"}, 
                    ], 
                    away: [] 
                } 
            } 
        }
    ]
},
{
    date: "Thursday 5 December 2024", 
    matches: [ 
        { 
            homeTeam: {
                name: "Everton", 
                logo: "/Everton.png" 
            }, 
            awayTeam: { 
                name: "Wolves", 
                logo: "/Wolverhampton.png" 
            }, 
            score: { 
                home: 4, 
                away: 0 
            }, 
            stadium: "Goodison Park, Liverpool", 
            details: { 
                kickoff: "02:30", 
                referee: "Michael Salisbury", 
                halfTimeScore: "2-0", 
                goals: { 
                    home: [ 
                        { time: "10'", scorer: "Ashley Young" }, 
                        { time: "33'", scorer: "Orel Mangala" }, 
                        { time: "49',72'", scorer: "Craig Dawson" } 
                    ], 
                    away: [] 
                } 
            } 
        }, 
        { 
            homeTeam: { 
                name: "Man City", 
                logo: "/ManchesterCity.png" 
            }, 
            awayTeam: { 
                name: "Nott'm Forest", 
                logo: "/NottinghamForest.png" 
            }, 
            score: { 
                home: 3, 
                away: 0 
            }, 
            stadium: "Etihad Stadium, Manchester", 
            details: { 
                kickoff: "02:30", 
                referee: "Michael Oliver", 
                halfTimeScore: "2-0", 
                goals: { 
                    home: [ 
                        { time: "08'", scorer: "Bernardo Silva", assist: "Kevin De Bruyne" }, 
                        { time: "31'", scorer: "Kevin De Bruyne", assist: "Jérémy Doku" }, 
                        { time: "57'", scorer: "Jérémy Doku", assist: "Erling Haaland" } 
                    ], 
                    away: [] 
                } 
            } 
        },
        { 
            homeTeam: { 
                name: "Newcastle", 
                logo: "/NewcastleUnited.png" 
            }, 
            awayTeam: { 
                name: "Liverpool", 
                logo: "/Liverpool.png" 
            }, 
            score: { 
                home: 3, 
                away: 3 
            }, 
            stadium: "St. James' Park, Newcastle", 
            details: { 
                kickoff: "02:30", 
                referee: "Andy Madley", 
                halfTimeScore: "1-0", 
                goals: { 
                    home: [ 
                        { time: "35'", scorer: "Alexander Isak", assist: "Bruno Guimarães" }, 
                        { time: "62'", scorer: "Anthony Gordon", assist: "Alexander Isak" }, 
                        { time: "90'", scorer: "Fabian Schär", assist: "Bruno Guimarães" } 
                    ], 
                    away: [
                        { time: "50'", scorer: "Curtis Jones", assist: "Mohamed Salah" }, 
                        { time: "68', 83'", scorer: "Mohamed Salah", assist: "Trent Alexander-Arnold" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: { 
                name: "Southampton", 
                logo: "/Southampton.png" 
            }, 
            awayTeam: { 
                name: "Chelsea", 
                logo: "/Chelsea.png" 
            }, 
            score: { 
                home: 1, 
                away: 5 
            }, 
            stadium: "St. Mary's Stadium, Southampton", 
            details: { 
                kickoff: "02:30", 
                referee: "Tony Harrington", 
                halfTimeScore: "1-3", 
                goals: { 
                    home: [ 
                        { time: "11'", scorer: "Joe Aribo", assist: "Kyle Walker-Peters" }
                    ], 
                    away: [
                        { time: "07'", scorer: "Axel Disasi", assist: "Enzo Fernández" }, 
                        { time: "17'", scorer: "Christopher Nkunku", assist: "Noni Madueke" }, 
                        { time: "34'", scorer: "Noni Madueke", assist: "João Félix" }, 
                        { time: "76'", scorer: "Cole Palmer", assist: "Christopher Nkunku" }, 
                        { time: "87'", scorer: "Jadon Sancho", assist: "Malo Gusto" }, 
                    ] 
                } 
            } 
        },
        { 
            homeTeam: { 
                name: "Arsenal", 
                logo: "/Arsenal.png" 
            }, 
            awayTeam: { 
                name: "Man Utd", 
                logo: "/ManchesterUnited.png" 
            }, 
            score: { 
                home: 2, 
                away: 0 
            }, 
            stadium: "Emirates Stadium, London", 
            details: { 
                kickoff: "02:30", 
                referee: "Samuel Barrott", 
                halfTimeScore: "0-0", 
                goals: { 
                    home: [ 
                        { time: "54'", scorer: "Jurriën Timber", assist: "Declan Rice" },
                        { time: "73'", scorer: "William Saliba", assist: "homas Partey" },
                    ], 
                    away: [] 
                } 
            } 
        },
        { 
            homeTeam: { 
                name: "Aston Villa", 
                logo: "/AstonVilla.png" 
            }, 
            awayTeam: { 
                name: "Brentford", 
                logo: "/Brentford.png" 
            }, 
            score: { 
                home: 3, 
                away: 1 
            }, 
            stadium: "Villa Park, Birmingham", 
            details: { 
                kickoff: "02:30", 
                referee: "Lewis Smith", 
                halfTimeScore: "3-0", 
                goals: { 
                    home: [ 
                        { time: "21'", scorer: "Morgan Rogers", assist: "Ollie Watkins" },
                        { time: "28'(pen)", scorer: "Ollie Watkins"},
                        { time: "34'", scorer: "Matty Cash"},
                    ], 
                    away: [
                        { time: "54'", scorer: "Mikkel Damsgaard"},
                    ] 
                } 
            } 
        },
    ] 
},
{
    date: "Wednesday 4 December 2024", 
    matches: [ 
        { 
            homeTeam: {
                name: "Ipswich", 
                logo: "/IpswichTown.png" 
            }, 
            awayTeam: { 
                name: "Crystal Palace", 
                logo: "/CrystalPalace.png" 
            }, 
            score: { 
                home: 0, 
                away: 1 
            }, 
            stadium: "Portman Road, Ipswich", 
            details: { 
                kickoff: "02:30", 
                referee: "Craig Pawson", 
                halfTimeScore: "0-0", 
                goals: { 
                    home: [], 
                    away: [
                        { time: "59'", scorer: "Jean-Philippe Mateta", assist: "Eberechi Eze" }, 
                    ] 
                } 
            } 
        }, 
        { 
            homeTeam: { 
                name: "Leicester", 
                logo: "/LeicesterCity.png" 
            }, 
            awayTeam: { 
                name: "West Ham", 
                logo: "/WestHam.png" 
            }, 
            score: { 
                home: 3, 
                away: 1 
            }, 
            stadium: "King Power Stadium, Leicester", 
            details: { 
                kickoff: "03:15", 
                referee: "Josh Smith", 
                halfTimeScore: "1-0", 
                goals: { 
                    home: [ 
                        { time: "02'", scorer: "Jamie Vardy", assist: "Bilal El Khannouss" }, 
                        { time: "61'", scorer: "Bilal El Khannouss", assist: "Kasey McAteer" }, 
                        { time: "90'", scorer: "Patson Daka", assist: "Victor Kristiansen" } 
                    ], 
                    away: [
                        { time: "90+3'", scorer: "Niclas Füllkrug", assist: "Crysencio Summerville" },
                    ] 
                } 
            } 
        },
    ]
}
];

module.exports = matchData;