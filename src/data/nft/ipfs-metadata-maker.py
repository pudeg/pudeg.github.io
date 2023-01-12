import json

# Usage: python generate_json.py
# Make sure you create an output folder first
# You can edit the values below
# url = "ipfs://bafybeicq6q5ryfn7ancm5cnwg2xzp5pim2m3ndajbsc7le6crkqajkwu7e/mi777_jersey.png"
pinata_gateway="apricot-late-cheetah-409.mypinata.cloud"

base_uri="ipfs://QmSWgwQGMWURpxmANR8KcUB4ukVVnNKawB6fEjo91xqNCb/"

assets_cid = "QmeiDiUv5pTY5fUHKpf2icjFSLP7tBr7pH87phcpP5GEin"
mp4_cid = "QmYEqRxLYpfvNrtXcZCAkxXJaZdDHeB3oeib4rc7uTS3NV"

# glb_uri="https://gateway.pinata.cloud/ipfs/QmSWgwQGMWURpxmANR8KcUB4ukVVnNKawB6fEjo91xqNCb" + str(assets_cid) + "/mi777.glb"
glb_uri="https://" + str(pinata_gateway) + "/ipfs/" + str(assets_cid) + "/mi777.glb"
png_uri="https://" + str(pinata_gateway) + "/ipfs/" + str(assets_cid) + "/mi777.png"
mp4_uri="https://" + str(pinata_gateway) + "/ipfs/" + str(mp4_cid)


for x in range(1, 778):
  dictionary = {
    "base_uri": "Milady Moto #" + str(x),
    "description": "The mi777 MiladyMoto Jersey is a Physical + Digital implementation of the beloved Milady Maker Malenciaga jersey trait.\n\n[Model (.glb)](" + glb_uri + ")\n\n",
    "animation_url": mp4_uri
  }

  with open("./json/" + str(x), "w") as outfile:
    json.dump(dictionary, outfile, indent=4)


