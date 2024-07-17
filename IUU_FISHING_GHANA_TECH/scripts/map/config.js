var config = {
    style: 'mapbox://styles/pedroalmada/cly7m636c00g801pm1uod2ivc',
    accessToken: 'pk.eyJ1IjoicGVkcm9hbG1hZGEiLCJhIjoiY2x5YmU3bHcyMDY1djJpc2c4N2dlNmx4dCJ9.Sab-yAKfU3vgwFBLhckP2Q',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            description: 'Lorem',
            location: {
                center: [-1.47649, 9.79514],
                zoom: 3.10,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ghana-detailed-boundary-',
                    opacity: 0
                },
                {
                    layer: 'ghanian-eez-loitering-data-gf-dy9uki',
                    opacity: 0
                },
                {
                    layer: 'geometry-5g041h copy',
                    opacity: 0
                },
                {
                    layer: 'geometry-5g041h',
                    opacity: 0
                }
            ],

            onChapterExit: [
                {
                    layer: 'ghanian-eez-loitering-data-gf-dy9uki',
                    opacity: 0
                },
                {
                    layer: 'geometry-5g041h copy',
                    opacity: 0
                },
                {
                    layer: 'geometry-5g041h',
                    opacity: 0
                }
            ],
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'IUU Fishing',
            //image: '',
            description: "Illegal, Unreported, and Unregulated (IUU) fishing refers to activities that violate national, regional, and international fishing laws. Illegal fishing occurs when vessels operate without permission, harvest protected species, or use banned gear. Unreported fishing involves vessels failing to report or misreporting their catches to the relevant authorities. Unregulated fishing happens in areas where no conservation measures apply or when vessels exploit resources in ways that contravene international guidelines.",
            location: {
                center: [-1.16208, 6.97671],
                zoom: 4.5,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ghana-detailed-boundary-',
                    opacity: 0
                },
                {
                    layer: 'ghanian-eez-loitering-data-gf-dy9uki',
                    opacity: 0 
                },
                {
                    layer: 'geometry-5g041h copy',
                    opacity: 0
                },
                {
                    layer: 'geometry-5g041h',
                    opacity: 0
                }
            ],
            onChapterExit: [                {
                layer: 'ghanian-eez-loitering-data-gf-dy9uki',
                opacity: 0 
            },
            {
                layer: 'geometry-5g041h copy',
                opacity: 0
            },
            {
                layer: 'geometry-5g041h',
                opacity: 0
            }
        ],      
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ghana',
            //image: '/images/Google_earth_ghana.png',
            description: "IUU fishing is presenting an increasing threat to Ghana, threatening the nation’s marine resources and impacting the livelihoods of Ghanaian coastal communities. The country's fisheries sector is crucial, as it supports approximately two million people (according to a report by EJF) and contributes significantly to the national economy. However, foreign industrial trawlers are causing a severe depletion of fish stock.",
            location: {
                center: [-1.16208, 6.97671],
                zoom: 5.8,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ghana-detailed-boundary-',
                    opacity: 0.5 
                },
                {
                    layer: 'ghanian-eez-loitering-data-gf-dy9uki',
                    opacity: 0 
                },
                {
                    layer: 'geometry-5g041h copy',
                    opacity: 0
                },
                {
                    layer: 'geometry-5g041h',
                    opacity: 0
                }
            ],
            onChapterExit: [                {
                layer: 'ghanian-eez-loitering-data-gf-dy9uki',
                opacity: 0 
            },
            {
                layer: 'geometry-5g041h copy',
                opacity: 1
            },
            {
                layer: 'geometry-5g041h',
                opacity: 1
            }
        ],
    },
    {
        id: 'fourth-identifier',
        alignment: 'left',
        hidden: false,
        title: 'EEZ',
        //image: '/assets/images/Apam_Ghana_Vid.gif',
        description: "Ghana’s Exclusive Economic Zone (EEZ) stretches over 200 nautical miles from its coastline. This zone provides critical habitats for numerous fish species. However, the encroachment of large industrial trawlers, predominantly foreign-owned and operating under Ghanaian flags, has severely impacted the local fishing communities that rely on traditional canoe fishing by engaging in IUU fishing practices. Closer to the coast is the Inshore Exclusive Zone (IEZ) that allows smaller local vessels who traditionally operate closer to the coast to get access fisheries.",
        location: {
            center: [-1.16208, 6.97671],
            zoom: 5.8,
            pitch: 45.00,
            bearing: 0.00
        },
        onChapterEnter: [
            {
                layer: 'ghana-detailed-boundary-',
                opacity: 0
            },
            {
                layer: 'ghanian-eez-loitering-data-gf-dy9uki',
                opacity: 0 
            },
            {
                layer: 'geometry-5g041h copy',
                opacity: 1
            },
            {
                layer: 'geometry-5g041h',
                opacity: 1
            }
        ],
        onChapterExit: [                {
            layer: 'ghanian-eez-loitering-data-gf-dy9uki',
            opacity: 1 
        },
        {
            layer: 'geometry-5g041h copy',
            opacity: 1
        },
        {
            layer: 'geometry-5g041h',
            opacity: 1
        }
    ],
    },  

    {
    id: 'semi-final-identifier',
    alignment: 'left',
    hidden: false,
    title: '',
    //image: './path/to/image/source.png',
    description: "Local Ghanaian fishers take to the sea in their canoes, but many don't go out to fish, rather, they sail to encounter big troller vessels that sell frozen fish to them. This is known as 'Saiko' fishing. This not only violates fishing regulations but also undermines the livelihoods of artisanal fishers.",
    location: {
        center: [-1.16208, 6.97671],
        zoom: 5.8,
        pitch: 45.00,
        bearing: 0.00
    },
    onChapterEnter: [
        {
            layer: 'ghanian-eez-loitering-data-gf-dy9uki',
            opacity: 1 
        },
        {
            layer: 'geometry-5g041h copy',
            opacity: 1
        },
        {
            layer: 'geometry-5g041h',
            opacity: 1
        }
    ],
    onChapterExit: [                {
        layer: 'ghanian-eez-loitering-data-gf-dy9uki',
        opacity: 1 
    },
    {
        layer: 'geometry-5g041h copy',
        opacity: 1
    },
    {
        layer: 'geometry-5g041h',
        opacity: 1
    }
    ],
    },


