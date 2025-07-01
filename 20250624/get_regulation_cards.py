import json, os

regulation_marks = ["G", "H", "I"]

regulation_g_cards = []
regulation_h_cards = []
regulation_i_cards = []

def handle_duplicate_cards(cards):
    # duplicate identifer will be 'name'
    seen = set()
    unique_cards = []
    for a_card in cards:
        if a_card['name'] not in seen:
            seen.add(a_card['name'])
            unique_cards.append(a_card)
    return unique_cards


# get all file names in pokemon_data directory
pokemon_data_files = [f for f in os.listdir("./pokemon_data") if f.endswith('.json')]

for file_name in pokemon_data_files:
    with open(f"./pokemon_data/{file_name}", "r", encoding='utf8') as file:
        data = json.load(file)
    
    for card in data['data']:
        if "regulationMark" in card:
            if card['regulationMark'] in regulation_marks:
                if card['regulationMark'] == "G":
                    regulation_g_cards.append(card)
                elif card['regulationMark'] == "H":
                    regulation_h_cards.append(card)
                elif card['regulationMark'] == "I":
                    regulation_i_cards.append(card)
                



with open ("./pokemon_data/regulation_g_cards.json", "w", encoding='utf8') as file: 
    json.dump(handle_duplicate_cards(regulation_g_cards), file, indent=4)

with open ("./pokemon_data/regulation_h_cards.json", "w", encoding='utf8') as file: 
    json.dump(handle_duplicate_cards(regulation_h_cards), file, indent=4)

with open ("./pokemon_data/regulation_i_cards.json", "w", encoding='utf8') as file:
    json.dump(handle_duplicate_cards(regulation_i_cards), file, indent=4)
            
            
    