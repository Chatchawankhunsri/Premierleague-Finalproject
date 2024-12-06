const matchData = [
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
                        { time: "04',87'", scorer: "Alex Iwobi", assist: "Antonee Robinson"}, 
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
        } ,
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
        } ,
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
        } ,
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