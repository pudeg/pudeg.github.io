assets_cid = "QmeiDiUv5pTY5fUHKpf2icjFSLP7tBr7pH87phcpP5GEin"
mp4_cid = "QmYEqRxLYpfvNrtXcZCAkxXJaZdDHeB3oeib4rc7uTS3NV"
glb_uri="https://gateway.pinata.cloud/ipfs/"+ str(assets_cid) +"/mi777.glb"
desc="The mi777 MiladyMoto Jersey is a Physical + Digital implementation of the beloved Milady Maker Malenciaga jersey trait.\n\n[Model (.glb)](" + glb_uri + ")\n\n"
png_uri="https://gateway.pinata.cloud/ipfs/"+ str(assets_cid) +"/mi777.png"
mp4_url="https://gateway.pinata.cloud/ipfs/"+ str(mp4_cid) +""

pinata_gateway="apricot-late-cheetah-409.mypinata.cloud"
tester1="https://" + str(pinata_gateway) + "/ipfs/" + str(assets_cid) + "/mi777.glb"

print(mp4_url)