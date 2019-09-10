import requests

url = "https://wordsapiv1.p.rapidapi.com/words/"

headers = {
    'x-rapidapi-host': "wordsapiv1.p.rapidapi.com",
    'x-rapidapi-key': "d42b00b19fmsh1d8c8774483287cp1a9412jsn58fb2ac82287"
    }

def get_words(word, method):
    target_url = url + "{}/{}".format(word, method)
    response = requests.request("GET", target_url, headers=headers)
    print(response.text)

get_words("great", "synonyms")