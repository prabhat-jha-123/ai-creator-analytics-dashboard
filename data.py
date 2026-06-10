import json

dashboard_data = {

    "metrics": {

        "views": "108M+",
        "subscribers": "260K+",
        "channels": "4",
        "ctr": "8.7%"

    },

    "videos": [

        {
            "title": "BMW Night Edit",
            "views": 12500000
        },

        {
            "title": "Supra Cinematic",
            "views": 9800000
        },

        {
            "title": "Mercedes AMG",
            "views": 15400000
        },

        {
            "title": "Hypercar Showcase",
            "views": 8700000
        },

        {
            "title": "GTR Tokyo",
            "views": 11200000
        }

    ]
}

with open("analytics.json", "w") as file:
    json.dump(dashboard_data, file, indent=4)

print("analytics.json generated successfully")