{
    id: 'final-identifier',
    alignment: 'left',
    hidden: false,
    title: '',
    //image: './path/to/image/source.png',
    description: "A way of hinting at possible ‘Saiko’ activities is by analyzing the movements of large trawlers. When vessels exhibit behaviour indicating a potential encounter event, this is considered loitering. This determination is made by analysing Automatic Identification Systems (AIS). Data includes monitoring the vessel's distance from shore, speed, and the duration it spends in a given location. However, it is important to note that loitering alone does not confirm a vessel is involved in transhipment activities. Therefore, it is crucial to work collaboratively with local organizations, government enforcement agencies, and local communities, and incorporate additional technologies to accurately identify and combat Saiko fishing.",
    location: {
        center: [-1.16208, 6.97671],
        zoom: 5.8,
        pitch: 45.00,
        bearing: 0.00
    },
    onChapterEnter: [
        {
            layer: 'ghanian-eez-loitering-data-gf-dy9uki',
            opacity: 1 
        },
        {
            layer: 'geometry-5g041h copy',
            opacity: 1
        },
        {
            layer: 'geometry-5g041h',
            opacity: 1
        }
    ],
    onChapterExit: [                {
        layer: 'ghanian-eez-loitering-data-gf-dy9uki',
        opacity: 1 
    },
    {
        layer: 'geometry-5g041h copy',
        opacity: 1
    },
    {
        layer: 'geometry-5g041h',
        opacity: 1
    }
    ],
    }
    ]
};
