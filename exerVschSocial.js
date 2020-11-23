var conventionCollective = {
    fName: "James",
    lName: "Kirk",
    age: 45,
    favoriteGenres: ["Sci-Fi", "Fantasy", "DoTerra"],
    conventionsAttending: [
        {
            conName: "Gencon",
            dates: [
                {
                    registrationCloses: Date(2021, 08, 15),
                    startDate: Date(2021, 09, 10),
                    endDate: Date(2021, 09, 15),
                }
            ],
            city: "Provo",
            panels: [
                {
                    panelName: "How to write realistic characters.",
                    speakers: ["Mary Sue", "Ben Ramirez", "Marco Polo"],
                    room: "314"
                },
                {
                    panelName: "How to not be a damsel in distress.",
                    speakers: ["John Smith", "Mickey Rooney", "Bella Legosi"],
                    room: "444"
                }
            ]
        },
        {
            conName: "Trekcon",
            dates: [
                {
                    registrationCloses: Date(2021, 01, 31),
                    startDate: Date(2021, 03, 01),
                    endDate: Date(2021, 06, 15),
                }
            ],
            city: "San Diego",
            panels: [
                {
                    panelName: "Do transporters kill you?",
                    speakers: ["Nichelle Nichols", "George Takei", "Nana Visitor"],
                    room: "2B"
                },
                {
                    panelName: "The many uses of phasers.",
                    speakers: ["Danny Kaye", "Red Skelton", "Douglas Adams"],
                    room: "14G"
                }
            ]
        },
    ],
    lfgCall: function() {
        return "Hi. I'm " + this.fName + ". I'm looking for someone to go to " + this.favoriteGenres + " conventions with.";
    },
}

conventionCollective.lfgCall();
conventionCollective.favoriteGenres.push("Horror", "The Pampere Chef");
conventionCollective.lfgCall();