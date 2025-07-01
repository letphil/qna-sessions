import requests, json

ENDPOINT = "https://api.pokemontcg.io/v2/cards"

for i in range(64, 78):
    response = requests.get(f"{ENDPOINT}?page={i}")
    if response.status_code == 200:
        data = response.json()
        with open(f"./pokemon_data/pokemon_data_page_{i}.json", "w", encoding='utf8') as file:
            json.dump(data, file, indent=4)
        print(f"Page {i} data saved successfully.")
    else:
        print(f"Failed to retrieve page {i}. Status code: {response.status_code}")